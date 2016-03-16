if (Leagues.find().count() === 0){

    var League1 = Leagues.insert({
        league_name : "Liga BVAA" ,
        league_picture : "/image/img.png" ,
    });
    var League2 =Leagues.insert({
        league_name : "Serie A" ,
        league_picture : "/image/img.png" ,
    });



    var club1 = Clubs.insert({
        club_league_id : League1 ,
        club_name : "Real Madrid" ,
        club_picture : "/image/img.png" ,
    });
    var club2 =Clubs.insert({
        club_league_id : League2 ,
        club_name : "Barcelona" ,
        club_picture : "/image/img.png" ,
    });



    Players.insert({
        player_nation_id : 1 ,
        player_club_id : club1 ,
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
        player_club_id : club1 ,
        player_name : "Ronaldo" ,
        player_birthday : "1990" ,
        player_picture : "/image/img.png" ,
        player_position : "Attacker" ,
        player_height : "198",
        player_number : "15" ,
        player_foot : "right"
    });

    Players.insert({
        player_nation_id : 1 ,
        player_club_id : club2 ,
        player_name : "ibrahimovic" ,
        player_birthday : "1990" ,
        player_picture : "/image/img.png" ,
        player_position : "Attacker" ,
        player_height : "198",
        player_number : "12" ,
        player_foot : "right"
    });

    Players.insert({
        player_nation_id : 1 ,
        player_club_id : club2 ,
        player_name : "Neymar" ,
        player_birthday : "1990" ,
        player_picture : "/image/img.png" ,
        player_position : "Attacker" ,
        player_height : "198",
        player_number : "6" ,
        player_foot : "right"
    });
}