'use strict'

app.directive('gbHeaderSlides', function() {
	return {
		restrict: 'E',
		templateUrl: 'headerSlideDir.html',
		controller: function($scope) {
			$scope.noWrap = false;
			
			$scope.slides = [{
				image: '_assets/beef-roll2.jpg',
				text: ''
			}, {
				image: '_assets/spring-roll2.jpg'
			}]
		}
	}
})