'use strict'

app.directive('gbMenuItem', function(Order, StagingArea) {
	return {
		restrict: 'E',
		templateUrl: 'menuItemDir.html',
		scope: {
			item: '='
		},
		controller: function($scope) {
			
			$scope.order = function(item) {
				if(!!item.options) {
					StagingArea.addItem(item);
					console.log(StagingArea.stagingItems);
				} else {
					Order.addItem(item);
				}
			};
			
			$scope.addQuantity = function(item) {
				if(!!item.options) {					
					StagingArea.addItem(item);
				} else {
					item.incrementOrderQuantity();
					Order.addItem(item);
				}
			}
		}
	}
})