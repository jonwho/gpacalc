'use strict';

/**
 * @ngdoc function
 * @name gpacalcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gpacalcApp
 */
angular.module('gpacalcApp')
	.controller('AboutCtrl', function ($scope) {
		$scope.msg1 = 'As a student I wanted a quick way to calculate my term GPA without having to log in to the school system. So this is what I came up with!';
	});
