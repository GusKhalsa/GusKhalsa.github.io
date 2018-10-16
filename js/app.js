var app = angular.module('MyApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/'
		});

});
