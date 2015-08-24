'use strict'
app.directive('gbMenuSection', function() {
	return {
		replace: true,
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			cnTitle: '@'
		},
		require: '^gbMenu',
		templateUrl: 'menu/directives/menuSectionDir.html',
		link: function(scope, el, attrs, gbMenuCtrl) {
			
			scope.displayTitle = scope.cnTitle;
			
			gbMenuCtrl.addSection(scope);
			
			scope.select = function() {
				gbMenuCtrl.select(scope);
			}
		},
		controller: function($scope) {
			$scope.$on('CHANGE_LANG', function(event, lang) {
				switch (lang) {
					case 'cn':
						$scope.displayTitle = $scope.cnTitle;
						break;
					case 'en':
						$scope.displayTitle = $scope.title;
						break;
				}
			})
		}
	}
})