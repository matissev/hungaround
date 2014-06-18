var step = 0;
var u = 0;
var switchMosaic = false;
var switchArticles = false;

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

var contentStringRed = [
	'<div class="item p1x1 recommande"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-1.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 recommande"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-2.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 recommande"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-3.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

var contentStringGreen = [
	'<div class="item p1x1 nonlu"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-4.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 nonlu"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-5.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 nonlu"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-6.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

var contentStringBlue = [
	'<div class="item p1x1 suivi"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-7.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 suivi"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-8.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
	'<div class="item p1x1 suivi"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-9.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

var blueMarkers = [];
var greenMarkers = [];
var redMarkers = [];

var infowindowRed = [];
var infowindowBlue = [];
var infowindowGreen = [];

var marker = 0;
var oldDistance = 0;
var bestMarker = 0;
var oldBestMarker = 0;
var bestMarkerLiteral = 0;
var oldMapCenter = 0;
var jack3 = 0;

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
			//$('.mosaic').packery('destroy');
			$('.mosaic').packery({ itemSelector: '.item' });
		});
	});

	// =========================== LIGHT GALLERY ===========================

	if ($('#gallery').length) {
		$("#gallery").lightGallery();
	} 

	// =========================== GOOGLE MAPS API ===========================
	var timer = false;
	var checker = false;

	for (var i = 0; i < redMarkersPosition.length; i++) {
		u++;
		if (u >= contentStringRed.length) { u = 0; }

		infowindowRed[i] = new InfoBubble({
	      content: contentStringRed[u],
	      minWidth: 170,
	      minHeight: 212,
	      padding: 0,
	      borderRadius: 0,
	      borderWidth: 0,
	      shadowStyle: 2,
	      arrowSize: 0,
	      hideCloseButton: true,
	      disableAutoPan: true
	  	});
	}

	for (var i = 0; i < blueMarkersPosition.length; i++) {
		u++;
		if (u >= contentStringBlue.length) { u = 0; }

		infowindowBlue[i] = new InfoBubble({
	      content: contentStringBlue[u],
	      minWidth: 170,
	      minHeight: 212,
	      padding: 0,
	      borderRadius: 0,
	      borderWidth: 0,
	      shadowStyle: 2,
	      arrowSize: 0,
	      hideCloseButton: true,
	      disableAutoPan: true
	  	});
	}

	for (var i = 0; i < greenMarkersPosition.length; i++) {
		u++;
		if (u >= contentStringGreen.length) { u = 0; }

		infowindowGreen[i] = new InfoBubble({
	      content: contentStringGreen[u],
	      minWidth: 170,
	      minHeight: 212,
	      padding: 0,
	      borderRadius: 0,
	      borderWidth: 0,
	      shadowStyle: 2,
	      arrowSize: 0,
	      hideCloseButton: true,
	      disableAutoPan: true
	  	});
	}

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
			
			jack1 = infowindowGreen[i];

			google.maps.event.addListener(marker, 'click', function() {
				jack2.close();
				jack3.close();
        		jack1.open(map, this);
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
			
			jack2 = infowindowBlue[i];

			google.maps.event.addListener(marker, 'click', function() {
				jack1.close();
        		jack2.open(map, this);
        		jack3.close();
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

			jack3 = infowindowRed[i];

			google.maps.event.addListener(marker, 'click', function() {
				jack1.close();
				jack2.close();
        		jack3.open(map, this);
    		});
  		}
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    function cleanMap() {
    	var mapOptions = {
    	  center: new google.maps.LatLng(44.770137, 6.965332),
    	  zoom: 8,
    	  mapTypeId: google.maps.MapTypeId.TERRAIN
    	};
    	map = new google.maps.Map(document.getElementById("largeMap"), mapOptions);
    	map.setTilt(45);
		map.setHeading(90);
  	}

 //    checker = setInterval(function() {
 //    	centerMap = map.getCenter();
 //    	if (oldMapCenter != centerMap) {
	//     	var allMarkers = blueMarkersPosition.concat(redMarkersPosition).concat(greenMarkersPosition);

	// 		for (i=0; i<allMarkers.length; i++) {
	// 			 markerCompared = new google.maps.LatLng(allMarkers[i].lat, allMarkers[i].long);
	// 			 distance = google.maps.geometry.spherical.computeDistanceBetween(centerMap,markerCompared);
		
	// 			if (oldDistance == 0 || distance < oldDistance) {
	// 				oldDistance = distance;
	// 				bestMarker = markerCompared;
	// 				bestMarkerLiteral = allMarkers[i];
	// 			}
	// 		}

	// 		if(oldBestMarker != bestMarkerLiteral) {

	// 			marker = new google.maps.Marker({
	// 	    	position: bestMarker,
	// 	    	map: map,
	// 	    	title: "Hello World!",
	// 	    	icon: 'img/icones/nonlu.svg'
	// 			});

	// 			infowindow.open(map,marker);
	// 			oldBestMarker = bestMarkerLiteral;
	// 		}
			
	// 		oldDistance = 0;
 //    	}
 //    	oldMapCenter = centerMap;
	// }, 500);


    // =========================== TOGGLES ===========================

    $(".nav-profil-photo").click(function(event) { $("#menuNotif").toggleClass("open"); })

    $(".posted-articles").click(function(event) {
    	if ( switchMosaic == true ) {
    		console.log("haha");
    		$(".shared-mosaic").toggleClass("hideit");
    		$(".posted-mosaic").toggleClass("hideit");
    		switchMosaic = !switchMosaic;
    		
    		$('.mosaic').packery({ itemSelector: '.item' });


    		$(".shared-articles").toggleClass("active");
    		$(".posted-articles").toggleClass("active");
    		switchArticles = !switchArticles;
    	}
    })

    $(".shared-articles").click(function(event) {
    	if ( switchMosaic == false ) {
    		console.log("hoho");
    		$(".shared-mosaic").toggleClass("hideit");
    		$(".posted-mosaic").toggleClass("hideit");
    		switchMosaic = !switchMosaic;

    		$('.mosaic').packery({ itemSelector: '.item' });


    		$(".posted-articles").toggleClass("active");
    		$(".shared-articles").toggleClass("active");
    		switchArticles = !switchArticles;
    	}
    })

    $(".showCreation").click(function(event) {
    	$(".creation").toggleClass("toggleArticle");
    	$(".closeCreation").toggleClass("toggleCloser");

    	if ($(".article").hasClass( "toggleArticle" )) {
    		$(".article").delay( 800 ).toggleClass("toggleArticle");
    		$(".closeArticle").delay( 800 ).toggleClass("toggleCloser");
    	}

    	if (($(".creation").hasClass( "toggleArticle" ) == false) && ($(".article").hasClass( "toggleArticle" ) == false)) {
    		$("#largeMap").removeClass("littlemap");
    		$("main").removeClass("away");
    		$(".nav-filtre").removeClass("notshew");
    		initialize();
    	}
    	else {
    		$("#largeMap").addClass("littlemap");
    		$("main").addClass("away");
    		$(".nav-filtre").addClass("notshew");
    	}

    	if ($(".creation").hasClass( "toggleArticle" )) {cleanMap();};
    })

    $(".showArticle").click(function(event) {
    	$(".article").toggleClass("toggleArticle");
    	$("main").toggleClass("away");
    	$("#largeMap").toggleClass("littlemap");
    	$(".closeArticle").toggleClass("toggleCloser");

    	if ($(".creation").hasClass( "toggleArticle" )) {
    		$(".creation").toggleClass("toggleArticle");
    		$(".closeCreation").toggleClass("toggleCloser");
    	}

    	if (($(".creation").hasClass( "toggleArticle" ) == false) && ($(".article").hasClass( "toggleArticle" ) == false)) {
    		$("#largeMap").removeClass("littlemap");
    		$("main").removeClass("away");
    		$(".nav-filtre").removeClass("notshew");
    		console.log("je suis la");
    		initialize();
    	}
    	else {
    		$("#largeMap").addClass("littlemap");
    		$("main").addClass("away");
    		console.log("je suis la");
    		$(".nav-filtre").addClass("notshew");
    	}

    	if ( $(".article").hasClass( "toggleArticle" ) ) {
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

    $(".registerForm, .fermeture").click(function(event) { $(".popupContainer").toggleClass("show"); })
    $(".toggleMessagerie").click(function(event) { $(".messagerieContainer").toggleClass("show"); })
    $(".toggleReponse").click(function(event) { $(".reponseContainer").toggleClass("show"); })

    $(".textBut").click(function(event) {
    	$(".slides").append('<div class="slide newslide ajoutText"> <div class="ajoutTitre"> <input type="text" name="fname" placeholder="Titre"/> </div> <div class="ajoutParagraphe"> <textarea name="textarea" rows="10" cols="50" placeholder="Saisir un texte ici."></textarea> </div> <div class="ajoutLieuText"> <input type="text" name="fname" placeholder="Ajouter une localisation"/> </div> <div class="handle"></div> <div class="deleteBut"></div> </div>');
    	reloadSlides();
    	$('#bazinga').animatescroll({element:'.creation', scrollSpeed:500});
    })

    $(".imgBut").click(function(event) {
    	$(".slides").append('<div class="slide newslide ajoutFile"> <div class="ajoutImg"> <input type="file" name="pic" accept="image/*" placeholder="Ajouter une localisation"/> </div> <div class="ajoutLieuImg"> <input type="text" name="fname" placeholder="Ajouter une localisation"/> </div> <div class="handle"></div> <div class="deleteBut"></div> </div>');
    	reloadSlides();
    	$('#bazinga').animatescroll({element:'.creation', scrollSpeed:500});
    })

    $(".vidBut").click(function(event) {
    	$(".slides").append('<div class="slide newslide ajoutFile"> <div class="ajoutVid"> <input type="file" name="vid" accept="video/*"/> </div> <div class="ajoutLieuVid"> <input type="text" name="fname" placeholder="Ajouter une localisation"/> </div> <div class="handle"></div> <div class="deleteBut"></div> </div> </div>');
    	reloadSlides();
    	$('#bazinga').animatescroll({element:'.creation', scrollSpeed:500});
    })

    function reloadSlides() {
    	$(".slides").packery({ itemSelector: '.slide' });

    	pckry.appended( $('.newslide') );
    	$('.newslide').removeClass('newslide');

    	var itemElems = pckry.getItemElements();

		for ( var i=0, len = itemElems.length; i < len; i++ ) {
			var elem = itemElems[i];
		  	// make element draggable with Draggabilly
		  	var draggie = new Draggabilly( elem, {
		  	 	handle: '.handle'
		  	} );
		  	// bind Draggabilly events to Packery
		  	pckry.bindDraggabillyEvents( draggie );
		}
    }

    /*$(".deleteBut").click(function(event) {
    	pckry.remove( event.target );
    })*/

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

	$(window).bind('hashchange', function() {
        var hash = location.hash;
        
        if ( hash == "#article" ) {
        	$(".article").toggleClass("toggleArticle");
			$("main").toggleClass("away");
			$("#largeMap").toggleClass("littlemap");
			$(".closeArticle").toggleClass("toggleCloser");

			if ($(".creation").hasClass( "toggleArticle" )) {
				$(".creation").toggleClass("toggleArticle");
				$(".closeCreation").toggleClass("toggleCloser");
			}

			if (($(".creation").hasClass( "toggleArticle" ) == false) && ($(".article").hasClass( "toggleArticle" ) == false)) {
				$("#largeMap").removeClass("littlemap");
				$("main").removeClass("away");
				initialize();
			}
			else {
				$("#largeMap").addClass("littlemap");
				$("main").addClass("away");
			}

			if ( $(".article").hasClass( "toggleArticle" ) ) {
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
		}
	});

});