const mongoose = require('mongoose');
const Product = require('./product-model');
const Schema = mongoose.Schema;

const ProductDetails = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String }
});

const Cart = new Schema(
    {
        userId: { type: String, required: true },
        productId: { type: String, required: true },
        product: { type: ProductDetails, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('carts', Cart);