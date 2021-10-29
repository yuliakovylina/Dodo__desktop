const http = require('http');
const routes = require('./routes');

const hostname = '127.0.0.1'; //localhost
const port = 3000;

function serverconf (req, res) {
    routes(req, res)

    res.statusCode = 200; //ok
    res.setHeader('Content-Type', 'text/html');
};

const server = http.createServer((req, res) => serverconf(req, res));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});