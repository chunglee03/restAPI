const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand'
    }
})

const Clothes = mongoose.model('clothes', clothesSchema)

module.exports = Clothes