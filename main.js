// main javascript file for portfolio website

$(document).ready() {

	// $(".dropdown-trigger").hover(
	// 	function() {
	// 		$(".dropdown-menu").show();
	// 	},
	// 	function () {
	// 		$(".dropdown-menu").hide();
	// 	}

	// 	});

	$('.nav li > .dropdown-menu').parent().hover(function() {
	  var dropdown = $(this).children('.dropdown-menu');
	  if ( $(dropdown).is(':hidden') ) {
	    $(dropdown).slideDown(200);
	  } else {
	    $(dropdown).slideUp(200);
	  }


}