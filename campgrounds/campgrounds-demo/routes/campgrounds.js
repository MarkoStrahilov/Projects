const express = require('express')
const Campground = require('../models/campground')
const CustomError = require('../CustomError')
const router = express.Router()

const asyncErrorHandle = (fn) => {
    return function(req, res, next) {
        fn(req, res).catch(err => next(err))
    }
}

router.get('/', asyncErrorHandle(async(req, res) => {
    const foundCamp = await Campground.find({})
    if (!foundCamp) {
        throw new CustomError('Cant Find Camp', 404)
    }
    res.render('campgrounds/campgrounds', { foundCamp, messages: req.flash('success') })
}))

router.get('/new', (req, res) => {
    res.render('campgrounds/new')
})

router.get('/:id', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id)
    if (!foundCamp) {
        throw new CustomError('Cant Find Camp', 404)
    }
    res.render('campgrounds/details', { foundCamp, messages: req.flash('success') })
}))

router.post('/', asyncErrorHandle(async(req, res) => {
    if (!req.body) {
        throw new CustomError('Invalid Data', 404)
    }
    const newCampground = new Campground(req.body)
    await newCampground.save()
    res.redirect('/campgrounds')
}))

router.get('/:id/edit', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id)
    res.render('campgrounds/edit', { foundCamp })
    req.flash('success', 'created new camp')
}))

router.put('/:id', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const updateCamp = await Campground.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    req.flash('success', 'successfuly updated campground')
    res.redirect(`/campgrounds/${updateCamp._id}`)
}))

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
})


module.exports = router