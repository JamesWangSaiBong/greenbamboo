'use strict'

var app = angular.module('GBWeb',[]);

app.controller('menuCtrl', function($scope, MenuFactory) {
	$scope.greeting = 'Hello Green Bamboo!';
	
	MenuFactory.getAllItems().then(function(items) {
		$scope.menu = items;
		console.log($scope.menu);
	});
	
	
	
})