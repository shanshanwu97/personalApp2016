Session.set("userinput",0);
Template.itineraries.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return Trips.find();
	}
})

Template.itineraries.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const name = $(".js-name").val();
		const dest = $(".js-desti").val().toLowerCase();
		const arrive = $(".js-arrive").val();
		const depart = $(".js-depart").val();
		const amount = $(".js-trv").val();
		const expenses = Number($(".js-ex").val());
		const desc= $(".js-descript").val();
		const titleOf=$(".js-title").val();
		const trip=
		{createdBy:name, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, amountOfTraveler: amount, expenses: expenses, description: desc

		}
		Session.set("userinput",trip);

		//console.dir(trip);
		Meteor.call("insertTrip", trip);
		// Trips.insert(trip);
		Router.go('itdisplay');
	
	}
})