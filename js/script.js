var shown = false;
var step = 0;


jQuery(document).ready(function($) {

	$('.my-sticky-element').waypoint('sticky');
	$('.infinite-container').waypoint('infinite');

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

	// =========================== LIGHT GALLERY ===========================

	if ($('#gallery').length) {
		$("#gallery").lightGallery();
	} 

	// =========================== GOOGLE MAPS API ===========================

	var timer = false;
	function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(44.770137, 6.965332),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById("largeMap"), mapOptions);
        map.setTilt(45);
  		map.setHeading(90);
    }
    google.maps.event.addDomListener(window, 'load', initialize);


    // =========================== TOGGLES ===========================

    $(".nav-profil-photo").click(function(event) { $("#menuNotif").toggleClass("open"); })

    $(".showArticle").click(function(event) {
    	$(".article").toggleClass("toggleArticle");
    	$("main").toggleClass("away");
    	$("#largeMap").toggleClass("littlemap");
    	$(".closeArticle").toggleClass("toggleCloser");
    	shown = !shown;

    	if ( shown == true ) {
    		LatLng1 = new google.maps.LatLng(48.393764, 2.605991);
    		LatLng2 = new google.maps.LatLng(48.39365, 2.638435);
    		LatLng3 = new google.maps.LatLng(48.382478, 2.651482);
    		map.setCenter(LatLng1);
    		map.setZoom(14);

			timer = setTimeout(function() {
				google.maps.event.trigger(map, 'resize');
	  			map.panTo(LatLng1);

	  			var markerArticle1 = new google.maps.Marker({
		    		position: LatLng1,
		    		map: map,
		    		title: "Hello World!",
		    		icon: 'img/icones/map-marker.svg'
				});

				var markerArticle2 = new google.maps.Marker({
		    		position: LatLng2,
		    		map: map,
		    		title: "Hello World!",
		    		icon: 'img/icones/map-marker.svg'
				});

				var markerArticle3 = new google.maps.Marker({
		    		position: LatLng3,
		    		map: map,
		    		title: "Hello World!",
		    		icon: 'img/icones/map-marker.svg'
				});

				var lineSymbol = {
    				path: 'M 0,-1 0,1',
    				strokeOpacity: 1,
    				scale: 4
  				};

				var flightPlanCoordinates = [
    				LatLng1,
    				LatLng2,
    				LatLng3
  				];

				var flightPath = new google.maps.Polyline({
    				path: flightPlanCoordinates,
    				icons: [{
    				  icon: lineSymbol,
    				  offset: '0',
    				  repeat: '20px'
    				}],
    				geodesic: true,
    				strokeColor: '#e64c27',
    				strokeOpacity: 0,
    				strokeWeight: 3
    			});

    			flightPath.setMap(map);
			}, 1000);
    	}

    	else {
    		initialize();

    		timer = setInterval(function() {
    			google.maps.event.trigger(map, 'resize');
    			step++ ;
    			if (step == 2) { clearInterval(timer); }
    		}, 500);
    	}
    })

    $(".nav-register, .fermeture").click(function(event) { $(".popupContainer").toggleClass("show"); })

	$(".linkMap").click(function(event) {
		$("#content").toggleClass("kickOutContent");
		$(this).toggleClass("letLinkMap");

		if ($("#textLinkMap").html() == "Carte" ) {
			$("#textLinkMap").html("Gazette");
		} else {
			$("#textLinkMap").html("Carte");
		}
	})

    // =========================== WAYPOINTS ============================

	$('#marker1').waypoint(function() {
  		map.panTo(LatLng1);
	}, {context: '.article'});

	$('#marker2-1').waypoint(function() {
  		map.panTo(LatLng2);
	}, {context: '.article'});

	$('#marker2-2').waypoint(function() {
  		map.panTo(LatLng2);
	}, {context: '.article'});

	$('#marker3').waypoint(function() {
  		map.panTo(LatLng3);
	}, {context: '.article'});

	$('.infinite-container').waypoint('infinite');
	$('.my-sticky-element').waypoint('sticky');

});


