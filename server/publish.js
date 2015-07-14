/*
Meteor.publish("Notification",function(uid){
	return Notification.find({userId:uid});
});

*/


Meteor.startup(function () {
	if (dm_subject.find().count() === 0) {
		dm_subject.insert({name: "qianduan "});
	}
});


Meteor.publish("dm_subject",function(){
	return dm_subject.find();
});