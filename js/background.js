// var run_animation = "Heavens move";
// var pause_animation = "Be still";
$(document).ready(function(){
	$("footer div").click(function(){
		if($(".twinkling").css("animation-play-state") == "paused"){
			$(".twinkling").css("animation-play-state", "running");
			$(".playoid").css("animation-play-state", "running");
			$(".planetoid").css("animation-play-state", "running");
			$(".app_hover figure").toggleClass("stop_pulse");
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.2)");
		} else {
			$(".twinkling").css("animation-play-state", "paused");
			$(".playoid").css("animation-play-state", "paused");
			$(".planetoid").css("animation-play-state", "paused");
			$(".app_hover figure").toggleClass("stop_pulse");
			$("footer div").css("background-color", "rgba(7, 53, 66, 0.5)");
		}
	});
});