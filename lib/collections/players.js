Players = new Mongo.Collection('players');

Players.search = function(query) {
    return Players.find({
        player_name: { $regex: RegExp.escape(query), $options: 'i' }
    }, {
        limit: 20
    });
};

PlayersSchema = new SimpleSchema({
    player_nation_id: {
        type: String,
        label:"Player Nation Id"
    },
    player_club_id: {
        type: String,
        label:"Player Club Id"
    },
    player_name: {
        type: String,
        label:"Player Name"
    },
    player_birthday: {
        type: String,
        label:"Player Birthday"
    },
    player_picture: {
        type: String,
        label:"Player Picture"
    },
    player_position: {
        type: String,
        label:"Player Position"
    },
    player_height: {
        type: String,
        label:"Player Height"
    },
    player_number: {
        type: Number,
        label:"Player Number"
        /* autoValue: function(){ return new RandomNumber()} */
    },
    player_foot: {
        type: String,
        label:"Player Foot"
    }
});

Players.attachSchema(PlayersSchema);