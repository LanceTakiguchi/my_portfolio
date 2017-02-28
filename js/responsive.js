/**
 * Gives drop down functionality to hamburger menu on small screens.
 */
 function respon_js() {
 	var x = document.getElementById("top_nav");
    // Add or remove responsive and nav_list class
    if (x.className === "nav_list") {
    	x.className += " responsive";
    } else {
    	x.className = "nav_list";
    }
}
/**
 * [respon_js_home Special function for home button, so that it does not open menu on clicking the non-responsive version]
 */
 function respon_js_home() {
 	var x = document.getElementById("top_nav");
    // Add or remove responsive and nav_list class
    if (x.className === "nav_list responsive") {
    	x.className = "nav_list";
    }
}
$(document).ready(function() {
	$("body").click(function(event) {
		if(event.target.id !== "hamburger"){
			respon_js_home();
		}
	});
});