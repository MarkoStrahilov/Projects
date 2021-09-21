const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Campground = require('./models/campground')
const app = express()
app.listen(3000, () => {
    console.log('PORT 3000')
})

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, })
    .then(() => {
        console.log('connected')
    }).catch(err => {
        console.log('mongoose error connection', err)
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})