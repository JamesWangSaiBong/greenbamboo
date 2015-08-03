'use strict'

app.directive('gbMenuItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'menuItemDir.html',
		scope: {
			item: '=',
			notifyParent: '&order'
		},
		controller: function($scope) {
			$scope.selectItem = function() {
				$scope.notifyParent();
			}
		}
	}
})