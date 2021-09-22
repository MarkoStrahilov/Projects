const express = require('express')
const CustomError = require('../CustomError')
const Campground = require('../models/campground')
const router = express.Router()

router.get('/:id', async(req, res) => {
    const { id } = req.params
    const foundCamp = await Campground.findById(id)
    if (!foundCamp) {
        throw new CustomError('Cant Find Camp', 404)
    }
    res.render('details', { foundCamp })
})

module.exports = router;