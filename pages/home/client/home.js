Session.set("results", "0");
Template.home.helpers({
	searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	// resultData: function(){
	// 	let loc = Session.get("results");
	// 	return Trips.find({destination: loc},{sort:{datecreated: -1}});
	// },
})
Template.home.events({
	"click .js-gogo": function(event){
		// event.preventDefault();
		const destination=$(".js-loca").val().toLowerCase();
		Session.set("results", destination);
		// // Meteor.call("search", destination);
		// if(DestSearched.find({location: destination}).count()==0){
		// 	console.dir("New Destination added to database");
		// 	const search_obj=
		// 	{location: destination,
		// 	searches: 1
		// 	}
		// 	DestSearched.insert(search_obj);
			
		// }else{
		// 	console.dir("Destination search incremented");
		// 	DestSearched.update({_id:DestSearched.findOne({location:destination})._id},{$inc:{searches: 1}});
		// }
		Meteor.call("tosearch", destination);
		Router.go('searchresults');
		
	}
})
Template.home.onCreated(function(){
	this.state= new ReactiveDict();
	this.state.setDefault({
		color:"bg-info",
		counter: 0,

	});
	console.log("creating the template");
	console.dir(this.state);
});
Template.home.helpers({
	theColor: function(){
		const instance = Template.instance();
		return instance.state.get("color");
	},
	theCounter: function(){
		const instance= Template.instance();
		return instance.state.get("counter");
	}
})
Template.home.events({
	"change .js-color": function(event, instance){
		console.log($(".js-color").val());
		const newColor= instance.$(".js-color").val();
		instance.state.set("color", newColor);
	},
	"click .js-pusher":function(event, instance){
		const newCounter=instance.state.get("counter");
		instance.state.set("counter", newCounter+1);
	},
})