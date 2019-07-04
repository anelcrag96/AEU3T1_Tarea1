const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    pricebuy: {
        type: Number,
        required: true
    },
    saleprice: {
        type: Number,
        required: true
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Brand'
    },
    quantity: {
        type: Number,
        required: true
    },
    min: {
        type: Number,
        required: true
    },
    max: {
        type: Number,
        required: true
    }
});

const productModel = mongoose.model('Product', productSchema, 'products');

module.exports = productModel;