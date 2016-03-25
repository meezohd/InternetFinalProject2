/**
 * Created by Justin on 3/24/2016.
 */
Template.removeNation.events({
    'submit form': function(event){
        event.preventDefault();
        var removeNation = event.target.removeNation.value;

        if(Nations.findOne(removeNation)==null){
            FlashMessages.sendWarning("That Nation Doesn't exist!");
        }else{
            Meteor.call('deleteNation', removeNation);
            FlashMessages.sendSuccess("Sucessfully Removed Nation!");
        }
    }
});
Template.removeNation.helpers({
    nation: function() {
        return Nations.find();
    }
});
Template.nationItem.helpers({
    id: function(){
        return this._id;
    },
    name: function(){
        return this.nation_name;
    }
});