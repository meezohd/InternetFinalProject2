/*
File for setting schema for clubs Collection.
 */

Clubs = new Mongo.Collection('clubs');

ClubsSchema = new SimpleSchema({
    club_league_id: {
        type: String,
        label:"Club League Id"
    },
    club_name: {
        type: String,
        label:"Club Name"
    },
    club_picture: {
        type: String,
        label:"Club Picture"
    }
});

Clubs.attachSchema(ClubsSchema);