// $(function () {
//     console.log("references.js loaded");
//     // Grab the template script
//     var theTemplateScript = $("#hb_apps").html();
//     // Compile the template
//     var theTemplate = Handlebars.compile(theTemplateScript);
  
//     // This is the default context, which is passed to the template
//     var app_links = {
//         "sgt": "https://lancetakiguchi.github.io/sgt/",
//         "calc": "https://lancetakiguchi.github.io/calc/",
//         "roguefighter": "https://lancetakiguchi.github.io/roguefighter/"
//     };
//     // Pass our data to the template
//     var theCompiledHtml = theTemplate(app_links);
  
//     // Add the compiled html to the page
//     $(document.body).append(theCompiledHtml);
//   });

// var source   = document.getElementById("hb_apps").innerHTML;
// var template = Handlebars.compile(source);
// var context = {title: "My New Post", body: "This is my first post!"};
// var html    = template(context);
$(document).ready(function(){
    var source = $("#some-template").html();
    var template = Handlebars.compile(source); 
    var data = { 
        users: [ { 
            person: {
                firstName: "Garry", 
                lastName: "Finch"
            },
            jobTitle: "Front End Technical Lead",
            twitter: "gazraa" 
        }, {
            person: {
                firstName: "Garry", 
                lastName: "Finch"
            }, 
            jobTitle: "Photographer",
            twitter: "photobasics"
        }, {
            person: {
                firstName: "Garry", 
                lastName: "Finch"
            }, 
            jobTitle: "LEGO Geek",
            twitter: "minifigures"
        } ]
    }; 

    Handlebars.registerHelper('fullName', function(person) {
    return person.firstName + " " + person.lastName;
    });

    $('body').append(template(data));
    console.log("Do you hear me?");
});