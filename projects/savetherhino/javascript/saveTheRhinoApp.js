// JavaScript Document
// get media module declaration
// declared in seperate file to seperate it from controllers

var saveTheRhinoApp = angular.module('saveTheRhinoApp', ['ngRoute', 'ngAnimate'])

saveTheRhinoApp.config(function($routeProvider) {
	$routeProvider
// paths are set to /home and /viewStudents
// Both using the same controller ' studentController
		.when('/', {
			templateUrl: 'home.html',

		})
		.when('/name', {
			templateUrl: 'routing/name.html',
		})
		.when('/habitat', {
			templateUrl: 'routing/habitat.html',
		})
		.when('/characteristics', {
			templateUrl: 'routing/characteristics.html',
		})
		.when('/behaviour', {
			templateUrl: 'routing/behaviour.html',
		})
		.when('/breeding', {
			templateUrl: 'routing/breeding.html',
		})
		.when('/facts', {
			templateUrl: 'routing/facts.html',
		})
		.otherwise({
			redirectTo: '/'
		});
	
});