//if (Meteor.isClient) {
//    Meteor.subscribe("userData");
//
//    Meteor.logout = function (callback) {
//        Router.go("home");
//        return Accounts.logout(callback);
//    }
//
//    Template.users.helpers({
//        usersList: function () {
//            return Meteor.users.find();
//        }
//    });
//
//    Template.userItem.helpers({
//        emailAddress: function () {
//            return this.emails[0].address;
//        },
//        userRole: function() {
//            var returnValue = "";
//            for (var i=0; i<this.roles.length; i++) {
//                returnValue += (this.roles[i] + " ");
//            }
//            return returnValue;
//        }
//    });
//}
//
//if (Meteor.isServer) {
//
//    Meteor.publish("userData", function() {
//        if (Roles.userIsInRole(this.userId, 'admin')) {
//            return Meteor.users.find();
//        }
//    })
//
//    if (Meteor.users.find().count() < 1) {
//        // users array
//        var users = [
//            {name: 'chenry', email: 'ch.henry@uwinnipeg.ca', password: 'henry3909', roles: ['user', 'admin']},
//            {name: 'test', email: 'test@test.com', password: 'test', roles: ['user']}
//        ];
//        // user creation
//        _.each(users, function (d) {
//            // return id for use in roles assignment below
//            var userId = Accounts.createUser({
//                email: d.email,
//                password: d.password,
//                username: d.email,
//                profile: {
//                    name: d.name
//                }
//            });
//            // add roles to user
//            Roles.addUsersToRoles(userId, d.roles);
//        });
//    }
//
//    Accounts.onCreateUser(function (options, user) {
//        user.roles = ['user'];
//
//        if (options.profile)
//            user.profile = options.profile;
//        return user;
//    });
//}
//
//Router.route('/', {
//    name: 'home',
//    template: 'home'
//});
//
//function approveRoute() {
//    var currentUser = Meteor.userId();
//    if (currentUser) {
//        this.next();
//    } else {
//        this.render("home");
//    }
//}
//
//function approveAdminRoute() {
//    var currentUser = Meteor.userId();
//    if (currentUser && Roles.userIsInRole(currentUser, 'admin')) {
//        this.next();
//    } else {
//        this.render("home");
//    }
//}
//
//Router.route('/Lectures', {
//    onBeforeAction: approveRoute
//});
//Router.route('/Assignments', {
//    onBeforeAction: approveRoute
//});
//Router.route('/Users', {
//    onBeforeAction: approveAdminRoute
//});
//
//Router.configure({
//    layoutTemplate: 'main'
//})