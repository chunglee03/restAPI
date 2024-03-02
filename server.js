const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const Connection = require('./config/database')
const brandRoutes = require('./routes/brand')
const clotheRoutes = require('./routes/clothes')

//connect to mongodb
Connection()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/brand', brandRoutes)
app.use('/clothes', clotheRoutes)
app.listen(8000, () => {
    console.log('localhost:8000')
})
