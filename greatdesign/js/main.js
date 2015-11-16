$(document).ready(function(){
	
	//Scroll Menu

	$("#navnav").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	$("#navrol").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	//mobile
	if ( $(window).width() < 767 ) {
    	$(".timeline > ul").removeClass('contentdom');
	};

	// owlCarousel
	  //Sort random function
	  function random(owlSelector){
	    owlSelector.children().sort(function(){
	        return Math.round(Math.random()) - 0.5;
	    }).each(function(){
	      $(this).appendTo(owlSelector);
	    });
	  }
	 
	  $("#owl-demo").owlCarousel({
	    navigation: true,
	    navigationText: [
	      "<i class='icon-chevron-left icon-white'></i>",
	      "<i class='icon-chevron-right icon-white'></i>"
	      ],
	    beforeInit : function(elem){
	      //Parameter elem pointing to $("#owl-demo")
	      random(elem);
	    }
	 
	  });

	// owlCarousel
	//Owl2
	  $("#owl-nemo").owlCarousel({
	    autoPlay : 3000,
	    stopOnHover : true,
	    navigation:true,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    singleItem : true,
	    autoHeight : true,
	    transitionStyle:"fade"
	  });
	//Owl2
	//Wow.js
	new WOW().init();
	//Wow.js

	//Masonry
	$(".contentdom").masonry();


	//Custom style
	$(".conat").attr("title", "Click Me");
	$(".read").attr("title", "Read More Content");
	$(".carousel-indicators").children('li').attr("title", "Click Next");
	$(".logo").attr("title", "Site Logo");

	
	//Editor
	$("#myNavmenu > ul > li > a").on("click", function(){
		$("nav.offcanvas.in")
			.offcanvas('toggle')
			.siblings("div.navbar")
				.css({"left": "255", "right": "-192"});
	});

	//ScrollTop
	$(function () {
	    $.scrollUp({
	        scrollName: 'scrollUp',      // Element ID
	        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top',           // 'top' or 'bottom'
	        scrollSpeed: 300,            // Speed back to top (ms)
	        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
	        animation: 'fade',           // Fade, slide, none
	        animationSpeed: 200,         // Animation speed (ms)
	        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
	        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
	        scrollText: 'Scroll to top', // Text for element, can contain HTML
	        scrollTitle: false,          // Set a custom <a> title if required.
	        scrollImg: true,            // Set true to use image
	        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647           // Z-Index for the overlay
	    });
	});

});

