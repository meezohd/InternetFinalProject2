/**
 * Created by Justin on 3/26/2016.
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
    }
});