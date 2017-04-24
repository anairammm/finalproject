$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		//menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage', '5thPage', 'sixthPage', '7thPage'],
		sectionsColor: ['#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E', '#818181'],
		navigation: true,
		navigationPosition: 'left',
		hybrid:true,
    	fitToSection: false,
		autoScrolling: false,
		afterLoad: function(anchorLink, index){	
			setTimeout(function () {
				$('svg').show().addClass('animated fadeInRight');}, 800
				);
		},
		onLeave: function(index, nextIndex, direction){
			$('svg').hide();
		},
		//},
	
		
	});
	
	
});//end document.ready function

