require('dotenv').config();
const express = require('express')
const res = require('express/lib/response')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// database
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, () => {
    console.log('connected to database')
})
.then(result => app.listen(3000))
.catch(err => console.log(err));


const db = mongoose.connection
db.on('error', (error) => console.error(error))

// Import Routes
const postRoutes = require('./routes/postRoutes')

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/posts', postRoutes)



// routes
app.get('/', (request, response) => {
    response.send('home page')
})



app.listen(3000, () => {
    console.log('listening for requests on port 3000')
 })