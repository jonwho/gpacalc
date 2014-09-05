'use strict';

/**
 * @ngdoc overview
 * @name gpacalcApp
 * @description
 * # gpacalcApp
 *
 * Main module of the application.
 */
angular
	.module('gpacalcApp', [
		'ngCookies',
		'ngTouch',
		'ui.router'
	])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/calculator');

		$stateProvider
			.state('calculator', {
				url: '/calculator',
				templateUrl: 'views/calculator.html',
				controller: 'CalculatorCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'views/contact.html'
			});
	});
