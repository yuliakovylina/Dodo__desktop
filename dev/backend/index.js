const http = require('http');
const mongoose = require('mongoose');
const Toppings = require('./models/toppings')
const Drinks = require('./models/drinks')
const Pizzas = require('./models/pizzas')
const Combo = require('./models/combo')
const Starters = require('./models/starters')
const Desserts = require('./models/desserts')

const hostname = '127.0.0.1';
const port = 3000;

mongoose.connect('mongodb://127.0.0.1/test');

async function findInDb(url) {

    if (url === '/drinks')  return await Drinks.find()
    if (url === '/toppings') return await Toppings.find()
    if (url === '/pizzas') return await Pizzas.find()
    if (url === '/combo') return await Combo.find()
    if (url === '/starters') return await Starters.find()
    if (url === '/desserts') return await Desserts.find()

    return {message: "no"}

}

async function start (req, res) {
    let result = await findInDb(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
};

const server = http.createServer(start);

server.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);