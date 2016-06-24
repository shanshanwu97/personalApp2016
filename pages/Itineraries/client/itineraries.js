Template.itineraries.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return Trips.find();
	}
})

Template.itineraries.events({
	"click .js-submit": function(event){
		console.log("hey u clicked");
		const name = $(".js-name").val();
		const dest = $(".js-desti").val().toLowerCase();
		const arrive = $(".js-arrive").val();
		const depart = $(".js-depart").val();
		const amount = $(".js-trv").val();
		const expenses = $(".js-ex").val();
		const desc= $(".js-descript").val();
		const titleOf=$(".js-title").val();
		const trip=
		{createdBy:name, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, amountOfTraveler: amount, expenses: expenses, description: desc

		}
		console.dir(trip);
		Trips.insert(trip);
		Router.go('selfdisplay');
	
	}
})