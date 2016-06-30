Template.profiles.helpers({
	userprofiles: function(){return UserProfiles.find({}, {sort:{date_created:-1}});}
})