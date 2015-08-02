'use strict'

var app = angular.module('GBWeb',[]);

app.controller('menuCtrl', function($scope, Menu, Order) {
	
	Menu.getAllItems().then(function(items) {
		$scope.menu = items;
	});
	
	$scope.order = Order;
	
	$scope.orderDish = function(menuItem) {
		$scope.order.addItem(menuItem);
		console.log($scope.order);
	};
	
	$scope.removeDish = function(item) {
		$scope.order.dropItem(item)
	}
	
})