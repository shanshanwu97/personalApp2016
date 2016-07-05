Session.set("results", "0");
Template.home.helpers({
	searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	msg:function(){return Settings.findOne({user:Meteor.userId()})},
	// preferloca:function(){
	// 	var loc= Settings.findOne({user:Meteor.userId()}, {fields:{preferloc:1}});
	// 	Session.set("prefer", loc&&loc.preferloc);
	// 	//const loca=loc.preferloc
	// 	return loc&&loc.preferloc;
	// },
	usersearch:function(){
		//return Session.get("prefer");
		return Trips.find();
	}
})
Template.home.events({
	"click .js-gogo": function(event){
		// event.preventDefault();
		const destination=$(".js-loca").val().toLowerCase();
		Session.set("results", destination);

		Meteor.call("tosearch", destination);
		Router.go('searchresults');
		
	}
})
// Template.home.onCreated(function(){
// 	this.state= new ReactiveDict();
// 	this.state.setDefault({
// 		color:"bg-info",
// 		counter: 0,

// 	});
// 	console.log("creating the template");
// 	console.dir(this.state);
// });
// Template.home.helpers({
// 	theColor: function(){
// 		const instance = Template.instance();
// 		return instance.state.get("color");
// 	},
// 	theCounter: function(){
// 		const instance= Template.instance();
// 		return instance.state.get("counter");
// 	}
// })
// Template.home.events({
// 	"change .js-color": function(event, instance){
// 		console.log($(".js-color").val());
// 		const newColor= instance.$(".js-color").val();
// 		instance.state.set("color", newColor);
// 	},
// 	"click .js-pusher":function(event, instance){
// 		const newCounter=instance.state.get("counter");
// 		instance.state.set("counter", newCounter+1);
// 	},
// })