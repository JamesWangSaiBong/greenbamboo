'use strict'

app.directive('gbMenu', function($window) {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: {},
		templateUrl: 'menu/directives/menuDir.html',
		controller: function($scope) {
			$scope.sections = [];
			
			this.addSection = function(section) {	
				$scope.sections.push(section);
			}
			
			$scope.$watch(function() {
				return $window.innerWidth;
			}, function(newVal) {
				if(newVal < 640) {
					for(var i=0; i<$scope.sections.length; i++) {
						$scope.sections[i].openSection = false;
					}
				} else {
					for(var i=0; i<$scope.sections.length; i++) {
						$scope.sections[i].openSection = true;
					}
				}
			})
		}
	}
});
