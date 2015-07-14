/**
 * Created by Administrator on 2015/7/9.
 */

/*var ERRORS_KEY = 'signinErrors';

Template.login.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});*/

Template.login.helpers({
    errorMessages: function() {
        return _.values(Session.get(ERRORS_KEY));
    },
    errorClass: function(key) {
        return Session.get(ERRORS_KEY)[key] && 'error';
    },
    subjects:function(){
        return dm_subject.find();
    }

});
/*

Template.login.events({
    "click #login_button":function(event,template){
        var email = template.$('[name=email]').val();
        var password = template.$('[name=password]').val();

        var errors = {};

        if (! email) {
            errors.email = 'Email is required';
        }

        if (! password) {
            errors.password = 'Password is required';
        }

        Session.set(ERRORS_KEY, errors);
        if (_.keys(errors).length) {
            return;
        }

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return Session.set(ERRORS_KEY, {'none': error.reason});
            }

            Router.go('home');
        });
    }
});


*/
