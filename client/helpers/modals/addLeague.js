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
        var leaguePic = [
            {
                path: "/images/leagues/l13.png",
                name: "Picture 13"
            },
            {
                path: "/images/leagues/l20.png",
                name: "Picture 20"
            },
            {
                path: "/images/leagues/l31.png",
                name: "Picture 31"
            },
            {
                path: "/images/leagues/l53.png",
                name: "Picture 53"
            }
        ];
        return leaguePic;
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