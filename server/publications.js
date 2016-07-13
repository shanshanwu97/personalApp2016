Meteor.publish("theDestSearched", function(){return DestSearched.find();});
Meteor.publish("theTrips", function(what){

	return Trips.find(what);

});
Meteor.publish("theSettings", function(){
	if (this.userId){

				return Settings.find({user:this.userId});
	}else{
		this.ready();
	}
});
Meteor.publish("theFavs", function(){
	if (this.userId){

				return UserFavorites.find({user:this.userId});
	}else{
		this.ready();
	}
});
Meteor.publish("userData", function () {
  if (this.userId) {
	  return Meteor.users.find({}); //, //{_id: this.userId},
                             //{fields: {'profile': 1, 'things': 1}});
  } else {
    this.ready();
  }
});
Meteor.publish("theMessages", function(){
	if (this.userId){
		return Messages.find({$or: [{user1: this.userId}, {user2:this.userId}]});
	}else{
		this.ready();
	}
})
Meteor.publish("theMsgBuddies", function(){
	if (this.userId){
		return MsgBuddies.find({user:this.userId});
	}else{
		this.ready();
	}
})
Meteor.publish("theFriends", function(){
	if (this.userId){
		return Friends.find({user:this.userId});
	}else{
		this.ready();
	}
})
Meteor.publish("theProfiles", function(){
	if (this.userId){
		return UserProfiles.find({user:this.userId});
	}else{
		this.ready();
	}
})
Meteor.publish("fileUploads", function () {
  console.log("publishing fileUploads");
  return YourFileCollection.find();
});




