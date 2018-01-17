app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'HOME', link: '/'},
		{value: 'PROJECTS', link: '/projects'},
		{value: 'BLOG', link: '/blog'}
	];
});