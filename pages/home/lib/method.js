Meteor.methods({
	"removeSearchResults": function(){
		DestSearched.remove({});
		console.log("search log removed");
	},
	// "removeAll": function(){
	// 	Connections.remove({});
	// 	console.log("removed everything!");
	// },
	
})