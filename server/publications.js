Meteor.publish('leagues', function() {
    return Leagues.find();
});
Meteor.publish('leaguePage', function(league_id) {
    return Clubs.find({club_league_id: league_id});
});


Meteor.publish('clubs', function() {
    return Clubs.find();
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