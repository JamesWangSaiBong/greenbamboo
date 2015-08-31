'use strict'
app.directive('gbMenuSection', function($window) {
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
			
			gbMenuCtrl.addSection(scope);
			
			scope.displayTitle = scope.cnTitle;
			
			scope.openSection = false;
			
		},
		controller: function($scope) {
			$scope.toggleOpen = function() {
				if($window.innerWidth < 640) {
					$scope.openSection = !$scope.openSection;
				}
			}
			
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