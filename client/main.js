Meteor.subscribe("assignments");


Template.body.helpers({
  assignments: function() {
    var currentUserId = this.userId;
    return Assignments.find({}, {sort:{createdAt: -1}
    });
  }
})
Template.body.events({
  'click .delete': function() {
    Assignments.remove(this._id);
  },
  'submit .create-assignment': function() {
    event.preventDefault();

    var title = event.target.title.value;
    var description = event.target.description.value;
    var createdBy = Meteor.userId();
    var createdAt = new Date();

    Assignments.insert({
        title: title,
        description: description,
        createdBy: createdBy,
        createdAt: createdAt
      });

    event.target.title.value = "";
    event.target.description.value = "";
  }
});
Template.body.onRendered(function() {
  BlazeLayout.render('developmentpopup');
})