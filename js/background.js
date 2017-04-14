$(document).ready(function(){
	$("footer div").click(function(){
		if($(".twinkling").css("animation-play-state") == "paused"){
			$(".twinkling").css("animation-play-state", "running");
			$("footer div").text("Stars be still");
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.2)");
			// $("footer div:hover").css("background-color", "rgba(7, 53, 66, 1)");
		} else {
			$(".twinkling").css("animation-play-state", "paused");
			$("footer div").text("Twinkle little stars");
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.5)");
			// $("footer div:hover").css("background-color", "rgba(7, 53, 66, 1)");
		}
	});
});