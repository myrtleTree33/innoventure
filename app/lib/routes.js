Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.onAfterAction(function () {
  // to load zurb foundation,
  // requires a couple seconds
  setTimeout(function () {
    $(document).foundation();
  }, 10);
});


Router.route('mentors', {
  name: 'mentors',
  controller: 'MentorsController',
  action: 'action',
  where: 'client'
});

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