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
			
			$scope.radio = {model:undefined};
			
			$scope.$watch('radio.model', function(newVal) {
				if(!!newVal) {
					//newVal is an option instance. set isPicked to true for this option instance.
					var option = newVal;
					option.pick();
					//set the isSelected property of the optSet instance on the scope to true, and give it a selectedOption
					$scope.optSet.pickOption(option);
					$scope.notifyParent({choice:newVal});
				}
			})
		}
	}
})