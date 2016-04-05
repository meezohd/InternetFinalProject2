/*
File to set up 2 users if there are no users currently in the database. FOR TESTING purpose only

User 1: Admin  Pass: toor123
User 2: test   Pass: toor123
 */
if (Meteor.users.find().count() < 1) {
    // users array
    var users = [
        {name: 'admin', email: 'admin@shoot24.com', password: 'toor123', roles: ['user', 'admin']},
        {name: 'test', email: 'test@test.com', password: 'toor123', roles: ['user']}
    ];
    // user creation
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
}

Accounts.onCreateUser(function (options, user) {
    user.roles = ['user'];

    if (options.profile)
        user.profile = options.profile;
    return user;
});