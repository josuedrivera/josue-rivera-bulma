console.log("connected");

// const Vue.createApp({
//   data() {
//     return {

//     };
//   }
// }).$mount('#idName');

// const 


// COPY EMAIL
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
// ^^^REWRITE IN VANILLA JS
// function myFunction() {
//     var copyText = document.getElementById("myemail");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
    
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied: " + copyText.value;
//   }
  
//   function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
//   }

// const Display = {
//     template: `
//       <div class="user">
//         <h2>User {{ $route.params.id }}</h2>
//         <router-view></router-view>
//       </div>
//     `
//   }


// VUE TRANSITION TEST 
const one = {
	template: `
		<div class="has-text-grey-light has-text-center px-6">
			<h3 class="is-size-1 has-text-danger">Digital Drumkit</h3>
			<img class="img-fluid" src="https://res.cloudinary.com/dfuxcsi7w/image/upload/v1643078988/bulmaPortfolio/PG_DigiDrumkit.png">
      <p class="has-text-centered has-background-black-ter py-4">
      This is a simple drumkit simulator I made using JavaScript and sleek design.
      </p>
		</div>
	`
}
const two = {
	template: `
		<div class="has-text-danger has-text-center px-6">
      <h3 class="is-size-1 has-text-danger">Pusheen Zodiac</h3>
			<img class="img-fluid" src="https://res.cloudinary.com/dfuxcsi7w/image/upload/v1643078990/bulmaPortfolio/PG_Zodiac.png" alt="">
      <p class="has-text-centered has-background-black-ter py-4">
      This is a simple drumkit simulator I made using JavaScript and sleek design.
      </p>
		</div>
	`
}
const three = {
	template: `
		<div class="has-text-danger has-text-center px-6">
			<h3 class="is-size-1 has-text-danger">Natours</h3>
			<img class="img-fluid" src="https://res.cloudinary.com/dfuxcsi7w/image/upload/v1643078987/bulmaPortfolio/PG_Natours.png" alt="">
      <p class="has-text-centered has-background-black-ter py-4">
      This is a simple drumkit simulator I made using JavaScript and sleek design.
      </p>
		</div>
	`
}



const headshot = {
	template: `
  
	`
}
const aboutMe = {
	template: `
    <div class="container is-fluid has-background-grey-darker has-text-danger py-4 is-flex is-flex-direction-column is-align-items-space-between">
        <p class="title block has-text-primary pb-3">Ars Longa Vita Brevis</p>

        <p class="subtitle block has-text-primary-dark pb-0"> Hello World! My name is 
        <span class="is-size-4 has-text-weight-bold">Josue</span>. 
        If you can't say that, <a class="has-text-primary has-text-weight-bold" href="https://www.google.com/search?q=google+pronounce+josue&rlz=1C5CHFA_enUS728US728&oq=google+pronounce+josue&aqs=chrome..69i57j0i333j69i64.5107j1j7&sourceid=chrome&ie=UTF-8"> try this</a> 
        then amuse me *sarcasm*, or just call me Sway. I am a 
        <span class="has-text-weight-bold"> Front-End Developer</span> from the beautiful 
        <span class="has-text-weight-bold"> Bay Area, California</span>.</p>

        <p class="block has-text-primary-dark"> As a Web Developer, I enjoy the challenge for creative solutions, and the demand for curiosity, critical thinking, and efficient code required to produce content worthy of an audience. I am passionate about building as well as deconstructing 'things' while learning throughout the whole process. <br><br>
        
        I am also familiar with many aspects of Back-End Development, UX/UI, and Content Management Systems. I am currently utilizing these skills with the ultimate goal of joining a team that enjoys solving difficult problems, shares in my appreciation for direct, clear, and concise communication and open-minded feedback.</p>

        <div class="">
        <p class="block is-size-6 has-text-right"> 
        learn more about me 
        <i class="fas fa-angle-down welcome-down p-0 m-0"></i>	
        </p>
        </div>
    </div>
	`
}
const hardSkills = {
	template: `
    <div class="container is-fluid has-background-grey-darker has-text-danger py-4">
        <p class="title block has-text-primary">Hard Skills</p>

        <span class="block subtitle has-text-primary has-text-weight-bold"> Languages:  <br></span>
        <div class="block is-flex is-flex-direction-row">
        <p class="subtitle block has-text-primary-dark">
        <i class="fab fa-html5 is-size-1 mt-3 mx-3"></i> |HTML5 
        <i class="fab fa-css3-alt is-size-1 mt-3 mx-3"></i> |CSS3 
        <i class="fab fa-js-square is-size-1 mt-3 mx-3"></i> |JAVASCRIPT (ES5/ES6)
        </p>
        </div>
        
        <span class="block subtitle has-text-primary has-text-weight-bold"> Applications:  <br></span>
        <p class="subtitle block has-text-primary-dark">
        <span class="">WordPress, SquareSpace, SharePoint, Shopify <br></span>
        <span class="">SCSS/SASS, Bootstrap,  Bulma, Semantic UI <br></span>
        <span class="">Vue.js, jQuery, Node.js, NPM +a variety of node packages <br></span>
        </p>

        <p><span class="has-text-weight-bold"> Design Process & Theory</span> | Responsive Design, Media Queries, Version Control, Github, AJAX, JSON, APIs, RESTful Routes, CSS Naming Convention, Cross Browser Development, Browser Dev Tools, Testing/Debugging, Command Line... </p><br>

        <ul class="block is-size-7"> 
            <span class="has-text-weight-bold"> Also experienced with: </span>
            <li>Adobe XD, Adobe CC(Illustrator, Photoshop, InDesign)</li>
            <li>MS Suite, Google Suite (including Apps Script)</li>
            <li>Express.js, passport.js, and various Node.js packages</li>
            <li>JIRA - Issue and Project Tracking Software, others, and still eagerly learning....</li>
        </ul>				
    </div>
	`
}
const softSkills = {
	template: `
    <div class="container is-fluid has-background-grey-darker has-text-danger py-4">
        <p class="title block has-text-primary pb-3">Soft Skills</p>
        
        <p class="subtitle block has-text-primary-dark pb-2">
          As introduced by The 4 Agreements, I subscribe to the idea that all humans are artists and life is our canvas. Seeing the world through this filter, I am excited and intrigued by others' creations. I respect their style and encourage their best because life has shown me that when people feel safe, happy, and motivated, awesome things are created!
        </p>

        
        <ul class="block has-text-right"> <span class="is-size-4 has-text-weight-bold"> Core Competencies: </span>
            <li> Naturally Creative • Conceptual/Critical Thinker and Tinkerer </li>
            <li> Adaptable • Solution Oriented • Problem Solver w/a Drive for Efficiency</li>
            <li> Embraces Teamwork • Empathic and Open Minded • Empowering of Others </li>
            <li> Accountable & Approachable • Ability To Take Criticism • Learns From Mistakes </li>
            <li> Interpersonal Awareness • Willingness to Grow • Self-Starter/Self-Motivated </li>
            <li> Excellent Written and Verbal Communication Skills and ability to follow process</li>
        </ul>  

        <p class="has-text-primary has-text-centered is-size-7">thnx for coming to my TedTalk, check out my --blog in progress--</p>
    </div>
	`
}
const spaceMan = {
  template: `
  <div class="has-text-left m-0 has-background-black-ter rotating-text-box">
    <!-- ROTATING TEXT -->
    <div class="rotating-text has-background-black-ter m-0 p-0">
    
      <div class=" is-inline-block">
        <h2 class="title is-size-1 has-text-warning">SOME OF MY FAVORITE THINGS:</h2>
      </div>
   
      <div class=" is-inline-block">
        <p class="">
          <span class="word alizarin">tacos.</span>
          <span class="word wisteria">football.</span>
          <span class="word peter-river">napping.</span>
          <span class="word emerald">hanging_out.</span>
          <span class="word sun-flower">free_stuff.</span>
        </p>
      </div>
    </div>
  </div>
  `
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: headshot
		},
		{
			path: '/aboutMe',
			component: aboutMe
		},
		{
			path: '/hardSkills',
			component: hardSkills

		},
		{
			path: '/softSkills',
			component: softSkills

		},
    {
			path: '/spaceMan',
			component: spaceMan

		},
		{
			path: '/one',
			component: one
		},
		{
			path: '/two',
			component: two

		},
		{
			path: '/three',
			component: three

		}
	]
})


var profile = new Vue({
	router,
	el: '#about-me',
	data: {

	},
	methods: {

	}
}).$mount('#about-me')



var projects = new Vue({
	router,
	el: '#project-slides',
	data: {

	},
	methods: {

	}
}).$mount('#project-slides')

// const display = new VueRouter({
// 	routes: [
// 		{
// 			path: '/one',
// 			component: one
// 		},
// 		{
// 			path: '/two',
// 			component: two

// 		},
// 		{
// 			path: '/three',
// 			component: three

// 		}
// 	]
// })


// var Work = new Vue({
// 	router,
// 	el: '#project-slides',
// 	data: {

// 	},
// 	methods: {

// 	}
// }).$mount('#project-slides')















// funct () {
  //looop through array of numbers
  
  //divide each number to check
  //
// }













// Vue.component('button-counter', {
//     data: function () {
//       return {
//         count: 0
//       }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
//   })






// new Vue({
// 	el: '#appCarousel',
//   components: {
//   	'carousel': VueCarousel.Carousel,
//     'slide': VueCarousel.Slide
//   },
//   template:
//   '<div id="" class="app"><carousel @next="next" @prev="prev"><carousel-slide v-for="(slide,index) in slides":key="slide":index="index":visibleSlide="visibleSlide":direction="direction"><img :src="slide" /></carousel-slide></carousel></div>'
  
//   '<div><carousel :navigationEnabled="true">' + buildSlideMarkup(10) + '</carousel></div>'
// });





// const carouselApp = {
// 	template: `
//     <div id="appCarousel" class="app">
//         <carousel
//         @next="next"
//         @prev="prev">
//             <!-- for key use id ??? -->
//             <carousel-slide 
//             v-for="(slide,index) in slides"
//             :key="slide"
//             :index="index"
//             :visibleSlide="visibleSlide"
//             :direction="direction"> 
//                 <img :src="slide" />
//             </carousel-slide>
//         </carousel>
//     </div>
// 	`
// }

// const Carousel = {
// 	template: `
//     <div id="carouselCon" class="carousel">
//         <slot></slot>
        
//         <button @click="next" class="next">Next</button>
//         <button @click="prev" class="prev">Prev</button>
//     </div>
// 	`
// }

// const carouselSlide = {
// const Slide = {
// 	template: `
//     <transition
//     id="carouselViewer"
//     :name="direction"
//     mode="in-out">
//         <div v-show="visibleSlide === index" class="carousel-slide">
//             <slot></slot>
//         </div>
//     </transition>
// 	`
// }


// const appCarousel = new Vue({
// 	el: '#appCarousel',
// 	data() {
//         return {
//             slides: [
//                 'https://unsplash.com/photos/eoHUaRLrYxw',
//                 'https://unsplash.com/photos/BHJs5TZ-Nt0',
//                 'https://unsplash.com/photos/FilM6ng7VGQ'
//             ],
//             visibleSlide : 0,
//             direction: 'left',
//         }
//     },
// 	computed: {
//         sLength() {
//             return this.slides.length;
//         }
//     },
//     methods: {
//         next()  {
//             if(this.visibleSlide >= this.sLength - 1) {
//                 this.visibleSlide = 0;
//             } else {
//                 this.visibleSlide++;
//             }
//             this.direction = "left"
//         },
//         prev()  {
//             if(this.visibleSlide <= 0) {
//                 this.visibleSlide = this.sLength - 1;
//             } else {
//                 this.visibleSlide--;
//             }
//             this.direction = "right"
//         }
//     }, 
//     components : {
//         Carousel,
//         Slide,
//     }
// }).$mount('#appCarousel')


// const carouselCon = new Vue({
// 	el: '#carouselCon',
// 	data() {
//         return {

//         }
//     }, 
//     methods: {
//         next() {
//             this.$emit('next')
//         },
//         prev() {
//             this.$emit('prev')
//         }
//     }
// }).$mount('#carouselCon')

// const carouselViewer = new Vue({
// 	el: '#carouselViewer',
// 	props: ['visibleSlide', 'index', 'direction'],
//     data() {
//         return {

//         }
//     },
// }).$mount('#carouselViewer')





// Vue.component('#appCarousel');
// Vue.component('#carouselCon');
// Vue.component('#carouselViewer');






















// const buildSlideMarkup = (count) => {
// 	let slideMarkup = '';
//   for (var i = 1; i <= count; i++) {
//   	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
//   }
//   return slideMarkup;
// };

// new Vue({
// 	el: '#example',
//   components: {
//   	'carousel': VueCarousel.Carousel,
//     'slide': VueCarousel.Slide
//   },
//   template: '<div><carousel :navigationEnabled="true">' + buildSlideMarkup(10) + '</carousel></div>'
// });
































// bulmaCarousel.attach('#post_images', {
//     slidesToScroll: 1,
//     slidesToShow: 1,
//     loop: true,
//   });


  // CAROUSEL TEST

//   const buildSlideMarkup = (count) => {
// 	let slideMarkup = '';
//   for (var i = 1; i <= count; i++) {
//   	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
//   }
//   return slideMarkup;
// };

// new Vue({
// 	el: '#slideshow',
//   components: {
//   	'carousel': VueCarousel.Carousel,
//     'slide': VueCarousel.Slide
//   },
//   template: '<div><carousel :navigationEnabled="true">' + buildSlideMarkup(10) + '</carousel></div>'
// });



// STICKY NAVBAR
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar = document.getElementById("sticky-navbar");
// var welcomenav = document.getElementById("welcome-nav");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//     welcomenav.classList.add("hide");
//   } else {
//     navbar.classList.remove("sticky");
//     welcomenav.classList.remove("hide");
//   }
// }


// FOR CAROUSEL/SLIDER 
// FOR CAROUSEL/SLIDER 
// FOR CAROUSEL/SLIDER 
// FOR CAROUSEL/SLIDER 
// import Vue from 'vue';
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);


// const buildSlideMarkup = (count) => {
// 	let slideMarkup = '';
//   for (var i = 1; i <= count; i++) {
//   	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
//   }
//   return slideMarkup;
// };

// new Vue({
// 	el: '#slideshow',
//   components: {
//   	'carousel': VueCarousel.Carousel,
//     'slide': VueCarousel.Slide
//   },
//   template: '<div><carousel :navigationEnabled="true">' + buildSlideMarkup(10) + '</carousel></div>'
// });


// <carousel>
//   <slide>
//     Slide 1 Content
//   </slide>
//   <slide>
//     Slide 2 Content
//   </slide>
// </carousel>


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);





























