'use strict'
app.directive('gbMenuSection', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			section: '='
		},
		require: '^gbMenu',
		templateUrl: 'menu/directives/menuSectionDir.html',
		link: function(scope, el, attrs, gbMenuCtrl) {
			
			gbMenuCtrl.addSection(scope);
			
			scope.select = function() {
				gbMenuCtrl.select(scope);
			}
		}
	}
})