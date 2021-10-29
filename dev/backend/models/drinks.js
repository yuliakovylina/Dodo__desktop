const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinksSchema = new Schema ({
    id: Number,
    title: String,
    cost: Number,
});
const Drinks = mongoose.model('drinks', drinksSchema);
module.exports = Drinks;