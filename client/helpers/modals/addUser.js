/**
 * Created by Justin on 3/24/2016.
 */
Template.addUser.onRendered(function(){
    $('.addUser').validate({
        rules:{
            username:{
                minlength: 2,
                maxlength: 32
            },
            password:{
                minlength: 6,
                maxlength: 32
            },
            password2:{
                minlength: 6,
                maxlength: 32,
                equalTo: password
            }
        },
        messages:{
            password2:{
                equalTo:"Please enter the same password as above."
            }
        }
    });
});
Template.addUser.events({
    'submit form': function(){
        event.preventDefault();
        var addUser = event.target.username.value;
        var pass = event.target.password.value;
        if(Meteor.users.findOne({username:addUser})==null){
            //make user
            Meteor.call('add User',addUser, pass );
            FlashMessages.sendSuccess("Sucessfully added user "+addUser);
        }
        else{
            FlashMessages.sendWarning("That user Already exists!");
        }

        console.log(addUser);
    }
});