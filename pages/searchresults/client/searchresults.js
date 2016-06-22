Template.searchresults.helpers({
	// searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	resultData: function(){
		let loc = Session.get("results");
		return Trips.find({destination: loc},{sort:{datecreated: -1}});
	},
})
