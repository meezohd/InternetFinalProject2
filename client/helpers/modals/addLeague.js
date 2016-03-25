/**
 * Created by Justin on 3/24/2016.
 */
Template.addLeague.events({
    'submit form': function(event){
        event.preventDefault();
        var addLeague = event.target.addLeague.value;
        var addLeaguePicture = event.target.addLeaguePicture.value;

        if(Leagues.findOne({'league_name': addLeague} )==null){
            Meteor.call('addLeague', addLeague, addLeaguePicture);
            FlashMessages.sendSuccess("Sucessfully Added League");

        }else{

            FlashMessages.sendWarning("That League Already Exists!");
        }
    }
});

Template.addLeague.helpers({
    league: function() {
        return leaguePicturesArray;
    }
});
Template.leaguePictures.helpers({
    path: function(){
        return this.path;
    },
    name: function(){
        return this.name;
    }
});