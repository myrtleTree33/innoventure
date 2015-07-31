/*****************************************************************************/
/* Timeline: Event Handlers */
/*****************************************************************************/
Template.Timeline.events({});

/*****************************************************************************/
/* Timeline: Helpers */
/*****************************************************************************/
Template.Timeline.helpers({});

/*****************************************************************************/
/* Timeline: Lifecycle Hooks */
/*****************************************************************************/
Template.Timeline.created = function() {};

Template.Timeline.rendered = function() {
  $(document).ready(function() {

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

    function select(selector) {
      $('.events').addClass('info');
      $(selector).removeClass('info');

    }

    function ifEventInView(selector, btnSelector) {
      if (!isElementInViewport(selector)) {
        return;
      }
      select(btnSelector);
    }


    var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
      (!window.requestAnimationFrame) ? setTimeout(function() {
        showBlocks(timelineBlocks, offset);
      }, 100): window.requestAnimationFrame(function() {
        showBlocks(timelineBlocks, offset);
      });

      // for the nav bar below
      ifEventInView('.event-0-top', '.event-0');
      ifEventInView('.event-1-top', '.event-1');
      ifEventInView('.event-2-top', '.event-2');
      ifEventInView('.event-3-top', '.event-3');
      ifEventInView('.event-4-top', '.event-4');
      ifEventInView('.event-5-top', '.event-5');
      ifEventInView('.event-6-top', '.event-6');
      ifEventInView('.event-7-top', '.event-7');
    });

    function hideBlocks(blocks, offset) {
      blocks.each(function() {
        ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      });
    }

    function showBlocks(blocks, offset) {
      $('.cd-timeline-block').each(function() {
        ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });
    }
  });

};



Template.Timeline.destroyed = function() {
  $(window).unbind('scroll');
};
