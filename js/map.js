
  function initialise() {
    var myLatlng = new google.maps.LatLng(56.471995, 84.961872); // Add the coordinates
    var mapOptions = {
      zoom: 17, // The initial zoom level when your map loads (0-20)
      minZoom: 0, // Minimum zoom level allowed (0-20)
      maxZoom: 20, // Maximum soom level allowed (0-20)
      zoomControl:true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
      zoomControlOptions: {
          style:google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
      },
      center: myLatlng, // Centre the Map to our coordinates variable
      mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
      scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
      // All of the below are set to true by default, so simply remove if set to true:
      panControl:false, // Set to false to disable
      mapTypeControl:false, // Disable Map/Satellite switch
      scaleControl:false, // Set to false to hide scale
      streetViewControl:false, // Set to disable to hide street view
      overviewMapControl:false, // Set to false to remove overview control
      rotateControl:false, // Set to false to disable rotate control
      fullscreenControl:false
      }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions); // Render our map within the empty div
    var image = new google.maps.MarkerImage("/static/site/images/icon2.png", null, null, null, new google.maps.Size(49,79)); // Create a variable for our marker image.
    var marker = new google.maps.Marker({ // Set the marker
      position: myLatlng, // Position marker to coordinates
      icon:image, //use our image as the marker
      map: map, // assign the market to our map variable
      // filter:"grayscale(100%)!important",
      title: 'Click here for more details' // Marker ALT Text
    });
var styledMapType=new google.maps.StyledMapType(
 [
  {
    "stylers": [ 
      {
        "saturation": -100
      },
      {
        "lightness": 15
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#282828" }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#e0e0e0" }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  }
],
    {name:'Styled Map'}
  );
  map.mapTypes.set('styled_map',styledMapType);
  map.setMapTypeId('styled_map');
    //  google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
    //    window.location='https://www.snowdonrailway.co.uk/shop_and_cafe.php'; // URL to Link Marker to (i.e Google Places Listing)
    //  });
    var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow
        content:"<strong>г. Томск, ул. Гоголя, 58</strong>," // HTML contents of the InfoWindow
      });
    google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
        infowindow.open(map,marker); // Open our InfoWindow
      });
    google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(myLatlng); }); // Keeps the Pin Central when resizing the browser on responsive sites
  }
  google.maps.event.addDomListener(window, 'load', initialise); // Execute our 'initialise' function once the page has loaded.
