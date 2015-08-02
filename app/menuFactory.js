'use strict'

app.factory('MenuFactory', function($http, $q) {
	
	var Menu = {
		
		getAllItems: function() {
			var deferred = $q.defer();
			$http.get('menu.json').success(function(data) {
				deferred.resolve(data);
			}).error(function(response) {
				deferred.reject(response);
			});
			return deferred.promise;
		}
		
	};
	
	return Menu;
})