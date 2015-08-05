/*****************************************************************************/
/* Faq: Event Handlers */
/*****************************************************************************/
Template.Faq.events({});

/*****************************************************************************/
/* Faq: Helpers */
/*****************************************************************************/
Template.Faq.helpers({
  faqs: function() {
    return Faq.find({});
  }
});

// Template.faqItem.helpers({
//   prevRef: function(ref) {
//     return parseInt(ref) - 2;
//   }
// });

/*****************************************************************************/
/* Faq: Lifecycle Hooks */
/*****************************************************************************/
Template.Faq.created = function() {};

Template.Faq.rendered = function() {
  $(document).foundation('accordion', 'reflow');
};

Template.Faq.destroyed = function() {};
