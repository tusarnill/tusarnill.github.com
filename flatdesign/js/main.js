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

	//Calendar script
	function calendarr(){
		var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var month=['January','February','March','April','May','June','July','August','September','October','November','December']
		var d=new Date();
		setText('calendar-day', day[d.getDay()]);
		setText('calendar-date', d.getDate());
		setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
	};

	function  setText(id, val){
		if(val < 10){
			val = '0' + val;
		}
		document.getElementById(id).innerHTML = val;
	};

	window.onload = calendarr;

	//Date-picker Calender 
	$('#calendar').datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	});

});