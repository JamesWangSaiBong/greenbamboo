'use strict'

app.directive('gbOrderItem', function(Order, Menu) {
	return {
		restrict: 'E',
		templateUrl: 'order/directives/orderItemDir.html',
		scope: {
			item: '='
		},
		controller: function($scope) {
			
			$scope.$watch('item.quantity', function(newVal) {
				$scope.allowRemove = (newVal > 1)? false : true;
			});
			
			$scope.removeDish = function(item) {
				Order.dropItem(item);
				Menu.decrementItemOrderQuantity(item);
			};
		}
	}
})