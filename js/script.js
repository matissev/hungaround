var shown = false;
var step = 0;

var blueMarkersPosition = [
	{ "lat" : "43.248363" , "long" : "2.427920" },
	{ "lat" : "43.412190" , "long" : "0.214175" },
	{ "lat" : "42.681586" , "long" : "-0.280210" },
	{ "lat" : "44.031490" , "long" : "4.081363" },
	{ "lat" : "43.300819" , "long" : "-1.615689" },
	{ "lat" : "42.948002" , "long" : "-0.429166" }
];

var redMarkersPosition = [
	{ "lat" : "43.982085" , "long" : "3.907478" },
	{ "lat" : "43.430126" , "long" : "0.699470" },
	{ "lat" : "43.174278" , "long" : "-1.173699" }
];

var greenMarkersPosition = [
	{ "lat" : "43.909806" , "long" : "6.225070" },
	{ "lat" : "44.193841" , "long" : "6.192950" },
	{ "lat" : "44.039483" , "long" : "6.696849" },
	{ "lat" : "43.959635" , "long" : "5.573183" },
	{ "lat" : "43.600241" , "long" : "6.113721" },
	{ "lat" : "43.830815" , "long" : "7.071214" },
	{ "lat" : "44.057757" , "long" : "4.765858" },
	{ "lat" : "43.933368" , "long" : "4.305138" },
	{ "lat" : "48.393764" , "long" : "2.605991" },
	{ "lat" : "48.39365" , "long" : "2.638435" },
	{ "lat" : "48.382478" , "long" : "2.651482" },
	{ "lat" : "43.373566" , "long" : "2.440705" },
	{ "lat" : "42.892971" , "long" : "0.935572" },
	{ "lat" : "42.857416" , "long" : "-0.555427" },
	{ "lat" : "43.012346" , "long" : "-1.168948" },
	{ "lat" : "43.088416" , "long" : "-1.842834" },
	{ "lat" : "42.690938" , "long" : "-1.145438" },
	{ "lat" : "42.362094" , "long" : "-0.207881" },
	{ "lat" : "41.995003" , "long" : "1.170606" }
];

var blueMarkers = [];
var greenMarkers = [];
var redMarkers = [];
var marker = 0;

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

	var contentString = '<div class="item p1x1 recommande"><a href="#" class="showArticle"><img src="img/photos/mosaic/1x1-1.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>';
	var infowindow = new InfoBubble({
      content: contentString,
      minWidth: 170,
      minHeight: 212,
      padding: 0,
      borderRadius: 0,
      borderWidth: 0,
      shadowStyle: 2,
      arrowSize: 0,
      hideCloseButton: true,
  	});

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

  		for (var i = 0; i < greenMarkersPosition.length; i++) {
  			greenMarkers[i] = new google.maps.LatLng(greenMarkersPosition[i].lat, greenMarkersPosition[i].long);
  			marker = new google.maps.Marker({
	    		position: greenMarkers[i],
	    		map: map,
	    		title: "Hello World!",
	    		icon: 'img/icones/nonlu.svg'
			});
  		}

  		for (var i = 0; i < blueMarkersPosition.length; i++) {
  			blueMarkers[i] = new google.maps.LatLng(blueMarkersPosition[i].lat, blueMarkersPosition[i].long);
  			marker = new google.maps.Marker({
	    		position: blueMarkers[i],
	    		map: map,
	    		title: "Hello World!",
	    		icon: 'img/icones/suivi.svg'
			});
  		}

  		for (var i = 0; i < redMarkersPosition.length; i++) {
  			redMarkers[i] = new google.maps.LatLng(redMarkersPosition[i].lat, redMarkersPosition[i].long);
  			marker = new google.maps.Marker({
	    		position: redMarkers[i],
	    		map: map,
	    		title: "Hello World!",
	    		icon: 'img/icones/recommande.svg'
			});
			infowindow.open(map,marker);
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


