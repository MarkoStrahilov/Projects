const express = require('express')
const User = require('../models/user')
const router = express.Router()
const { asyncErrorHandle } = require('../utilities/utilities')

router.get('/', (req, res) => {
    res.render('campgrounds/register')
})

router.post('/', asyncErrorHandle(async(req, res) => {
    try {
        const { email, username, password } = req.body
        const newUser = new User({ email, username })
        await User.register(newUser, password)
        req.flash('success', 'welcome to Yelp Camp')
        res.redirect('/campgrounds')
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }
}))

module.exports = router