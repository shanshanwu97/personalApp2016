Meteor.methods({
	insertTrip: function(trip){
		Trips.insert(trip);
	},
	sayhilib: function(){
		console.log("hi");
	},
	removeTrip: function(trip){
		Trips.remove(trip);
	},
	tosearch: function(destination){
		if(DestSearched.find({location: destination}).count()==0){
			console.dir("New Destination added to database");
			const search_obj=
			{location: destination,
			searches: 1
			}
			DestSearched.insert(search_obj);
			
		}else{
			console.dir("Destination search incremented");
			DestSearched.update({_id:DestSearched.findOne({location:destination})._id},{$inc:{searches: 1}});
		}
		
	},
	submitsettings: function(setting){
		
		if(Settings.find({user: Meteor.userId()}).count()==0){
			console.dir("Insert new User");
			Settings.insert(setting);
			
		}else{
			console.dir("User info updated");
			Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},{$set:setting});
		}
	},
	removesettings: function(){
		Settings.remove({});
	},
	addFav: function(fav){
		UserFavorites.insert(fav);
	},
	removefav: function(stuff){
		UserFavorites.remove(stuff);
	},
	updateName: function(name){
		Meteor.users.update({_id: Meteor.userId()}, {$set:{userName:name}});
	},
	addMsg: function(msg){
		Messages.insert(msg);
	},
	removeMsg: function(){
		Messages.remove({});
	},
	addMsgBuddy: function(u2id){
		if (MsgBuddies.find({$and:[{user: Meteor.userId()},{userbuddy:u2id}]}).count()==0){
		const u1buddy={
			user: Meteor.userId(),
			userbuddy: u2id,
			userbuddyProfile: Meteor.users.findOne({_id:u2id}),
			//msgs: Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:u2id}]},{$and:[{user2:Meteor.userId()},{user1:u2id}]}]}, {sort:{msgcreatedAt:1}}),
		}
		MsgBuddies.insert(u1buddy);
	}
	if (MsgBuddies.find({$and:[{user: u2id},{userbuddy:Meteor.userId()}]}).count()==0){
		const u2buddy={
			user: u2id,
			userbuddy: Meteor.userId(),
			userbuddyProfile: Meteor.users.findOne({_id:Meteor.userId()}),
			//msgs: Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:u2id}]},{$and:[{user2:Meteor.userId()},{user1:u2id}]}]}, {sort:{msgcreatedAt:1}}),
		}
		MsgBuddies.insert(u2buddy);
	}
	},
	insertProf:function(prof){
		if (UserProfiles.find({user: Meteor.userId()}).count()==0){
			UserProfiles.insert(prof);
		}
	},
	textedits:function(id, textedit){
		Trips.findOne({_id:id},{$set:{textedit:textedit}});
	}

})