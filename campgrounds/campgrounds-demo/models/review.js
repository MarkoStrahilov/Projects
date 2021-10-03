const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    text: String,
    rating: Number
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review