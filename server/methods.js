/**
 * Created by Justin on 3/24/2016.
 */
Meteor.methods({
   'deleteUser' : function(userId){
       Meteor.users.remove(userId);
   },
    'add User' : function(userName, password){
        var users = [
        {name: userName, email: userName+'@'+userName+'.com', password: password, roles: ['user']}
        ];
        _.each(users, function (d) {
            // return id for use in roles assignment below
            var userId = Accounts.createUser({
                email: d.email,
                password: d.password,
                username: d.name,
                profile: {
                    name: d.name
                }
            });
            // add roles to user
            Roles.addUsersToRoles(userId, d.roles);
        });
    },
    'changeUserPassword' : function(userName, password){
        Accounts.setPassword(userName, password);
    },
    'addAdmin' : function(userId){
        Roles.addUsersToRoles(userId, ['admin']);
    },
    'deleteLeague' : function(leagueId){
        Leagues.remove(leagueId);
    },
    'addLeague' : function(leagueName, leaguePicture){
        Leagues.insert({league_name : leagueName, league_picture : leaguePicture});
    },
    'deleteNation' : function(nationId){
        Nations.remove(nationId);
    },
    'addNation' : function(nationName, nationPicture){
        Nations.insert({nation_name : nationName, nation_picture: nationPicture});
    },
    'deleteClub' : function(clubId){
        Clubs.remove(clubId);
    },
    'addClub' : function(clubName, clubLeagueId, clubPicture){
        Clubs.insert({club_name : clubName, club_league_id : clubLeagueId, club_picture: clubPicture});
    },
    'addComment' : function(userId, playerId, comment, date){
        Comments.insert({comment_user_id : userId, comment_player_id : playerId, comment_name : comment, comment_date: date});
    },
    'getUserName' : function(userId){
        return Meteor.users.findOne(userId).username;
    },
    'removeComment' : function(commentId){
        Comments.remove(commentId);
    },
    'editComment' : function(commentId, commentMessage, commentDate){
        Comments.update({_id: commentId}, {$set : {comment_name : commentMessage, comment_date: commentDate}});
    },
    'removePlayer' : function(playerId){
        Players.remove(playerId);
    },
    'addPlayer' : function(playerName, playerNation, playerClub, playerPicture, playerNumber, playerHeight, playerBirthday,
    playerPosition, playerFoot){
        Players.insert({player_nation_id : playerNation, player_club_id : playerClub, player_name : playerName, player_birthday : playerBirthday,
        player_picture: playerPicture, player_position : playerPosition, player_height: playerHeight, player_number: playerNumber, player_foot : playerFoot});
    }


});