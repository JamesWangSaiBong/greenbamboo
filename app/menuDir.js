'use strict'

app.directive('gbMenu', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		templateUrl: 'menuDir.html',
		controller: function($scope) {
			this.sections = [];
			
			this.addSection = function(section) {
				
				var that = this;
				that.sections.push(section);
				if(that.sections.length === 1) {
					section.isSelected = true;
				}
			}
			
			this.select = function(section) {
				var that = this;
				section.isSelected = true;
				for(var i=0; i<that.sections.length; i++) {
					if(that.sections[i] !== section) {
						that.sections[i].isSelected = false;
					}
				}
			}
		}
	}
});

app.directive('gbMenuSection', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@',
			section: '='
		},
		require: '^gbMenu',
		templateUrl: 'menuSectionDir.html',
		link: function(scope, el, attrs, gbMenuCtrl) {
			
			gbMenuCtrl.addSection(scope);
			
			scope.select = function() {
				gbMenuCtrl.select(scope);
			}
		}
	}
})