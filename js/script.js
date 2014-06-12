
jQuery(document).ready(function($) {

	// =========================== FILTRES MOSAIC ===========================

	$('.mosaic').packery({ itemSelector: '.item' });
	
	$('.nav-filtre').each(function(index, el) {
		$(this).click(function(event) {
			var filter = $(this).data('filtered');
			if ( $(this).find('input:checked').length ) {
				$('.' + filter).css('display', 'block');
			} else {
				$('.' + filter).css('display', 'none');
			}
			$('.mosaic').packery('destroy');
			$('.mosaic').packery({ itemSelector: '.item' });
		});
	});

	// =========================== GOOGLE MAPS API ===========================

	function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(42.71760, 0.59314),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("largeMap"), mapOptions);
        map.setTilt(45);
  		map.setHeading(90);
    }
    google.maps.event.addDomListener(window, 'load', initialize);



    // =========================== TOGGLES ===========================

    $(".nav-profil-photo").click(function(event) { $("#menuNotif").toggleClass("open"); })
    $(".nav-register").click(function(event) { $("#popup").toggleClass("open"); })
	$(".linkMap").click(function(event) {
		$("#content").toggleClass("kickOutContent");
		$(this).toggleClass("letLinkMap");

		if ($("#textLinkMap").html() == "Carte" ) {
			$("#textLinkMap").html("Gazette");
		} else {
			$("#textLinkMap").html("Carte");
		}
	})

    // =========================== AJAXIFY ============================
});


