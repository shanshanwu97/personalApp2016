Template.messages.helpers({
	'messages':function(){
		return Messages.find();
	},
	'specmessages':function(){
		return Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:Session.get("msgto")}]},{$and:[{user2:Meteor.userId()},{user1:Session.get("msgto")}]}]}, {sort:{msgcreatedAt:1}});
	},
	'users': function(){
		return Meteor.users.find();
	},
	currentmsgs:function(){
		
		const u1=Meteor.users.findOne({_id:Meteor.userId()},{userName:1});

		return user1==(u1&&u1.userName);
	},
	'userbuddies':function(){
		return MsgBuddies.find({},{field:{userbuddy:1}});
	},
	usermsgs: function(userbud){
		var user=userbud&&userbud.userbuddy;
		return Meteor.users.findOne({_id:user});
	},
	latestmsg: function(userbud){
		return Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:userbud}]},{$and:[{user2:Meteor.userId()},{user1:userbud}]}]}, {$sort:{msgcreatedAt:1}}, {$limit:1});
	}

})
Template.messages.events({
	'click .js-newmsg': function(event){
		event.preventDefault();
		Router.go("users");
	},
	
})
Template.messageWindow.helpers({
	// 'messages':function(){
	// 	return Messages.find();
	// },
	// 'users': function(){
	// 	return Meteor.users.find();
	// },
	'specmessages':function(){
		return Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:Session.get("msgto")}]},{$and:[{user2:Meteor.userId()},{user1:Session.get("msgto")}]}]}, {sort:{msgcreatedAt:1}});
	},
	

})
Template.messageWindow.helpers({
	mainUser:function(user1){
		
		const u1=Meteor.users.findOne({_id:Meteor.userId()},{userName:1});

		return user1==(u1&&u1.userName);
	}
})
Template.messageWindow.events({
	'click .js-submitmsg': function(event){
		console.log("submitted msg");
		const msg = $(".js-msg").val();
		var u1= Meteor.users.findOne({_id:Meteor.userId()},{userName:1});
		var u1un=u1&&u1.userName;
		console.log(u1un);
		const u2id=Session.get("msgto")
		const u2= Meteor.users.findOne({_id:u2id},{userName:1});
		var u2un=u2&&u2.userName;
		const msgs={
			user1:u1&&u1._id,
			user1name:u1un,
			user2:u2&&u2._id,
			user2name:u2un,
			msgcreatedAt: new Date(),
			message: msg
		};
		Meteor.call("addMsgBuddy", u2id);
		Meteor.call("addMsg",msgs);
	}
})
Template.eachuser2.events({
	'click .js-seeprofile': function(event){

	},
	'click .js-nmsg': function(event){
		event.preventDefault();
		Session.set("msgto",this.user&&this.user._id); //check this!!!!
		Router.go("messageWindow");
	},
})
