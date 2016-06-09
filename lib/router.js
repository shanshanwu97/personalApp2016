Router.configure({
	layoutTemplate: 'layout',
}); //tells what template to use for layout, has to have yield
Router.route('/',{name:"home"});
Router.route('about');
Router.route('comments');