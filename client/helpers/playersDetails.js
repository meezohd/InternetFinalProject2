Template.playerCard.helpers({
    nationPicture: function(){
        return Nations.findOne(this.player_nation_id).nation_picture;
    },
    clubPicture: function(){
        return Clubs.findOne(this.player_club_id).club_picture;
    },
});

Template.playerPage.helpers({
    nationPicture: function(){
        return Nations.findOne(this.player_nation_id).nation_picture;
    },
    nationName: function(){
        return Nations.findOne(this.player_nation_id).nation_name;
    },
    clubPicture: function(){
        return Clubs.findOne(this.player_club_id).club_picture;
    },
    clubName: function(){
        return Clubs.findOne(this.player_club_id).club_name;
    }
});

Template.nationPage.helpers({
    nationPicture: function(){
        return  Nations.findOne(Router.current().params._id).nation_picture;
    },
    nationName: function(){
        return Nations.findOne(Router.current().params._id).nation_name;
    }
});

Template.clubPage.helpers({
    clubPicture: function(){
        return Clubs.findOne(Router.current().params._id).club_picture;
    },
    clubName: function(){
        return Clubs.findOne(Router.current().params._id).club_name;
    }
});

Template.leaguePage.helpers({
    leaguePicture: function(){
        return Leagues.findOne(Router.current().params._id).league_picture;
    },
    leagueName: function(){
        return Leagues.findOne(Router.current().params._id).league_name;
    }
});
