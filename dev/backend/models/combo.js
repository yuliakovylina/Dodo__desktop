const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comboSchema = new Schema ({
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
const Combo = mongoose.model('combo', comboSchema);
module.exports = Combo;