
const server = require('http').createServer();
const express = require('express');
const app = express();

const port = 8080;
// app.use(function (req, res) {
//   res.send({ msg: "hello" });
// });

require('./server/config/middleware.js')(app, express);
require('./server/config/socket.js')(server);

//require('./server/config/routes.js')(app, express);

//require('./server/config/database.js')(server);


server.on('request', app);
server.listen(port, ()=>{
    console.log('Listening on ' + server.address().port);
});