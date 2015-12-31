
Template.body.helpers({
  assignments: function() {
    var currentUserId = this.userId;
    return Assignments.find({}, {sort:{createdAt: -1}
    });
  }
})
Template.assignment.events({
	'submit .editAssignment': function() {
  	event.preventDefault();
  	var title = event.target.title.value;
  	var description = event.target.title.value;
  	
  	Assignments.update(this._id, {$set: {
  		title: title,
  		description: description,
  		editing: false
  		},
  	});
  },
  'click .delete': function() {
    Assignments.remove(this._id);
  },
  'click .edit': function() {
  	Assignments.update(this._id,{$set: {editing:true}});
  }
});	

Template.body.events({
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
        createdAt: createdAt,
        editing: false
      });

    event.target.title.value = "";
    event.target.description.value = "";
  }
});