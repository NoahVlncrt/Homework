Meteor.publish("assignments", function() {
  return Assignments.find();
});