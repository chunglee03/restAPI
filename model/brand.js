const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    clothes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clothes'
        }
    ]
})

const Brand = mongoose.model('brand', brandSchema)

module.exports = Brand