/**
 * Created by Justin on 3/25/2016.
 */
Template.addComment.onRendered(function(){
    $('.addComment').validate({
        rules:{
            addComment:{
                minlength: 2,
                maxlength: 500
            }
        },
        messages:{
            addComment:{
                minlength:"Comment must be longer than 2 characters",
                maxlength: "Comment can be no longer than 500 Characters"
            }
        }
    });
});
Template.addComment.events({
    'submit form': function(){
        event.preventDefault();
        var addComment = event.target.addComment.value;

        var playerId = Players.findOne()._id;

        if(Meteor.users.findOne()==null){
            //Can't comment cause not logged in
            FlashMessages.sendWarning("You must be logged in to make comments!");
        }
        else{
            var userId = Meteor.users.findOne()._id; // make Id here b/c can't find it if not logged in.
            //console.log(userId);
            //console.log(playerId);
            var d = new Date();
            var month = d.getMonth()+1;
            var date = d.getFullYear()+"-"+ month+"-"+ d.getDate()+" @ "+ d.toTimeString();
            date = "Comment made on "+ date.toString();
            //console.log(date);
            Meteor.call('addComment', userId, playerId, addComment, date);
            $("#addComment").modal('hide');
            FlashMessages.sendInfo("Sucessfully Added Comment");
        }

    }
});