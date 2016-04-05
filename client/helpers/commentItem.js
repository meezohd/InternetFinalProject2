/*
Code for extracting comment Items information to be passed to template helpers to render it properly.
 */

Template.commentItem.helpers({
    comment_user_name: function(){
        var userId = this.comment_user_id;
        var username = ReactiveMethod.call('getUserName', userId);
        return username;
    },
    comment_date: function(){
        return this.comment_date;
    },
    comment_msg: function(){
        return this.comment_name;
    },
    comment_user_id: function(){
        return this.comment_user_id;
    },
    userMadeComment: function(){
        if(Meteor.users.findOne({_id: this.comment_user_id}) !=null){
            return true;
        }else{
            return false;
        }
    },
    noComment: function(){
        if(Comments.find({comment_player_id: Router.current().params._id}).count() === 0){
            return true;
        }
        return false;
    },
    id: function(){
        return this._id;
    }


});

Template.commentItem.events({
    'submit form': function(event) {
        event.preventDefault();
        var commentId = event.target.removeCommentId.value;
        console.log(commentId);
        Meteor.call('removeComment', commentId);
    }
});