'use strict'

app.directive('gbOrderItem', function(Order, Menu) {
	return {
		restrict: 'E',
		templateUrl: 'orderItemDir.html',
		scope: {
			item: '='
		},
		controller: function($scope) {
			
			$scope.$watch('item.quantity', function(newVal) {
				$scope.allowRemove = (newVal > 1)? false : true;
			});
			
			$scope.removeDish = function(item) {
				Order.dropItem(item)
			}
			
			$scope.orderLess = function(item) {
				item.decrementQuantity();
				Menu.decrementItemOrderQuantity(item)
			}
		}
	}
})