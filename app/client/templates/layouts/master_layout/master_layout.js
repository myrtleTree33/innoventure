Template.MasterLayout.helpers({});

Template.MasterLayout.events({});

Template.MasterLayout.rendered = function() {
  $(document).ready(function() {

    // hack to push mobile top menu to original closed
    // position upon clicking
    $('nav.top-bar > .top-bar-section > .right').on('click', function(e) {
      if ($(e.target).parent().has('ul').length === 0) {
        $('nav.top-bar').removeClass('expanded').animate({
        });
      }
    });


  });
};
