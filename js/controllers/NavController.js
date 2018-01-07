app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'HOME', link: '/'},
		{value: 'PROJECTS', link: '/#project-listing'},
		{value: 'BLOG', link: '#!/blog'}
	];
});