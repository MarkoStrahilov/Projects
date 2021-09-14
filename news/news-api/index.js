const express = require('express')
const path = require('path')
const axios = require('axios')
const CustomError = require('./CustomError')
const app = express()
app.listen(3000, () => {
    console.log('PORT 3000')
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/news', async(req, res, next) => {
    const response = await axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=9e15c87528b34314a81c263e4da5c08a')
    const resData = response.data.articles
    if (!resData) {
        return next(new CustomError('No Response', 404))
    }
    res.render('index', { resData })
})

app.use((err, req, res, next) => {
    const { message = 'Oops There Was An Error', status = 500 } = err
    res.status(status).send(message)
})