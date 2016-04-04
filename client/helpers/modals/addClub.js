/**
 * Created by Justin on 3/25/2016.
 */
Template.addClub.events({
    'submit form': function(event){
        event.preventDefault();
        var addClub = event.target.addClub.value;
        var addClubLeague = event.target.removeLeague.value;
        var addClubPicture = event.target.addClubPicture.value;

        if(Clubs.findOne({'club_name': addClub} )==null){
            Meteor.call('addClub', addClub, addClubLeague, addClubPicture);
            FlashMessages.sendSuccess("Sucessfully Added Club");

        }else{

            FlashMessages.sendWarning("That Club Already Exists!");
        }
    }

});

//helpers used to return option lists
Template.addClub.helpers({
    league: function() {
        return Leagues.find();
    },
    club: function(){
        return clubPicturesArray;
    }
});
Template.leagueItem.helpers({
    id: function(){
        return this._id;
    },
    name: function(){
        return this.league_name;
    }
});
Template.clubPictures.helpers({
    path: function(){
        return this.path;
    },
    name: function(){
        return this.name;
    }
});
//Used to validate forms
Template.addClub.onRendered(function(){
    $('.addClub').validate({
        rules: {
            addClub: {
                minlength: 2,
                maxlength: 32
            }
        }
    });
});