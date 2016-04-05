/*
File in determinig and setting schema for nations collection.
 */

Nations = new Mongo.Collection('nations');

NationsSchema = new SimpleSchema({
    nation_name: {
        type: String,
        label:"Nation Name"
    },
    nation_picture: {
        type: String,
        label:"Nation Picture"
    }
});

Nations.attachSchema(NationsSchema);