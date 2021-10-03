const Joi = require('joi')

module.exports.validateCampground = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().required()
})

module.exports.validateReviews = Joi.object({
    text: Joi.string().required(),
    rating: Joi.number().required().min(0).max(5)
})