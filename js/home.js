var app = angular.module('MyApp', []);


app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'Home', link: 'home.html'},
		{value: 'Projects', link: '#projects'},
		{value: 'Blog', link: ''},
		{value: 'Contact/Links', link: ''}
	];
});


app.controller('ProjectController', function($scope){
	$scope.projects = [
		{thumbnail: '', name: ''}
	];
});
