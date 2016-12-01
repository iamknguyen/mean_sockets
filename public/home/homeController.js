

angular.module('app.Home',[])
.controller('HomeController',function($scope, $location, Services){
    console.log("You're in Home with location ", $location.path());

    $scope.user = {
        user: '',
        message: '',
        room: "Atlas"
    };

    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = (event)=>{
        console.log("Socket is Open!")
    }
    
    Services.socket.onmessage = (event)=>{
        let data = JSON.parse(event.data);
        console.log('incoming', data);
    }
    
    const sendMessage = () =>{
        socket.send(JSON.stringify($scope.user));
    }
   
})