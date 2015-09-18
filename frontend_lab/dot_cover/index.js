(function($) {
	"use strict";
	$(document).ready(function() {
		/*-----------------------------------------------------------------------------------*/
		/*  Set height of header
		/*-----------------------------------------------------------------------------------*/ 
			function setHeight() {
				var windowHeight = $(window).innerHeight();
				$('#banner,#dot-cover').css('height', windowHeight);
			};
			setHeight();
			
			$(window).resize(function() {
				setHeight();
			});
	});
})(jQuery);