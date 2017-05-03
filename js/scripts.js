$(document).ready(function(){

	$(".toggle").click(function() {

		var $menu = $("#menu");

		$("#emptydiv").append($menu);
		$menu.attr("display", "flex");
		
	  	$(this).toggleClass("on");
	  	$menu.fadeToggle();
	});

/* This section is to get the animated scroll effect */

	var $menubutton = $("#main-content a");

	$($menubutton).on('click',function (e) {
	    
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});