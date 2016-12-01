function respon_js() {
    var x = document.getElementById("top_nav");
    if (x.className === "nav_list") {
        x.className += " responsive";
    } else {
        x.className = "nav_list";
    }
}