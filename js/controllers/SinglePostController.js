app.controller('SinglePostController', function($scope, $http, $routeParams){
	$http({
	    method: 'get', 
	    url: 'blogposts.json'
	}).then(function (response) {
	    $scope.post = response.data[$routeParams.id];
	},function (error){
	    console.log(error, 'can not get data.');
	});	
});

