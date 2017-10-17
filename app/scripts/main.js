'use strict';

$('.toggle-button').click(function(){ //you can give id or class name here for $('button')
    $(this).text(function(i, old){
        return old === 'Show Details' ? 'Hide Details' : 'Show Details';
    });
});


(function ($) {
  $(document).ready(function(){
	// hide .navbar first
	$('.navbar').hide();
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});
  }(jQuery));
