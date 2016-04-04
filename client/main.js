/**
 * Created by Justin on 3/11/2016.
 */

/*
Code used to automatically set titles of pages based off database information
 */
Meteor.startup(function() {
    Deps.autorun(function() {
        document.title = Session.get('documentTitle');
    });
});

