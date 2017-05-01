$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		css3: true,
		//menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', '5thPage', 'sixthPage', '7thPage'],
		sectionsColor: ['#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E'],
		navigation: true,
		navigationPosition: 'right',
		hybrid:true,
		scrollingSpeed: 400,
    	fitToSection: false,
		autoScrolling: true,
		afterLoad: function(anchorLink, index){	
			setTimeout(function () {
				$('svg').show();}, 200
				);
				setTimeout(function () {
				$('.p1').show().addClass('animated fadeInLeft');}, 1000
				);
				setTimeout(function () {
				$('.p21').show().addClass('animated fadeInRight');}, 1000
				);
				setTimeout(function () {
				$('.p22').show().addClass('animated fadeInRight');}, 1500
				);
				setTimeout(function () {
				$('.p23').show().addClass('animated fadeInRight');}, 2000
				);
				setTimeout(function () {
				$('.p24').show().addClass('animated fadeInRight');}, 2500
				);
				setTimeout(function () {
				$('.p25').show().addClass('animated fadeInRight');}, 3000
				);
				setTimeout(function () {
				$('.p31').show().addClass('animated fadeInLeft');}, 1500
				);
				setTimeout(function () {
				$('.p32').show().addClass('animated fadeInLeft');}, 2000
				);
				setTimeout(function () {
				$('.p33').show().addClass('animated fadeInLeft');}, 2500
				);
				setTimeout(function () {
				$('.p34').show().addClass('animated fadeInLeft');}, 3000
				);
				setTimeout(function () {
				$('.p41').show().addClass('animated fadeInRight');}, 1500
				);
				setTimeout(function () {
				$('.p42').show().addClass('animated fadeInRight');}, 2000
				);
				setTimeout(function () {
				$('.p43').show().addClass('animated fadeInRight');}, 2500
				);
				setTimeout(function () {
				$('.p44').show().addClass('animated fadeInRight');}, 3000
				);
				setTimeout(function () {
				$('.p51').show().addClass('animated fadeInLeft');}, 1500
				);
				setTimeout(function () {
				$('.p52').show().addClass('animated fadeInLeft');}, 2000
				);
				setTimeout(function () {
				$('.p53').show().addClass('animated fadeInLeft');}, 2500
				);
				setTimeout(function () {
				$('.p54').show().addClass('animated fadeInLeft');}, 3000
				);
		},
		onLeave: function(index, nextIndex, direction){
			$('.p6').hide();
			$('svg').hide();
			$('.p1').hide();
			$('.p21').hide();
			$('.p22').hide();
			$('.p23').hide();
			$('.p24').hide();
			$('.p25').hide();
			$('.p31').hide();
			$('.p32').hide();
			$('.p33').hide();
			$('.p34').hide();
			$('.p41').hide();
			$('.p42').hide();
			$('.p43').hide();
			$('.p44').hide();
			$('.p51').hide();
			$('.p52').hide();
			$('.p53').hide();
			$('.p54').hide();
		},
		//},
	
		
	});
	
	
});//end document.ready function

