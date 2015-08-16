Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  trackPageView: true
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['contact'] });

Router.onAfterAction(function () {
  // to load zurb foundation,
  // requires a couple seconds
  setTimeout(function () {
    $(document).foundation();
  }, 10);
});


// Router.route('mentors', {
//   name: 'mentors',
//   controller: 'MentorsController',
//   action: 'action',
//   where: 'client'
// });

Router.route('challenge', {
  name: 'challenge',
  controller: 'ChallengeController',
  action: 'action',
  where: 'client'
});

Router.route('contact', {
  name: 'contact',
  controller: 'ContactController',
  action: 'action',
  where: 'client'
});

Router.route('timeline', {
  name: 'timeline',
  controller: 'TimelineController',
  action: 'action',
  where: 'client'
});


Router.route('past_events', {
  name: 'pastEvents',
  controller: 'PastEventsController',
  action: 'action',
  where: 'client'
});

Router.route('faq', {
  name: 'faq',
  controller: 'FaqController',
  action: 'action',
  where: 'client'
});
