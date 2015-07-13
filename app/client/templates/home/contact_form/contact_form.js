/*****************************************************************************/
/* ContactForm: Event Handlers */
/*****************************************************************************/
Template.ContactForm.events({
  'submit form#contactForm': function(e) {
    var contactForm = $(e.currentTarget),
      name = contactForm.find('#name').val(),
      email = contactForm.find('#email').val(),
      phone = contactForm.find('#phone').val(),
      message = contactForm.find("#message").val();

    //isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
    if (isFilled(name) && isFilled(email) && isFilled(phone) && isFilled(message) && isEmail(email)) {
      var dataText = "Message from: " + fname + " " + lname + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:" + message;
      //TODO fill this in 
      Meteor.call('sendEmail', dataText);
      //throwAlert is my helper method which creates popup with message
      throwAlert('Email send.', 'success');
    } else {
      throwAlert('An error occurred. Sorry', 'error');
      return false;
    }
  }
});

/*****************************************************************************/
/* ContactForm: Helpers */
/*****************************************************************************/
Template.ContactForm.helpers({});

/*****************************************************************************/
/* ContactForm: Lifecycle Hooks */
/*****************************************************************************/
Template.ContactForm.created = function() {};

Template.ContactForm.rendered = function() {};

Template.ContactForm.destroyed = function() {};
