$( document ).ready(function() {

    // console.log( "ready!" );
    var user = $("#field");
    var scoreBox = $("#score");
    var body = $("main");
    var targets = [];
    var screenWidth = $(window).width()-100;
    var screenHeight = $(window).height()-100;
    var targetCount = 0;
    var check = true;
    var newTarget;
    var cssleft = [];
    var csstop = [];

	// $(body).hover(function() {
	// 	$(this).css({
	// 		'background': 'red'})
	// });

	function createTarget() {

		var newTarget = $("<div class=target></div>"); //create DOM Element
		// positionTarget(newTarget);
        var positionX = Math.round(Math.random() * (screenWidth - 100)) + "px";
        var positionY = Math.round(Math.random() * (screenHeight - 100)) + "px";
        console.log(positionX+" "+positionY);

		// $(".target").css({
		// 	"position": "absolute",
		// 	"left": positionX,
		// 	"top": positionY
		// });

		newTarget.css(
			{	"position": "absolute",
				"left": positionX,
				"top": positionY
			}
		);


		newTarget.click(
			function() { $(this).remove(); console.log("working?"); }
		);
		
		targets.push(newTarget);

		$("#field").append(newTarget);

		console.log(targets)

		var n = $("div").length;

		// for (i=0; i<n; i++) {
		// 	var value = $(".target").css("left");
		// 	css.push(value);
		// 	console.log(css);
		// }
			var left = $(".target").css("left");
			var top = $(".target").css("top");
			cssleft.push(left);
			csstop.push(top);
			console.log("left:"+cssleft+" top:"+csstop);

		console.log(n);
	}

	function positionTarget(newTarget) {
		// var random = Math.floor(Math.random()*500); //random number for positioning
  //       var positionX = Math.round(Math.random() * screenWidth)-20;
  //       var positionY = Math.round(Math.random() * screenHeight)-20;
  //       console.log(positionX+" "+positionY);

		// $(".target").css({
		// 	"position": "absolute",
		// 	"left": "positionX" + "px",
		// 	"top": "positionY" + "px"
		// });
	}

	// $(body).hover(function() {
	// 	createTarget();
	// });

	var myVar = setInterval(createTarget, 1000)

	$("#score").click(function() {
		$(this).remove();
		console.log("working?")
	});

});
