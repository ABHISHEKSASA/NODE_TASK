// product.js (Mongoose Schema)
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"]
    },
    company: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
