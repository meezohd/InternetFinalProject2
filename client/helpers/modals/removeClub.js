/**
 * Created by Justin on 3/25/2016.
 */
Template.removeClub.events({
    'submit form': function(event){
        event.preventDefault();
        var removeClub = event.target.removeLeague.value;

        if(Clubs.findOne(removeClub)==null){
            FlashMessages.sendWarning("That Club Doesn't exist!");
        }else{
            //Meteor.call('deleteClub', removeClub);
            FlashMessages.sendSuccess("Sucessfully Removed Club!");
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


