const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startersSchema = new Schema ({
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
const Starters = mongoose.model('starters', startersSchema);
module.exports = Starters;