$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		//menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E', '#818181', '#4E4E4E'],
		navigation: true,
		navigationPosition: 'left',
		hybrid:true,
    	fitToSection: false,
		autoScrolling: false,
		afterLoad: function(anchorLink, index){	
		//setTimeout(function () {
			//$('.head').show().addClass('animated fadeInRight');}, 600
			//);
		},
		onLeave: function(index, nextIndex, direction){
		},
	
		
	});
	
	
});//end document.ready function

