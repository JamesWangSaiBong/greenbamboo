'use strict'

app.directive('gbHeaderSlides', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/headerSlideDir.html',
		controller: function($scope) {
			$scope.noWrap = false;
			
			$scope.slides = [{
				image: '_assets/beef-roll.jpg',
				text: ''
			}, {
				image: '_assets/spring-roll.jpg',
				text: ''
			},
			{
				image: '_assets/thai-beef-noodle.jpg',
				text: ''
			}]
		}
	}
})