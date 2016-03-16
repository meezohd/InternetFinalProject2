if (Players.find().count() === 0){

    Players.insert({
        player_nation_id : 1 ,
        player_club_id : 1 ,
        player_name : "Messi" ,
        player_birthday : "1990" ,
        player_picture : "/image/img.png" ,
        player_position : "Attacker" ,
        player_height : "198",
        player_number : "7" ,
        player_foot : "right"
    });

    Players.insert({
        player_nation_id : 1 ,
        player_club_id : 1 ,
        player_name : "Ronaldo" ,
        player_birthday : "1990" ,
        player_picture : "/image/img.png" ,
        player_position : "Attacker" ,
        player_height : "198",
        player_number : "15" ,
        player_foot : "right"
    });
}