const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    id: String,
    clientId: String,
    price: Number,
    description: String,
    image: String
})



module.exports = Product