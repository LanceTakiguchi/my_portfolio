<!-- *********** 
Project Name: My Portfolio
File Name: index.php
Author: Lance Takiguchi
Created: 11/02/2016 Time: 16:23 
Objective: My online portfolio. Displays my web developement skils through projects I have completed
Version: v1.9
Version Objective: Create a box scheme for the skills section
Version Date: 01/10/2017 Time: 14:27
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
	<link rel="icon" href="assets/images/sun_icon.png">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Crimson+Text|Lora|Raleway" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/responsive.css">
	<link rel="stylesheet" type="text/css" href="css/background.css">
	<link rel="stylesheet" type="text/css" href="css/planets.css">
	<link rel="stylesheet" type="text/css" href="css/pulse.css">
	<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
	<script src="js/responsive.js"></script>
	<script src="js/email_ajax.js"></script>
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-88376823-1', 'auto');
	ga('send', 'pageview');
	</script>
	<title> Lance Takiguchi | Portfolio </title>
</head>
<body>
	<!-- The Background -->
	<div class="stars"></div>
	<div class="twinkling"></div>
	<div id="solar_system">
		<div id="sun" class="planetoid_body">  </div>
		<div id="mercury" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>	
		<div id="venus" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>
		<div id="earth" class="planetoid"> 
			<div class="planetoid_body">
				<div id="moon" class="planetoid">
					<div class="planetoid_body"></div>
				</div>
			</div>
		</div>
		<div id="mars" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>
		<div id="jupiter" class="planetoid"> 
			<div class="planetoid_body">
				<div id="io" class="planetoid">
					<div class="planetoid_body"></div>
				</div>
				<div id="europa" class="planetoid">
					<div class="planetoid_body"></div>
				</div>
				<div id="ganymede" class="planetoid">
					<div class="planetoid_body"></div>
				</div>
				<div id="callisto" class="planetoid">
					<div class="planetoid_body"></div>
				</div>
			</div>
		</div>
		<div id="saturn" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>
		<div id="uranus" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>
		<div id="neptune" class="planetoid"> 
			<div class="planetoid_body"></div>
		</div>
	</div>
	<nav class="navbar">
		<ul class="nav_list" id="top_nav">
			<li id="nav_home"> <a href="#"> Home </a> </li>
			<li> <a href="#applications"> Applications </a> </li>
			<li> <a href="#skills"> Skills </a> </li>
			<li> <a href="#contact"> Contact </a> </li>
			<li class="menu">
				<a href="javascript:void(0);" onclick="respon_js()">☰</a>
			</li>
		</ul>
	</nav>
	
	<div id="home" class="set_height margin_center navbar_avoid_padding">
		<div id="quote">
			<p id="astronomy">Astronomy compels the soul to look upward, and leads us from this world to another.</p>
			<p id="plato"> - <span class="italic">Plato</span>, The Republic, <span class="italic"> 343 BCE.</span></p>
		</div>
	</div>
	<div id="applications" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"><a href="#applications"> Applications </a> </h2>
		<div class="container">
			<div class="app_hover app_light">
				<div>
					<a class="see_link" href="#applications" target="_blank"> 
						<p> Student Grade Table </p>
						<figure><img src="assets/images/apps/sgt_app.png" /></figure>
					</a>
				</div>
			</div>
			<div class="app_hover">
				<div>
					<a class="see_link" href="apps/rogue_fighter" target="_blank"> 
						<p> Rogue Fighter </p>
						<figure><img src="assets/images/apps/rebel_app.png" /></figure>
					</a>
				</div>
			</div>
			<div class="app_hover app_light">
				<div>
					<a class="see_link" href="#applications" target="_blank"> 
						<p> Calculator </p>
						<figure><img src="assets/images/apps/calc_app.png" /></figure>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div id="skills" class="set_height margin_center navbar_avoid_padding">
		<h2 class="title"> <a href="#skills"> Skills </a> </h2>
		<div id="skill_box">
			<div id="Experience" class="third">
				<h4> Experience </h4>
				<ul>
					<li> LearningFuze: Web Development </li>
					<li> LearningFuze: Code Review </li>
					<li> UC Irvine: Informatics </li>
				</ul>
			</div>
			<div id="Web Development" class="third">
				<h4> Web Development </h4>
				<ul>
					<li> HTML </li>
					<li> CSS </li>
					<li> Javascript </li>
					<li> jQuery </li>
					<li> git </li>
					<li> AngularJS </li>
					<li> Firebase </li>
					<li> Bootstrap </li>
					<li> PHP </li>
				</ul>
			</div>
			<div id="Development Tools" class="third">
				<h4> Development Tools </h4>
				<ul>
					<li> phpStorm </li>
					<li> Sublime </li>
					<li> Visual Studio </li>
				</ul>
			</div>
		</div>	
	</div>
	<div id="contact" class="set_height margin_center navbar_avoid_padding">
		<div id="contact_bulletin">
			<div>
				<h4> </h4> 
			</div>
			<div>
				<h5>  </h5>
			</div>
		</div>
		<h2 class="title"> <a href="#contact"> Contacts </a> </h2>
		<div>
			<form name="contact_form">
				<table>
					<tr>
						<td><input id="form_name" class="width_restrict" type="text" name="name" maxlength="50" size="30" placeholder=" Name" required="required"></td>
					</tr>
					<tr>
						<td><input id="form_email" class="width_restrict" type="text" name="email" maxlength="80" size="30" placeholder=" Email" required="required"></td>
					</tr>
					<tr>
						<td><textarea id="form_message" class="width_restrict" name="message" maxlength="1000" placeholder=" Message" required="required"></textarea></td>
					</tr>
					<tr>
						<td><button id="form_submit" class="width_restrict" type="button">Submit</button></td>
					</tr>
					<tr>
						<td><p id="contact_links"> <a href="https://www.linkedin.com/in/lancetakiguchi" target="_blank"> <i id="linkedin" class="fa fa-linkedin-square" aria-hidden="true"></i></a> <a href="https://github.com/LanceTakiguchi" target="_blank"><i id="github" class="fa fa-github" aria-hidden="true"></i></a></p> </td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>	
</html>
