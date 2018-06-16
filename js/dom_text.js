var domText = {
    navBar: {
        home: "home",
        about: "about",
        applications: "applications",
        skills: "skills",
        contact: "contact"
    },
    me: {
        name: "Lance Takiguchi",
        about: {
            p1: "Hello! The name is Lance, and welcome to my portfolio. I am a web developer in Irvine, California who loves tackling the puzzles hidden in code.",
            p2: "I am always looking for jobs to feed my restless thoughts. I enjoy implementing designs that capture a user's attention, the behind the scenes action is where I like to fascinate the star-gazer.",
            p3: "I am currently avaliable for web development work around Orange County area, as well as remote or freelance work."
        }
    },
    apps: {
        sgt: {
            name: "Student Grade Table",
            ref: "sgt",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_SGT",
            liveLink: ""
        },
        swrf: {
            name: "Rogue Fighter",
            ref: "swrf",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_Rogue_Fighter",
            liveLink: ""
        },
        calc: {
            name: "Calculator",
            ref: "calc",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_SGT",
            liveLink: ""
        },
        ttwars: {
            name: "Tic Tac Wars",
            ref: "ttwars",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_SGT",
            liveLink: ""
        },
        nfl: {
            name: "NFL Now",
            ref: "nfl",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_SGT",
            liveLink: ""
        },
        ship: {
            name: "Shipping Calculator",
            ref: "ship",
            githubLink: "https://github.com/LanceTakiguchi/portfolio_SGT",
            liveLink: ""
        }
    },
    skills: {
        experince: {
            name: "Experience",
            ref: "experience",
            list: [
                "LearningFuze: Web Development",
                "LearningFuze: Code Reviewer",
                "UC Irvine: Informatics"
            ]
        },
        languages: {
            name: "Programming Languages",
            ref: "languages",
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
                "Handlebars",
                "AngularJS",
                "Firebase",
                "Bootstrap",
                "PHP",
                "Python"
            ]
        },
        tools: {
            name: "Development Tool",
            ref: "languages",
            list: [
                "phpStorm",
                "Visual Studio",
                "Sublime",
                "Git",
                "Github",
                "Chrome DevTools",
                "MAMP",
                "Jira",
                "MeisterTask",
                "Slack",
                "Postman"                
            ]
        }
    },
    contact: {
        form: {
            name: "Name",
            email: "Email",
            message: "Message"
        },
        submit: "Submit"
    }
};
$(document).ready(function () {
    var source = $("#hBars").html();
    var template = Handlebars.compile(source);
    var html = template(domText);

    // Add the compiled html to the page
    $("body").append(html);
});