const express = require('express')
const CustomError = require('../CustomError')
const Campground = require('../models/campground')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('new')
})


module.exports = router;