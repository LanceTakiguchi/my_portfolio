<!-- *********** 
Project Name: My Portfolio
File Name: index.php
Author: Lance Takiguchi
Created: 11/02/2016 Time: 16:23 
Objective: My online portfolio. Displays my web developement skils through projects I have completed
Version: 0.9
Version Objective: Polish Sections to minimum viable product
Version Date: 11/17/2016 Time: 16:38
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
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Poiret+One" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/background.css">
	<link rel="stylesheet" type="text/css" href="css/planets.css">
	<title> Lance Takiguchi | Portfolio</title>
</head>
<body>
	<div class="stars"></div>
	<div class="twinkling"></div>
	<nav class="navbar">
		<ul>
			<li> <a href="#"> Home </a> </li>
			<li> <a href="#applications"> Applications </a> </li>
			<li> <a href="#skills"> Skills </a> </li>
			<li> <a href="#contact"> Contact </a> </li>
		</ul>
	</nav>
	
	<div id="home" class="set_height margin_center navbar_avoid_padding">
		<div id="quote">
			<p>Astronomy compels the soul to look upward, and leads us from this world to another.</p>
			<p> - <span class="italic">Plato</span>, The Republic, <span class="italic"> 343 BCE.</span></p>
		</div>
	</div>
	<div id="applications" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"><a href="#applications"> Applications </a> </h2>
		<div id="solar_system">
			<div id="sun" class="circle">  </div>
			<div id="saturn" class="circle">  </div>
		</div>
	</div>
	<div id="skills" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> <a href="#skills"> Skills </a> </h2>
		<div class="code">
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
		<p> Email: LanceTakiguchi@gmail.com </p>
		<p> Phone: (909) 815-1863 </p>
		<p> LinkedIn:  <a href="https://www.linkedin.com/in/lancetakiguchi">linkedin.com/in/lancetakiguchi</a></p>
		<p> Github:  <a href="https://github.com/LanceTakiguchi">Github.com/LanceTakiguchi</a></p>
	</div>
</body>	
</html>