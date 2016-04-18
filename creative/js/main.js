$( document ).ready(function() {

    // console.log( "ready!" );
    var user = $("#field");
    var scoreBox = $("#score");
    var body = $("main");
    var targets = [];
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var targetCount = 0;
    var check = true;
    var newTarget;

    var time = 5;
    var cursorTime = 2;
    var timerBar = 5;
    var cssleft = [];
    var csstop = [];

    var positionX;
    var positionY;


	function createTarget() {

		var newTarget = $("<div class=target></div>"); //create DOM Element

		positionTarget(newTarget);

        // console.log(positionX+" "+positionY);


		newTarget.css({	
			"position": "absolute",
			"left": positionX,
			"top": positionY
		});


		newTarget.click(function() { 
				$(this).remove(); 
				console.log("working?"); 
				time = 5;
				timerBar = 5;
		});
		
		targets.push(newTarget);

		$("#field").append(newTarget);

		newTarget.animate({
			opacity: 0
		}, 500);

		// console.log(targets)

		var n = $("div").length;


		var left = $(".target").css("left");
		var top = $(".target").css("top");
		cssleft.push(left);
		csstop.push(top);
		// console.log("left:"+cssleft+" top:"+csstop);

	};

	function positionTarget(newTarget) {
        positionX = Math.round(Math.random() * (screenWidth - 100)) + "px";
        positionY = Math.round(Math.random() * (screenHeight - 100)) + "px";
	};

	// $(body).hover(function() {
	// 	createTarget();
	// });


	function countdown() {
		time = time-1;
		console.log("countdown time: " +time);
		if (time <= 0) {
			clearInterval(timer);
			alert("times up, fool");
			clearInterval(target);
			$('div').remove();
			$('body').css("cursor", "default");
		};
	};

	function cursorInvisible() {

		cursorTime = cursorTime-1;
		// console.log("cursorTime: " + cursorTime);

		if(cursorTime == 0) {
			$('body').css("cursor", "none");
			console.log("Finally invisible?");
			clearInterval(cursorInvisible);
		};

	};

	function countdownBar() {
		if(timerBar == 5) {
			$("#timer").stop().animate({
				"width": "50%"
			}, 100, "linear");
			// $("#timer").css({"width": "50%"});
			console.log("timerBar? " + timerBar)
		} else {
			$("#timer").stop().animate({
				"width": "0"
			}, 2000, "linear");
			console.log("hi timerBar: " + timerBar);
		}
	};

	function countdownTimer() {
		timerBar = timerBar-1;
	}

	$('button').click(function() {
		time = 5;
		cursorTime = 2;
		timer = setInterval(countdown, 1000);
		target = setInterval(createTarget, 1000);
		// cursor = setInterval(cursorInvisible, 1000);
	});


	var timer = setInterval(countdown, 1000);
	var target = setInterval(createTarget, 1000);
	// var cursor = setInterval(cursorInvisible, 1000);
	var countBar = setInterval(countdownBar, 100);
	var counter = setInterval(countdownTimer, 1000);

});
