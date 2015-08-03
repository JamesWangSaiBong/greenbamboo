'use strict'

app.directive('gbOrderItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'orderItemDir.html',
		scope: {
			item: '=',
			notifyParent: '&method'
		},
		controller: function($scope) {
			$scope.removeItem = function() {
				$scope.notifyParent();
			}
		}
	}
})