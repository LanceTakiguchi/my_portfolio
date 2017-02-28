$(document).ready(function() {
	$("#app_sgt").mouseover(function(event) {
		description("A grading application for teachers to input student grades");
	});
	$("#app_sgt").mouseout(function(){
		
		description("Hover over an app to see it's description"); // Keep it the same as the hardcoded HTML")
});
	$("#app_swrf").mouseover(function(event) {
		description("A team project javascript game with Google Login and ecommerce API");
	});
	$("#app_swrf").mouseout(function(){
		description("Hover over an app to see it's description"); // Keep it the same as the hardcoded HTML")
});
	$("#app_calc").mouseover(function(event) {
		description("A javascript calculator with a complete history");
	});
	$("#app_calc").mouseout(function(){
		description("Hover over an app to see it's description"); // Keep it the same as the hardcoded HTML")
});
	// $("#applications").hover(function(event) {
	// 	description("Hover over an app to see it's description"); // Keep it the same as the hardcoded HTML
	// });
function description (message){
	var info = $("#app_info p");
	info.text(message)
}
});