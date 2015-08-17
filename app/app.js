'use strict'

var app = angular.module('GBWeb',['ui.bootstrap']);

app.controller('menuCtrl', function($scope, $modal, Menu, Order) {
	
	Menu.getAllItems().then(function(items) {
		$scope.menu = items;
	});
	
	$scope.order = Order;
	
	$scope.showDeliveryMap = false;
	
	$scope.toggleDeliveryMap = function() {
		$scope.showDeliveryMap = !$scope.showDeliveryMap;
	}
	
	$scope.open = false;
	
	$scope.openModal = function() {
		$scope.open = true;
		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'orderModal.html',
			controller: 'OrderModalCtrl',
			size: 'lg',
			resolve: {
				order: function() {
					return $scope.order;
				}
			}
		});
		modalInstance.result.then(function(response) {
			$scope.open = false;
			console.log(response);
		}, function(response) {
			$scope.open = false;
			console.log(response);
		});
	}
});

app.controller('OrderModalCtrl', function($scope, $modalInstance, order){
	$scope.order = order;
	
	$scope.ok = function() {
		$modalInstance.close('completed');
	};
	
	$scope.close = function() {
		$modalInstance.dismiss('close');
	}
});