Tracker.autorun(function() {
    if (Session.get('playersSearchQuery'))
        Meteor.subscribe('playersSearch', Session.get('playersSearchQuery'));
});

Template.index.events({
    'keyup [type=text]': function(event, template) {
        Session.set('playersSearchQuery', event.target.value);
    },
    'blur [type=text]': function(event, template) {
        setTimeout(function(){
            Session.set('playersSearchQuery', '');
        },1000)}
});



Template.index.helpers({
    searchResults: function() {
        if (Session.get('playersSearchQuery'))
        return Players.search(Session.get('playersSearchQuery'));
    },
    playersSearchQuery: function() {
        return Session.get('playersSearchQuery');
    }
});

Template.header.events({
    'keyup [type=text]': function(event, template) {
        Session.set('playersSearchQuery', event.target.value);
    },
    'blur [type=text]': function(event, template) {
        setTimeout(function(){
            Session.set('playersSearchQuery', '');
        },500)}
});

Template.header.helpers({
    searchResults: function() {
        if (Session.get('playersSearchQuery'))
            return Players.search(Session.get('playersSearchQuery'));
    },
    playersSearchQuery: function() {
        return Session.get('playersSearchQuery');
    }
});