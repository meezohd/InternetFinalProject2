/**
 * Created by Justin on 3/24/2016.
 */
//helper to grab only users that are not admin
Template.changePassword.helpers({
    normalUsers: function() {
        return Meteor.users.find({roles:{$ne: 'admin'}}).fetch();
    }
});

//Setting rules for the change Password modal form.
Template.changePassword.onRendered(function(){
    $('.changePassword').validate({
        rules:{
            changePassword:{
                minlength: 6,
                maxlength: 32,
                equalTo: changePassword2
            },
            changePassword2:{
                minlength: 6,
                maxlength: 32
            }
        },
        messages:{
            changePassword:{
                equalTo:"Please enter the same password as Above."
            }
        }
    });
});
Template.changePassword.events({
    'submit form': function (event) {
        event.preventDefault();
        var changeUser = event.target.changePasswordUsername.value;
        var pass = event.target.changePassword2.value;

        if(Meteor.users.findOne(changeUser)==null){
            FlashMessages.sendWarning("That user Doesn't exist!");
        }else{
            //Meteor.users.findOne(changeUser).username;
            //console.log(Meteor.users.findOne(changeUser).username);
            Meteor.call('changeUserPassword', changeUser, pass);
            FlashMessages.sendSuccess("Sucessfully Updated "+Meteor.users.findOne(changeUser).username+
            " password! Please let them know!");
        }
    }
});