
angular.module("chatApp",['app.Home','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');

    $stateProvider
        .state('Home', {
            name: '/Home',
            templateUrl: '/home/home.html',
            controller: 'HomeController'
        })
    
               
})

