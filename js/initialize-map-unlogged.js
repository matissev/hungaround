var contentStringRed = [
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-1.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-2.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-3.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

var contentStringGreen = [
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-4.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-5.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-6.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

var contentStringBlue = [
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-7.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-8.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>',
  '<div class="item p1x1 black-marker"><a href="#article" class="showArticle"><img src="img/photos/mosaic/1x1-9.jpg" alt="" class="item-img"/></a><div class="item-links"><a href="#" class="item-links-articleName showArticle">D&#39;est en ouest...</a><a href="lieu.html" class="item-links-lieu">Col de la Lyé</a><a href="profil.html" class="item-links-auteur">Francois Juste</a></div></div>'];

	function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(44.770137, 6.965332),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          streetViewControl: false
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
	    		icon: 'img/icones/black-marker.svg'
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
	    		icon: 'img/icones/black-marker.svg'
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
	    		icon: 'img/icones/black-marker.svg'
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
    	  mapTypeId: google.maps.MapTypeId.TERRAIN,
    	  streetViewControl: false
    	};
    	map = new google.maps.Map(document.getElementById("largeMap"), mapOptions);
    	map.setTilt(45);
		map.setHeading(90);
  	}