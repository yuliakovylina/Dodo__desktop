const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppingsSchema = new Schema ({
    id: Number,
    title: String,
    img: String,
    price: {
        small: Number,
        medium: Number,
        big: Number,
    }
});
const Toppings = mongoose.model('toppings', toppingsSchema);
module.exports = Toppings;