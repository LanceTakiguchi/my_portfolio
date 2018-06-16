var domText = {
    testing: "Does this work?",
    navBar: {
        home: "home",
        about: "about",
        applications: "applications",
        skills: "skills",
        contact: "contact"
    }
};
$(document).ready(function(){
    var source   = $("#hBars").html();
    var template = Handlebars.compile(source);
    var html    = template(domText);

// Add the compiled html to the page
    $("body").append(html);
});