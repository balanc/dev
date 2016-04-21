$(document).ready(function() {

		var images=["img/site-plan.jpg", 
			"img/site-rendering.jpg", 
			"img/central-rendering.jpg"
		];

		var captions=["Site Plan and Section Drawing", 
			"Site plan rendering", 
			"Shared open space rendering"
		];

		var i = 0;
		var check = 1;
		var imgBox = $("#imgBox")

		$("#next, #prev").hover(function() {

			if (check == 1) {

				$(this).finish().animate({opacity: 0.3});

				check = 0;

			} else {

				$(this).finish().animate({opacity: 1});

				check = 1;
			}

		})


		$("#next").click(function() {

			imgNext();

		});

		$("#prev").click(function() {
			imgPrev();
		})

		function imgPrev()
		{

			clearInterval(interval);
			interval = setInterval(imgSwap, 5000);
			
			if(i == 0) {

				i = images.length-1;

				imgBox.finish().animate({
					opacity: 0,
					bottom: "10px"
				}, 0);

				imgBox.attr("src", images[i]);

				imgBox.animate({
					opacity: 1,
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[i]);


			} else {

				i--;

				imgBox.finish().animate({
					opacity: 0,
					bottom: "10px"
				}, 0);

				imgBox.attr("src", images[i]);

				imgBox.animate({
					opacity: 1,
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[i]);
			}

		};

		function imgNext()
		{

			clearInterval(interval);
			interval = setInterval(imgSwap, 5000);

			if (i<=images.length-1) {

				imgBox.finish().animate({
					opacity: 0,
					bottom: "10px"
				}, 0);

				imgBox.attr("src", images[i])

				imgBox.animate({
					opacity: 1, 
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[i]);
				i++;

			} else {

				i = 0;

				imgBox.finish().animate({
					opacity: 0,
					bottom: "10px"
				}, 0);

				imgBox.attr("src", images[i]);

				imgBox.animate({
					opacity: 1,
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[i]);
				i++;

			}

		}

		function imgSwap()
		{
			if (i<=images.length-1){

				imgBox.finish().animate({
					opacity: 0,
					bottom: "10px"
				}, 0);

				$("#imgBox").attr("src", images[i]);

				imgBox.animate({
					opacity: 1,
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[i]);

				i++;

			} else {

				i = 0;

				imgBox.finish().animate({
					opacity: 0,
					bottom: "0px"
				}, 0);

				$("#imgBox").attr("src", "img/site-plan.jpg");

				imgBox.animate({
					opacity: 1,
					bottom: "0px"
				}, 1500);

				$("#caption").text(captions[0]);
			}
		};
	
		var interval = setInterval(imgSwap, 2000);
	
		$("#imgBox").hover(function() {
	
			if(check == 1) {
		
				clearInterval(interval);
				check = 0;
			
			} else {
		
				interval = setInterval(imgSwap, 5000);
				check = 1;
			}
		
		});
});