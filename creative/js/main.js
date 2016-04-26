$( document ).ready(function() {

    var user = $("#field");
    var scoreBox = $("#score");
    var body = $("main");
    var warning = $("#warning").children();
    var targets = [];
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var targetCount = 0; 
    var endFlag = true;
    var newTarget;
    var shot;
    var size;

    var time = 5;
    var cursorTime = 7;
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
		shot(); //position bullet hole over clicked area

    });

    //if game has ended, do not display a new game over screen
    if (endFlag) {

    	$(document).on('click', function(e) {
    		endGame();
    	});

    	endFlag = false;
    }

    //stop game over screen if button is clicked
    $('button').on('click', function(e) {

    	e.stopPropagation();
    });


    //function to keep track of and display amount of targets destroyed
    function count() {

    	targetCount++
    	scoreBox.text(targetCount);
    };

    //function for clicking effect
    function shot() {
    	hole = $("<div class=hole></div>"); //create shot effect
    	
    	hole.css({
			"position": "absolute",
			"left": event.pageX-50,
			"top": event.pageY-50,
    	});

    	$("#field").append(hole);

   		hole.stop().animate({
   			opacity: 0
   		}, 200);

   		setTimeout(
   			function() {$(".hole").remove();}, 
   			200
   		);
    };

    //function to create new targets and position within screen
	function createTarget() {

		newTarget = $("<div class=target></div>"); //create DOM Element

		positionTarget(newTarget); //get random position

		size = (Math.random()*200)+100+"px"; //get random size between 100 and 300px

		newTarget.css({	
			"position": "absolute",
			"left": positionX,
			"top": positionY,
			"width": size,
			"height": size
		});//attach random position and size to target

		//function to remove targets if clicked
		newTarget.click(function() { 
			shatter.play(); //play sound effect
			shatter.currentTime=0; //stop last sound effect and start new one
			$(this).toggle(
					'explode', 
					{"pieces": 25 }, 400) //break target visually
			$(this).remove(); //remove target from DOM
			countdownBar(); //reset timer to 5 seconds if target is clicked
			count(); //increase target count
			shot(); //audible cue
		});

	    $(newTarget).on('click', function(e) {
	    	e.stopPropagation(); //stop from ending game if target is clicked
	    });

		$("#field").append(newTarget); //add target to DOM

		//if enough targets are destroyed, game gets harder
		if (targetCount >= 20) {
			newTarget.animate({
				opacity: 0
			}, 500);			
		}

	};

	//function to position targets
	function positionTarget(newTarget) {

        positionX = Math.round(Math.random() * (screenWidth - 200)) + "px";
        positionY = Math.round(Math.random() * (screenHeight - 200)) + "px";

	};

	//function to end game if time reaches 0;
	function countdown() {

		time = time-1; //decrease time by 1

		if (time <= 0) {
			endGame();
		}; //if time = 0, end the game

	};

	//function to make cursor invisible
	function cursorInvisible() {

		cursorTime = cursorTime-1; //decrease time by 1

		if(cursorTime == 0) {
			$('body').css("cursor", "none");
			clearInterval(cursor);
		}; //if time = 0, cursor disappears

	};

	//function to animate a visual time bar
	function countdownBar() {

			time = 5;
			timerBar = 5;

			$("#timer").stop().animate({
				"width": "50%"
			}, 0, 'linear');

			$("#timer").stop().animate({
				"width": "0px"
			}, 5000, 'linear');

			clearInterval(timer);

			timer = setInterval(countdown, 1000);

	};

	//function to reduce time for animated time bar
	function countdownTimer() {

		timerBar = timerBar-1;

	};

	//function to end game and clear all necessary intervals and reset screen
	function endGame() {

		clearInterval(timer);
		clearInterval(target);
		clearInterval(cursor);
		clearTimeout(warnTimeout);
		warning.finish();

		scoreBox.text("Targets Destroyed: " + targetCount);

		$('.target').remove();

		$('body').css("cursor", "crosshair");

		$("#timer").stop().animate({
				"width": "0px"
		}, 0);

		$("#message").css({"display": "block"});
	};

	//function to flash warning message before cursor goes invisible
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

	//function to reset game field when button is clicked
	$('button').click(function() {

		time = 5;
		cursorTime = 7;
		targetCount = 0;

		scoreBox.text("");
		$('.target').remove();
		$('body').css("cursor", "crosshair");

		clearInterval(timer);
		clearInterval(target);
		clearInterval(cursor);
		clearInterval(counter);

		timer = setInterval(countdown, 1000);
		target = setInterval(createTarget, 500);
		cursor = setInterval(cursorInvisible, 1000);
		counter = setInterval(countdownTimer, 1000);
		warnTimeout = setTimeout(warningMessage, 3000);

		countdownBar();

		$("#message").css({"display": "none"});
		warning.text("Are You Ready?");
		
	});

	//start game functions
	var timer = setInterval(countdown, 1000); //timer for game
	var target = setInterval(createTarget, 500); //create target every second
	var cursor = setInterval(cursorInvisible, 1000); //hide cursor
	var counter = setInterval(countdownTimer, 1000); //alternative timer?
	var warnTimeout = setTimeout(warningMessage, 3000);
	countdownBar(); //animate bar to 0

});
