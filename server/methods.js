Meteor.methods({ //defined only on the server won't be run on client
	sayhi: function(){
		console.log("hi");
	}
})