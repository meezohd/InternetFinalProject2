/**
 * Created by Justin on 3/24/2016.
 */
Template.removePlayer.events({
    'submit form': function(event){
        event.preventDefault();
        var removePlayer = event.target.removePlayer.value;
        //console.log(removePlayer);

        if(Players.findOne(removePlayer)==null){
            FlashMessages.sendWarning("That user Doesn't exist!");
        }else{
            Meteor.call('removePlayer', removePlayer);
            FlashMessages.sendSuccess("Sucessfully Removed User");
        }

    }
});
Template.removePlayer.helpers({
    normalPlayers: function() {
        return Players.find({}, { sort: { player_name : 1 } });
    }
});
Template.playerItem.helpers({
    id: function(){
        return this._id;
    },
    name: function(){
        return this.player_name;
    }
});


