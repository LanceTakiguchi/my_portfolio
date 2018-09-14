/**
 * Planet orbit start positions
 */
/**
 * To Find starting positions
 * https://www.theplanetstoday.com/
 * http://cosinekitty.com/solar_system.html - Exact positions
 * https://www.desmos.com/calculator/3e7iypw4ow
 * https://theskylive.com/3dsolarsystem?obj=&h=01&m=59&date=2028-09-09
 */
/**
 * CONSTANTS
 * Scale:
 * - 60s = 1 earth orbit = 365.2422 days
 * - 86,400,000 milliseconds = 1 day
 * - 
 * 
 * 
 * - x =  0.2503749 on 1/1/1970
 * - y =  0.1982899 on 1/1/1970
 * - z = -0.0065421 on 1/1/1970
 * - distance from Sun in AU = 0.3194515 on 1/1/1970
 * - ANGLE - SohCahToa
 * - Tan(a) = y/x : Tan(a) = 0.1982899/0.2503749 : a = arcTan(0.1982899/0.2503749)
 * - 87.969 earth days to orbit sun
 * - 87.969 days * 60 seconds / 365.2422 days = 14.45106835957072 seconds for 1 mercury orbit
 * - 14.45106835957072 seconds * 161.8 degrees / 360 degrees = 6.494952390495951 seconds
 */

 /**
  * ANGLE - SohCahToa
  * Cah : cos(a) = -0.1293387/0.3181737
  * 66.4 degrees from x=-1 y=0
  * 66.4 degrees / 360 degrees = x / 14.45106835957072 total seconds for 1 mercury animation orbit
  * x = 2.665419275209711  seconds into mercury animation orbit
  */
var setDate = Date.now() / 86400000; /* millseconds from 1/1/1970 converted to days */

var mercuryOP = 87.969;  // Number of Earth days to orbit sun
var mercuryAngle = Math.atan(0.1982899/0.2503749) * (180 / Math.PI) + 180;
var mercuryOPAnimation = 14.45106835957072 // # of seconds for mercury's animation to orbit
var mercuryAnimationStart = mercuryAngle / 360 * mercuryOPAnimation //# of seconds into mercury's animation orbit on 1/1/1970; the starting position for mercury
var mercuryDay = setDate % mercuryOP; // # of earth days mercury is into its 87.969 earth days to orbit sun - CHECK against actual day into orbit
var mercuryAnimationDelay = (mercuryDay * mercuryOPAnimation / mercuryOP + mercuryAnimationStart) % mercuryOPAnimation; // # of seconds into mercury's orbit animation to be in today's actual mercury position + 3.2 seconds of position compensation
// TODO - Calculate where it should be today very where the 1970 calculation says mercury is
$(document).ready(function () {
    // Add the compiled html to the page
    // $("#mercury").css('animation-delay', -(14.45106835957072-2.665419275209711) + "s"); - WHERE IT SHOULD BE IN ANIMATION - | 8.6949 actual | 3.0907s compensation
    $("#mercury").css('animation-delay', -mercuryAnimationDelay + "s");
    // $("body").append(html);	
    // $("footer div").click(function(){
	// 	if($(".twinkling").css("animation-play-state") == "paused"){
	// 		$(".twinkling").css("animation-play-state", "running");
	// 		$(".playoid").css("animation-play-state", "running");
	// 		$(".planetoid").css("animation-play-state", "running");
	// 		$(".app_hover figure").toggleClass("stop_pulse");
	// 		$("footer div").css("background-color", "rgba(7, 53, 66, 0.2)");
	// 	} else {
	// 		$(".twinkling").css("animation-play-state", "paused");
	// 		$(".playoid").css("animation-play-state", "paused");
	// 		$(".planetoid").css("animation-play-state", "paused");
	// 		$(".app_hover figure").toggleClass("stop_pulse");
	// 		$("footer div").css("background-color", "rgba(7, 53, 66, 0.5)");
	// 	}
	// });
});