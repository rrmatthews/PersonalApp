Template.feedback.onCreated(function() {
  //this.state = new ReactiveDict();
  Meteor.subscribe('feedback');
})

Template.feedback.helpers({
  feedbacklist() {return Feedback.find()}
})


Template.feedback.events({
  'click button' (element, instance) {
    const name = instance.$('#name').val();
    const textarea = $('#feedbackfield').val();
    console.log(name);
    console.log(textarea);

    instance.$('#name').val("");
    instance.$('#feedbackfield').val("");

    if (name != "" || feedbackfield != "") {
      console.log('adding '+name);
      var info =
        {
          Name:name,Feedback:textarea
        };
      console.log(info);
      Meteor.call('Feedback.update',info);
      // Meteor.call('Feedback.insert',info);
      console.log("done");
    } else {
      console.log('Invalid Entry...field is blank?');
    }

  }
})

Template.feedback.events({
  'click span'(element, instance) {
  console.log(this.feed._id);
  var feedID = this.feed._id

  Meteor.call('Feedback.remove',feedID);
  }
})
