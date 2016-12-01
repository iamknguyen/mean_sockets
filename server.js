
const server = require('http').createServer();
const express = require('express');
const app = express();

const port = 8080;

require('./server/config/middleware.js')(app, express);
require('./server/config/socket.js')(server);

server.on('request', app);
server.listen(port, ()=>{
    console.log('Listening on ' + server.address().port);
});