/**
 * Created by Justin on 3/24/2016.
 */

Template.addAdmin.events({
    'submit form': function(event){
        event.preventDefault();
        var addAdmin = event.target.addAdmin.value;

        if(Meteor.users.findOne(addAdmin)==null){
            FlashMessages.sendWarning("That user Doesn't exist!");
        }else{
            //calling function to add admin role to user.
            Meteor.call('addAdmin', addAdmin);
            FlashMessages.sendSuccess("Sucessfully Made user Admin!");
        }

    }
});

//Returning all users that are not admin.
Template.addAdmin.helpers({
    normalUsers: function() {
        return Meteor.users.find({roles:{$ne: 'admin'}}).fetch();
    }
});
