/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  /*
   * Example:
   *
   * '/app/items/insert': function (item) {
   * }
   */
   sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //actual email sending method
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
