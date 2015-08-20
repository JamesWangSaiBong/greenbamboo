'use strict'

app.directive('qtyBtn', function() {
	return {
		restrict: 'E',
		templateUrl: 'menu/directives/qtyBtnDir.html',
		scope: {
			quantity: '=qty',
			notifyParent: '&addQuantity'
		},
		controller: function($scope) {
			$scope.addQty = function() {
				$scope.notifyParent();
			}
		}
	}
})