/* SMALL JS FOR ANIMATION PURPOSE */

jQuery(document).ready(function($) {
	

	/* ISOTOPE LAYOUT SETTINGS */

	$('#mosaic').packery({ itemSelector: '.item' });
	/* $container.packery('destroy') */


	
	$('.nav-filtre').each(function(index, el) {
		$(this).click(function(event) {
			var filter = $(this).data('filtered');
			if ( $(this).find('input:checked').length ) {
				$('.' + filter).css('display', 'block');
			} else {
				$('.' + filter).css('display', 'none');
			}
			$('#mosaic').packery('destroy');
			$('#mosaic').packery({ itemSelector: '.item' });
		});
	});


});




function toggleNotif() { $("#menuNotif").toggleClass("open"); }




