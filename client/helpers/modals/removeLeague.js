/**
 * Created by Justin on 3/24/2016.
 */
Template.removeLeague.events({
    'submit form': function(event){
        event.preventDefault();
        var removeLeague = event.target.removeLeague.value;

        if(Leagues.findOne(removeLeague)==null){
            FlashMessages.sendWarning("That League Doesn't exist!");
        }else{
            Meteor.call('deleteLeague', removeLeague);
            FlashMessages.sendSuccess("Sucessfully Removed League!");
        }
    }
});
Template.removeLeague.helpers({
    league: function() {
        return Leagues.find();
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


