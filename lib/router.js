
/*//configure
Router.configure({
    notFoundTemplate: 'pageNotFound',
    loadingTemplate:"loading"
});*/

Router.route("/sign_in",{
	name:"sign_in",
	waitOn:function(){
		console.log('sign_in  waitOn');
		Meteor.subscribe("dm_subject");
	},
	data:function(){
		console.log('sign_in  data');
		return dm_subject.find().fetch();
	},
	action:function(){
		this.layout("login_main");
		this.render('login', {to: 'handle'});
	}
});


Router.route("/sign_up",{
	name:"sign_up",
	action:function(){
		this.layout("login_main");
		this.render('register',{to:'handle'});
	}
});
