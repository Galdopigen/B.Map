      var styles = [[{
        url: 'img/heart_brown_30.png',
        height: 26,
        width: 30,
        anchor: [4, 0],
        textColor: '#ffffff',
        textSize: 10,
      }, {
        url: 'img/heart_brown_40.png',
        height: 34,
        width: 40,
        anchor: [8, 0],
        textColor: '#ffffff',
        textSize: 11
      }, {
        url: 'img/heart_brown_50.png',
        width: 50,
        height: 43,
        anchor: [12, 0],
		textColor: '#ffffff',
        textSize: 12
      }]];

      var markerClusterer = null;
      var map = null;
      var imageUrl = 'img/heart_brown_30.png';

      function refreshMap() {
        if (markerClusterer) {
          markerClusterer.clearMarkers();
        }

        var markers = [];

        var markerImage = new google.maps.MarkerImage(imageUrl);

        for (var i = 0; i < 71; ++i) {
          var latLng = new google.maps.LatLng(data.photos[i].latitude,
              data.photos[i].longitude)
          var marker = new google.maps.Marker({
            position: latLng,
            draggable: false,
            icon: markerImage
          });
          markers.push(marker);
        }

        var zoom = parseInt(document.getElementById('zoom').value, 10);
        var size = parseInt(document.getElementById('size').value, 10);
        var style = parseInt(document.getElementById('style').value, 10);
        zoom = zoom === -1 ? null : zoom;
        size = size === -1 ? null : size;
        style = style === -1 ? null: style;

        markerClusterer = new MarkerClusterer(map, markers, {
          maxZoom: zoom,
          gridSize: size,
          styles: styles[style]
        });
      }

      function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: new google.maps.LatLng(23.220859, 23.566448),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
		  styles: [
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {"visibility": "off", "color": "#888888"}
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {"visibility": "off"}
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {"color": "#fef8e2"}
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {"color": "#fec33b"}
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {"visibility": "on", "color": "#b5975d"}
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {"visibility": "off"}
        ]
    },
    
	{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {"color": "#e8a435"}
        ]
    },
	
	{
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            { }
        ]
    },
	
	{
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
		
        "stylers": [
            { }
        ]
    },
	
	{
        "featureType": "administrative.city",
        "elementType": "labels.text.fill",
        "stylers": [
            {"color": "#b5975d"}
        ]
    },
	
	{
        "featureType": "administrative.city",
		"elementType": "labels.icon",
        "stylers": [
            {"visibility": "off"}
        ]
    }
]	
        });       

        refreshMap();
		
		// MARKER 0 - Clonshaugh
		
		var content0 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Since our foundation in 1932, we have strived to bring a little happiness to the world one chocolate at a time.</p>' +

        '</div>';
		
		var infowindow0 = new google.maps.InfoWindow({
			content: content0,
			maxWidth: 350
		});	
	
		var marker0 = markerClusterer.markers_[0];
		
		google.maps.event.addListener(marker0, 'click', function() { 
			infowindow0.open(map, marker0);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow0.close();
		});
				
		google.maps.event.addListener(infowindow0, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 1 - Dublin Airport Terminal 1
		
		var content1 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Dublin Airport, Terminal 1</p>' +
        '</div>';
		
		var infowindow1 = new google.maps.InfoWindow({
			content: content1,
			maxWidth: 350
		});	
	
		var marker1 = markerClusterer.markers_[1];
		
		google.maps.event.addListener(marker1, 'click', function() { 
			infowindow1.open(map, marker1);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow1.close();
		});
				
		google.maps.event.addListener(infowindow1, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 2 - Dublin Airport Terminal 2
		
		var content2 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Dublin Airport, Terminal 2</p>' +
        '</div>';
		
		var infowindow2 = new google.maps.InfoWindow({
			content: content2,
			maxWidth: 350
		});	
	
		var marker2 = markerClusterer.markers_[2];
		
		google.maps.event.addListener(marker2, 'click', function() { 
			infowindow2.open(map, marker2);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow2.close();
		});
				
		google.maps.event.addListener(infowindow2, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 3 - Blanchardstown Centre
		
		var content3 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Blanchardstown Centre</p>' +
        '</div>';
		
		var infowindow3 = new google.maps.InfoWindow({
			content: content3,
			maxWidth: 350
		});	
	
		var marker3 = markerClusterer.markers_[3];
		
		google.maps.event.addListener(marker3, 'click', function() { 
			infowindow3.open(map, marker3);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow3.close();
		});
				
		google.maps.event.addListener(infowindow3, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 4 - Chatham Street
		
		var content4 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Chatham Street</p>' +
        '</div>';
		
		var infowindow4 = new google.maps.InfoWindow({
			content: content4,
			maxWidth: 350
		});	
	
		var marker4 = markerClusterer.markers_[4];
		
		google.maps.event.addListener(marker4, 'click', function() { 
			infowindow4.open(map, marker4);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow4.close();
		});
				
		google.maps.event.addListener(infowindow4, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 5 - Limerick
		
		var content5 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Limerick</p>' +
        '</div>';
		
		var infowindow5 = new google.maps.InfoWindow({
			content: content5,
			maxWidth: 350
		});	
	
		var marker5 = markerClusterer.markers_[5];
		
		google.maps.event.addListener(marker5, 'click', function() { 
			infowindow5.open(map, marker5);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow5.close();
		});
				
		google.maps.event.addListener(infowindow5, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 6 - Dundrum
		
		var content6 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Dundrum</p>' +
        '</div>';
		
		var infowindow6 = new google.maps.InfoWindow({
			content: content6,
			maxWidth: 350
		});	
	
		var marker6 = markerClusterer.markers_[6];
		
		google.maps.event.addListener(marker6, 'click', function() { 
			infowindow6.open(map, marker6);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow6.close();
		});
				
		google.maps.event.addListener(infowindow6, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 7 - Grafton Street
		
		var content7 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Grafton Street</p>' +
        '</div>';
		
		var infowindow7 = new google.maps.InfoWindow({
			content: content7,
			maxWidth: 350
		});	
	
		var marker7 = markerClusterer.markers_[7];
		
		google.maps.event.addListener(marker7, 'click', function() { 
			infowindow7.open(map, marker7);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow7.close();
		});
				
		google.maps.event.addListener(infowindow7, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 8 - Henry Street
		
		var content8 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Henry Street</p>' +
        '</div>';
		
		var infowindow8 = new google.maps.InfoWindow({
			content: content8,
			maxWidth: 350
		});	
	
		var marker8 = markerClusterer.markers_[8];
		
		google.maps.event.addListener(marker8, 'click', function() { 
			infowindow8.open(map, marker8);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow8.close();
		});
				
		google.maps.event.addListener(infowindow8, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 9 - Heuston Station
		
		var content9 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Heuston Station</p>' +
        '</div>';
		
		var infowindow9 = new google.maps.InfoWindow({
			content: content9,
			maxWidth: 350
		});	
	
		var marker9 = markerClusterer.markers_[9];
		
		google.maps.event.addListener(marker9, 'click', function() { 
			infowindow9.open(map, marker9);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow9.close();
		});
				
		google.maps.event.addListener(infowindow9, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 10 - Jervis
		
		var content10 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Jervis</p>' +
        '</div>';
		
		var infowindow10 = new google.maps.InfoWindow({
			content: content10,
			maxWidth: 350
		});	
	
		var marker10 = markerClusterer.markers_[10];
		
		google.maps.event.addListener(marker10, 'click', function() { 
			infowindow10.open(map, marker10);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow10.close();
		});
				
		google.maps.event.addListener(infowindow10, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 11 - Liffey Street
		
		var content11 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Liffey Street</p>' +
        '</div>';
		
		var infowindow11 = new google.maps.InfoWindow({
			content: content11,
			maxWidth: 350
		});	
	
		var marker11 = markerClusterer.markers_[11];
		
		google.maps.event.addListener(marker11, 'click', function() { 
			infowindow11.open(map, marker11);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow11.close();
		});
				
		google.maps.event.addListener(infowindow11, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 12 - Nassau Street
		
		var content12 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Nassau Street</p>' +
        '</div>';
		
		var infowindow12 = new google.maps.InfoWindow({
			content: content12,
			maxWidth: 350
		});	
	
		var marker12 = markerClusterer.markers_[12];
		
		google.maps.event.addListener(marker12, 'click', function() { 
			infowindow12.open(map, marker12);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow12.close();
		});
				
		google.maps.event.addListener(infowindow12, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');

		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 13 - Oliver Plunkett Street
		
		var content13 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Oliver Plunkett Street</p>' +
        '</div>';
		
		var infowindow13 = new google.maps.InfoWindow({
			content: content13,
			maxWidth: 350
		});	
	
		var marker13 = markerClusterer.markers_[13];
		
		google.maps.event.addListener(marker13, 'click', function() { 
			infowindow13.open(map, marker13);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow13.close();
		});
				
		google.maps.event.addListener(infowindow13, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 14 - Ranelagh
		
		var content14 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Ranelagh</p>' +
        '</div>';
		
		var infowindow14 = new google.maps.InfoWindow({
			content: content14,
			maxWidth: 350
		});	
	
		var marker14 = markerClusterer.markers_[14];
		
		google.maps.event.addListener(marker14, 'click', function() { 
			infowindow14.open(map, marker14);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow14.close();
		});
				
		google.maps.event.addListener(infowindow14, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 15 - Swords
		
		var content15 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Swords</p>' +
        '</div>';
		
		var infowindow15 = new google.maps.InfoWindow({
			content: content15,
			maxWidth: 350
		});	
	
		var marker15 = markerClusterer.markers_[15];
		
		google.maps.event.addListener(marker15, 'click', function() { 
			infowindow15.open(map, marker15);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow15.close();
		});
				
		google.maps.event.addListener(infowindow15, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 16 - Wicklow Street
		
		var content16 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Wicklow Street</p>' +
        '</div>';
		
		var infowindow16 = new google.maps.InfoWindow({
			content: content16,
			maxWidth: 350
		});	
	
		var marker16 = markerClusterer.markers_[16];
		
		google.maps.event.addListener(marker16, 'click', function() { 
			infowindow16.open(map, marker16);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow16.close();
		});
				
		google.maps.event.addListener(infowindow16, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 17 - William Street
		
		var content17 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Wicklow Street</p>' +
        '</div>';
		
		var infowindow17 = new google.maps.InfoWindow({
			content: content17,
			maxWidth: 350
		});	
	
		var marker17 = markerClusterer.markers_[17];
		
		google.maps.event.addListener(marker17, 'click', function() { 
			infowindow17.open(map, marker17);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow17.close();
		});
				
		google.maps.event.addListener(infowindow17, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 18 - Auckland
		
		var content18 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Auckland</p>' +
        '</div>';
		
		var infowindow18 = new google.maps.InfoWindow({
			content: content18,
			maxWidth: 350
		});	
	
		var marker18 = markerClusterer.markers_[18];
		
		google.maps.event.addListener(marker18, 'click', function() { 
			infowindow18.open(map, marker18);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow18.close();
		});
				
		google.maps.event.addListener(infowindow18, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 19 - Lower Hutt
		
		var content19 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Lower Hutt</p>' +
        '</div>';
		
		var infowindow19 = new google.maps.InfoWindow({
			content: content19,
			maxWidth: 350
		});	
	
		var marker19 = markerClusterer.markers_[19];
		
		google.maps.event.addListener(marker19, 'click', function() { 
			infowindow19.open(map, marker19);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow19.close();
		});
				
		google.maps.event.addListener(infowindow19, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 20 - Paraparaumu
		
		var content20 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Paraparaumu</p>' +
        '</div>';
		
		var infowindow20 = new google.maps.InfoWindow({
			content: content20,
			maxWidth: 350
		});	
	
		var marker20 = markerClusterer.markers_[20];
		
		google.maps.event.addListener(marker20, 'click', function() { 
			infowindow20.open(map, marker20);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow20.close();
		});
				
		google.maps.event.addListener(infowindow20, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 21 - Porirua
		
		var content21 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Porirua</p>' +
        '</div>';
		
		var infowindow21 = new google.maps.InfoWindow({
			content: content21,
			maxWidth: 350
		});	
	
		var marker21 = markerClusterer.markers_[21];
		
		google.maps.event.addListener(marker21, 'click', function() { 
			infowindow21.open(map, marker21);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow21.close();
		});
				
		google.maps.event.addListener(infowindow21, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 22 - Wellington
		
		var content22 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Wellington</p>' +
        '</div>';
		
		var infowindow22 = new google.maps.InfoWindow({
			content: content22,
			maxWidth: 350
		});	
	
		var marker22 = markerClusterer.markers_[22];
		
		google.maps.event.addListener(marker22, 'click', function() { 
			infowindow22.open(map, marker22);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow22.close();
		});
				
		google.maps.event.addListener(infowindow22, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 23 - Dolmen Mall
		
		var content23 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Dolmen Mall</p>' +
        '</div>';
		
		var infowindow23 = new google.maps.InfoWindow({
			content: content23,
			maxWidth: 350
		});	
	
		var marker23 = markerClusterer.markers_[23];
		
		google.maps.event.addListener(marker23, 'click', function() { 
			infowindow23.open(map, marker23);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow23.close();
		});
				
		google.maps.event.addListener(infowindow23, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 24 - Fortune Mall
		
		var content24 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Fortune Mall</p>' +
        '</div>';
		
		var infowindow24 = new google.maps.InfoWindow({
			content: content24,
			maxWidth: 350
		});	
	
		var marker24 = markerClusterer.markers_[24];
		
		google.maps.event.addListener(marker24, 'click', function() { 
			infowindow24.open(map, marker24);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow24.close();
		});
				
		google.maps.event.addListener(infowindow24, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 25 - Karachi Airport
		
		var content25 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Karachi Airport</p>' +
        '</div>';
		
		var infowindow25 = new google.maps.InfoWindow({
			content: content25,
			maxWidth: 350
		});	
	
		var marker25 = markerClusterer.markers_[25];
		
		google.maps.event.addListener(marker25, 'click', function() { 
			infowindow25.open(map, marker25);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow25.close();
		});
				
		google.maps.event.addListener(infowindow25, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 26 - Zamzama
		
		var content26 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Zamzama</p>' +
        '</div>';
		
		var infowindow26 = new google.maps.InfoWindow({
			content: content26,
			maxWidth: 350
		});	
	
		var marker26 = markerClusterer.markers_[26];
		
		google.maps.event.addListener(marker26, 'click', function() { 
			infowindow26.open(map, marker26);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow26.close();
		});
				
		google.maps.event.addListener(infowindow26, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 27 - Dubai Airport
		
		var content27 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Dubai Airport</p>' +
        '</div>';
		
		var infowindow27 = new google.maps.InfoWindow({
			content: content27,
			maxWidth: 350
		});	
	
		var marker27 = markerClusterer.markers_[27];
		
		google.maps.event.addListener(marker27, 'click', function() { 
			infowindow27.open(map, marker27);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow27.close();
		});
				
		google.maps.event.addListener(infowindow27, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		  
		// MARKER 28 - Bangladesh
		
		var content28 = '<div id="iw-container">' +
        '<div class="iw-title">Butlers Chocolate Café</div>' +
        '<div class="iw-content">' +
        '<img src="img/cafes/02.jpg" alt="" height="200">' +
        '<p>Bangladesh</p>' +
        '</div>';
		
		var infowindow28 = new google.maps.InfoWindow({
			content: content28,
			maxWidth: 350
		});	
	
		var marker28 = markerClusterer.markers_[28];
		
		google.maps.event.addListener(marker28, 'click', function() { 
			infowindow28.open(map, marker28);
		});	
			
		google.maps.event.addListener(map, 'click', function() {
			infowindow28.close();
		});
				
		google.maps.event.addListener(infowindow28, 'domready', function() {
		
			var iwOuter = $('.gm-style-iw');
		
			var iwBackground = iwOuter.prev();
		
			iwBackground.children(':nth-child(1)').css({'display' : 'none'});
			iwBackground.children(':nth-child(2)').css({'display' : 'none'});
			iwBackground.children(':nth-child(3)').css({'display' : 'none'});
			iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		
			iwOuter.parent().parent().css({left: '115px'});
			
			var iwCloseBtn = iwOuter.next();
		
			iwCloseBtn.css({'opacity': '1', right: '70px', top: '33px', 'border-radius': '13px'});
			
		  });
		   
	  } // END function initialize()


      function clearClusters(e) {
        e.preventDefault();
        e.stopPropagation();
        markerClusterer.clearMarkers();
      }

      google.maps.event.addDomListener(window, 'load', initialize);
