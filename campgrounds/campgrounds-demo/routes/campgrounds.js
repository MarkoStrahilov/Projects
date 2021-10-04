const express = require('express')
const Campground = require('../models/campground')
const CustomError = require('../CustomError')
const { asyncErrorHandle, validateCamp, validateReview } = require('../utilities/utilities')
const Review = require('../models/review')
const router = express.Router()



router.get('/', asyncErrorHandle(async(req, res) => {
    const foundCamp = await Campground.find({})
    if (!foundCamp) {
        throw new CustomError('cant find this camp', 404)
    }
    res.render('campgrounds/campgrounds', { foundCamp })
}))

router.get('/new', (req, res) => {
    res.render('campgrounds/new')
})

router.get('/:id', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id).populate('reviews')
    if (!foundCamp) {
        req.flash('error', 'cant find that campground')
        res.redirect('/campgrounds')
    }
    res.render('campgrounds/details', { foundCamp })
}))

router.post('/', validateCamp, asyncErrorHandle(async(req, res) => {
    const newCampground = new Campground(req.body)
    await newCampground.save()
    req.flash('success', 'Successfully made a new campground')
    res.redirect('/campgrounds')
}))

router.get('/:id/edit', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id)
    if (!foundCamp) {
        req.flash('error', 'cant find that campground')
        res.redirect(`/campgrounds/${id}`)
    }
    res.render('campgrounds/edit', { foundCamp })
    req.flash('success', 'created new camp')
}))

router.put('/:id', validateCamp, asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const updateCamp = await Campground.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    req.flash('success', 'successfuly updated campground')
    res.redirect(`/campgrounds/${updateCamp._id}`)
}))

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    await Campground.findByIdAndDelete(id)
    req.flash('error', 'deleted campground')
    res.redirect('/campgrounds')
})

router.post('/:id/reviews', validateReview, asyncErrorHandle(async(req, res) => {
    const { id } = req.params;
    const foundCampground = await Campground.findById(id)
    const newReview = new Review(req.body)
    foundCampground.reviews.push(newReview)
    await newReview.save()
    await foundCampground.save()
    req.flash('success', `successfuly left a review on ${foundCampground.title}`)
    res.redirect(`/campgrounds/${foundCampground._id}`)
}))

router.delete('/:id/reviews/:reviewId', asyncErrorHandle(async(req, res) => {
    const { id, reviewId } = req.params
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId)
    req.flash('error', 'review deleted')
    res.redirect(`/campgrounds/${id}`)
}))

module.exports = router