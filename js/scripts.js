(function($) {
    "use strict"; 

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 2000, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() > 1) {
                $('#logo').attr('src','img/logo-g.png')
            }
            if($(this).scrollTop() < 1) {        
             $('#logo').attr('src','img/logo-w.png');   
            }
        });
        });

})(jQuery);