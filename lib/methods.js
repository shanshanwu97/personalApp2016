Meteor.methods({
	insertTrip: function(trip){
		Trips.insert(trip);
	},
	sayhilib: function(){
		console.log("hi");
	},
	tosearch: function(destination){
		// 
		// const destination=$(".js-loca").val().toLowerCase();
		
		// Router.go('searchresults');
		// let loc=Session.get("results");
		// Session.set("results", destination);
		// Meteor.call("search", destination);
		if(DestSearched.find({location: destination}).count()==0){
			console.dir("New Destination added to database");
			const search_obj=
			{location: destination,
			searches: 1
			}
			DestSearched.insert(search_obj);
			
		}else{
			console.dir("Destination search incremented");
			DestSearched.update({_id:DestSearched.findOne({location:destination})._id},{$inc:{searches: 1}});
		}
		
	}
})