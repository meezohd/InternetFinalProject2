/**
 * Created by Justin on 3/25/2016.
 */
Template.addPlayer.events({
    'submit form': function(event){
        event.preventDefault();
        var addPlayerName = event.target.addPlayer.value;
        var addPlayerNation = event.target.playerNation.value;
        var addPlayerClub = event.target.playerClub.value;
        var addPlayerPicture = event.target.addPlayerPicture.value;
        var addPlayerNumber = event.target.addPlayerNumber.value;
        var addPlayerHeight = event.target.addPlayerHeight.value;
        var addPlayerBirthday = event.target.addPlayerBirthday.value;
        var addPlayerPosition = event.target.addPlayerPosition.value;
        var addPlayerFoot = event.target.addPlayerFoot.value;

        if(Players.findOne({'player_name': addPlayerName} )==null){
            Meteor.call('addPlayer', addPlayerName, addPlayerNation, addPlayerClub, addPlayerPicture,addPlayerNumber,
                addPlayerHeight, addPlayerBirthday, addPlayerPosition,addPlayerFoot );
            FlashMessages.sendSuccess("Sucessfully Added Player");
            //console.log(addPlayerName);
            //console.log(addPlayerNation);
            //console.log(addPlayerClub);
            //console.log(addPlayerPicture);
            //console.log(addPlayerNumber);
            //console.log(addPlayerHeight);
            //console.log(addPlayerBirthday);
            //console.log(addPlayerPosition);
            //console.log(addPlayerFoot);
        }else{

            FlashMessages.sendWarning("That Player Already Exists!");
        }
    }

});
Template.addPlayer.helpers({
    nation: function() {
        return Nations.find();
    },
    player: function(){
        return playersPicturesArray;
    },
    club: function() {
        return Clubs.find({}, {sort: { club_name: 1}});
    },
    playerFoot: function() {
        var foot = [
            {foot: "Right", value: 1
            },
            {foot: "Left", value: 2}
        ];
        return foot;
    },
    playerPosition: function() {
        var position = [
            {
                position: "Attacker", value: 1
            },
            {
                position: "MidFielder", value: 2
            },
            {
                position: "Defender", value: 3
            }
        ];
        return position;
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
Template.playerPictures.helpers({
    path: function(){
        return this.path;
    },
    name: function(){
        return this.name;
    }
});
Template.clubItem.helpers({
    id: function(){
        return this._id;
    },
    name: function(){
        return this.nation_name;
    }
});

Template.addPlayer.onRendered(function(){
    $('.addPlayer').validate({
        rules: {
            addPlayer: {
                minlength: 2,
                maxlength: 32
            },
            addPlayerNumber: {
                number : true,
                min: 1,
                max: 100,
                required: true
            },
            addPlayerHeight: {
                digits: true,
                required: true
            },
            addPlayerBirthday: {
                date: true,
                required: true
            }
        },
        messages:{
            addPlayerBirthday : {
                date: "Please enter a date of the form YYYY-MM-DD"
            },
            addPlayerHeight : {
                digits: "Please enter a valid Height (Number between 100-300",
                min: 100,
                max: 300
            },
            addPlayerNumber :{
                number: "Please enter a valid Player number between 1-100"
            }
        }
    });
});