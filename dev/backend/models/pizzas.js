const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzasSchema = new Schema ({
    id: String,
    img: {
        src: String,
        name: String
    },
    title: String,
    subtitle: String,
    description: String,
    cost: String,
    btn: String,
    btnMobile: String
});
const Pizzas = mongoose.model('pizzas', pizzasSchema);
module.exports = Pizzas;