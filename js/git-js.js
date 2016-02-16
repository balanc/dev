$(document).ready(function(){

	/* ========== Begin Variables ==========*/

	var nodeButton;
	var id;
	var nodeButtonId;
	var check = true;
	var commitString = Math.random().toString(36).substring(7);

	/* ========== End Variables ==========*/

	/* ========== Begin Functions ==========*/

	//get number of divs on page
	function nodeCount() {
		nodeButton = $("#buttonSection button").length;
	}

	/* ========== End Functions ==========*/

	/* ========== Begin Page Interaction ==========*/

	//mousever effect on buttons
	$('.node').mouseover(function() {
		$(this).finish().animate({
			"background-color": 'rgba(255,0,106,1)',
			"width": "55px",
			"height": "55px"
		}, 500);

		$(this).animate({
			"background-color": 'rgba(255,255,255,1)',
			"width": "50px",
			"height": "50px"
		}, 250);
	});

	//mouseover effect on nav
	$('nav>ul>li>a').mouseover(function() {
		$(this).finish().animate({
			opacity: 0.5
		}, 250);

		$(this).animate({
			opacity: 1
		}, 250);
	});


	//get div button and corresponding paragraph number, then show text
	$(".node").click(function(){

		id = this.id;

		for (var i=1; i<nodeButton+1; i++)
		{
			nodeButtonId = "nodeButton"+i;
			if(id == nodeButtonId)
			{

				$("#p" + i).finish().animate({
					width: 'linear', 
					height: 'toggle',
					padding: 'toggle'
				}, 500);

				/* Unimplemened features */

				// if (check == true)
				// {
				// 	$(this).addClass("showLog");
				// 	check = false;

				// } else {

				// 	$(this).removeClass("showLog");
				// 	check = true;
				// }

				// console.log(this);
				// $(".commit").append(commitString)
				// console.log(id);
			}
		}

	});

	nodeCount();

	/* ========== End Page Interaction ==========*/

});