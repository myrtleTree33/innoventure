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


var externalRoutes = {
  'registerme': 'http://goo.gl/forms/1FLz8qkdnO',
  'grouping': 'https://drive.google.com/open?id=1Pe-9Mkm0PwlvgY78eJgPhCcrvfNTv_7pfHISDacO1nM',
};

for (var key in externalRoutes) {
Router.route(key, {where: 'server'}).get(function() {
  this.response.writeHead(302, {
    'Location': externalRoutes[key] // replace with link to tegistration form
  });
  this.response.end();
});
}


Router.route('ongoing', {
  name: 'ongoing',
  controller: 'OngoingController',
  action: 'action',
  where: 'client'
});
