// Declares the initial angular module "PenPalApp". Module grabs other controllers and services. Note the use of ngRoute.
var app = angular.module('PenPalApp', ['addCtrl', 'queryCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Add a Pal Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl', 
            templateUrl: 'partials/addForm.html',

            // Add Teammates Control Panel
		}).when('/find', {
    		controller: 'queryCtrl',
    		templateUrl: 'partials/queryForm.html',

            // All else forward to the Add Control Panel
        }).otherwise({redirectTo:'/join'})
    });