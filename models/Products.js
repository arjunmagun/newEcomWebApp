const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImageUri: {
        type: Array,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    marketPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productFor: {
        type: String,
        required: true
    },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;