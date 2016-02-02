$(document).ready(function() {

	$("ul.main-menu").on("click", "li", function () {
	 	$(this).siblings().removeClass("active");
	 	$(this).addClass("active");
	});
	
    if ( ($(window).height() + 100) < $(document).height() ) {
	    $('#top-link-block').removeClass('hidden').affix({
	        // how far to scroll down before link "slides" into view
	        offset: {top:100}

	    });
	}
	$('.well').click(function(){
		$('ul.main-menu>li').removeClass('active');
		$('ul.main-menu>li.home').addClass('active');
	})
});