'use strict'

app.factory('MenuFactory', function($http, $q, MenuItem) {
	
	var Menu = {
		
		getAllItems: function() {
			var deferred = $q.defer();
			var items = [];
			$http.get('menu.json').success(function(data) {
				for(var i=0; i<data.length; i++) {
					items.push(new MenuItem(data[i]));
				};
				deferred.resolve(items);
			}).error(function(response) {
				deferred.reject(response);
			});
			return deferred.promise;
		}
		
	};
	
	return Menu;
})