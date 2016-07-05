Meteor.publish("theDestSearched", function(){return DestSearched.find();});
Meteor.publish("theTrips", function(){

	return Trips.find();

});
Meteor.publish("theSettings", function(uid){
	if (this.userId){

				return Settings.find({user:uid});
	}else{
		this.ready();
	}
});
Meteor.publish("theFavs", function(uid){
	if (this.userId){

				return UserFavorites.find({user:uid});
	}else{
		this.ready();
	}
})



