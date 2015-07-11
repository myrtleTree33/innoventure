/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  currentTweet: function() {
    return Session.get('currentTweet');
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function() {
  console.log('got here!');
  setInterval(function() {
    Session.set('currentTweet',
      Tweets
      .find({}, {
        sort: {
          timestamp_ms: -1
        },
        limit: 1
      })
      .fetch()[0]);
  }, 2000);

};

function isElementInViewport(elem) {
  var $elem = $(elem);
  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();
  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation(selector, actionCb) {
  var $elem = $(selector);
  // If the animation has already been started
  if ($elem.hasClass('start')) return;
  // Start the animation
  if (isElementInViewport($elem)) {
    $elem.addClass('start');
    actionCb();
  }
}


Template.Home.rendered = function() {
  function elemCountUp(section, id, start, end, duration) {
    var options = {  
      useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    checkAnimation(section, function() {
      var demo = new CountUp(id, start, end, 0, duration, options);
      demo.start();
    });
  }

  // Capture scroll events
  $(window).scroll(function() {
    elemCountUp('#stats-teams', 'stats-teams', 0, 60, 5);
    elemCountUp('#stats-hours', 'stats-hours', 0, 12380, 5);
    elemCountUp('#stats-prizes', 'stats-prizes', 0, 2000, 5);
    elemCountUp('#stats-awards', 'stats-awards', 0, 20, 5);
    elemCountUp('#stats-terms', 'stats-terms', 0, 2, 5);
    elemCountUp('#stats-startups', 'stats-startups', 0, 40, 5);
  });
};

Template.Home.destroyed = function() {};
