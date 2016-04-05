/*
 Code for setting a session for search Query then getting session and pass it to template helpers to show them properly.
 */

Tracker.autorun(function() {
    if (Session.get('playersSearchQuery'))
        Meteor.subscribe('playersSearch', Session.get('playersSearchQuery'));
});

/*
    * 'keyup' : an event to set a session once the clint types something in the search box
    * 'blur' : an event to empty the search box after the clint do something else
 */
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


/*
 * 'keyup' : an event to set a session once the clint types something in the search box
 * 'blur' : an event to empty the search box after the clint do something else
 */
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