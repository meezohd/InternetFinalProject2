Tracker.autorun(function() {
    if (Session.get('playersSearchQuery'))
        Meteor.subscribe('playersSearch', Session.get('playersSearchQuery'));
});

Template.index.events({
    'keyup [type=text]': function(event, template) {
        Session.set('playersSearchQuery', event.target.value);
    }
});

Template.index.helpers({
    searchResults: function() {
        return Players.search(Session.get('playersSearchQuery'));
    },
    playersSearchQuery: function() {
        return Session.get('playersSearchQuery');
    }
});