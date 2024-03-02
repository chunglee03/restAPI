const mongoose = require('mongoose')
require('dotenv').config()

const Connection = () => {
    mongoose.connect(process.env.DB_PASS)
    .then(() => {
        console.log("Connected successfully!")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = Connection