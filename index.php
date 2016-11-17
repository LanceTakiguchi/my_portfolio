<!-- *********** 
Project Name: My Portfolio
File Name: index.php
Author: Lance Takiguchi
Created: 11/02/2016 Time: 16:23 
Objective: My online portfolio. Displays my web developement skils through projects I have completed
Version: 0.7
Version Objective: Set up the basic background effects
Version Date: 11/09/2016 Time: 14:17
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
	<title> Lance Takiguchi | Portfolio</title>
</head>
<body>
	<div class="stars"></div>
	<div class="twinkling"></div>
	<nav class="navbar">
		<ul>
			<li> <a href="#"> About </a> </li>
			<li> <a href="#applications"> Applications </a> </li>
			<li> <a href="#skills"> Skills </a> </li>
			<li> <a href="#contact"> Contact </a> </li>
		</ul>
	</nav>
	
	<div id="about" class="set_height margin_center navbar_avoid_padding">
		<div id="quote">
			<p>Astronomy compels the soul to look upward, and leads us from this world to another.</p>
			<p> - <span class="italic">Plato</span>, The Republic, <span class="italic"> 343 BCE.</span></p>
		</div>
	</div>
	<div id="applications" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> Applications </h2>
		<p> Nullam semper laoreet viverra. Morbi sed cursus libero. Sed eu facilisis arcu. Nullam euismod luctus orci nec ullamcorper. Fusce et nunc laoreet, elementum justo id, feugiat ligula. Donec porttitor diam vel eros consectetur, sed lacinia lorem euismod. Integer sit amet pellentesque nibh. Mauris lacinia, tortor ut malesuada faucibus, arcu libero sagittis nunc, ut suscipit urna augue sit amet odio. Curabitur rutrum quam a condimentum lacinia. Curabitur dignissim felis a ullamcorper dictum. Nulla non placerat quam. Quisque mauris mauris, malesuada rhoncus lorem nec, mattis auctor tellus. Sed vel purus odio. </p>
	</div>
	<div id="skills" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> Skills </h2>
		<div class="code">
			<p> var <span class="code_name">education</span> = { </p><br>
			<p class="indent_1"> <span class="code_name">learning_fuze: "<span class="code_value">Web Development</span>",</span></p><br>
			<p class="indent_1"> <span class="code_name">uc_irvine: "<span class="code_value">Informatics</span>"</span></p><br>
			<p> }; </p> <br>
			<p> var <span class="code_name">work_experince</span> = { </p><br>
			<p class="indent_1"> <span class="code_name">learning_fuze: "<span class="code_value">Code Review</span>"</span>,</p><br>
			<p> }; </p> <br>
			<p> var <span class="code_name">skills</span> = [ </p><br>
			<p class="indent_1"> <span class="code_name">"<span class="code_value">HTML</span>",
				"<span class="code_value">CSS</span>",
				"<span class="code_value">Javascript</span>", 
				"<span class="code_value">jQuery</span>", 
				"<span class="code_value">git</span>"
				"<span class="code_value">AngularJS</span>", 
				"<span class="code_value">Firebase</span>"
				"<span class="code_value">Bootstrap</span>"
				"<span class="code_value">PHP</span>"
			</span> </p><br>
			<p> ]; </p> 
		</div>	
	</div>
	<div id="contact" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> Contacts </h2>
		<p> Email: LanceTakiguchi@gmail.com </p>
		<p> Phone: (909) 815-1863 </p>
		<p> LinkedIn:  <a>linkedin.com/in/lancetakiguchi</a></p>
		<p> Github:  <a>github.com/LanceTakiguchi</a></p>
	</div>
</body>	
</html>