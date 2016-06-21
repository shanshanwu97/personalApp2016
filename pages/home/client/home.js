Template.home.helpers({
	searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});}
})
Template.home.events({
	"click .js-gogo": function(event){
		event.preventDefault();
		const destination=$(".js-loca").val().toLowerCase();
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
		
		
	}
})
Template.home.onCreated(function(){
	this.state= new ReactiveDict();
	this.state.setDefault({
		color:"bg-info",
		counter: 0,

	});
});
Template.home.helpers({
	theColor: function(){
		const instance = Template.instance();
		return instance.state.get("color");
	},
	theCounter: function(){
		const instance= Template.instance();
		return instance.state.get("counter");
	}
})