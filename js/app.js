var app = angular.module('MyApp', []);

app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'HOME', link: 'home.html'},
		{value: 'PROJECTS', link: 'projects.html'},
		{value: 'BLOG', link: ''}
	];
});

app.controller('ProfileController', function($scope){
	$scope.fullName = "Gursimran Khalsa";
	$scope.shortName = "Gus";
	$scope.profilepicture = "../img/profilepic1.JPG";
	$scope.DOB = "07/08/1998";
	$scope.email = "gk264@kent.ac.uk";
	$scope.number = "07443036441";

	$scope.education = [
	{school: 'Northfleet Technology College',
	 subject: "12 GCSE's A*-C including Maths and English",
	 startDate: "Sep 2009",
	 endDate: "June 2014"},
	{school: 'Northfleet Technology College',
	 subject: 'A Level Mathematics - B \n A Level Computing - B \n BTEC Level 3 Subsidairy Diploma Creative Media Production - Distinction*',
	 startDate: "Sep 2014",
	 endDate: "June 2016"},
	{school: 'University of Kent', 
	 subject: "BSc Computer Science 1st Year",
	 startDate: "Sep 2016", 
	 endDate: "June 2020(Expected)"}
	];

	$scope.showModules = false;
	$scope.modules = ['Intro to Object Oriented Programming',
					  'Human Computer Interaction',
					  'Foundations of Computing I',
					  'Computer Systems',
					  'Further Object Oriented Programming',
					  'Foundation of Computing II', 
					  'People and Computing',
					  'Databases and the Web',
					  'Algorithms, Correctness and Efficiency', 
					  'Web Development',
					  'Theory of Computing',
					  'Software Engineering'];

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
	{thumbnail: "img/profilepic.png", title: "Project1", 
	description: "This is the description for the project",
	date:"01/01/1914", downloadLink: ""},
	{thumbnail: "img/profilepic.png", title: "Project2",
	description: "This is the description for the project", 
	date:"01/02/1915", downloadLink: ""},
	{thumbnail: "img/profilepic.png", title: "Project3", 
	description: "This is the description for the project", 
	date:"01/03/1916", downloadLink: ""}
	];
});

