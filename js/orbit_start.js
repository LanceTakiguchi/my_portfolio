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
 * mercury x 2.656647210268048
 * - x = 0.9501262305921959 on 1/1/1970
 * - y = -0.2915595927147295 on 1/1/1970
 * - 161.8 degrees from x=-1 y=0
 * - 87.969 earth days to orbit sun
 * - 87.969 days * 60 seconds / 365.2422 days = 14.45106835957072 seconds for 1 mercury orbit
 * - 14.45106835957072 seconds * 161.8 degrees / 360 degrees = 6.494952390495951 seconds
 */

 /**
  * TODAY
  * x = -0.1293387 on 1/1/1970
  * y = 0.2885381 on 1/1/1970
  * disance in AU = 0.3181737 on 1/1/1970	
  * Multiplier = 3.14293733265823
  * x = -0.4065034287874831 on 1/1/1970
  * y = -0.406503428787483 on 1/1/1970
  * 246.4 degrees from x=1 y=0
  * 66.4 degrees from x=-1 y=0
  * 66.4 degrees / 360 degrees = x / 14.45106835957072 total seconds for 1 mercury animation orbit
  * x = 2.665419275209711  seconds into mercury animation orbit
  */
var setDate = Date.now() / 86400000; /* millseconds from 1/1/1970 converted to days */

var mercuryOP = 87.969;  // Number of Earth days to orbit sun
var mercuryOPAniSec = 14.45106835957072 // # of seconds for mercury's animation to orbit
var mercurySetDateAniSec = 6.494952390495951 //# of seconds into mercury's animation orbit on 1/1/1970
var mercuryDay = setDate % mercuryOP; // # of earth days mercury is into its 87.969 earth days to orbit sun
var mercuryAniSec = (mercuryDay * mercuryOPAniSec / mercuryOP + mercurySetDateAniSec + 3.0907) % mercuryOPAniSec; // # of seconds into mercury's orbit animation to be in today's actual mercury position + 3.2 seconds of position compensation

$(document).ready(function () {
    // Add the compiled html to the page
    // $("#mercury").css('animation-delay', -(14.45106835957072-2.665419275209711) + "s"); - WHERE IT SHOULD BE IN ANIMATION - | 8.6949 actual | 3.0907s compensation
    $("#mercury").css('animation-delay', -mercuryAniSec + "s");
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