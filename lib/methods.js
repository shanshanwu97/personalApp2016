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
		
	},
	submitsettings: function(setting){
		
		if(Settings.find({user: Meteor.userId()}).count()==0){
			console.dir("Insert new User");
			Settings.insert(setting);
			
		}else{
			console.dir("User info updated");
			Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},{$set:setting});
		}
	},
	removesettings: function(){
		Settings.remove({});
	},
	addFav: function(fav){
		UserFavorites.insert(fav);
	},
	removefav: function(stuff){
		UserFavorites.remove(stuff);
	}
})