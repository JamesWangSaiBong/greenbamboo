'use strict'

var app = angular.module('GBWeb',['ui.bootstrap']);

app.controller('menuCtrl', function($scope, $modal, Menu, Order) {
	
	Menu.getAllItems().then(function(items) {
		$scope.menu = items;
	});
	
	$scope.order = Order;
	
	$scope.showDeliveryMap = false;
	
	var deliButton = {
		open: {
			text: 'View Delivery Area',
			icon: 'glyphicon glyphicon-chevron-down'			
		},
		close: {
			text: 'Hide Delivery Area',
			icon: 'glyphicon glyphicon-chevron-up'
		}
	}
	
	$scope.deliveryBtn = deliButton.open;
	
	$scope.toggleDeliveryMap = function() {
		if($scope.showDeliveryMap) {
			$scope.showDeliveryMap = false;
			$scope.deliveryBtn = deliButton.open;
		} else {
			$scope.showDeliveryMap = true;
			$scope.deliveryBtn = deliButton.close;
		}
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