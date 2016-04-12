$(document).ready(function() {

/* ================= Variables =================*/ 

var check = true;

	$("li[id*='project']").hover(function() {

		// $("article", this).finish().animate({
		// 	height: '0'
		// });

		if(check) {

			$("article", this).finish().animate({
				opacity: 1,
				'margin-left': '0px',
				// height: '100%'
			});

			$(this).finish().animate({
				// 'margin-bottom': '100px'
			});

			// $("article", this).css({
			// 	position: 'absolute'
			// });

			$(this).siblings().finish().animate({
				opacity: 0.3
			});

			check = false;

		} else {

			$("article", this).finish().animate({
				opacity: 0,
				'margin-left': '50px',
				// height: '0'
			});

			$(this).finish().animate({
				// 'margin-bottom': '0px'
			});

			// $("article", this).css({
			// 	position: 'relative'	
			// });

			$(this).siblings().finish().animate({
				opacity: 1
			});

			check = true;
		}
		// if(check) {

		// 	$("article[id*='description']:not(#description2)").finish().animate({
		// 		opacity: 0.5
		// 	});

		// 	check = false;

		// } else {
		// 	$("article[id*='description']").finish().animate({
		// 		opacity: 1
		// 	});

		// 	check = true;
		// }
	})

var parent = document.getElementById('home');
var child = document.getElementById('para');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

})