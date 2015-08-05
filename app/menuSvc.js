'use strict'

app.service('Menu', function($http, $q, MenuItem, AdvanceMenuItem) {
	
	this.items = [];
	
	var that = this;
	
	function _searchItemById(id) {
		for(var i=0; i<that.items.length; i++) {
			if(that.items[i].id === id) {
				return that.items[i];
			}
		}
	}
	
	this.getAllItems = function() {
		var deferred = $q.defer();
		var that = this;
		$http.get('menu.json').success(function(data) {
			for(var i=0; i<data.length; i++) {
				if(!data[i].options) {
					that.items.push(new MenuItem(data[i]));
				} else {
					that.items.push(new AdvanceMenuItem(data[i]));
				}
			};
			deferred.resolve(that.items);
		}).error(function(response) {
			deferred.reject(response);
		});
		return deferred.promise;
	};
	
	this.dropItemFromOrder = function(orderItem) {
		var menuItem = _searchItemById(orderItem.menuId);
		if(menuItem) {
			menuItem.dropFromOrder();
		}
	};
	
	this.decrementItemOrderQuantity = function(OrderItem) {
		var menuItem = _searchItemById(OrderItem.menuId);
		if(menuItem) {
			menuItem.decrementOrderQuantity();
		}
	};
})