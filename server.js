const http = require('http');
const app = require('./app');

const port = 6010;
const hostname = '127.0.0.1';

const server = http.createServer(app);

server.listen(port,hostname);