const express = require('express')
const Campground = require('../models/campground')
const CustomError = require('../CustomError')
const router = express.Router()


router.get('/', async(req, res) => {
    const foundCamp = await Campground.find({})
    if (!foundCamp) {
        throw new CustomError('Cant Find Camp', 404)
    }
    res.render('campgrounds', { foundCamp })
})

router.post('/', async(req, res) => {
    const newCamp = new Campground(req.body)
    await newCamp.save()
    res.redirect('/campgrounds')
})

module.exports = router