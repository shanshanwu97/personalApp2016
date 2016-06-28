Template.comments.helpers({
  getFEContext: function () {
    var self = this;
    return {
      // Set html content
      _value: self&&self.myDoc&&self.myDoc.myHTMLField,
      // Preserving cursor markers
      _keepMarkers: true,
      // Override wrapper class 
      _className: "froala-reactive-meteorized-override",

      // Set some FE options
      toolbarInline: true,
      initOnClick: false,
      tabSpaces: false,

      // FE save.before event handler function:
      "_onsave.before": function (e, editor) {
        // Get edited HTML from Froala-Editor
        var newHTML = editor.html.get(true /* keep_markers */);
        // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:
        if (!_.isEqual(newHTML, (self&&self.myDoc&&self.myDoc.myHTMLField))) {
          console.log("onSave HTML is :"+newHTML);
          myCollection.update({_id: self.myDoc._id}, {
            $set: {myHTMLField: newHTML}
          });
        }
        return false; // Stop Froala Editor from POSTing to the Save URL
      },
    }
  },
})
// Template.comments.helpers({
// 	commentsdata: function(){return Comments.find({}, {sort:{createdAt:-1}, limit:3});},
// 	supercomments: function(){ //filters
// 		return comments.find({rating:5})
// 	}

// })

// Template.comments.events({
// 	// "click .js-submit-comment ": function(event){
// 	// 	event.preventDefault();
// 	// 	console.dir(event); //print out event 
// 	// 	const comment_text= $(".js-user-comment").val();
// 	// 	if (comment_text==""){
// 	// 		window.alert("You must enter a comment!");
// 	// 		return;
// 	// 	}
// 	// 	const comment_rating=$(".js-user-rating").val();
// 	// 	const comment_obj =
// 	// 	{text: comment_text,
// 	// 	rating: comment_rating,
// 	// 	createdAt: new Date(),
// 	// 	createdBy: Meteor.userId(),
// 	// 	userEmail: Meteor.user().emails[0].address
// 	// 	}
// 	// 	//console.dir(comment_obj);
// 	// 	Comments.insert(comment_obj); //inserts the comment into collection locally then to the server then to everyone
// 	// 	$(".js-user-comment").val("");
// 	// 	$(".js-user-rating").val("");
// 	// 	//Router.go('/'); //returns back to homepage
// 	// 	console.log("Did we get here????");
// 	// }
	
// })
// Template.comments.events({
// 	// "click .js-delete-comment ":function(event){
// 	// 	console.log("clicked on the x"); //debug
// 	// 	console.dir(this);
// 	// 	window.alert("You are about to delete this comment!");
// 	// 	Comments.remove(this.comment._id);  //callback->this <--removes object created
// 	// }
// })