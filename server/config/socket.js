

module.exports = (server)=>{
    const url = require('url');
    const WebSocketServer = require('ws').Server;
    const wss = new WebSocketServer({server: server});

    wss.on('connection', function connection(ws) {
        console.log("Server Socket connection is up");
        const location = url.parse(ws.upgradeReq.url, true);
        ws.on('message', function incoming(message) {
            console.log('received: ', message, typeof message);
            

            /* Parse the JSON data and do whatever you want with it */
            var convertedData = JSON.parse(message);
            console.log("Data from client: ", convertedData)

            /** send stuff back */ 
            ws.send(JSON.stringify(convertedData))

            /* below will cause an error IF the client expects a JSON object */
            // ws.send('something');

        });
        
    });
}