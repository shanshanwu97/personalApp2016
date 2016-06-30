Template.settings.helpers({
	settings:function(){
		return Settings.findOne();
	}
})

Template.settings.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const msg = $(".js-greeting").val();
		const pre = $(".js-prefer").val();
		const setting=
			{user:Meteor.userId(), greetingmsg:msg, preferloc:pre};			
			Meteor.call("submitsettings", setting);

		
	}

})
