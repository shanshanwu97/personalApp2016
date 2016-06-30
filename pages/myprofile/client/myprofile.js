

Template.myprofile.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const fname = $(".js-firstname").val();
		const lname = $(".js-lastname").val();
		const nname= $(".js-nickname").val();
		const eml= $(".js-email").val();
		const birthyr= $(".js-birthyear").val();
		const profile=
			{user:Meteor.userId(), firstname: fname, lastname: lname, nickname:nname, email: eml, birthyear: birthyr};			
			Meteor.call("submitsettings", profile);
		Router.go('profiles');

		
	}

})
