'use strict'

app.directive('optionPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'optionPanel.html',
		scope: {
			optSet: '=optionSet',
			notifyParent: '&pickOption'
		},
		controller: function($scope) {
			console.log($scope.optSet);
			
			$scope.radio = {model:undefined};
			
			$scope.$watch('radio.model', function(newVal) {
				if(!!newVal) {
					$scope.notifyParent({choice:newVal});
				}
			})
		}
	}
})