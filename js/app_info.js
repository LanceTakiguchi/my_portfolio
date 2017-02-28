$(document).ready(function() {
	$("#app_sgt").hover(function(event) {
		description("A grading application for teachers to input student grades");
	});
	$("#app_swrf").hover(function(event) {
		description("A javascript game with Google Login and ecommerce API");
	});
	$("#app_calc").hover(function(event) {
		description("A javascript calculator with a complete history");
	});
	$("#applications").hover(function(event) {
		description("Hover over an app to see it's description"); // Keep it the same as the hardcoded HTML
	});
	function description (message){
		var info = $("#app_info p");
		info.text(message)
	}
});