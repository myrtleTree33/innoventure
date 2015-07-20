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