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

Router.route('/showtrip/:_id',
	{name:"showTrip",
	 data: function(){
 		const c = Trips.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
		}
 	 }
	
);

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

})

