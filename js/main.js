// window.onload=function(){
//     $('.slider').slick({
//     autoplay:true,
//     autoplaySpeed:1500,
//     arrows:true,
//     prevArrow:'<button type="button" class="slick-prev"></button>',
//     nextArrow:'<button type="button" class="slick-next"></button>',
//     centerMode:true,
//     slidesToShow:3,
//     slidesToScroll:1
//     });
//   };

  
//   // Create and mount the thumbnails slider.
// var secondarySlider = new Splide( '#secondary-slider', {
// 	rewind      : true,
// 	fixedWidth  : 100,
// 	fixedHeight : 64,
// 	isNavigation: true,
// 	gap         : 10,
// 	focus       : 'center',
// 	pagination  : false,
// 	cover       : true,
// 	breakpoints : {
// 		'600': {
// 			fixedWidth  : 66,
// 			fixedHeight : 40,
// 		}
// 	}
// } ).mount();

// // Create the main slider.
// var primarySlider = new Splide( '#primary-slider', {
// 	type       : 'fade',
// 	heightRatio: 0.5,
// 	pagination : false,
// 	arrows     : false,
// 	cover      : true,
// } );

// // Set the thumbnails slider as a sync target and then call mount.
// primarySlider.sync( secondarySlider ).mount();

// (function(i,s,o,g,r,a,m){
// 	i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
// 	{
// 	(i[r].q=i[r].q||[]).push(arguments)
// 	},
// 	i[r].l=1*new Date();a=s.createElement(o),
// 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// 	}
// 	)(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
// 	ga('create', 'UA-46156385-1', 'cssscript.com');
// 	ga('send', 'pageview');

	function myFunction(imgs) {
		document.getElementById("ss").style.display = "none";
		var expandImg = document.getElementById("expandedImg");
		var imgText = document.getElementById("imgtext");
		expandImg.src = imgs.src;
		imgText.innerHTML = imgs.alt;
		expandImg.parentElement.style.display = "block";
	  }