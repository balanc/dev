$( document ).ready(function() {

    // console.log( "ready!" );
    var user = $("#field");
    var scoreBox = $("#score");
    var body = $("main");
    var warning = $("#warning");
    var targets = [];
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var targetCount = 0;
    var check = true;
    var newTarget;
    var shot;
    var size;

    var time = 5;
    var cursorTime = 2;
    var timerBar = 5;
    var cssleft = [];
    var csstop = [];

    var positionX;
    var positionY;

    var shatter = new Audio("audio/c-rogers_glass-shattering.ogg"); //sound by C_Rogers from freesound.com
    var gunshot = new Audio("audio/xenonn_layered-gunshot.wav"); //sound by Xenonn from freesound.com
    gunshot.volume = 0.3;

    $('body').click(function() {
    	gunshot.play(); //play sound effect
		gunshot.currentTime=0; //stop last sound effect and start new one
    	// cursorSwitch();
    });

    $(document).on('click', function(e) {
    	endGame();
    });

    $('button').on('click', function(e) {
    	e.stopPropagation();
    });

    $('body').click(function() {
		shot();
    });

    function count() {
    	targetCount++
    	$("#score").text(targetCount);
    };

    function shot() {
    	hole = $("<div class=hole></div>"); //create shot effect
    	
    	hole.css({
			"position": "absolute",
			"left": event.pageX-50,
			"top": event.pageY-50,
    	});

    	$("#field").append(hole);

    	console.log(event.pageX+" "+event.pageY)

   		hole.stop().animate({
   			opacity: 0
   		}, 200);

   		setTimeout(
   			function() {$(".hole").remove();}, 
   			200
   		);
    };

	function createTarget() {

		newTarget = $("<div class=target></div>"); //create DOM Element

		positionTarget(newTarget);

		size = (Math.random()*200)+100+"px";
		console.log("size:" + size)

		newTarget.css({	
			"position": "absolute",
			"left": positionX,
			"top": positionY,
			"width": size,
			"height": size
		});

		newTarget.click(function() { 
			shatter.play(); //play sound effect
			shatter.currentTime=0; //stop last sound effect and start new one
			$(this).remove(); 
			console.log("working?"); 
			countdownBar();
			count();
			console.log(targetCount);
			shot();
		});

	    $(newTarget).on('click', function(e) {
	    	e.stopPropagation();
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


	function countdown() {
		time = time-1;
		console.log("countdown time: " + time);
		if (time <= 0) {
			clearInterval(timer);
			console.log("times up, fool");
			clearInterval(target);
			clearInterval(cursorInvisible);
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

			time = 5;
			timerBar = 5;

			$("#timer").stop().animate({
				"width": "50%"
			}, 0, 'linear');

			console.log("timerBar? " + timerBar)

			$("#timer").stop().animate({
				"width": "0px"
			}, 5000, 'linear');

			clearInterval(timer);

			timer = setInterval(countdown, 1000);

	};

	function countdownTimer() {
		timerBar = timerBar-1;
	};

	function endGame() {
		clearInterval(timer);
		console.log("Game Over");
		clearInterval(target);
		clearInterval(cursor);
		$('div').remove();
		$('body').css("cursor", "default");
		$("#timer").stop().animate({
				"width": "0px"
		}, 0);
		message();
	};

	function message() {
		if (check) {
			$("#message").css({
				opacity: 1
			});
			check = false;
		} else {
			$("#message").css({
				opacity: 0
			});
			check = true;
		}
	};

	function warningMessage() {
		warning
			.animate({opacity: 1}, 500)
			.animate({opacity: 0}, 500)
			.animate({opacity: 1}, 500)
			.animate({opacity: 0}, 500)
			.animate({opacity: 1}, 500)
			.animate({opacity: 0}, 500)
			.animate({opacity: 1}, 500)
			.animate({opacity: 0}, 500);
		setTimeout(function(){
			warning.text("3");
		}, 1000);
		setTimeout(function(){
			warning.text("2");
		}, 2000);
		setTimeout(function(){
			warning.text("1");
		}, 3000);
	};

	function showIt() {
	  var n = $("#warning").queue( "fx" );
	  $( "span" ).text( n.length );
	  setTimeout( showIt, 100 );
	}

	setTimeout(warningMessage, 1000);
	// warningMessage();
	showIt();

	$('button').click(function() {

		time = 5;
		cursorTime = 2;
		targetCount = 0;
		$('#score').text("");
		$('div').remove();
		$('body').css("cursor", "default");
		clearInterval(timer);
		clearInterval(target);
		clearInterval(cursor);
		clearInterval(counter);
		timer = setInterval(countdown, 1000);
		target = setInterval(createTarget, 1000);
		cursor = setInterval(cursorInvisible, 1000);
		counter = setInterval(countdownTimer, 1000);
		countdownBar();
		message();

	});


	var timer = setInterval(countdown, 1000); //timer for game
	var target = setInterval(createTarget, 1000); //create target every second
	var cursor = setInterval(cursorInvisible, 1000); //hide cursor
	var counter = setInterval(countdownTimer, 1000); //alternative timer?
	countdownBar(); //animate bar to 0
});
