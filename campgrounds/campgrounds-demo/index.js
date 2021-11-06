if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Require Files

const express = require('express')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const CustomError = require('./CustomError')
const methodOverride = require('method-override')

// routes

const campRoute = require('./routes/campgrounds')
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const User = require('./models/user')
const passport = require('passport')
const localStrategy = require('passport-local')
const app = express()
app.listen(3000, () => {
    console.log('PORT 3000')
})


//


// Database & Sessions


const sessionOptions = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, })
    .then(() => {
        console.log('connected')
    }).catch(err => {
        console.log('mongoose error connection', err)
    })


//


// Middleware


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


//


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/', (req, res) => {
    res.render('campgrounds/home')
})

app.use('/campgrounds', campRoute)
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.get('/log-out', (req, res) => {
    req.logOut()
    req.flash('success', 'user log out')
    res.redirect('/campgrounds')
})

app.all('*', (req, res, next) => {
    next(new CustomError('ERROR', 404))
})
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    res.status(status).render('errorMsg', { err })
})