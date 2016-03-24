/**
 * Created by Justin on 3/24/2016.
 */
Meteor.methods({
   'deleteUser' : function(userId){
       Meteor.users.remove(userId);
   },
    'add User' : function(userName, password){
        var users = [
        {name: userName, email: userName+'@'+userName+'.com', password: password, roles: ['user']}
        ];
        _.each(users, function (d) {
            // return id for use in roles assignment below
            var userId = Accounts.createUser({
                email: d.email,
                password: d.password,
                username: d.name,
                profile: {
                    name: d.name
                }
            });
            // add roles to user
            Roles.addUsersToRoles(userId, d.roles);
        });
    },
    'changeUserPassword' : function(userName, password){
        Accounts.setPassword(userName, password);
    }


});