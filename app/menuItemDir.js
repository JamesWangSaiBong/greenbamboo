'use strict'

app.directive('gbMenuItem', function(Order) {
	return {
		restrict: 'E',
		templateUrl: 'menuItemDir.html',
		scope: {
			item: '='
		},
		controller: function($scope) {
			
			$scope.isCollapsed = true;
			
			$scope.order = function(item) {
				if(!!item.options) {
					item.addToStaging(); //If item.options is not null, then it's an AdvanceMenuItem
					$scope.isCollapsed = false;
				} else {
					Order.addItem(item);
				}
			};
			
			$scope.addQuantity = function(item) {
				if(!!item.options) {
					item.incrementStagingQuantity();
				} else {
					item.incrementOrderQuantity();
					Order.addItem(item);
				}
			};
			
			$scope.pickOption = function(choice) {
				console.log(choice);
			}
		}
	}
})