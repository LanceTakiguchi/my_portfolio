var reset = "Hover over an app to see it's description";
$(document).ready(function() {
	$("#app_sgt").mouseover(function(event) {
		description("A grading application for teachers to input student grades");
	});
	$("#app_sgt").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
	$("#app_swrf").mouseover(function(event) {
		description("A team project javascript game with Google Login and ecommerce API");
	});
	$("#app_swrf").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
	$("#app_calc").mouseover(function(event) {
		description("A javascript calculator with a complete history");
	});
	$("#app_calc").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
	$("#app_ttwars").mouseover(function(event) {
		description("A hackathon Tic Tac Toe Game");
	});
	$("#app_ttwars").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
	$("#app_nfl").mouseover(function(event) {
		description("A API hackathon NFL app that displays game schedule, scores, twitter, YouTube, and weather");
	});
	$("#app_nfl").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
	$("#app_ship").mouseover(function(event) {
		description("A jQuery/Javascript app that calculates shipping cost and arrival of a package");
	});
	$("#app_ship").mouseout(function(){
		description(reset); // Keep it the same as the hardcoded HTML")
});
/**
 * [description Edits the app description based on which you hover over]
 * @param  {[String]} message [Describes the currently app being hovered over]
 */
 function description (message){
 	var info = $("#app_info p");
 	info.text(message)
 }
});