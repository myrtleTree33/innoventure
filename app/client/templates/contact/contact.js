/*****************************************************************************/
/* Contact: Event Handlers */
/*****************************************************************************/
Template.Contact.events({});

/*****************************************************************************/
/* Contact: Helpers */
/*****************************************************************************/
Template.Contact.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(1.300259, 103.770791),
        zoom: 15,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      };
    }
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.created = function() {};

Template.Contact.rendered = function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
};

Template.Contact.destroyed = function() {};
