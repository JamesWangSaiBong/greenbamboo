'use strict'

app.service('Menu', function($http, $q, ItemIdentifier) {
	
	this.items = {};
	
	var that = this;
	
	function _searchItem(item) {
		
		var itemType = item.type;
		for(var i=0; i<that.items[itemType].length; i++) {
			if(that.items[itemType][i].id === item.menuId) {
				return that.items[itemType][i];
			}
		}
	}
	
	this.getAllItems = function() {
		var deferred = $q.defer();
		var that = this;
		$http.get('menu/menu.json').success(function(data) {
			that.items = ItemIdentifier.identifyMenuItem(data);
			deferred.resolve(that.items);
		}).error(function(response) {
			deferred.reject(response);
		});
		return deferred.promise;
	};
	
	this.decrementItemOrderQuantity = function(OrderItem) {
		var menuItem = _searchItem(OrderItem);
		if(menuItem) {
			menuItem.decrementOrderQuantity();
		}
	};
})