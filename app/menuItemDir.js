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
				//If item is at staging, then disable the button and output a notification
				if(item.isStaging) {
					$scope.disableButton = true;
					$scope.alertMsg = 'Please pick your option first';
					return;
				}
				item.incrementOrderQuantity();
				//If item.options is not null, it's an advanceMenuItem. Thus, expand the option-panel
				if(!!item.options) {
					$scope.isCollapsed = false;
				} else {
				//Otherwise, simply increment the item's order quantity and add it to the order.
					Order.addItem(item);
				}
			};
			
			$scope.pickOption = function() {
				var isCompleted = $scope.item.isCompleted();
				if(isCompleted) {
					$scope.alertMsg = '';
					$scope.disableButton = false;
					Order.addItem($scope.item);
					$scope.isCollapsed = true;
				}
			}
		}
	}
})