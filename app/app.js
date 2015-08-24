'use strict'

var app = angular.module('GBWeb',['ui.bootstrap']);

app.controller('menuCtrl', function($scope, $modal, $rootScope, Menu, Order) {
	
	Menu.getAllItems().then(function(items) {
		$scope.menu = items;
	});
	
	$scope.showDeliveryMap = false;
	
	$scope.toggleDeliveryMap = function() {
		$scope.showDeliveryMap = !$scope.showDeliveryMap;
	}
	$scope.order = Order;
	
	$scope.open = false;
	
	$scope.openModal = function() {
		$scope.open = true;
		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'order/orderModal.html',
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
		
	Menu.getCYOOptions().then(function(optArray) {
		$scope.cyoOptions = optArray;
		for(var i=0; i < $scope.cyoOptions.length; i++) {
			$scope.cyoOptions[i].isSelected = false;
		}
	});
		
	$scope.setCYOItem = function(item) {
		if(!$scope.activeCYO || item === $scope.activeCYO) {
			$scope.activeCYO = item;
		} else {
			$scope.confirmReset(item);
		}
	}
	
	$scope.confirmReset = function(item) {
		var res;
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'menu/directives/confirmResetCYOModal.html',
			controller: 'ConfirmResetCtrl',
			size: 'sm'
		});
		modalInstance.result.then(function(response) {
			$scope.activeCYO.resetSelf();
			for(var i=0; i<$scope.cyoOptions.length; i++) {
				$scope.cyoOptions[i].isSelected = false;
			}
			$scope.alertMsg = '';
			$scope.activeCYO = item;
		});
	}
	
	$scope.toggleCYOChoice = function(choice) {
		if(!$scope.activeCYO) {
			$scope.alertMsg = 'Please select a dish from above first';
		} else {
			if(!choice.isSelected) {
				var response = $scope.activeCYO.addChoice(choice);
				if(!response) {
					$scope.alertMsg = 'You can only choose ' + $scope.activeCYO.numOfChoices + ' items';
				} else {
					choice.isSelected = true;
				}				
			} else {
				$scope.activeCYO.removeChoice(choice);
				choice.isSelected = false;
			}
			
		}
	}
	
	$scope.completeCYO = function() {
		if(!$scope.activeCYO) {
			$scope.completeCYOMsg = 'Please select a dish from above first';
			return;
		}
		var result = $scope.activeCYO.completeOrder()
		$scope.completeCYOMsg = result.msg;
		if(result.isCompleted) {
			//Clear all selected choices
			for(var i=0; i<$scope.cyoOptions.length; i++) {
				$scope.cyoOptions[i].isSelected = false;
			}
			//Reset activeCYO to undefined
			$scope.activeCYO = undefined;
		}
	}
	
	$scope.menuLang = 'cn';
	
	$scope.$watch('menuLang', function(newVal) {
		$rootScope.$broadcast('CHANGE_LANG', newVal);
		//Switch CYO-options language
		for(var i=0; i<$scope.cyoOptions.length; i++) {
			$scope.cyoOptions[i].setName(newVal);
		}
	});
	
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

app.controller('ConfirmResetCtrl', function($scope, $modalInstance) {
	$scope.ok = function() {
		$modalInstance.close(true);
	};
	
	$scope.close = function() {
		$modalInstance.dismiss(false);
	}
});