<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	
		<title>Sway says "Hi!"</title>
	<!-- favicon -->
	<link rel="shortcut icon" href="favicon.png">

	<!-- update fonts -->
	<!-- Google Font -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">

	<!-- probably delete -->
		<!-- FontAwesome -->
		<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> -->

		<!-- link to css reset -->
		<!-- <link rel="stylesheet" type="text/css" href="css/reset.css"> -->

		<!-- link to animate css file -->
		<!-- <link rel="stylesheet" type="text/css" href="css/animate.css"> -->

		<!-- Bootstrap -->
		<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
	
	<!-- Bulma -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">

	<!-- custom CSS -->
	<link rel="stylesheet" href="css/main.css">

</head>

<body>	
<!-- WELCOME SECTION	 -->
	<section id="welcome" class="hero is-fullheight has-text-centered">
		<div class="hero-head">
			<!-- <header class="navbar"> -->
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="container">
					<div class="navbar-brand">	
			<!-- brand here -->
						<a class="navbar-item" href="#welcome">
							<!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
							 <span class="has-text-primary has-text-weight-bold">JOSUE RIVERA</span> 
						</a>
						<!-- <a class="navbar-item" href="">
							<i class="fab fa-grav"></i>
						</a> -->
			<!-- hambuger button -->
						<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
						<!-- <span class="navbar-burger burger" data-target="navbarMenuHeroC">
							<span></span>
							<span></span>
							<span></span>
						</span> -->
					</div>
			<!-- navbar items -->
					<!-- <div id="navbarMenuHeroC" class="navbar-menu">
						<div class="navbar-end">
							<a class="navbar-item is-active">
							Home
							</a>
							<a class="navbar-item">
							Examples
							</a>
							<a class="navbar-item">
							Documentation
							</a>
							<span class="navbar-item">
								<a class="button is-success is-inverted">
									<span class="icon">
										<i class="fab fa-github"></i>
									</span>
									<span>Download</span>
								</a>
							</span>
						</div>
					</div> -->

					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-end">
							<a class="navbar-item" href="#about-me">About Me</a>

							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">
								My Projects
								</a>
						
								<div class="navbar-dropdown">
									<a class="navbar-item" href="#projects">
										Gallery
									</a>
									<hr class="navbar-divider">
									<a class="navbar-item">
									Digital Drumkt
									</a>
									<a class="navbar-item">
									Faithful Quiz
									</a>
									<a class="navbar-item">
									Pusheen Zodiac
									</a>
								</div>
							</div>

							<a class="navbar-item" href="#footer">Contact Info</a>
	
							<span class="navbar-item">
								<a class="button is-primary is-inverted">
									<span class="icon">
										<i class="fas fa-arrow-circle-down"></i>
									</span>
									<span>My Resume</span>
								</a>
							</span>

					<!-- <div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons">
								<a class="button is-primary">
									<strong>Share</strong>
								</a>
								<a class="button is-light">
								Log in
								</a>
							</div>
						</div>
					</div> -->
					</div>
				</div>
			</nav>
		</div>

		<div id="welcome-hero" class="hero-body">
			<div id="welcome-hero-container" class="container">
				<h1 class="title is-size-1 has-text-white">
				Hi, my name is Josue.
				</h1>
				<h2 class="subtitle is-size-3 has-text-white">
				Web Deverloper from the San Francisco Bay Area.<i class="fas fa-angle-down welcome-down"></i>
				</h2>
			</div>
		</div>
	</section>
<!-- NAVBAR	 -->
	<!-- old nav -->
		<!-- <nav class="navbar is-dark has-text-white is-fixed" role="navigation" aria-label="main navigation">
			<div class="navbar-brand"> 
			<a class="navbar-item" href="#">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
				<i class="fab fa-grav"></i> JOSUE RIVERA
			</a>
			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
			</div>
			<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-end">
				<a class="navbar-item">
				Home
				</a>
		
				<a class="navbar-item">
				About
				</a>
		
				<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Projects
				</a>
		
				<div class="navbar-dropdown">
					<a class="navbar-item">
					Digital Drumkt
					</a>
					<a class="navbar-item">
					Faithful Quiz
					</a>
					<a class="navbar-item">
					Pusheen Zodiac
					</a>
					<hr class="navbar-divider">
					<a class="navbar-item">
					Report an issue
					</a>
				</div>
				</div>
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
						<a class="button is-primary">
							<strong>Share</strong>
						</a>
						<a class="button is-light">
							Log in
						</a>
						</div>
					</div>
					</div>
			</div>
			</div>
		</nav> -->

	<div class="">
		<!-- <header class="navbar"> -->
		<nav class="navbar is-dark has-text-white is-fixed" role="navigation" aria-label="main navigation">
		<!-- <nav class="navbar" role="navigation" aria-label="main navigation"> -->
			<div class="container">
				<div class="navbar-brand">	
			<!-- brand here -->
					<a class="navbar-item" href="#welcome">
					<!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
						<span class="has-text-white has-text-weight-bold">JOSUE RIVERA</span> 
					</a>
					<!-- <a class="navbar-item" href="">
						<i class="fab fa-grav"></i>
					</a> -->
					<!-- hambuger button -->
					<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
					<!-- <span class="navbar-burger burger" data-target="navbarMenuHeroC">
						<span></span>
						<span></span>
						<span></span>
					</span> -->
				</div>
			<!-- navbar items -->
				<!-- <div id="navbarMenuHeroC" class="navbar-menu">
					<div class="navbar-end">
						<a class="navbar-item is-active">
						Home
						</a>
						<a class="navbar-item">
						Examples
						</a>
						<a class="navbar-item">
						Documentation
						</a>
						<span class="navbar-item">
							<a class="button is-success is-inverted">
								<span class="icon">
									<i class="fab fa-github"></i>
								</span>
								<span>Download</span>
							</a>
						</span>
					</div>
				</div> -->

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-end">
						<a class="navbar-item" href="#about-me">About Me</a>

						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">
							My Projects
							</a>
					
							<div class="navbar-dropdown">
								<a class="navbar-item" href="#projects">
									Gallery
								</a>
								<hr class="navbar-divider">
								<a class="navbar-item">
								Digital Drumkt
								</a>
								<a class="navbar-item">
								Faithful Quiz
								</a>
								<a class="navbar-item">
								Pusheen Zodiac
								</a>
							</div>
						</div>

						<a class="navbar-item" href="#footer">Contact Info</a>

						<span class="navbar-item">
							<a class="button is-primary">
								<span class="icon">
									<i class="fas fa-arrow-circle-down"></i>
								</span>
								<span>My Resume</span>
							</a>
						</span>

						<!-- <div class="navbar-end">
							<div class="navbar-item">
								<div class="buttons">
									<a class="button is-primary">
										<strong>Share</strong>
									</a>
									<a class="button is-light">
									Log in
									</a>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</nav>
	</div>


























<!-- ABOUT ME SECTION -->
	<section id="about-me" class="section has-background-primary has-text-centered">
		<div class="hero is-fullheight has-background-link">
			<figure class="image">
				<img id="headshot" class="is-rounded" src="img/headshotsm.jpg">
			</figure>
			<div class="container has-background-white-ter">
				<h3 class="title">	Josue Rivera  </h3>
				<p class="subtitle">
					Front-End Developer | Creative Professional
				</p>
				<div>
					<!-- <a class="button is-primary">
						Button
					  </a> -->
					  <!-- <a class="button is-link">
						Button
					  </a> -->
					  <!-- <a class="button is-info">
						Button
					  </a> -->
					  <!-- <a class="button is-success">
						Button
					  </a> -->
					  <!-- <a class="button is-warning">
						Button
					  </a> -->
					  <!-- <a class="button is-danger">
						Button
					  </a> -->
					  <a class="button is-danger">
						About Me
					  </a>
					  <a class="button is-danger">
						Hard Skills
					  </a>
					  <a class="button is-danger">
						Soft Skills
					  </a>
				</div>
				<div class="container has-background-warning">
					<p>select a window to expand</p>
				</div>
			</div>
		</div>
	</section>
<!-- ABOUT ME -->
<!-- SKILLS -->
<!-- EXPERIENCE -->
<!-- PROJECTS SECTION-->
	<section id="projects" class="section has-background-success">
		<div class="container has-background-info">
			<h1 class="title">Projects</h1>
		</div>
		<div class="hero is-fullheight has-background-danger">
			<div class="container has-background-warning">
				<p>hello world</p>
			</div>
			<div>
				<a class="button is-primary">
					Button
				  </a>
				  <a class="button is-link">
					Button
				  </a>
				  <a class="button is-info">
					Button
				  </a>
				  <a class="button is-success">
					Button
				  </a>
				  <a class="button is-warning">
					Button
				  </a>
				  <a class="button is-danger">
					Button
				  </a>
			</div>
			<div>
				<a class="button has-background-black-bis has-text-white">
					Button
				  </a>
				  <a class="button has-background-black-ter has-text-white">
					Button
				  </a>
				  <a class="button has-background-grey-darker has-text-white">
					Button
				  </a>
				  <a class="button has-background-grey-dark has-text-white">
					Button
				  </a>
				  <a class="button has-background-grey-light">
					Button
				  </a>
				  <a class="button has-background-grey-lighter">
					Button
				  </a>
				  <a class="button has-background-white-ter">
					Button
				  </a>
				  <a class="button has-background-white-bis">
					Button
				  </a>
			</div>
		</div>
	</section>
<!-- FOOTER SECTION-->
	<section id="footer" class="section has-background-grey-dark">
		<div class="hero is-large has-background-primary">
			<h2 class="title">Hello WOrld</h2>
			<p class="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum, et suscipit sit in possimus ducimus nobis tenetur quia voluptatum natus dolores distinctio. Nostrum, ipsa?</p>
		</div>
		<footer class="footer columns has-background-grey-light is-paddingless">
			<div class="column">
				<figure class="image is-128x128">
					<img id="footer-logo" class="" src="img/headshot.JPG">
				</figure>
	
				<h5>contact me:
					<strong>myeamil@email.com</strong>
				</h5>
				<h6>&copy;2020 
					<strong>josuerivera.com</strong>
				</h6>
			</div>
	
			<div class="column has-text-primary is-pulled-right">
				<div class="socials is-pulled-right">
					<i class="icon is-large fas fa-3x fab fa-github"></i>
					<i class="icon is-large fas fa-3x fab fa-linkedin"></i>
					<i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
					<i class="icon is-large fas fa-3x fab fa-instagram"></i>
				</div>
			</div>
	
			<div class="sponsors column">
				<a href="https://bulma.io" class="is-pulled-right">
					<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
				</a>
			</div> 
			<!-- <div class="column is-full has-background-warning">
				<p>select a window to expand</p>
			</div>	-->	
		</footer>
		<div class="has-background-black is-paddingless">
			<div class="content">
				<i class="fab fa-html5"></i>
				<i class="fab fa-css3-alt"></i>
	
				<i class="fab fa-js-square"></i>
				<i class="fab fa-js"></i>
				<i class="fab fa-node"></i>
				<i class="fab fa-node-js"></i>
				<i class="fab fa-jsfiddle"></i>
				
				<i class="fas fa-terminal"></i>
				<i class="fab fa-slack-hash"></i>
				<i class="fas fa-code"></i>
				<i class="fas fa-chevron-left"></i>
				<i class="fas fa-chevron-right"></i>
				<i class="fas fa-angle-left"></i>
				<i class="fas fa-angle-right"></i>
				<i class="fas fa-slash"></i>
				<!-- https://fontawesome.com/icons/slash?style=solid -->
				<i class="fas fa-mobile"></i>
	
				<i class="fab fa-facebook-square"></i>
				<i class="fab fa-instagram"></i>
				<i class="fab fa-github"></i>
				<i class="fab fa-linkedin"></i>
	
				<i class="fas fa-hat-wizard"></i>
				<i class="fab fa-grav"></i>
				<i class="fas fa-pizza-slice"></i>
				<i class="fas fa-cat"></i>
				<i class="fas fa-bug"></i>
				<i class="fas fa-hands-helping"></i>
				<i class="fas fa-star-of-life"></i>
				<i class="fab fa-diaspora"></i>
				<i class="fas fa-asterisk"></i>
				<i class="fas fa-comments-dollar"></i>
				<i class="fas fa-paint-roller"></i>
				<i class="fas fa-palette"></i>
				<i class="fas fa-paint-brush"></i>
				<i class="fas fa-fill-drip"></i>
				<i class="fas fa-crop"></i>
			</div>
		</div>
	</section>

<!-- TEST FOOTER -->
	<footer class="footer columns has-background-grey-dark">
		<div class="tile is-ancestor">
			<div class="tile is-parent is-half">
				<div class="tile is-child box is-paddingless">
				  <!-- <p class="title">Three: Me</p> -->
				  <article class="tile is-child notification has-background-grey-darker">
					  <figure class="image is-128x128 ">
						<img id="footer-logo" src="img/headshot.JPG">
					  </figure>
					  <h5 class="title">contact me:
						<strong>myeamil@email.com</strong>
					</h5>
					<h6 class="subtitle">&copy;2020 
						<strong>josuerivera.com</strong>
					</h6>

					  <!-- <p class="title">Three</p>
					  <p class="subtitle">With an image</p> -->
					</article>
				</div>
			  </div>


			<div class="tile is-half is-vertical is-parent">
			  <div class="tile is-child box is-paddingless">
				<article class="tile is-child notification has-text-primary  has-background-grey-darker is-pulled-right">
					<!-- <p class="title">One: Socials</p> -->
					<i class="icon is-large fas fa-3x fab fa-github"></i>
					<i class="icon is-large fas fa-3x fab fa-linkedin"></i>
					<i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
					<i class="icon is-large fas fa-3x fab fa-instagram"></i>
				</article>
			  </div>
			  <div class="tile is-child box is-paddingless">
				<!-- <p class="title">Two: Sponsors</p> -->
				<article class="tile is-child notification has-background-grey-darker">
					<a href="https://bulma.io" class="is-pulled-right">
						<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
					</a>
				</article>
			  </div>
			</div>
			
		  </div>

		<!-- <div class="tile is-ancestor">
			<div class="tile is-vertical is-8">
			  <div class="tile">
				<div class="tile is-parent is-vertical">
				  <article class="tile is-child notification is-primary">
					<p class="title">Vertical...</p>
					<p class="subtitle">Top tile</p>
				  </article>
				  <article class="tile is-child notification is-warning">
					<p class="title">...tiles</p>
					<p class="subtitle">Bottom tile</p>
				  </article>
				</div> -->
				<!-- <div class="tile is-parent">
					<article class="tile is-child notification is-info">
					  <p class="title">Middle tile</p>
					  <p class="subtitle">With an image</p>
					  <figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/640x480.png">
					  </figure>
					</article>
				  </div> -->
				 
				 
				 
				  <!-- <div class="container has-background-warning">
					<p>select a window to expand</p>
				</div> -->
	</footer>

<!-- TEST SECTION   -->
	<section class="hero is-cover has-background-image is-fullheight">
		<!-- Hero head: will stick at the top -->
		<div class="hero-head">
			
		</div>
	  
		<!-- Hero content: will be in the middle -->
		<div class="hero-body">
		  <div class="container has-text-centered">
			<h1 class="title">
			  Title
			</h1>
			<h2 class="subtitle">
			  Subtitle
			</h2>
			

			<div class=" columns has-background-black-ter">
				<div class="tile is-ancestor">
					<div class="tile is-parent is-half is-paddingless">
						<div class="tile is-child box is-paddingless">
						  <!-- <p class="title">Three: Me</p> -->
						  <article class="tile is-child notification has-background-grey-light">
							  <figure class="image is-128x128 ">
								<img id="footer-logo" src="img/headshot.JPG">
							  </figure>
							  <h5 class="">contact me:
								<strong>myeamil@email.com</strong>
							</h5>
							<h6 class="">&copy;2020 
								<strong>josuerivera.com</strong>
							</h6>
		
							  <!-- <p class="title">Three</p>
							  <p class="subtitle">With an image</p> -->
							</article>
						</div>
					  </div>
		
		
					<div class="tile is-half is-vertical is-parent">
					  <div class="tile is-child box is-paddingless">
						<article class="tile is-child notification has-text-primary  has-background-grey-darker is-pulled-right">
							<!-- <span class="title"><i class="icon is-large fas fa-3x fab fa-slack-hash"></i>GAWDAMUPDOPE</span> -->


							<i class="icon is-large fas fa-3x fab fa-github"></i>
							<i class="icon is-large fas fa-3x fab fa-linkedin"></i>
							<i class="icon is-large fas fa-3x fab fa-facebook-square"></i>
							<i class="icon is-large fas fa-3x fab fa-instagram"></i>
						</article>
					  </div>
					  <div class="tile is-child box is-paddingless">
						<!-- <p class="title">Two: Sponsors</p> -->
						<article class="tile is-child notification has-background-grey-dark">
							<a href="https://bulma.io" class="is-pulled-right">
								<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
							</a>
						</article>
					  </div>
					</div>
					
				  </div>
		
				<!-- <div class="tile is-ancestor">
					<div class="tile is-vertical is-8">
					  <div class="tile">
						<div class="tile is-parent is-vertical">
						  <article class="tile is-child notification is-primary">
							<p class="title">Vertical...</p>
							<p class="subtitle">Top tile</p>
						  </article>
						  <article class="tile is-child notification is-warning">
							<p class="title">...tiles</p>
							<p class="subtitle">Bottom tile</p>
						  </article>
						</div> -->
						<!-- <div class="tile is-parent">
							<article class="tile is-child notification is-info">
							  <p class="title">Middle tile</p>
							  <p class="subtitle">With an image</p>
							  <figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/640x480.png">
							  </figure>
							</article>
						  </div> -->
						 
						 
						 
						  <!-- <div class="container has-background-warning">
							<p>select a window to expand</p>
						</div> -->
					</div>









		  </div>
		</div>
		




		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
		  <nav class="tabs is-boxed is-fullwidth">
			<div class="container">
			  <ul>
				<li><a>Home</a></li>
				<li><a>About Me</a></li>
				<li><a>My Projects</a></li>
				<li class="is-active"><a>Contact Info</a></li>
				<li><a>Resume</a></li>
				<li><a>???</a></li>
			  </ul>
			</div>
		  </nav>
		</div>
	  </section>

	  


<!-- SCRIPTS -->
	<!-- FontAwesome for Bulma -->
		<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
	<!-- jQuery slim 3.3.1 script -->
		<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
	<!-- jQuery Popper scritp -->
		<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> -->
	<!-- Bootstrap script -->
		<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->
	<!-- Vue JS CDN script -->
		<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->
	<!-- Vue Router CDN script -->
		<!-- <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script> -->
	<!-- custom JS script -->
		<script type="text/javascript" src="assets/js/main.js"></script>
	</body>
</html>