Template.quiz4.helpers({
	'seebios':function(){
		return Bios.find({});
	}
	
})
Template.quiz4.events({
	"click .js-update": function(event){
		const name=$(".js-name").val();
		const bio=$(".js-bio").val();
		const bioFinal=
		{
			name, bio
		}
		Meteor.call("insertbio", bioFinal);
	}
})