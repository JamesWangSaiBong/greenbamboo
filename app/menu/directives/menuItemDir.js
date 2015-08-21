'use strict'

app.directive('gbMenuItem', function(Order) {
	return {
		restrict: 'E',
		templateUrl: 'menu/directives/menuItemDir.html',
		transclude: true,
		scope: {
			item: '='
		},
		controller: function($scope) {
			
			$scope.order = function(item) {
				//Disable it if item has already been selected
				if(item.isSelected) { return;}
				item.addToOrder();
			};
			
			$scope.addQuantity = function(item) {
				//If item is at staging, then disable the button and output a notification
				if(item.isStaging) {
					$scope.disableButton = true;
					$scope.alertMsg = 'Please pick your option first';
					return;
				}
				item.addToOrder();
			};
			
			$scope.pickOption = function() {
				var isCompleted = $scope.item.completeOrder();
				if(isCompleted) {
					$scope.alertMsg = '';
					$scope.disableButton = false;
				}
			}
		}
	}
})