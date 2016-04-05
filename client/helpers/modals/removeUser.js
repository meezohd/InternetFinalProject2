/**
 * Created by Justin on 3/24/2016.
 */
Template.removeUser.events({
    'submit form': function(event){
        event.preventDefault();
        var removeUser = event.target.removeUser.value;

        if(Meteor.users.findOne(removeUser)==null){
            FlashMessages.sendWarning("That user Doesn't exist!");
        }else{
            Meteor.call('deleteUser', removeUser);
            FlashMessages.sendSuccess("Sucessfully Removed User");
        }

    }
});

//helpers in populating select options of all the users that are NOT admin.
Template.removeUser.helpers({
   normalUsers: function() {
       return Meteor.users.find({roles:{$ne: 'admin'}}).fetch();
   }
});
Template.userItem.helpers({
   id: function(){
       return this._id;
   },
    name: function(){
        return this.username;
    }
});


