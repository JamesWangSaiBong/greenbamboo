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
				if(!!item.options) {
					item.addToStaging(); //If item.options is not null, then it's an AdvanceMenuItem
				} else {
					Order.addItem(item);
				}
			};
			
			$scope.addQuantity = function(item) {
				item.incrementOrderQuantity();
				Order.incrementItemQuantity(item);
			}
		}
	}
})