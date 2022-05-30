const express = require('express');
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
// express app
const app = express();

// static middleware
app.use(express.static('public'))

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
app.use(express.urlencoded({ extended: true }));
// register view engine
app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://blog-ninja:lOnEeWE4GLmQVXDz@blog-ninja.hfroyx5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes 
app.use('/blogs', blogRoutes)


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});