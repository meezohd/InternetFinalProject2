/**
 * Created by Justin on 3/26/2016.
 */
Template.editComment.onRendered(function(){
    $('.editComment').validate({
        rules:{
            editComment:{
                minlength: 2,
                maxlength: 500
            }
        },
        messages:{
            editComment:{
                minlength:"Comment must be longer than 2 characters",
                maxlength: "Comment can be no longer than 500 Characters"
            }
        }
    });
});

Template.editComment.events({
    'submit form': function(event) {
        event.preventDefault();
        var commentId = event.target.editCommentId.value;
        var commentEditUser = event.target.editCommentUser.value;
        var commentMessage = event.target.editComment.value;
        var d = new Date();
        var month = d.getMonth()+1;
        var date = d.getFullYear()+"-"+ month+"-"+ d.getDate()+" @ "+ d.toTimeString();
        date = "Comment Edited by: "+commentEditUser+ " on "+ date.toString();

        Meteor.call('editComment', commentId, commentMessage, date);
        FlashMessages.sendInfo("You have Sucessfully Edited the Comment!");
        $("#editComment"+commentId).modal('hide');
    }
});


Template.editComment.helpers({
    id: function(){
        return this._id;
    },
    comment_user_name: function(){
        return Meteor.user().username;
    }

});