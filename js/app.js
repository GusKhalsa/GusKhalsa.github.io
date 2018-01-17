var app = angular.module('MyApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'ProfileController'
		})
		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'ProjectController'
		})
		.when('/blog', {
			templateUrl: 'views/blog.html',
			controller: 'BlogController'
		})
		.when('/blog/post/:id', {
			templateUrl: 'views/singleblogpost.html',
			controller: 'SinglePostController'
		})
		.otherwise({
			redirectTo: '/'
		});

});
