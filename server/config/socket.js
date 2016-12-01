

module.exports = (server)=>{
    const url = require('url');
    const WebSocketServer = require('ws').Server;
    const wss = new WebSocketServer({server: server});

    wss.on('connection', function connection(ws) {
        console.log("Server Socket connection is up");
        const location = url.parse(ws.upgradeReq.url, true);
        ws.on('message', function incoming(message) {
            console.log('received: ', message, typeof message);
            var convertedData = JSON.parse(message);

            // do stuff with the converted data
            console.log("Data from client: ", convertedData)

            // send stuff back
            ws.send(JSON.stringify(data))

            //helpers.storeMessage(ws, JSON.parse(message));
            //ws.send(message);
        });
        // below will cause an error because we expect a JSON object
        //ws.send('something');
    });
}