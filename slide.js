$(function () {
	var elements = $('#slider'),
        element =  elements.children('div'),
		indexElement = 1,
		indexMax = element.length;
	
	function change () {
		element.fadeOut(500);
		element.filter(':nth-child('+indexElement+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexElement++;
		if(indexElement > indexMax) {
			indexElement = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoCange, 1000);

	elements.mouseover(function() {
		clearInterval(interval);
	});
	elements.mouseout(function() {
		interval = setInterval(autoCange, 3000);
	});
	
	elements.append('<span class="next"></span><span class="prev"></span>');
	
	$('span.next').click(function() {
		indexElement++;
		if(indexElement > indexMax) {
			indexElement = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexElement--;
		if(indexElement < 1) {
			indexElement = indexMax;
		}
		change ();
	});	
});