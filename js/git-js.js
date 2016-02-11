$(document).ready(function(){

	//variables
	var nodeButton;
	var id;
	var nodeButtonId;
	var check;
	var commitString = Math.random().toString(36).substring(7);


	//functions

	//get number of divs on page
	function nodeCount() {
		nodeButton = $("#buttonSection div").length;
		// console.log(nodeButton);
	}

	//mosever effect on div buttons
	$('.node').mouseover(function() {
		$(this).data("background-color", $(this).css("background-color"));
		$(this).finish().animate({
			"background-color": 'rgba(255,0,106,1)',
			"width": "55px",
			"height": "55px"
			// opacity: 0.2
		}, 500);

		$(this).animate({
			"background-color": 'rgba(255,255,255,1)',
			"width": "50px",
			"height": "50px"
			// opacity: 1
		}, 500);
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


	//get div button and corresponding paragraph, then show text
	$(".node").click(function(){
		id = this.id;
		// console.log(id);
		// console.log(nodeButton);

		// if(check == true)
		// {
		// 	$(this).css({
		// 		'background': 'black'
		// 	});

		// 	check = false;
		// 	console.log(check);

		// } else {
		// 	$(this).css({
		// 		'background': 'rgba(255,255,255,1)'
		// 	});

		// 	check = true;
		// 	console.log(check);
		// }

		for (var i=1; i<nodeButton+1; i++)
		{
			nodeButtonId = "nodeButton"+i;
			if(id == nodeButtonId)
			{

				$("#p" + i).finish().animate({width: 'toggle', height: 'toggle', padding: 'toggle'}, 500);
				check = 1;
				$(".commit").append(commitString)
				// console.log(id);
			}
		}

	});

	nodeCount();

});