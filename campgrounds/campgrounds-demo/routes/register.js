const express = require('express')
const Campground = require('../models/campground')
const User = require('../models/user')
const router = express.Router()
const { asyncErrorHandle, validateUsers } = require('../utilities/utilities')

router.get('/', (req, res) => {
    res.render('campgrounds/register')
})

router.post('/', validateUsers, asyncErrorHandle(async(req, res, next) => {
    try {
        const { email, username, password } = req.body
        const newUser = new User({ email, username })
        const registeredUser = await User.register(newUser, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash('success', 'welcome to Yelp Camp')
            res.redirect('/campgrounds')
        })
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }
}))

module.exports = router