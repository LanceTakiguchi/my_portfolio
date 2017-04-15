// var run_animation = "Heavens move";
// var pause_animation = "Be still";
$(document).ready(function(){
	$("footer div").click(function(){
		if($(".twinkling").css("animation-play-state") == "paused"){
			$(".twinkling").css("animation-play-state", "running");
			// $("footer div").css("animation-play-state", "running");
			// $("footer div").text(pause_animation);
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.2)");
		} else {
			$(".twinkling").css("animation-play-state", "paused");
			// $("footer div").css("animation-play-state", "paused");
			// $("footer div").text(run_animation);
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.5)");
		}
	});
});