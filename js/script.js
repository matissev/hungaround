var shown = false;
var step = 0;
var blueMarkersPosition = ["43.909806, 6.225070", "44.193841, 6.192950", "44.039483, 6.696849", "43.959635, 5.573183", "43.600241, 6.113721", "43.830815, 7.071214", "44.057757, 4.765858", "43.933368, 4.305138", "48.393764, 2.605991", "48.39365, 2.638435", "48.382478, 2.651482", "43.373566, 2.440705", "42.892971, 0.935572", "42.857416, -0.555427", "43.012346, -1.168948", "43.088416, -1.842834", "42.690938, -1.145438", "42.362094, -0.207881", "41.995003, 1.170606"];
var blueMarkers = 0;
var marker = [];

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

  		for (var i = 0; i < blueMarkersPosition.length; i++) {
  			blueMarkers = new google.maps.LatLng(blueMarkersPosition[i]);
  			marker[i] = new google.maps.Marker({
	    		position: blueMarkers[i],
	    		map: map,
	    		title: "Hello World!",
	    		icon: 'img/icones/map-marker.svg'
			});
  		}
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
    		LatLng1 = new google.maps.LatLng(45.4101435, 5.8236147);
    		LatLng2 = new google.maps.LatLng(45.3597474, 5.8129717);
    		LatLng3 = new google.maps.LatLng(45.2850354, 5.7752062);
    		map.setCenter(LatLng1);
    		map.setZoom(13);

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


