Meteor.methods({
	
	submitsettings: function(profile){
			UserProfiles.insert(profile);
	},
	removesettings: function(){
		UserProfiles.remove({});
	}
})