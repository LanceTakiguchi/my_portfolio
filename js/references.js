$(document).ready(function(){
    var source   = $("#hBars").html();
    var template = Handlebars.compile(source);
    var html    = template(domText);

// Add the compiled html to the page
    $("body").append(html);
});