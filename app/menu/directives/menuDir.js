'use strict'

app.directive('gbMenu', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		templateUrl: 'menu/directives/menuDir.html',
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
