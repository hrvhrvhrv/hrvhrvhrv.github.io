// JavaScript Document
// get media module declaration
// declared in seperate file to seperate it from controllers

var getMediaApp = angular.module('getMediaApp', ['ngRoute', 'ngAnimate'])

getMediaApp.config(function($routeProvider) {
	$routeProvider
// paths are set to /home and /viewStudents
// Both using the same controller ' studentController
		.when('/', {
			templateUrl: 'home.html',

		})
		.when('/search', {
			templateUrl: 'search.html',
			controller:'itunes_controller'
		})
		.when('/vouchers', {
			templateUrl: 'vouchers.html',
		})
		.when('/contact', {
			templateUrl: 'contact.html',
		})
		.when('/purchase', {
			templateUrl: 'purchase.html',
			controller:'itunes_controller'
		})
		.otherwise({
			redirectTo: '/'
		});
	
});