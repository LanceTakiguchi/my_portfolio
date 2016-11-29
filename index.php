<!-- *********** 
Project Name: My Portfolio
File Name: index.php
Author: Lance Takiguchi
Created: 11/02/2016 Time: 16:23 
Objective: My online portfolio. Displays my web developement skils through projects I have completed
Version: 1.0
Version Objective: Complete minimun viable website
Version Date: 11/28/2016 Time: 18:55
*********** -->
<!-- To my inspecting introter. Hello! If you have any critisims about my code here please email me at lancetakiguchi@gmail.com. I would love to know where I could improve! -->
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="keywords" content="PHP, CSS, HTML, JS, Javascript, firebase, bootstrap, angular.js, home, Lance Takiguchi, portfolio, resume, projects, index, website, homepage, landing page, web development, learning fuze, application, apps, website, webpage">
	<meta name="author" content="Lance Takiguchi">
	<meta name="description" content="Lance Takiguchi's Portfolio Website">
	<meta name="date" content="11/02/16, November 02, 2016">
	<link rel="icon" href="assets/images/cirlce_check.png">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Poiret+One|Raleway" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/background.css">
	<link rel="stylesheet" type="text/css" href="css/planets.css">
	<link rel="stylesheet" type="text/css" href="css/pulse.css">
	<title> Lance Takiguchi | Portfolio </title>
</head>
<body>
	<!-- The Background -->
	<div class="stars"></div>
	<div class="twinkling"></div>
	<div id="solar_system">
		<div id="sun" class="plantoid_body">  </div>
		<div id="mercury" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>	
		<div id="venus" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="earth" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="mars" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="jupiter" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="saturn" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="uranus" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
		<div id="neptune" class="plantoid"> 
			<div class="plantoid_body"></div>
		</div>
	</div>
	<nav class="navbar">
		<ul>
			<li> <a href="#"> Home </a> </li>
			<li> <a href="#applications"> Applications </a> </li>
			<li> <a href="#skills"> Skills </a> </li>
			<li> <a href="#contact"> Contact </a> </li>
		</ul>
	</nav>
	
	<div id="home" class="set_height margin_center navbar_avoid_padding">
		<div id="quote" class="faded_background">
			<p>Astronomy compels the soul to look upward, and leads us from this world to another.</p>
			<p> - <span class="italic">Plato</span>, The Republic, <span class="italic"> 343 BCE.</span></p>
		</div>
	</div>
	<div id="applications" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"><a href="#applications"> Applications </a> </h2>
		<div class="container">
			<div class="app_hover app_light">
				<div>
					<a class="see_link" href="#applications"> 
						<p> Student Grade Table </p>
						<figure><img src="assets/images/apps/sgt_app.png" /></figure>
					</a>
				</div>
			</div>
			<div class="app_hover">
				<div>
					<a href="https://collette-tamez.com/c10_game/"> 
						<p> Rogue Fighter </p>
						<figure><img src="assets/images/apps/rebel_app.png" /></figure>
					</a>
				</div>
			</div>
			<div class="app_hover app_light">
				<div>
					<a class="see_link" href="#applications"> 
						<p> Student Grade Table </p>
						<figure><img src="assets/images/apps/calc_app.png" /></figure>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div id="skills" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> <a href="#skills"> Skills </a> </h2>
		<div class="code faded_background">
			<p> var <span class="code_name">education</span> = { </p>
			<p class="indent_1"> <span class="code_name">learning_fuze: "<span class="code_value">Web Development</span>",</span></p>
			<p class="indent_1"> <span class="code_name">uc_irvine: "<span class="code_value">Informatics</span>"</span></p>
			<p> }; </p>
			<br>
			<p> var <span class="code_name">work_experince</span> = { </p>
			<p class="indent_1"> <span class="code_name">learning_fuze: "<span class="code_value">Code Review</span>"</span>,</p>
			<p> }; </p>
			<br>
			<p> var <span class="code_name">skills</span> = [ </p>
			<p class="indent_1"> <span class="code_name">"<span class="code_value">HTML</span>",
				"<span class="code_value">CSS</span>",
				"<span class="code_value">Javascript</span>", 
				"<span class="code_value">jQuery</span>", 
				"<span class="code_value">git</span>"
				"<span class="code_value">AngularJS</span>", 
				"<span class="code_value">Firebase</span>"
				"<span class="code_value">Bootstrap</span>"
				"<span class="code_value">PHP</span>"
			</span> </p>
			<p> ]; </p> 
		</div>	
	</div>
	<div id="contact" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> <a href="#contact"> Contacts </a> </h2>
		<div class="faded_background">
			<p class="not_link"> <a> <i class="fa fa-envelope" aria-hidden="true"></i> LanceTakiguchi@gmail.com </a> </p>
			<p> <a href="https://www.linkedin.com/in/lancetakiguchi"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> Linkedin</a></p>
			<p> <a href="https://github.com/LanceTakiguchi"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a></p>
		</div>
	</div>
</body>	
</html>