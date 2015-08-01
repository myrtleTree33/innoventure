Meteor.startup(function() {
  loadTwitter();
});

function configEmail() {
  var username = null,
  password = null;
  process.env.MAIL_URL = 'smtp://' + username + ':' + password + '@smtp.gmail.com:587/';
};

function loadTwitter() {
  var twitter = new Twitter({
    consumer_key: Meteor.settings.twitter_consumer_key,
    consumer_secret: Meteor.settings.twitter_consumer_secret,
    access_token_key: Meteor.settings.twitter_access_token,
    access_token_secret: Meteor.settings.twitter_access_token_secret
  });

  twitter.stream('statuses/filter', {
    track: 'nusinnoventure'
  }, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet);
      if (Tweets.find().count() > 100) {
        Tweets.remove({});
      }
      Tweets.insert({
        screen_name: tweet.user.screen_name,
        timestamp_ms: tweet.timestamp_ms,
        text: tweet.text
      });
    });

    stream.on('error', function(error) {
      throw error;
    });
  });
};
