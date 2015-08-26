Meteor.startup(function() {
  configAccounts();
  loadTwitter();
  generateFaqs();

});

function configAccounts() {
  Meteor.users.remove({}); // clear all user accounts


  var userObject = {
    username: Meteor.settings.member_username,
    email: Meteor.settings.member_email,
    password: Meteor.settings.member_password
  };

  Accounts.createUser(userObject);

  Accounts.config({
    forbidClientAccountCreation: true
  });
}

function generateFaqs() {
  var faqs = [{
    qn: 'What is InnoVenture?',
    ans: 'InnoVenture is the technopreneurship platform for students at the Faculty of Engineering, National University of Singapore.'
  }, {
    qn: 'Who can participate in InnoVenture?',
    ans: 'Anyone who is enrolled at NUS for AY2015/2016 can sign up irrespective of their faculty or whether they are studying Bachelors, Masters or PhD.'
  }, {
    qn: 'How many people participate in InnoVenture?',
    ans: 'In the first year 160 students in 36 teams participated, last year 274 students in 54 teams participated.'
  }, {
    qn: 'What is the background of the students?',
    ans: 'InnoVenture is open to all graduate levels and faculties at NUS. Teams are encouraged to form multi-disciplinary teams as much as possible to enhance creativity and skillset within the team.'
  }, {
    qn: 'Which companies are involved in InnoVenture?',
    ans: 'In the past 2 years we’ve had the honor of having JTC, NUS OFM, BP, Nestle, Total, NUH, Dow Corning as our problem statement providers, and Mediatek and Keppel OFM as our sponsors.'
  }, {
    qn: 'How many people per team?',
    ans: 'Teams are minimum 2, maximum 4'
  }, {
    qn: 'What is the best team composition?',
    ans: 'We highly recommend forming a team with varied backgrounds (i.e. business & engineering skills). The past 2 winners of InnoVenture were multi-disciplinary!'
  }, {
    qn: 'I would like to participate but I don’t have a team, what do I do?',
    ans: 'You can sign up individually! We will help you to form a team with other individual signups. Do join us for the first networking session; a great opportunity to meet others and form a team!'
  }, {
    qn: 'Can I earn credits by participating in InnoVenture?',
    ans: 'Credits (2MC + 2MC) are only available for NUS Faculty of Engineering undergraduate students.  For more information and the eligibility criteria please see: <a href="http://www.tip.eng.nus.edu.sg/">http://www.tip.eng.nus.edu.sg/</a>. Signup for the TIP program will open near the date of the first bootcamp'
  }, {
    qn: 'Do I have to attend the bootcamps?',
    ans: 'The bootcamps are invaluable for your success in the competition! If you are enrolled under TIP for credits then it is <b>mandatory</b> for you to attend all bootcamps and pitch at IdeaLaunch.'
  }, {
    qn: 'Where is the teaching team from?',
    ans: 'InnoVenture is supported by the Institute of Engineering Leadership – Enterprise Development Lab (<a href="http://www.tip.eng.nus.edu.sg/">http://www.eng.nus.edu.sg/iel/</a>) . For enquiries please contact vinod @ nus.edu.sg or r.sie @ nus.edu.sg .'
  }, {
    qn: 'How long does the competition run for?',
    ans: 'The competition runs for 2 academic semesters. The first phase of the semester involves the 2 Technopreneurship bootcamps, 1 Product Development Bootcamp and IdeaLaunch; it runs from Sept-Oct 2015.  If your team is selected as a finalist team from IdeaLaunch, you will advance to the 2nd phase which runs from Nov 2015 – March 2016 and culminates at DemoDay.'
  }, {
    qn: 'Can I just join for the Product Development Bootcamp?',
    ans: 'Unfortunately we cannot allow individuals not competing in InnoVenture to join the Product Development Bootcamp.'
  }, {
    qn: 'I would like to sponsor or provide a problem statement for the competition, how can I get involved?',
    ans: 'Please write to innoventure.nus @ gmail.com and put “Interest to sponsor/provide problem statement – Name” in the subject. We will reach out to you as soon as possible.'
  }, {
    qn: 'I would like to join the InnoVenture committee, can I get in touch with someone to know more about the roles and process?',
    ans: 'Of course! InnoVenture is always looking for people to join the committee! Please write to innoventure.nus @ gmail.com and put “Interest in Joining the Committee – Name” in the subject. We will reach out to you as soon as possible!'
  }, {
    qn: 'Should I join?',
    ans: 'YES :) What are you waiting for?'
  }];
  Faq.remove({});
  _.each(faqs, function(faq, ref) {
    faq.ref = ref;
    Faq.insert(faq);
  });
};

// ----------------------

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
