/**
 * Planet orbit start positions
 */
/**
 * To Find starting positions
 * https://www.theplanetstoday.com/
 * http://cosinekitty.com/solar_system.html - Exact positions
 * https://www.desmos.com/calculator/3e7iypw4ow
 * https://theskylive.com/3dsolarsystem?obj=&h=00&m=00&date=1970-01-01
 * https://www.heavens-above.com/planets.aspx 
 * https://nssdc.gsfc.nasa.gov/planetary/factsheet/
 */
/**
 * CONSTANTS
 * Scale:
 * - 60s = 1 earth orbit = 365.2422 days
 * - 86,400,000 milliseconds = 1 day
 * - 
 * 
 */
 /**
  * ANGLE - SohCahToa
  * Cah : cos(a) = -0.1293387/0.3181737
  * 66.4 degrees from x=-1 y=0
  * 66.4 degrees / 360 degrees = x / 14.45106835957072 total seconds for 1 mercury animation orbit
  * x = 2.665419275209711  seconds into mercury animation orbit
  */
/* millseconds from 1/1/1970 converted to days */

/**
 *  *** Mercury ***
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
// var mercuryOP = 87.969;  // Number of Earth days to orbit sun
// var mercuryAngle = Math.atan(0.1982899/0.2503749) * (180 / Math.PI) + 180;
// var mercuryOPAnimation = 14.45106835957072 // # of seconds for mercury's animation to orbit
// var mercuryAnimationStart = mercuryAngle / 360 * mercuryOPAnimation //# of seconds into mercury's animation orbit on 1/1/1970; the starting position for mercury
// var mercuryDay = setDate % mercuryOP; // # of earth days mercury is into its 87.969 earth days to orbit sun - CHECK against actual day into orbit
// var mercuryAnimationDelay = (mercuryDay * mercuryOPAnimation / mercuryOP + mercuryAnimationStart) % mercuryOPAnimation; // # of seconds into mercury's orbit animation to be in today's actual mercury position + 3.2 seconds of position compensation

/**
 *  *** Venus ***
 * - x =  -0.0345935 on 1/1/1970
 * - y =  -0.7259848 on 1/1/1970
 * - ANGLE - SohCahToa
 * - Tan(a) = y/x : Tan(a) = -0.0345935/-0.7259848 : a = arcTan(0.1982899/0.2503749) = 87.27189404553835
 * - 224.701 earth days to orbit sun
 * - 224.701 days * 60 seconds / 365.2422 days = 36.91265686166604 seconds for 1 venus orbit
 * - 36.91265686166604 seconds * 161.8 degrees / 360 degrees = 6.494952390495951 seconds
 */
// var venusOP = 224.701;  // Number of Earth days to orbit sun
// var venusAngle = -Math.atan(-0.0345935/-0.7259848) * (180 / Math.PI) + 90;
// var venusOPAnimation = 36.91265686166604 // # of seconds for venus's animation to orbit
// var venusAnimationStart = venusAngle / 360 * venusOPAnimation //# of seconds into venus's animation orbit on 1/1/1970; the starting position for mercury
// var venusDay = setDate % venusOP; // # of earth days venus is into its 224.701 earth days to orbit sun - CHECK against actual day into orbit
// var venusAnimationDelay = (venusDay * venusOPAnimation / venusOP + venusAnimationStart) % venusOPAnimation; // # of seconds into mercury's orbit animation to be in today's actual mercury position + 3.2 seconds of position compensation

var angle = function(x, y){
    if (x > 0) {
        if (y > 0){
            if (x > y) {
                return Math.atan(y/x) * (180 / Math.PI) + 180
            } else {
                return  -Math.atan(x/y) * (180 / Math.PI) + 270
            }
        } else {
            if (x > Math.abs(y)){
                return  -Math.atan(y/x) * (180 / Math.PI) + 180
            } else {
                return  Math.atan(x/y) * (180 / Math.PI) + 90
            }
        }
    } else {
        if (y > 0) {
            if (Math.abs(x) > y) {
                return  -Math.atan(y/x) * (180 / Math.PI) + 360
            } else {
                return  Math.atan(x/y) * (180 / Math.PI) + 270
            }
        } else {
            if (x < y) {
                return  Math.atan(y/x) * (180 / Math.PI)
            } else {
                return  -Math.atan(x/y) * (180 / Math.PI) + 90
            }
        }
    }
}
/**
 * This function calculates the position the planets should load when the webpage is loaded based on the current date
 * @param {number} seconds_for_earth_to_orbit - How many seconds for the earth animation to orbit around sun once
 * @param {number} orbital_period - The number of earth days it takes the planet to orbit the summer
 * @param {number} x - Relative to the sun, where the planet was  on 1/1/1970
 * @param {number} y - Relative to the sun, where the planet was vertically on 1/1/1970
 */
var startPosition = function(seconds_for_earth_to_orbit, orbital_period, earth_orbit, x, y){
    let current_date = Date.now(); // in seconds
    var days_since_start = current_date / 86400000; // divide to get days since start in days
    var start_angle = angle(x, y);
    var total_animation = orbital_period * seconds_for_earth_to_orbit / earth_orbit;
    var start_animation = start_angle / 360 * total_animation;
    /**
     * planet_orbital_today: How many days into it's orbit it is relative to the starting position today
     */
    var planet_orbital_today = days_since_start % orbital_period;
    return -((planet_orbital_today * total_animation / orbital_period + start_animation) % total_animation);
}  

/**
 * How many seconds for the planet animation to orbit
 * @param {number} animation_time - How many seconds for earth animation to orbit around the sun
 * @param {number} planet_orbit - How many days it takes the planet to orbit the Earth
 * @return
 */
var orbit_in_seconds = function(animation_time, planet_orbit, earth_orbit){
    return planet_orbit * animation_time / earth_orbit
}
const earth_animation_time = 60; //Seconds for the earth to orbit once

const mercury_orbit = 87.969;
const venus_orbit = 224.701;
const earth_orbit = 365.2422;
const mars_orbit = 686.980;
const jupiter_orbit = 4332.589;
const saturn_orbit = 10759.22;
const uranus_orbit = 30685.4;
const neptune_start = 60189;

var mercury_start = startPosition(earth_animation_time, mercury_orbit, earth_orbit, 0.2503749, 0.1982899);
var venus_start = startPosition(earth_animation_time, venus_orbit, earth_orbit, -0.0345935, -0.7259848);
var earth_start = startPosition(earth_animation_time, earth_orbit, earth_orbit, -0.1792011, 0.9668216);
var mars_start = startPosition(earth_animation_time, mars_orbit, earth_orbit, 1.3283899, 0.4913167);
var jupiter_start = startPosition(earth_animation_time, jupiter_orbit, earth_orbit, -5.0073049, -2.1528642);
var saturn_start = startPosition(earth_animation_time, saturn_orbit, earth_orbit, 7.2883808, 5.6450379);
var uranus_start = startPosition(earth_animation_time, uranus_orbit, earth_orbit, -18.2095625, -1.9178999);
var neptune_start = startPosition(earth_animation_time, neptune_start, earth_orbit, -15.7424490, -25.8830229);

$(document).ready(function () {
    $("#mercury").css('animation-delay', mercury_start + "s");
    $("#venus").css('animation-delay', venus_start + "s");
    $("#earth").css('animation-delay', earth_start + "s");
    $("#mars").css('animation-delay', mars_start + "s");
    $("#jupiter").css('animation-delay', jupiter_start + "s");
    $("#saturn").css('animation-delay', saturn_start + "s");
    $("#uranus").css('animation-delay', uranus_start + "s");
    $("#neptune").css('animation-delay', neptune_start + "s");

    $("#mercury").css('animation-duration', orbit_in_seconds(earth_animation_time, mercury_orbit, earth_orbit) + "s");
    $("#venus").css('animation-duration', orbit_in_seconds(earth_animation_time, venus_orbit, earth_orbit) + "s");
    $("#earth").css('animation-duration', orbit_in_seconds(earth_animation_time, earth_orbit, earth_orbit) + "s");
    $("#mars").css('animation-duration', orbit_in_seconds(earth_animation_time, mars_orbit, earth_orbit) + "s");
    $("#jupiter").css('animation-duration', orbit_in_seconds(earth_animation_time, jupiter_orbit, earth_orbit) + "s");
    $("#saturn").css('animation-duration', orbit_in_seconds(earth_animation_time, saturn_orbit, earth_orbit) + "s");
    $("#uranus").css('animation-duration', orbit_in_seconds(earth_animation_time, uranus_orbit, earth_orbit) + "s");
    $("#neptune").css('animation-duration', orbit_in_seconds(earth_animation_time, neptune_orbit, earth_orbit) + "s");
});