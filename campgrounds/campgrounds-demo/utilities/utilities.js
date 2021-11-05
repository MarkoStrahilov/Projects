const CustomError = require('../CustomError')
const { validateCampground, validateReviews, validateUser } = require('../validation/validation')
const Campground = require('../models/campground')

module.exports.asyncErrorHandle = function(fn) {
    return function(req, res, next) {
        fn(req, res).catch(e => next(e))
    }
}

module.exports.validateCamp = (req, res, next) => {
    const { error } = validateCampground.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new CustomError(msg, 400)
    } else {
        next()
    }
}

module.exports.validateReview = (req, res, next) => {
    const { error } = validateReviews.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new CustomError(msg, 400)
    } else {
        next()
    }
}

module.exports.validateUsers = (req, res, next) => {
    const { error } = validateUser.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new CustomError(msg, 400)
    } else {
        next()
    }
}

module.exports.authenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must be signed in')
        return res.redirect('/login')
    } else {
        next()
    }
}

module.exports.isOwner = async(req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    if (!campground.user.equals(req.user._id)) {
        req.flash('error', 'permission forbiden')
        return res.redirect(`/campgrounds/${id}`)
    } else {
        next()
    }
}