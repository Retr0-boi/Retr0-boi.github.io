function include(e) {
	return document.write('<script src="' + e + '"></script>'), !1
}
include('js/jquery.waitforimages.min.js'),
	include('js/appear.min.js'),
	include('js/jquery.bxslider.min.js'),
	include('js/isotope.pkgd.min.js'),
	include('js/jquery.countTo.js'),
	include('js/owl.carousel.min.js'),
	include('js/retina.min.js'),
	include('js/jquery.mb.YTPlayer.min.js'),
	include('js/wow.min.js'),
	include('js/jquery.simple-text-rotator.min.js')
var deviceAgent = navigator.userAgent.toLowerCase(),
	isTouchDevice =
		Modernizr.touchevents ||
		deviceAgent.match(/(iphone|ipod|ipad)/) ||
		deviceAgent.match(/(android)/) ||
		deviceAgent.match(/(iemobile)/) ||
		deviceAgent.match(/iphone/i) ||
		deviceAgent.match(/ipad/i) ||
		deviceAgent.match(/ipod/i) ||
		deviceAgent.match(/blackberry/i) ||
		deviceAgent.match(/bada/i)
isTouchDevice ||
	$(document).ready(function () {
		$('.parallax-block').css({'background-attachment': 'fixed'})
	}),
	$(window).on('load', function () {
		;(jQuery.waitForImages.hasImgProperties = ['background', 'backgroundImage']),
			jQuery('body').waitForImages(function () {
				jQuery('#page-preloader').delay(100).fadeOut('slow'),
					jQuery('body').css('overflowY', 'auto'),
					(wow = new WOW({animateClass: 'animated', offset: 100})),
					wow.init()
			})
	})
var vidfilter = {grayscale: 100}
function submitToAPI(e) {
	e.preventDefault()
	var t = {name: $('#name-input').val(), email: $('#email-input').val(), desc: $('#description-input').val()}
	$.ajax({
		type: 'POST',
		url: 'https://76tc00usul.execute-api.ap-south-1.amazonaws.com/dev/contact-us',
		dataType: 'json',
		crossDomain: 'true',
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(t),
		success: function () {
			alert('Successfull'), document.getElementById('contact-form').reset(), location.reload()
		},
		error: function () {
			alert('-Successfull-')
		},
	})
}
function submitToAPIC(e) {
	e.preventDefault()
	var t = {
		name: $('#name-input').val(),
		email: $('#email-input').val(),
		desc: $('#description-input').val(),
		subject: $('#subject-input').val(),
		type: $('#type-input').val(),
		location: $('#location-input').val(),
	}
	$.ajax({
		type: 'POST',
		url: 'https://76tc00usul.execute-api.ap-south-1.amazonaws.com/dev/contact-us',
		dataType: 'json',
		crossDomain: 'true',
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(t),
		success: function () {
			alert('Your enquiry has successfully reached us. We shall get back to you in some time.'),
				document.getElementById('contact-form').reset(),
				location.reload()
		},
		error: function () {
			alert('Your enquiry has successfully reached us. We shall get back to you in some time.'), location.reload()
		},
	})
}
$(function () {
	jQuery(window).width() > 768
		? ($('.player').YTPlayer(), $('#vid').YTPApplyFilters(vidfilter))
		: $('.video').css({'background-image': 'url(images/video-cover.jpg)'})
}),
	jQuery(function () {
		var e = $('section'),
			t = $('nav ul li'),
			i = $('header').outerHeight()
		$(window).on('scroll', function () {
			var a = $(this).scrollTop()
			e.each(function () {
				var o = $(this).offset().top - i,
					n = o + $(this).outerHeight()
				a >= o &&
					a <= n &&
					(t.find('a').removeClass('current'),
					e.removeClass('current'),
					$(this).addClass('current'),
					t.find('a[href="#' + $(this).attr('id') + '"]').addClass('current'))
			})
		})
	}),
	$(window).scroll(function () {
		var e = $('header'),
			t = $(window).scrollTop()
		jQuery(window).width() > 768 &&
			(t > 0
				? (e.addClass('fixed'), $('#menu').removeClass('disp-none'))
				: (e.removeClass('fixed'), $('#menu').addClass('disp-none')))
	}),
	$(window).scroll(function () {
		var e = $(window).scrollTop()
		e >= 0 && e <= 575 ? $('#homeMenu').addClass('menu-active') : $('#homeMenu').removeClass('menu-active'),
			e >= 575 && e <= 2600 ? $('#menuAbout').addClass('menu-active') : $('#menuAbout').removeClass('menu-active'),
			e >= 2600 && e <= 3655 ? $('#menuPrott').addClass('menu-active') : $('#menuPrott').removeClass('menu-active'),
			e >= 3655 && e <= 4200 ? $('#menuawards').addClass('menu-active') : $('#menuawards').removeClass('menu-active'),
			e >= 4200 && e <= 4500 ? $('#menuContact').addClass('menu-active') : $('#menuContact').removeClass('menu-active')
	}),
	$(document).ready(function () {
		function e() {
			var e = $(window).height()
			$('#top').css('min-height', e), $('.top-outer').css('height', e), $('.slides li').css('min-height', e)
		}
		function t() {
			var e = $('header').outerHeight(),
				t = $('.top-left-separator').outerHeight(),
				i = jQuery(window).width()
			$('.top-outer').css('padding-top', e),
				i > 768 ? $('.top-outer').css('padding-bottom', e + t) : $('.top-outer').css('padding-bottom', e)
		}
		e(),
			$(window).resize(e),
			t(),
			$(window).resize(t),
			$('.slides').bxSlider({
				mode: 'fade',
				slideMargin: 0,
				auto: !0,
				pause: 7e3,
				autoControls: !1,
				controls: !0,
				pager: !1,
			}),
			$('.p-slides').bxSlider({
				mode: 'fade',
				slideMargin: 0,
				auto: !0,
				pause: 7e3,
				autoControls: !1,
				controls: !0,
				pager: !1,
			}),
			$('.slides-rotate').bxSlider({mode: 'fade', slideMargin: 0, auto: !1, autoControls: !1, controls: !0, pager: !1})
		var i = ['images/slide2.jpg', 'images/slide2_3.jpg'],
			a = 1
		function o() {
			var e = $('footer').outerHeight(),
				t = $('header').outerHeight(),
				i = $('.sticky-footer'),
				a = $(window).height() - e - t
			i.css({'min-height': a, 'margin-top': t})
		}
		setInterval(function () {
			a > i.length - 1
				? ($('.bg-slider .slide').animate({opacity: '0'}, 200, function () {
						;(a = 1), $('.bg-slider .slide').css({'background-image': 'url(' + i[0] + ')'})
				  }),
				  $('.bg-slider .slide').animate({opacity: '1'}, 200))
				: ($('.bg-slider .slide').animate({opacity: '0'}, 200, function () {
						$('.bg-slider .slide').css({'background-image': 'url(' + i[a] + ')'}), a++
				  }),
				  $('.bg-slider .slide').animate({opacity: '1'}, 200))
		}, 3e3),
			$('.slide1 .rotate').textrotator({animation: 'flip', speed: 2e3}),
			$('.slide2 .rotate').textrotator({animation: 'flipUp', speed: 2e3}),
			$('.scroll-down, .menu-item, #promo a').click(function () {
				var e = $('header').innerHeight()
				return (
					$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - e + 'px'}, {duration: 800}), !1
				)
			}),
			$('.ham').click(function () {
				$('header').toggleClass('sb-active')
			}),
			$('.menu-item').each(function () {
				$(this).click(function () {
					$('header').removeClass('sb-active')
				})
			}),
			$('.has-sub').click(function (e) {
				e.preventDefault(), $(this).next('.sub-menu').slideToggle('fast')
			}),
			jQuery('#about .count-box').each(function () {
				jQuery(this).appear(function () {
					jQuery('.counter').countTo()
				})
			}),
			$('.portfolio-b').isotope({columnWidth: '.grid-sizer', itemSelector: '.p-item', percentPosition: !0}),
			$('.p-filters').on('click', 'li', function () {
				var e = $(this).attr('data-filter')
				$('.portfolio-b').isotope({filter: e})
			}),
			$('.p-filters').each(function (e, t) {
				var i = $(t)
				i.on('click', 'li', function () {
					i.find('.is-checked').removeClass('is-checked'), $(this).addClass('is-checked')
				})
			}),
			$('.btn-show').click(function () {
				$(this).toggleClass('open'), $(this).next('.pop-wrap').stop('true', 'true').slideToggle('fast')
			}),
			$('#mailform').validate({
				submitHandler: function (e) {
					$.ajax({
						url: '/mail/mail.php',
						type: 'post',
						data: $(e).serialize(),
						success: function (e) {
							$('#mailform').html(
								'<div class="results"><span style="color:#fff;">Thank you for your message!</span></div>',
							),
								window.setTimeout(function () {
									location.reload()
								}, 2e3)
						},
					})
				},
				rules: {email: {required: !0, email: !0}, name: {required: !0}, message: {required: !0}},
			}),
			$('#notify').validate({
				submitHandler: function (e) {
					$.ajax({
						url: '/mail/notify.php',
						type: 'post',
						data: $(e).serialize(),
						success: function (e) {
							$('#notify').html('<div class="results">Thank you for your message!</div>'),
								window.setTimeout(function () {
									location.reload()
								}, 2e3)
						},
					})
				},
				rules: {email: {required: !0, email: !0}, name: {required: !0}},
			}),
			(function (e) {
				;(e.fn.equalHeights = function () {
					var t = 0,
						i = e(this)
					return (
						i.each(function () {
							var i = e(this).innerHeight()
							i > t && (t = i)
						}),
						i.css('height', t)
					)
				}),
					e('[data-equal]').each(function () {
						var t = e(this),
							i = t.data('equal')
						t.find(i).equalHeights()
					})
			})(jQuery),
			$('#blog .news-item').equalHeights(),
			$('#content .news-item').equalHeights(),
			$(window).resize(function () {
				$('#blog .news-item').equalHeights(), $('#content .news-item').equalHeights()
			}),
			$('.news-m').masonry({itemSelector: '.news-item-m', percentPosition: !0}),
			$('#testi').owlCarousel({navigation: !1, pagination: !0, autoPlay: 7e3, singleItem: !0, rewindNav: !1}),
			$('#brands').owlCarousel({
				navigation: !1,
				pagination: !0,
				autoPlay: 1e3,
				items: 8,
				itemsDesktop: [1e3, 5],
				itemsDesktopSmall: [980, 3],
				itemsTablet: [768, 2],
				itemsMobile: [100, 1],
			}),
			$('#brands1').owlCarousel({
				navigation: !1,
				pagination: !0,
				autoPlay: 1e3,
				items: 8,
				itemsDesktop: [1200, 3],
				itemsDesktopSmall: [980, 2],
				itemsTablet: [768, 2],
				itemsMobile: [100, 1],
			}),
			o(),
			$(window).resize(o)
	})
