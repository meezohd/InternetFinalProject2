/**
 * Created by Justin on 3/25/2016.
 */
Template.removeClub.events({
    'submit form': function(event){
        event.preventDefault();
        var removeClub = event.target.removeClub.value;

        if(Clubs.findOne(removeClub)==null){
            FlashMessages.sendWarning("That Club Doesn't exist!");
        }else{
            if(Leagues.findOne(Clubs.findOne(removeClub).club_league_id) !=null){
                FlashMessages.sendWarning("This Club is still tied to A League. Please remove League First!!");
            }
            else{
                Meteor.call('deleteClub', removeClub);
                FlashMessages.sendSuccess("Sucessfully Removed Club!");

            }
        }
    }

});
Template.removeClub.helpers({
    club: function() {
        return Clubs.find();
    }
});
Template.clubItem.helpers({
    id: function(){
        return this._id;
    },
    name: function(){
        return this.club_name;
    }
});


