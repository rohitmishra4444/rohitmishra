/* Author: 

*/

$(document).ready(function() {
	$(".work-box p").dotdotdot({
		//	configuration goes here
	});
});

// Project Sort Function //

$(function(){
    $('#work-sort').mixitup();
});

// Project BounceOut Overlay //

$('.work-box').hover(
   function(e){
     //do the mouseenter things here...
        $(this).find('img').addClass('animated, bounceOutRight');
   },
   function(e){
     //do the mouseleave things here...
        $(this).find('img').removeClass('animated, bounceOutRight'),
        $(this).find('img').addClass('animated, bounceInRight');
   }
);

// Fades Our Project Content On Project Click //

$("nav").click(function() {
	$('#project-container').animate({ scrollTop: "0" });
});

$(".work-click").click(function() {
	$('body').animate({ scrollTop: "0" }),
	$('nav').animate({
    left: '-10%'
  }, 350, function() {
    // Animation complete.
  }),
  $('.bottom-nav').animate({
    bottom: '-17%'
  }, 350, function() {
    // Animation complete.
  }),
	$('#work-text').fadeOut(),
	$('#project-container').fadeOut();
});

$(function(){
if ( $(window).width() < 800) {
   	$(".work-click").click(function() {
	$('body').animate({ scrollTop: "0" }),
	$('nav, .bottom-nav').animate({
    left: '-100%'
  }, 550, function() {
    // Animation complete.
  }),
	$('#work-text').fadeOut(),
	$('#project-container').fadeOut();
});
}
else {
   
}
});

// Display project when clicked on //

// $('.work-click').click(function(){
// 	var url = $(this).attr('href');
//     $('#work-load').load(url);
//     return false;
// });