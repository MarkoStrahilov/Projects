const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('campgrounds/login')
})

router.post('/', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'loged in successfully')
    res.redirect('/campgrounds')
})

module.exports = router