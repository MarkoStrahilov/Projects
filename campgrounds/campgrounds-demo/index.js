const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const homeRoute = require('./routes/campgrounds')
const detailsRoute = require('./routes/details')
const newCampRoute = require('./routes/new')

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
app.use('/campgrounds', homeRoute)
app.use('/campground', detailsRoute)
app.use('/create-new-campground', newCampRoute)

app.use((err, req, res, next) => {
    const { message, status } = err
    res.status(status).send(message)
})