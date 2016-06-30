Meteor.publish("theDestSearched", function(){return DestSearched.find();});
Meteor.publish("theTrips", function(){return Trips.find();});
Meteor.publish("theSettings", function(){
	// if (this.userId){
		//return Settings.find({});

		if(this.userId){
				return Settings.find();
	}else{
		this.ready();
	}
});


