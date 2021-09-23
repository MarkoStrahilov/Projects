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
    res.render('campgrounds/campgrounds', { foundCamp })
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
    res.render('campgrounds/details', { foundCamp })
}))

router.post('/', asyncErrorHandle(async(req, res) => {
    const newCamp = new Campground(req.body)
    if (!newCamp) {
        throw new CustomError('cant create new camp', 403)
    }
    await newCamp.save()
    res.redirect('/campgrounds')
}))

router.get('/:id/edit', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id)
    res.render('campgrounds/edit', { foundCamp })
}))

router.put('/:id', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    const updateCamp = await Campground.findByIdAndUpdate(id, req.body)
    res.redirect(`/campgrounds/${updateCamp._id}`)
}))

router.delete('/:id', asyncErrorHandle(async(req, res) => {
    const { id } = req.params
    await Campground.deleteOne({ id })
    res.redirect('/campgrounds')
}))

module.exports = router