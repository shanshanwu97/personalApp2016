Template.settings.helpers({
	'settings':function(){
		return Settings.findOne();
	},
	'users': function(){
		return Meteor.users.findOne({_id: Meteor.userId()});
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

		
	},
	"click .js-check": function(event){
		event.preventDefault();
		const urname=$(".js-username").val();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}
		else if (Meteor.users.find({userName:urname}).count()==0){
			alert("The username is available!");
		}else{
			alert("The username is not available! Please re-enter!");
		}
	},
	"click .js-submitname": function(event){
		event.preventDefault();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}else{
			const finalname=$(".js-username").val();
			Meteor.call("updateName", finalname);
		}
	},


})
