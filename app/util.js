'use strict'

$(window).load(function() {
	
	$(document).scroll(function () {
    //stick order-tab to top of page
		var screenBot = $(this).scrollTop() + $(window).height();
		var menuTopPos = $('#menu').offset().top + 100;
		if (screenBot> menuTopPos) {
			$('#order-tab').removeClass('fadeOutDown').addClass('sticky-bot fadeInUp');
		} else {
			$('#order-tab').addClass('fadeOutDown').removeClass('sticky-bot fadeInUp');
		}
	});
	
})