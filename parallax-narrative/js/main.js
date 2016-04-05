$(document).ready(function(){

	$(window).scroll(function(){
    $("#group1").css("top", Math.max(0, 250 - $(this).scrollTop()));
});

});