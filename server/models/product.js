const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: {type: String, lowerCase: true},
    filter: String,
    price: Number
}, { collection: 'products'})

module.exports = mongoose.model('Product', productSchema)