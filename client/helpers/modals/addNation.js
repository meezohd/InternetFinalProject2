Template.addNation.events({
    'submit form': function(event){
        event.preventDefault();
        var addNation = event.target.addNation.value;
        var addNationPicture = event.target.addNationPicture.value;

        if(Nations.findOne({'nation_name': addNation} )==null){
            Meteor.call('addNation', addNation, addNationPicture);
            FlashMessages.sendSuccess("Sucessfully Added Nation");

        }else{

            FlashMessages.sendWarning("That Nation Already Exists!");
        }
    }

});
//Helpers used to populate select options
Template.addNation.helpers({
    nation: function() {
        return nationPicturesArray;
    }
});
Template.nationPictures.helpers({
    path: function(){
        return this.path;
    },
    name: function(){
        return this.name;
    }
});