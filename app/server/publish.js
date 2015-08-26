/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('mentors', function (/* args */) {
  return Mentors.find();
});

Meteor.publish('challenge', function (/* args */) {
  return Challenge.find();
});

Meteor.publish('contact', function (/* args */) {
  return Contact.find();
});

Meteor.publish('timeline', function (/* args */) {
  return Timeline.find();
});

Meteor.publish('past-events', function (/* args */) {
  return PastEvents.find();
});

Meteor.publish('faq', function (/* args */) {
  return Faq.find();
});

Meteor.publish('ongoing', function (/* args */) {
  return Ongoing.find();
});