const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertsSchema = new Schema ({
    id: String,
    img: {
        src: String,
        name: String
    },
    title: String,
    description: String,
    cost: String,
    btn: String,
    btnMobile: String
});
const Desserts = mongoose.model('desserts', dessertsSchema);
module.exports = Desserts;