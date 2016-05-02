$(document).ready(function() {

/* ================= Variables =================*/ 

var check = true;
var parent = document.getElementById('home');
var child = document.getElementById('para');

	$("li[id*='project']").hover(function() {

		if(check) {

			$("article", this).finish().animate({
				opacity: 1,
				'margin-left': '0px',
			});

			$(this).siblings().finish().animate({
				opacity: 0.3
			});

			check = false;

		} else {

			$("article", this).finish().animate({
				opacity: 0,
				'margin-left': '50px',
			});

			$(this).siblings().finish().animate({
				opacity: 1
			});

			check = true;
		}
	})


child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

/* Smooth Scrolling courtesy of https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery*/
	// $('a[href^="#"]').on('click',function (e) {
	//     e.preventDefault();

	//     var target = this.hash;
	//     var $target = $(target);

	//     $('html, body').stop().animate({
	//         'scrollTop': $target.offset().top
	//     }, 900, 'swing', function () {
	//         window.location.hash = target;
	//     });
	// });

})