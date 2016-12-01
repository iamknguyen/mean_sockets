
angular.module("chatApp",['app.Home','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');

    $stateProvider
        .state('Home', {
            url: '/Home',
            templateUrl: '/home/home.html',
            controller: 'HomeController'
        })
    
               
})

