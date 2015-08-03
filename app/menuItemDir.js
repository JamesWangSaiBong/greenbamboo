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
				$scope.quantity = Order.getItemQuantity(item.id);
			};
			
			$scope.addQuantity = function(item) {
				Order.incrementItemQuantity(item.id);
				$scope.quantity = Order.getItemQuantity(item.id);
			}
		}
	}
})