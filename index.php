<!-- *********** 
Project Name: My Portfolio
File Name: index.php
Author: Lance Takiguchi
Created: 11/02/2016 Time: 16:23 
Objective: My online portfolio. Displays my web developement skils through projects I have completed
Version: v2.1
Version Objective: Implement changes suggested by LFZ. Required to be approved for job hunting.
Version Date: 02/24/2017 Time: 17:59
*********** -->
<!-- To my inspecting introter. Hello! If you have any critisims about my code here please email me at lancetakiguchi@gmail.com. I would love to know where I could improve! -->
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#">
<head>
	<title text_shadow> Lance Takiguchi | Portfolio </title text_shadow>
	<meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="keywords" content="PHP, CSS, HTML, JS, Javascript, firebase, bootstrap, angular.js, home, Lance Takiguchi, portfolio, resume, projects, index, website, homepage, landing page, web development, learning fuze, application, apps, website, webpage, code, coding, LearningFuze, bootcamp">
	<meta name="author" content="Lance Takiguchi">
	<meta name="description" content="Lance Takiguchi's Portfolio Website">
	<meta name="date" content="02/18/17, February 18, 2017">
	<meta property="og:title" content="Lance Takiguchi | Portfolio"/>
	<meta property="og:type" content="website"/>
	<meta property="og:image" content="assets/images/profile_pic.jpg" />
	<link rel="icon" href="assets/images/sun_icon.png">
	<link rel="image_src" href="assets/images/profile_pic.jpg"/>
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
	</head>
	<body>
		<!-- The Background -->
		<div class="stars"></div>
		<div class="twinkling"></div>
		<div id="solar_system">
			<div id="sun" class="planetoid_body"></div>
			<div id="mercury" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>	
			<div id="venus" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>
			<div id="earth" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body">
					<div id="moon" class="planetoid planetoid_satellite">
						<div class="planetoid_body"></div>
					</div>
				</div>
			</div>
			<div id="mars" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>
			<div id="jupiter" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body">
					<div id="io" class="planetoid planetoid_satellite">
						<div class="planetoid_body"></div>
					</div>
					<div id="europa" class="planetoid planetoid_satellite">
						<div class="planetoid_body"></div>
					</div>
					<div id="ganymede" class="planetoid planetoid_satellite">
						<div class="planetoid_body"></div>
					</div>
					<div id="callisto" class="planetoid planetoid_satellite">
						<div class="planetoid_body"></div>
					</div>
				</div>
			</div>
			<div id="saturn" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>
			<div id="uranus" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>
			<div id="neptune" class="planetoid planetoid_satellite"> 
				<div class="planetoid_body"></div>
			</div>
		</div>
		<!-- Main Page -->
		<nav class="navbar">
			<ul class="nav_list" id="top_nav">
				<li id="nav_home"> <a href="#" id="n_home" onclick="respon_js()"> Home </a> </li>
				<li> <a href="#about" id="n_about" onclick="respon_js()"> About </a> </li>
				<li> <a href="#applications" id="n_applications" onclick="respon_js()"> Applications </a> </li>
				<li> <a href="#skills" id="n_skills" onclick="respon_js()"> Skills </a> </li>
				<li> <a href="#contact" id="n_contact" onclick="respon_js()"> Contact </a> </li>
				<li class="menu">
					<a href="javascript:void(0);" onclick="respon_js()">☰</a>
				</li>
			</ul>
		</nav>
		<div id="home" class="set_height margin_center navbar_avoid_padding">
			<div id="quote" class="text_shadow">
				<p id="astronomy"> Astronomy compels the soul to look upward, and leads us from this world to another. </p>
				<p id="plato"> - <span class="italic">Plato</span>, The Republic, <span class="italic"> 343 BCE. </span></p>
			</div>
		</div>
		<div id="about" class="set_height margin_center navbar_avoid_padding">
			<h2 class="title text_shadow"> <a href="#about"> Lance Takiguchi </a> </h2>
			<img id="NERD" class="warp" src="assets/images/profile_pic.jpg" alt="Just imagine a really handsome web developer"/>
			<div class="text_shadow_light">
				<br>
				<p class="indent">
					Hello! The name is Lance, and welcome to my portfolio. I am a web developer in Irvine, Calfornia who loves tackling the puzzles hidden in the logic of code. 
				</p> <br>
				<p class="indent">
					I am always looking for jobs to feed my restless thoughts. I enjoy implementing designs that capture a users attention. The behind the scenes action is where I like to daze the stargazers.  
				</p> <br>
				<p class="indent">
					I am currently avaliable for web developement work around Orange County area, as well as remote or freelance work.
				</p> 
			</div>
		</div>
		<div id="applications" class="set_height margin_center navbar_avoid_padding">
			<h2 class="title text_shadow"> <a href="#applications"> Applications </a> </h2>
			<div class="container">
				<div class="app_hover">
					<div>
						<div class="app_text">
							<h3> <a class="see_link text_shadow_light" href="apps/sgt_app/" target="_blank"> Student Grade Table </a> </h3>
							<p class="text_shadow_light"> <a class="see_link" href="apps/sgt_app/" target="_blank"> &nbsp; &nbsp; Live </a> | <a class="see_link" href="https://github.com/LanceTakiguchi/portfolio_SGT" target="_blank"> Github </a> </p>	
						</div>
						<figure><img src="assets/images/apps/sgt_app.png" alt="SGT"/></figure>
					</div>
				</div>
				<div class="app_hover dark_pulse">
					<div>
						<div class="app_text">
							<h3> <a class="see_link text_shadow_light" href="apps/rogue_fighter/" target="_blank"> Rogue Fighter </a> </h3>
							<p class="text_shadow_light"> <a class="see_link" href="apps/rogue_fighter/" target="_blank"> &nbsp; &nbsp; Live </a> | <a class="see_link" href="https://github.com/LanceTakiguchi/portfolio_Rogue_Fighter" target="_blank"> Github </a> </p>	
						</div>
						<figure><img src="assets/images/apps/rebel_app.png" alt="Rebels"/></figure>
					</div>
				</div>
				<div class="app_hover">
					<div>
						<div class="app_text">
							<h3> <a class="see_link text_shadow_light" href="apps/calculator/" target="_blank"> Calculator </a> </h3>
							<p class="text_shadow_light"> <a class="see_link" href="apps/calculator/" target="_blank"> &nbsp; &nbsp; Live </a> | <a class="see_link" href="https://github.com/LanceTakiguchi/portfolio_calculator" target="_blank"> Github </a> </p>	
						</div>
						<figure><img src="assets/images/apps/calc_app.png" alt="Calculator"/></figure>
					</div>
				</div>
			</div>
		</div>
		<div id="skills" class="set_height margin_center navbar_avoid_padding">
			<h2 class="title text_shadow"> <a href="#skills"> Skills </a> </h2>
			<div id="skill_box">
				<div id="Experience" class="third">
					<h4> Experience </h4>
					<ul>
						<li> LearningFuze: Web Development </li>
						<li> LearningFuze: Code Reviewer </li>
						<li> UC Irvine: Informatics </li>
					</ul>
				</div>
				<div id="Web Development" class="third">
					<h4> Web Development </h4>
					<ul>
						<li> HTML </li>
						<li> CSS </li>
						<li> JavaScript </li>
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
			<h2 class="title text_shadow"> <a href="#contact"> Contacts </a> </h2>
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
							<td><p id="contact_links">
								<a href="https://www.linkedin.com/in/lancetakiguchi" target="_blank"> <i id="linkedin" class="fa fa-linkedin-square" aria-hidden="true"></i></a>
								<a href="https://github.com/LanceTakiguchi" target="_blank"><i id="github" class="fa fa-github" aria-hidden="true"></i></a>
								<a href="assets/docs/LanceTakiguchiResume.pdf" target="_blank"><i id="resume" class="fa fa-file-pdf-o" aria-hidden="true"></i></a>
							</p></td>
						</tr>
					</table>
				</form>
			</div>
		</div>
	</body>	
	</html>
