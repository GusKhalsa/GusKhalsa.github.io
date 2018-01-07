app.controller('BlogController', function($scope, $http){
	$http({
	    method: 'get', 
	    url: 'blogposts.json'
		}).then(function (response) {
		    $scope.posts = response.data;
		},function (error){
		    console.log(error, 'can not get data.');
	});	
});

