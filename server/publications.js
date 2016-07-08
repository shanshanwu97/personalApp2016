Meteor.publish("theDestSearched", function(){return DestSearched.find();});
Meteor.publish("theTrips", function(toShow){

	return Trips.find({destination: toShow});

});
Meteor.publish("theSettings", function(uid){
	if (this.userId){

				return Settings.find({user:uid});
	}else{
		this.ready();
	}
});
Meteor.publish("theBios", function(){return Bios.find();});



