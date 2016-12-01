
// angular.module('app.services',[])
// .factory("Services", function($http){
//     const socket = new WebSocket('ws://localhost:8080');
//     socket.onopen = (event)=>{
//         console.log("Socket is Open!")
//     }

//     const getMessages = (room) => {
//         console.log("Getting messages for:", room);
//         let config = {
//             params: {room: room}
//         }
//         return $http.get('/api/messages', config);
//     }
    

//     const sendMessage = (message) =>{
//         socket.send(JSON.stringify(message));
//     }

//     const getRooms = () => {
//         return $http.get('/api/rooms');
//     }

//     return {
//         getRooms: getRooms,
//         getMessages: getMessages,
//         sendMessage: sendMessage,
//         socket: socket
//     }

// })