Template.layout.events({
	"click .js-search": function(event){
		event.preventDefault();
		const destination=$(".js-locat").val().toLowerCase();
		Session.set("results", destination);

		Meteor.call("tosearch", destination);
		Router.go('searchresults');
		
	},
})