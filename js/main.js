$(document).ready(function() {

/* ================= Variables =================*/ 

var check = true;

	$("li[id*='project']").hover(function() {
		if(check) {

			$("article", this).finish().css('display','block')

			check = false;

		} else {
			$("article", this).finish().css('display','none')

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


})