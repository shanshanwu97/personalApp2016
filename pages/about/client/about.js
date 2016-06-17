Template.about.helpers({
	searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});}
})