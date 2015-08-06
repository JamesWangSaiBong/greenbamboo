'use strict'

app.directive('optionPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'optionPanel.html',
		scope: {
			option: '=',
			notifyParent: '&pickOption'
		},
		controller: function($scope) {
			$scope.radio = {model:undefined};
			
			$scope.$watch('radio.model', function(newVal) {
				if(!!newVal) {
					$scope.notifyParent({choice:newVal});
				}
			})
		}
	}
})