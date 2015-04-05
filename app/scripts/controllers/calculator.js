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
		$scope.scoreList = [];
		$scope.gpaList = [];
		var totalUnits = 0.0;
		var totalScore = 0.0;
		var totalGPA = 0.0;

		$scope.letterGrades = [
			{letter: 'A+', grade: 4.0},
			{letter: 'A', grade: 4.0},
			{letter: 'A-', grade: 3.7},
			{letter: 'B+', grade: 3.3},
			{letter: 'B', grade: 3.0},
			{letter: 'B-', grade: 2.7},
			{letter: 'C+', grade: 2.3},
			{letter: 'C', grade: 2.0},
			{letter: 'C-', grade: 1.7},
			{letter: 'D', grade: 1.0},
			{letter: 'F', grade: 0.0}
		];

		$scope.submitForm = function () {
			// Update total unit count
			totalUnits += parseFloat($scope.class.units, 10);
			// Push current total unit count into list
			$scope.unitsList.push(totalUnits);
			// Get class score
			$scope.class.score = $scope.class.letterGrade.grade * $scope.class.units;
			// Get total score
			totalScore += $scope.class.score;
			// Push the current total score into list
			$scope.scoreList.push(totalScore);
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

		$scope.removeClass = function (item) {
			var index = $scope.classList.indexOf(item);

			if($scope.classList.length === 1) {
				$scope.removeAllClasses();
			}
			else {
				updateLists(index);

				$scope.classList.splice(index, 1);
				$scope.unitsList.splice(index, 1);
				$scope.gpaList.splice(index, 1);
			}
		};

		$scope.removeAllClasses = function () {
			// reset all
			resetVars();
		};

		function resetVars () {
			totalUnits = 0.0;
			totalScore = 0.0;
			totalGPA = 0.0;

			$scope.classList = [];
			$scope.unitsList = [];
			$scope.gpaList = [];
		}

		function updateLists(index) {
			var tmpClass = $scope.classList[index];
			console.log('name of class: ' + tmpClass.name);
			console.log('unit count: ' + tmpClass.units);

			// update unitsList and scoreList
			for(var i = $scope.unitsList.length - 1; i > index; i--) {
				$scope.unitsList[i] -= tmpClass.units;
				$scope.scoreList[i] -= tmpClass.score;
				console.log($scope.unitsList[i]);
			}

			// update gpaList
			for(var j = $scope.gpaList.length; j > index; j--) {
				$scope.gpaList[j] = ($scope.scoreList[j] / $scope.unitsList[j]).toPrecision(3);
			}

			// also need to update local variables for next time when using submitForm
			totalScore -= tmpClass.score;
			totalUnits -= tmpClass.units;
		}
	});
