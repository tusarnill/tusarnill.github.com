$(document).ready(function(){
	$('#nav').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce"
	});
	//add
	$(".cross").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});
  
	$(".add img").click(function(){
		$(".add").hide(2000);
		$(".container , .slider_area").css('opacity','1');
	});
	
	//owl slider
	 $("#owl-demo").owlCarousel({
 
		autoPlay: 5000, //Set AutoPlay to 5 seconds
		 
		items : 1,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		 
	});
	
	//Carousel Slider Plugins
	$('.carousel').carousel();
		$('.carousel').carousel({
			interval: 5000
	});
	
});