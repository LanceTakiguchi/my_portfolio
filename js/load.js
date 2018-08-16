$(document).ready(function () {
    var source = $("#hBars").html();
    var template = Handlebars.compile(source);
    var html = template(domText);

    // Add the compiled html to the page
    $("body").append(html);	
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