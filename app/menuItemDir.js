'use strict'

app.directive('gbMenuItem', function(Order) {
	return {
		restrict: 'E',
		templateUrl: 'menuItemDir.html',
		scope: {
			item: '='
		},
		controller: function($scope) {
			$scope.order = function(item) {
				Order.addItem(item);
			};
		}
	}
})