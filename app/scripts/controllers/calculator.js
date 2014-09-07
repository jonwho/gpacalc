'use strict';

/**
 * @ngdoc function
 * @name gpacalcApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the gpacalcApp
 */
angular.module('gpacalcApp')
	.controller('CalculatorCtrl', function ($scope) {
		$scope.classList = [];
		$scope.unitsList = [];
		$scope.gpaList = [];
		var totalUnits = 0.0;
		var totalScore = 0.0;
		var totalGPA = 0.0;

		var classScore = 0.0;

		$scope.submitForm = function () {
			var gradeToScore = 0.0;
			switch($scope.class.grade) {
				case 'A+':
				case 'A':
					gradeToScore = 4.0;
					break;
				case 'A-':
					gradeToScore = 3.7;
					break;
				case 'B+':
					gradeToScore = 3.3;
					break;
				case 'B':
					gradeToScore = 3.0;
					break;
				case 'B-':
					gradeToScore = 2.7;
					break;
				case 'C+':
					gradeToScore = 2.3;
					break;
				case 'C':
					gradeToScore = 2.0;
					break;
				case 'C-':
					gradeToScore = 1.7;
					break;
				case 'D':
					gradeToScore = 1.0;
					break;
				case 'F':
					gradeToScore = 0.0;
					break;
				default:
					gradeToScore = 0.0;
			}

			// Update total unit count
			totalUnits += parseFloat($scope.class.units, 10);
			// Push current total unit count into list
			$scope.unitsList.push(totalUnits);
			// Get class score
			classScore = gradeToScore * $scope.class.units;
			// Get total score
			totalScore += classScore;
			// Calculate GPA
			totalGPA = totalScore / totalUnits;
			// Use a precision of 3
			totalGPA = totalGPA.toPrecision(3);
			// Push GPA into list
			$scope.gpaList.push(totalGPA);
			// Push class into list
			$scope.classList.push($scope.class);
			// Reset class for next submit form
			$scope.class = null;
		};

		$scope.clearForm = function () {
			$scope.class = null;
		};
	});
