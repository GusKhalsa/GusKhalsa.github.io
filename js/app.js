var app = angular.module('MyApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'ProfileController'
		})
		.when('/blog', {
			templateUrl: 'views/blog.html',
			controller: 'BlogController'
		})
		.when('/blog/post/:id', {
			templateUrl: 'views/singleblogpost.html',
			controller: 'SinglePostController'
		});

});