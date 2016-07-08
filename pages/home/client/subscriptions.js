Meteor.subscribe("theDestSearched");
Meteor.subscribe("theSettings");
 const loca=Session.get("prefer");
// const loc='{destination:"'+loca+'"}';
Meteor.subscribe("theTrips",{});