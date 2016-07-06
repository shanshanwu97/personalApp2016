Session.get("msgto", 0);
Template.users.helpers({
	'users': function(){
		return Meteor.users.find();
	}

})
Template.users.events({
	
})
Template.eachuser.events({
	'click .js-seeprofile': function(event){

	},
	'click .js-newmsg': function(event){
		event.preventDefault();
		Session.set("msgto",this.user&&this.user._id); //check this!!!!
		Router.go("messageWindow");
	},
})

