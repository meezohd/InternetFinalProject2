//publishing data to clint side as autopublish package has been deleted

Meteor.publish('leagues', function() {
    return Leagues.find();
});
Meteor.publish('leaguePage', function(league_id) {
    return Clubs.find({club_league_id: league_id});
});


Meteor.publish('nations', function() {
    return Nations.find();
});
Meteor.publish('nationPage', function(nation_id) {
    return Players.find({player_nation_id: nation_id});
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
Meteor.publish('comments', function(){
   return Comments.find();
});
Meteor.publish('playersComments' , function(id){
    return Comments.find({comment_player_id: id});
});

Meteor.publish('playersSearch', function(query) {

    if (_.isEmpty(query))
        return this.ready();

    return Players.search(query);
});

Meteor.publish("userData", function() {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Meteor.users.find();
    }
})