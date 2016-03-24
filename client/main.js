/**
 * Created by Justin on 3/11/2016.
 */
Meteor.startup(function() {
    Deps.autorun(function() {
        document.title = Session.get('documentTitle');
    });
});

