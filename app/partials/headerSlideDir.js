'use strict'

app.directive('gbHeaderSlides', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/headerSlideDir.html',
		controller: function($scope) {
			$scope.noWrap = false;
			
			$scope.slides = [{
				image: '_assets/vietnamese-meat-wrap-roll.jpg',
				text: ''
			}, {
				image: '_assets/vietnamese-spring-roll.jpg',
				text: ''
			},
			{
				image: '_assets/thai-beef-pho.jpg',
				text: ''
			}]
		}
	}
})