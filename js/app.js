'use strict';

var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngTouch'])

.config (function ($routeProvider) {

	$routeProvider
	.when (
		'/home', { // user accesses index.html/#/home
			templateUrl: 'views/home.html', // location of the View template i.e. the HTML
			controller : 'HomeCtrl', // found in /scripts/controllers/home.js
			controllerAs: 'home', // name of the controller, used in the views
			animation: 'slide' // what transition animation should this use
		})
	.when (
		'/about', { // user accesses index.html/#/about
			templateUrl: 'views/about.html', // location of the View template i.e. the HTML
			controller : 'AboutCtrl', // found in /scripts/controllers/about.js
			controllerAs: 'about', // name of the controller, used in the views
			animation: 'slide' // what transition animation should this use
		})
	.otherwise ( // user accesses any other location not defined above, catch-all
	{
		redirectTo: '/home'
	});

});

