
Meteor.publish("theProfiles", function(){
				return UserProfiles.find({});
});


