Template.itdisplay.helpers({
	// trips:function(){
	// 	// const dest= $(".js-dest").val();
	// 	return Trips.find();
	// }
	trips:function(){
	 return Session.get("userinput");
	}

})