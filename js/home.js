var app = angular.module('MyApp', []);


app.controller('NavController', function($scope){
	$scope.options = [ 
		{value: 'HOME', link: 'home.html'},
		{value: 'PROJECTS', link: '#projects'},
		{value: 'BLOG', link: ''}
	];
});

app.controller('ProfileController', function($scope){
	$scope.fullName = "Gursimran Khalsa";
	$scope.shortName = "Gus";

	$scope.education = [
	{school: 'Northfleet Technology College', 
	 subject: "12 GCSE's A*-C including Maths, English + 3 A Levels (Maths[B], Computing[B], BTEC Creative Media Production[Distinction*])",
	 startDate: "Sep 2009",
	 endDate: "June 2016"},
	{school: 'University of Kent', 
	 subject: "BSc Computer Science",
	 startDate: "Sep 2016", 
	 endDate: "June 2020(Expected)"}
	];

	$scope.showModules = false;
	$scope.modules = ['Intro to OOP', 'Further OOP', 'Foundations of Computing I', 'Databases and the Web'];

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
		{icon: 'img/facebook.png', link: 'Facebook'},
		{icon: 'img/email.png', link: 'Email'}
	];
});
