$(document).ready(function() {
	$('#fullpage').fullpage({
		responsiveWidth: 900,
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#fff', '#818181', '#fff'],
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
});