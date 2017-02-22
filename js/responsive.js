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