Router.configure({
	layoutTemplate: 'layout',
}); //tells what template to use for layout, has to have yield
Router.route('/',{name:"home"});
Router.route('itineraries');
Router.route('about');
Router.route('comments');
Router.route('itdisplay');
Router.route('searchresults');
Router.route('settings');
Router.route('userfavs');
Router.route('messages');
Router.route('users');
Router.route('messageWindow');
Router.route('friends');
Router.route('userprofiles');
Router.route('profiledisplay');
Router.route('myitinerary');



Router.route('/showsearch/:_id',
	{name:"showSearch",
	 data: function(){
 		const c = Trips.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
		}
 	 }
	
);
Router.route('/showfavs/:_id',
	{name:"showFavs",
	data:function(){
		const c= Trips.findOne({_id:this.params._id});
		return c;
	}

});
Router.route('/showuser/:_id',
	{name:"showUser",
	data:function(){

	}

})

