Meteor.subscribe("theDestSearched");
Meteor.subscribe("theSettings",Meteor.userId());
 const loca=Session.get("prefer");
// const loc='{destination:"'+loca+'"}';
Meteor.subscribe("theTrips", "los angeles");