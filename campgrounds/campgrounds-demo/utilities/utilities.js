const CustomError = require('../CustomError')
const { validateCampground, validateReviews, validateUser } = require('../validation/validation')

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