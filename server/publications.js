Meteor.publish('clubs', function() {
    return Clubs.find({}, {
        sort: {_id: -1}
    });
});
Meteor.publish('clubPage', function(club_id) {
    return Players.find({player_club_id: club_id});
});


Meteor.publish('players', function() {
    return Players.find();
});
Meteor.publish('playerPage', function(id) {
    return Players.find(id);
});