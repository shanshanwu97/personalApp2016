Template.myitinerary.helpers({
	userit:function(){
		return Trips.find();
	}
})
Template.myitinerary.onCreated(function() {
  Session.set('data', []); // on page load, set this to have no inputs
});

Template.showSearch.helpers({
  inputs: function () {
    return Session.get('data'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }
});

// Now we'll set up a click handler to add inputs to our array when we   click the "add" button
Template.showSearch.events({
  'click #add': function () {
    var inputs = Session.get('data');
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
    inputs&&inputs.push({uniqid: uniqid, datecreated: new Date(), cvalue: ""});
    Session.set('data', inputs);
  }, 
  'click .js-subtext':function(){
  	const getdata=Session.get('data');
  	console.log(getdata);
  	Meteor.call("textedits", $(".js-idd").val(), )
  }
});
// We also need handlers for when the inputs themselves are changed / removed
Template.input.events({
  'click .remove-input': function(event) { 
  	event.preventDefault();
    var uniqid = $(event.currentTarget).attr('uniqid');
    inputs = Session.get('data');
    inputs = _.filter(inputs, function(x) { return x.uniqid != uniqid; });
    Session.set('data', inputs);
  },
  'change input': function(event) { 
    var $input = $(event.currentTarget);
    var uniqid = $input.attr('uniqid');
    inputs = Session.get('data');
    index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });
    inputs[index].value = $input.val();
    Session.set('data', inputs);
  }
});
