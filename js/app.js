var app = angular.module('MyApp', []);


app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'HOME', link: 'home.html'},
		{value: 'PROJECTS', link: 'home.html#project-listing'},
		{value: 'BLOG', link: 'blog.html'}
	];
});

app.controller('ProfileController', function($scope){
	$scope.fullName = "Gursimran Khalsa";
	$scope.shortName = "Gus";
	$scope.profilepicture = "../img/profilepic.JPG";
	$scope.DOB = "07/08/1998";
	$scope.email = "gk264@kent.ac.uk";
	$scope.number = "07443036441";

	$scope.education = [
	{school: 'Northfleet Technology College',
	 details: ["12 GCSE's A*-C including Maths and English"],
	 startDate: "Sep 2009",
	 endDate: "June 2014"},
	{school: 'Northfleet Technology College',
	 details: ["A Level Mathematics - B",
	 		   "A Level Computing - B",
	 		   "BTEC Level 3 Subsidairy Diploma Creative Media Production - Distinction*"],
	 startDate: "Sep 2014",
	 endDate: "June 2016"},
	{school: 'University of Kent', 
	 details: ["BSc Computer Science 1st Year"],
	 startDate: "Sep 2016", 
	 endDate: "June 2020(Expected)"}
	];

	$scope.showModules = function(){
		$scope.show = !$scope.show;
	};

	$scope.modules = [{module: 'Intro to Object Oriented Programming', result: "87%", link: "https://www.kent.ac.uk/courses/modules/module/CO320"},
					  {module: 'Human Computer Interaction', result: "64%", link: "https://www.kent.ac.uk/courses/modules/module/CO328"},
					  {module: 'Foundations of Computing I', result: "95%", link: "https://www.kent.ac.uk/courses/modules/module/CO322"},
					  {module: 'Computer Systems', result: "79%", link: "https://www.kent.ac.uk/courses/modules/module/CO324"},
					  {module: 'Further Object Oriented Programming', result: "92%", link: "https://www.kent.ac.uk/courses/modules/module/CO520"},
					  {module: 'Foundation of Computing II', result: "87%", link:"https://www.kent.ac.uk/courses/modules/module/CO325"}, 
					  {module: 'People and Computing', result: "73%", link:"https://www.kent.ac.uk/courses/modules/module/CO334"},
					  {module: 'Databases and the Web', result: "93%", link:"https://www.kent.ac.uk/courses/modules/module/CO323"},
					  {module: 'Algorithms, Correctness and Efficiency', link:"https://www.kent.ac.uk/courses/modules/module/CO518"}, 
					  {module: 'Web Development', result: "Pending", link:"https://www.kent.ac.uk/courses/modules/module/CO539"},
					  {module: 'Theory of Computing', result: "Pending", link:"https://www.kent.ac.uk/courses/modules/module/CO519"},
					  {module: 'Software Engineering', result: "Pending", link:"https://www.kent.ac.uk/courses/modules/module/CO510"},
					  {module: 'Functional and Concurrent Programming', result: "Pending", link:"https://www.kent.ac.uk/courses/modules/module/CO545"},
					  {module: 'Database Systems', result: "Pending", link:"https://www.kent.ac.uk/courses/modules/module/CO532"},
					  {module: 'Operating System and Architecture', link:"https://www.kent.ac.uk/courses/modules/module/CO527"}];

	$scope.workExperience = [
	{company: "Laptop World", 
	 role: "Store Assistant",
	 startDate: "March 2013",
	 endDate: "March 2013",
	 skillsObtained: ['Communication', "Teamwork"]},
	{company: "University of Kent",
	 role: "Peer Tutor",
	 startDate: "Oct 2017",
	 endDate: "Present",
	 skillsObtained: ['Communication', 'Code Readability']}
	];

	$scope.CV = "";
	$scope.contacts = [
		{icon: 'img/github.png', link: 'https://github.com/GusKhalsa'},
		{icon: 'img/linkedin.png', link: 'LinkedIn'},
		{icon: 'img/facebook.png', link: 'Facebook'}
	];
});


app.controller('ProjectController', function($scope){
	$scope.projects = [
	{thumbnail: "img/profilepic1.JPG",
	 title: "Coming Soon", 
	 description: "This is the description for the project",
	 date:"01/01/1914",
	 downloadLink: ""},
	{thumbnail: "img/profilepic1.JPG",
	 title: "Project2",
	 description: "This is the description for the project", 
	 date:"01/02/1915",
	 downloadLink: ""},
	{thumbnail: "img/profilepic1.JPG", 
	 title: "Project3", 
	 description: "This is the description for the project", 
	 date:"01/03/1916",
	 downloadLink: ""}
	];
});

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

