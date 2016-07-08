Session.set("userinput",0);
Template.itineraries.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return Trips.find();
	}
})

Template.itineraries.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const desti=$(".js-dest1").val().toLowerCase();
		var dest = [{
			uniqid:Math.floor(Math.random() * 100000),
			value: desti}];
		var dest2=Session.get("inputs");
		dest= dest.concat(dest2);
		const arrive = $(".js-arrive").val();
		const depart = $(".js-depart").val();
		const amount = $(".js-trv").val();
		if (!isNumeric($(".js-ex").val())){
			alert("Please enter a valid number!");
		}else if (!($(".js-title").val())){
			alert("Please enter a valid title!");
		}else{
			const expenses = Number($(".js-ex").val());
			const desc= $(".js-descript").val();
			const titleOf=$(".js-title").val();
			const username=Meteor.users.findOne({_id:Meteor.userId()},{fields:{userName:1}});
			const ur=username&&username.userName;
			const img=$(".js-img").val();
			const txt=[{uniqid:0, value:""}];
			const trip=
			{createdBy:Meteor.userId(), username: ur, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, amountOfTraveler: amount, expenses: expenses, image: img,description: desc, textedit:txt

			}
			Session.set("userinput",trip);
			Meteor.call("insertTrip", trip);
			Router.go('itdisplay');
		}
	}

})
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
//client only code
Template.itineraries.onCreated(function() {
  Session.set('inputs', []); // on page load, set this to have no inputs
});

Template.itineraries.helpers({
  inputs: function () {
    return Session.get('inputs'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }
});

// Now we'll set up a click handler to add inputs to our array when we   click the "add" button
Template.itineraries.events({
  'click #add-input': function () {
    var inputs = Session.get('inputs');
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
    inputs.push({uniqid: uniqid, value: ""});
    Session.set('inputs', inputs);
  }
});
// We also need handlers for when the inputs themselves are changed / removed
Template.input.events({
  'click .remove-input': function(event) { 
  	event.preventDefault();
    var uniqid = $(event.currentTarget).attr('uniqid');
    inputs = Session.get('inputs');
    inputs = _.filter(inputs, function(x) { return x.uniqid != uniqid; });
    Session.set('inputs', inputs);
  },
  'change input': function(event) { 
    var $input = $(event.currentTarget);
    var uniqid = $input.attr('uniqid');
    inputs = Session.get('inputs');
    index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });
    inputs[index].value = $input.val().toLowerCase();
    Session.set('inputs', inputs);
  }
});