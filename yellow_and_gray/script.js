$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').hide(0);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500);
	});
});

//.not(get_current)    <-------- ???




$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	center:true,
  	//items:7,
  	loop:true,/*
  	nav:true,/*
  	dots:true,
  	/*autoplay:true,
  	autoplayTimeout:2500,
  	autoplayHoverPause:true*/
  	responsive:{
  		0:{
  			items:3,
  			dots:true
  		},
  		560:{
  			items:5,
  			dots:true,
  			autoplay:true,
  			autoplayTimeout:2500
  		},
  		960:{
  			items:7,
  			dots:true,
  			autoplay:true,
  			autoplayTimeout:2500,
  			autoplayHoverPause:true
  		}
  	}
  });
});

/* Разобраться с адаптивностью карусели!!! Обучение: https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html*/
