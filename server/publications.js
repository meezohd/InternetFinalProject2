Meteor.publish('players', function() {
    return Players.find({}, {
        sort: {_id: -1}
    });
});

Meteor.publish('playerPage', function(id) {
    return Players.find(id);
});