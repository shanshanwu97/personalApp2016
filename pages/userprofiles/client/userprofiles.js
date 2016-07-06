
Template.profiledisplay.helpers({
	profile:function(){
		// const dest= $(".js-dest").val();
		return UserProfiles.find();
	}
})

Template.userprofiles.events({
	"click .js-submitinfo": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const fname = $(".js-name").val();

		const email = $(".js-email").val();
		const loc = $(".js-loc").val();
		const amount = $(".js-trv").val();
		
			const prof=
			{user:Meteor.userId(), name:fname, email:email, location:loc}; 
			Meteor.call("insertProf", prof);
			Router.go('profiledisplay');
			// //Router.go('profiledisplay');
		 // var fs =  $("#prof"), span = $( "<span>" + fs.val() + "</span>" + "     <span class='glyphicon glyphicon-pencil js-editname' aria-hidden='true'></span>");
 		// span.insertAfter(fs);
 		// fs.hide(); // or fs.hide(); in case you want it later.
 		//  // or fs.hide(); in case you want it later.
 		//  var em =  $("#profem"), span = $( "<span>" + em.val() + "</span>");
 		// span.insertAfter(em);
 		// em.hide(); // or fs.hide(); in case you want it later.
 		// var loca =  $("#profloc"), span = $( "<span>" + loc.val() + "</span>");
 		// span.insertAfter(loca);
 		// loca.hide(); // or fs.hide(); in case you want it later.
 		// var sub= $("#submitbut")
 		// sub.hide();
	},
	// "click .js-submitinfo": function(event){
	// 	event.preventDefault();
	// 	console.log("hey u clicked");
	// 	const fname = $(".js-fname").val();
	// 	const lname = $(".js-lname").val();
	// 	const email = $(".js-email").val();
	// 	const loc = $(".js-loc").val();
	// 	const amount = $(".js-trv").val();
		
	// 		const prof=
	// 		{user:Meteor.userId(), firstname:fname, lastname:lname, email:email, location:loc}; 
	// 		Meteor.call("insertProf", prof);
			//Router.go('profiledisplay');
		 // var fs =  $("#prof"), span = $( "<span id:'prof1'" + fs.val() + "</span>" + "     <span id='editname' class='glyphicon glyphicon-pencil js-editname' aria-hidden='true'></span>");
 		// span.insertAfter(fs);
 		// fs.hide(); // or fs.hide(); in case you want it later.
 		// var fl =  $("#profln"), span = $( "<span>" + fl.val() + "</span>");
 		// span.insertAfter(fl);
 		// fl.hide(); // or fs.hide(); in case you want it later.
 		//  var em =  $("#profem"), span = $( "<span>" + em.val() + "</span>");
 		// span.insertAfter(em);
 		// em.hide(); // or fs.hide(); in case you want it later.
 		// var loca =  $("#profloc"), span = $( "<span>" + loca.val() + "</span>");
 		// span.insertAfter(loca);
 		// loca.hide(); // or fs.hide(); in case you want it later.
 		// var sub= $("#submitbut")
 		// sub.hide();
	// },
	// "click .js-editname": function(event){
	// 	event.preventDefault();
	// 	var name=$("#prof"),
	// 	var exname=$("#prof1"),
	// 	exname.remove();

 // 		name.show();
	// }

})
