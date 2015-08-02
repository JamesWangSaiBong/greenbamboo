'use strict'

app.service('Menu', function($http, $q, MenuItem) {
	
	this.items = [];
	
	this.getAllItems = function() {
		var deferred = $q.defer();
		var that = this;
		$http.get('menu.json').success(function(data) {
			for(var i=0; i<data.length; i++) {
				that.items.push(new MenuItem(data[i]));
			};
			deferred.resolve(that.items);
		}).error(function(response) {
			deferred.reject(response);
		});
		return deferred.promise;
	};
	
	this.dropItemFromOrder = function(id) {
		var that = this;
		for(var i=0; i<that.items.length; i++) {
			if(that.items[i].id === id) {
				that.items[i].isSelected = false;
			}
		}
	}
})