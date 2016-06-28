Session.set("budget", "");

Template.searchresults.onCreated(function(){
	this.state= new ReactiveDict();
	this.state.setDefault({
		budget:"Show All",

	});
	console.log("refining results");
	console.dir(this.state);
});
Template.searchresults.helpers({
	refineSearch: function(){
		const instance = Template.instance();
		return instance.state.get("budget");
	},
})
Template.searchresults.events({
	"change .js-refine": function(event, instance){
		console.log($(".js-refine").val());
		var refineResult= instance.$(".js-refine").val();
		if (refineResult=="Under $500"){
			refineResult=500;
		}else if(refineResult=="Under $1000"){
			refineResult=1000;
		}else if(refineResult=="Under $2000"){
			refineResult=2000;
		}else if(refineResult=="Under $3000"){
			refineResult=3000;
		}else if(refineResult=="Under $4000"){
			refineResult=4000;
		}else if(refineResult=="Over $5000"){
			refineResult="Over $5000";
		}else if (refineResult=="Under $5000"){
			refineResult=5000;
		}else{
			refineResult="Show All";
		}
		instance.state.set("budget", refineResult);
		Session.set("budget", refineResult);
	},

})
Template.searchresults.helpers({
	// searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	resultData: function(){
		let loc = Session.get("results");
		var bud= Session.get("budget");
		if (Session.get("budget")=="Show All"){
		return Trips.find({destination: loc},{sort:{datecreated: -1}});
	}else if(Session.get("budget")=="Over $5000"){
		return Trips.find({$and: [{destination: loc},{expenses: {$gt:5000}}]},{sort:{datecreated: -1}});
	}else{
		return Trips.find({$and: [{destination: loc},{expenses: {$lte:bud}}]},{sort:{datecreated: -1}});
	}
	},
})