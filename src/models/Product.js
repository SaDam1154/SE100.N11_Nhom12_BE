const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('products', ProductSchema);