Comments = new Mongo.Collection('comments');

CommentsSchema = new SimpleSchema({
    comment_user_id: {
        type: Number,
        label:"Comment User Id"
    },
    comment_player_id: {
        type: Number,
        label:"Comment Player Id"
    },
    comment_name: {
        type: String,
        label:"Comment Name"
    },
    comment_date: {
        type: String,
        label:"comment_date",
        autoValue: function(){
            return new Date()
        }
    }
});

Comments.attachSchema(CommentsSchema);