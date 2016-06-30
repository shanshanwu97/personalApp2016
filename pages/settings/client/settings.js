Template.settings.helpers({
	settings:function(){
		return Settings.findOne({user:Meteor.userId()});
	}
})

Template.settings.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const msg = $(".js-greeting").val();
		const setting=
			{user:Meteor.userId(), greetingmsg:msg};			
			Meteor.call("submitsettings", setting);

		
	}

})
