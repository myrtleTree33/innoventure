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

Template.Home.rendered = function() {

  $('.leader-slogan-text').typed({
    strings: ["Design ^100 / Create ^100 / Disrupt"],
    typeSpeed: 10
  });

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

  function watchAnim(selector, animName) {
    checkAnimation(selector, function() {
      console.log('triggered');
      $(selector).addClass('animated ' + animName);
    });
  };

  var whatIsEntered = false;

  function watchWhatis() {
    checkAnimation('.whatis-meaning', function() {
      if (whatIsEntered) {
        return;
      }
      whatIsEntered = true;
      $('.whatis-meaning').typed({
        strings: ["[Origin: NUS] An engineering startup event &bull; to pitch ideas &bull; to make something special &bull; to meet people"],
        typeSpeed: 0
      });
    });
  };


  // Capture scroll events
  $(window).scroll(function() {
    elemCountUp('#stats-teams', 'stats-teams', 0, 60, 5);
    elemCountUp('#stats-hours', 'stats-hours', 0, 12380, 5);
    elemCountUp('#stats-prizes', 'stats-prizes', 0, 2000, 5);
    elemCountUp('#stats-awards', 'stats-awards', 0, 20, 5);
    elemCountUp('#stats-terms', 'stats-terms', 0, 2, 5);
    elemCountUp('#stats-startups', 'stats-startups', 0, 40, 5);
    watchAnim('.slogan2', 'fadeIn');
    watchAnim('.header-bootcamps', 'fadeInUp');
    watchAnim('.header-launch', 'fadeInUp');
    watchAnim('.header-demo', 'fadeInUp');
    watchAnim('.proof-quote', 'flipInY');
    watchAnim('.call-to-action', 'rubberBand');
    watchWhatis();
  });
};

Template.Home.destroyed = function() {
  // remove the scroll event so other
  // templates can use it
  $(window).unbind('scroll');
};
