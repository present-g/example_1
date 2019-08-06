$(document).ready(function() {

	new WOW().init();

	$('.main-menu__button').on('click', function() {
		$(this).toggleClass('is-active');
		$('.main-menu').toggleClass('main-menu--active');
	});

	$('.main-menu__link').on('click', function() {
		$('.main-menu__button').removeClass('is-active');
		$('.main-menu').removeClass('main-menu--active');
	});

	
	$("a[rel='p2id']").mPageScroll2id({
		offset:50
	});

	

	$('.section-count__number').counterUp({
		delay: 1,
		time: 50
	});


	$('.hover-overlay__link').magnificPopup({
		type: 'inline',
		preloader: true,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.mfp-content', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.section-client__slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:true,
				loop:false
			}
		}
	})
});


$(function() {
	$.fn.scrollToTop = function() {
		$(this).hide().removeAttr("href");
		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
			var scrollDiv = $(this);
		$(window).scroll(function() {
			if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			});
		$(this).click(function() {
			$("html, body").animate({scrollTop: 0}, "slow")
		})
	}
});

$(function() {
	$("#go-top").scrollToTop();
});

$(window).on('load', function () {
	var $preloader = $('.loader-wrap'),
	$svg_anm   = $preloader.find('.loader');
	$svg_anm.fadeOut();
	$('body').removeClass('full-screen');
	$preloader.delay(500).fadeOut('slow');
});