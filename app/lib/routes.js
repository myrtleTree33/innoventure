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
