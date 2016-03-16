Leagues = new Mongo.Collection('leagues');

LeaguesSchema = new SimpleSchema({
    league_name: {
        type: String,
        label:"League Name"
    },
    league_picture: {
        type: String,
        label:"League Picture"
    }
});

Leagues.attachSchema(LeaguesSchema);
