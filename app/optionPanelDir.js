'use strict'

app.directive('optionPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'optionPanel.html',
		scope: {
			option: '='
		},
		controller: function($scope) {
			$scope.radio = {model:undefined};
		}
	}
})