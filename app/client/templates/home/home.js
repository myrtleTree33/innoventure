/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

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
Template.Home.created = function () {
  console.log('got here!');
  setInterval(function(){
     Session.set('currentTweet',
     Tweets
     .find({}, {sort: {timestamp_ms : -1}, limit: 1 })
       .fetch()[0]);
  }, 2000);
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
