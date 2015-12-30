Meteor.publish("assignments", function() {
	var currentUserId = this.userId;
  return Assignments.find({createdBy: currentUserId});
});