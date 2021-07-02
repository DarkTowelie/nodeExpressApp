$(document).ready(function(){
	$('.card').mouseenter(function(){
		$(this).addClass('blackShadow');
	});

	$('.card').mouseleave(function(){
		$(this).removeClass('blackShadow');
	});
});