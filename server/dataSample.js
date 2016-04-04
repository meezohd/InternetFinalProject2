/*
One big hard coded data sample. Values were extracted from part 1 of the project using a java program to parse information
into JS variables and inserting the information into MongoDB.
*/

if (Leagues.find().count() === 0){
    var league1 = Leagues.insert({
        league_name : "Barclays PL",
        league_picture : "l13.png"
    });
    var league2 = Leagues.insert({
        league_name : "Liga BBVA",
        league_picture : "l53.png"
    });
    var league3 = Leagues.insert({
        league_name : "Serie A",
        league_picture : "l31.png"
    });
    var league4 = Leagues.insert({
        league_name : "Bundesliga",
        league_picture : "l20.png"
    });
    var nation1 = Nations.insert({
        nation_name : "Spain",
        nation_picture : "45.png"
    });
    var nation2 = Nations.insert({
        nation_name : "Brazil",
        nation_picture : "54.png"
    });
    var nation3 = Nations.insert({
        nation_name : "France",
        nation_picture : "18.png"
    });
    var nation4 = Nations.insert({
        nation_name : "Argentina",
        nation_picture : "52.png"
    });
    var nation5 = Nations.insert({
        nation_name : "Germany",
        nation_picture : "21.png"
    });
    var nation6 = Nations.insert({
        nation_name : "Italy",
        nation_picture : "27.png"
    });
    var nation7 = Nations.insert({
        nation_name : "England",
        nation_picture : "14.png"
    });
    var nation8 = Nations.insert({
        nation_name : "Portugal",
        nation_picture : "38.png"
    });
    var nation9 = Nations.insert({
        nation_name : "Netherlands",
        nation_picture : "34.png"
    });
    var nation10 = Nations.insert({
        nation_name : "Belgium",
        nation_picture : "7.png"
    });
    var nation11 = Nations.insert({
        nation_name : "Colombia",
        nation_picture : "56.png"
    });
    var nation13 = Nations.insert({
        nation_name : "Uruguay",
        nation_picture : "60.png"
    });
    var nation15 = Nations.insert({
        nation_name : "Ivory Coast",
        nation_picture : "108.png"
    });
    var nation16 = Nations.insert({
        nation_name : "Poland",
        nation_picture : "37.png"
    });
    var nation17 = Nations.insert({
        nation_name : "Croatia",
        nation_picture : "10.png"
    });
    var nation18 = Nations.insert({
        nation_name : "Chile",
        nation_picture : "55.png"
    });
    var club1 = Clubs.insert({
        club_league_id : league1,
        club_name : "Arsenal",
        club_picture : "s1.png"
    });
    var club2 = Clubs.insert({
        club_league_id : league1,
        club_name : "Chelsea",
        club_picture : "s5.png"
    });
    var club3 = Clubs.insert({
        club_league_id : league1,
        club_name : "Manchester City",
        club_picture : "s10.png"
    });
    var club4 = Clubs.insert({
        club_league_id : league1,
        club_name : "Liverpool",
        club_picture : "s9.png"
    });
    var club5 = Clubs.insert({
        club_league_id : league1,
        club_name : "Tottenham Hotspur",
        club_picture : "s18.png"
    });
    var club6 = Clubs.insert({
        club_league_id : league1,
        club_name : "Manchester United",
        club_picture : "s11.png"
    });
    var club7 = Clubs.insert({
        club_league_id : league2,
        club_name : "Real Madrid",
        club_picture : "s243.png"
    });
    var club8 = Clubs.insert({
        club_league_id : league2,
        club_name : "FC Barcelona",
        club_picture : "s241.png"
    });
    var club9 = Clubs.insert({
        club_league_id : league2,
        club_name : "Atletico Madrid",
        club_picture : "s240.png"
    });
    var club10 = Clubs.insert({
        club_league_id : league2,
        club_name : "Sevilla",
        club_picture : "s481.png"
    });
    var club11 = Clubs.insert({
        club_league_id : league2,
        club_name : "Valencia",
        club_picture : "s461.png"
    });
    var club12 = Clubs.insert({
        club_league_id : league3,
        club_name : "Juventus",
        club_picture : "s45.png"
    });
    var club13 = Clubs.insert({
        club_league_id : league3,
        club_name : "Napoli",
        club_picture : "s48.png"
    });
    var club14 = Clubs.insert({
        club_league_id : league3,
        club_name : "Roma",
        club_picture : "s52.png"
    });
    var club15 = Clubs.insert({
        club_league_id : league3,
        club_name : "Fiorentina",
        club_picture : "s110374.png"
    });
    var club16 = Clubs.insert({
        club_league_id : league3,
        club_name : "AC Milan",
        club_picture : "s47.png"
    });
    var club17 = Clubs.insert({
        club_league_id : league4,
        club_name : "FC Bayern",
        club_picture : "s21.png"
    });
    var club18 = Clubs.insert({
        club_league_id : league4,
        club_name : "Borussia Dortmund",
        club_picture : "s22.png"
    });
    var club19 = Clubs.insert({
        club_league_id : league4,
        club_name : "VfL Wolfsburg",
        club_picture : "s175.png"
    });
    var club20 = Clubs.insert({
        club_league_id : league4,
        club_name : "Schalke",
        club_picture : "s34.png"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club8,
        player_name : "Messi",
        player_birthday : "1987-06-24",
        player_picture : "158023.png",
        player_position : "Attacker",
        player_height : "170",
        player_number : "45",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation8,
        player_club_id : club7,
        player_name : "Cristiano Ronaldo",
        player_birthday : "1985-02-05",
        player_picture : "20801.png",
        player_position : "Attacker",
        player_height : "185",
        player_number : "24",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club1,
        player_name : "Neymar",
        player_birthday : "2000-05-08",
        player_picture : "190871.png",
        player_position : "Attacker",
        player_height : "188",
        player_number : "33",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation13,
        player_club_id : club8,
        player_name : "Suárez",
        player_birthday : "1987-01-24",
        player_picture : "176580.png",
        player_position : "Attacker",
        player_height : "182",
        player_number : "7",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club2,
        player_name : "Hazard",
        player_birthday : "1991-01-07",
        player_picture : "183277.png",
        player_position : "MidFielder",
        player_height : "173",
        player_number : "64",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation9,
        player_club_id : club17,
        player_name : "Robben",
        player_birthday : "1984-01-23",
        player_picture : "9014.png",
        player_position : "Attacker",
        player_height : "180",
        player_number : "86",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club1,
        player_name : "Özil",
        player_birthday : "1988-10-15",
        player_picture : "176635.png",
        player_position : "MidFielder",
        player_height : "183",
        player_number : "53",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation16,
        player_club_id : club17,
        player_name : "Lewandowski",
        player_birthday : "1988-08-21",
        player_picture : "188545.png",
        player_position : "Attacker",
        player_height : "185",
        player_number : "65",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club3,
        player_name : "Agüero",
        player_birthday : "1988-06-02",
        player_picture : "153079.png",
        player_position : "Attacker",
        player_height : "172",
        player_number : "62",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club8,
        player_name : "Iniesta",
        player_birthday : "1984-05-11",
        player_picture : "41.png",
        player_position : "MidFielder",
        player_height : "171",
        player_number : "96",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation11,
        player_club_id : club7,
        player_name : "Rodríguez",
        player_birthday : "1991-07-12",
        player_picture : "198710.png",
        player_position : "MidFielder",
        player_height : "180",
        player_number : "33",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club17,
        player_name : "Boateng",
        player_birthday : "1988-09-03",
        player_picture : "183907.png",
        player_position : "Defender",
        player_height : "192",
        player_number : "57",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club7,
        player_name : "Kroos",
        player_birthday : "1990-01-04",
        player_picture : "182521.png",
        player_position : "MidFielder",
        player_height : "182",
        player_number : "17",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club17,
        player_name : "Ribéry",
        player_birthday : "1983-04-07",
        player_picture : "156616.png",
        player_position : "MidFielder",
        player_height : "170",
        player_number : "90",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club12,
        player_name : "Chiellini",
        player_birthday : "1984-08-14",
        player_picture : "138956.png",
        player_position : "Defender",
        player_height : "186",
        player_number : "59",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club13,
        player_name : "Higuaín",
        player_birthday : "1987-12-10",
        player_picture : "167664.png",
        player_position : "Attacker",
        player_height : "184",
        player_number : "6",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation13,
        player_club_id : club9,
        player_name : "Godín",
        player_birthday : "1986-02-16",
        player_picture : "182493.png",
        player_position : "Defender",
        player_height : "185",
        player_number : "73",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club12,
        player_name : "Pogba",
        player_birthday : "1993-03-15",
        player_picture : "195864.png",
        player_position : "MidFielder",
        player_height : "188",
        player_number : "23",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club18,
        player_name : "Reus",
        player_birthday : "1989-05-31",
        player_picture : "188350.png",
        player_position : "Attacker",
        player_height : "180",
        player_number : "20",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation18,
        player_club_id : club1,
        player_name : "Sánchez",
        player_birthday : "1988-12-19",
        player_picture : "184941.png",
        player_position : "MidFielder",
        player_height : "169",
        player_number : "11",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club18,
        player_name : "Hummels",
        player_birthday : "1988-12-16",
        player_picture : "178603.png",
        player_position : "Defender",
        player_height : "191",
        player_number : "65",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club7,
        player_name : "Benzema",
        player_birthday : "1987-12-19",
        player_picture : "165153.png",
        player_position : "Attacker",
        player_height : "187",
        player_number : "26",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club6,
        player_name : "Schweinsteiger",
        player_birthday : "1984-08-01",
        player_picture : "121944.png",
        player_position : "MidFielder",
        player_height : "183",
        player_number : "70",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club6,
        player_name : "Rooney",
        player_birthday : "1985-10-24",
        player_picture : "54050.png",
        player_position : "Attacker",
        player_height : "176",
        player_number : "7",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club1,
        player_name : "Koscielny",
        player_birthday : "1985-09-10",
        player_picture : "165229.png",
        player_position : "Defender",
        player_height : "186",
        player_number : "75",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club1,
        player_name : "Santi Cazorla",
        player_birthday : "1984-12-13",
        player_picture : "146562.png",
        player_position : "MidFielder",
        player_height : "168",
        player_number : "39",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club1,
        player_name : "Mertesacker",
        player_birthday : "1984-09-29",
        player_picture : "53612.png",
        player_position : "Defender",
        player_height : "198",
        player_number : "83",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club2,
        player_name : "Courtois",
        player_birthday : "1992-05-11",
        player_picture : "192119.png",
        player_position : "GoalKeeper",
        player_height : "199",
        player_number : "99",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation2,
        player_club_id : club2,
        player_name : "Willian",
        player_birthday : "1988-08-09",
        player_picture : "180403.png",
        player_position : "MidFielder",
        player_height : "175",
        player_number : "51",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club2,
        player_name : "Cahill",
        player_birthday : "1985-12-19",
        player_picture : "164468.png",
        player_position : "Defender",
        player_height : "193",
        player_number : "40",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club2,
        player_name : "Azpilicueta",
        player_birthday : "1989-08-28",
        player_picture : "184432.png",
        player_position : "Defender",
        player_height : "178",
        player_number : "31",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club3,
        player_name : "Kompany",
        player_birthday : "1986-04-10",
        player_picture : "139720.png",
        player_position : "Defender",
        player_height : "192",
        player_number : "82",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club3,
        player_name : "Zabaleta",
        player_birthday : "1985-01-16",
        player_picture : "142784.png",
        player_position : "Defender",
        player_height : "178",
        player_number : "4",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation15,
        player_club_id : club3,
        player_name : "Touré",
        player_birthday : "1983-05-13",
        player_picture : "20289.png",
        player_position : "MidFielder",
        player_height : "189",
        player_number : "51",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club3,
        player_name : "Nasri",
        player_birthday : "1987-06-26",
        player_picture : "165239.png",
        player_position : "MidFielder",
        player_height : "175",
        player_number : "55",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club4,
        player_name : "Mignolet",
        player_birthday : "1988-03-06",
        player_picture : "173426.png",
        player_position : "GoalKeeper",
        player_height : "193",
        player_number : "47",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club4,
        player_name : "Sakho",
        player_birthday : "1990-02-13",
        player_picture : "183285.png",
        player_position : "Defender",
        player_height : "187",
        player_number : "2",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club4,
        player_name : "Henderson",
        player_birthday : "1990-06-17",
        player_picture : "183711.png",
        player_position : "MidFielder",
        player_height : "182",
        player_number : "42",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation2,
        player_club_id : club4,
        player_name : "Coutinho",
        player_birthday : "1992-06-12",
        player_picture : "189242.png",
        player_position : "MidFielder",
        player_height : "171",
        player_number : "55",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club4,
        player_name : "Sturridge",
        player_birthday : "1989-09-01",
        player_picture : "171833.png",
        player_position : "Attacker",
        player_height : "188",
        player_number : "31",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club5,
        player_name : "Lloris",
        player_birthday : "1986-12-26",
        player_picture : "167948.png",
        player_position : "GoalKeeper",
        player_height : "188",
        player_number : "39",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club5,
        player_name : "Vertonghen",
        player_birthday : "1987-04-24",
        player_picture : "172871.png",
        player_position : "Defender",
        player_height : "189",
        player_number : "85",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club5,
        player_name : "Lamela",
        player_birthday : "1992-03-04",
        player_picture : "170368.png",
        player_position : "MidFielder",
        player_height : "183",
        player_number : "71",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation13,
        player_club_id : club5,
        player_name : "Eriksen",
        player_birthday : "1992-02-14",
        player_picture : "190460.png",
        player_position : "MidFielder",
        player_height : "177",
        player_number : "37",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club13,
        player_name : "Townsend",
        player_birthday : "1991-07-16",
        player_picture : "194932.png",
        player_position : "MidFielder",
        player_height : "181",
        player_number : "8",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club6,
        player_name : "Juan Mata",
        player_birthday : "1988-04-28",
        player_picture : "178088.png",
        player_position : "MidFielder",
        player_height : "170",
        player_number : "77",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation7,
        player_club_id : club6,
        player_name : "Carrick",
        player_birthday : "1981-07-28",
        player_picture : "21146.png",
        player_position : "MidFielder",
        player_height : "188",
        player_number : "36",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club6,
        player_name : "Fellaini",
        player_birthday : "1987-11-22",
        player_picture : "176944.png",
        player_position : "MidFielder",
        player_height : "194",
        player_number : "22",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation17,
        player_club_id : club8,
        player_name : "Rakitić",
        player_birthday : "1988-03-10",
        player_picture : "168651.png",
        player_position : "MidFielder",
        player_height : "184",
        player_number : "15",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club9,
        player_name : "Juanfran",
        player_birthday : "1985-01-09",
        player_picture : "146760.png",
        player_position : "Defender",
        player_height : "180",
        player_number : "60",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation3,
        player_club_id : club9,
        player_name : "Griezmann",
        player_birthday : "1991-03-21",
        player_picture : "194765.png",
        player_position : "Attacker",
        player_height : "176",
        player_number : "14",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club9,
        player_name : "Koke",
        player_birthday : "1992-01-08",
        player_picture : "193747.png",
        player_position : "MidFielder",
        player_height : "178",
        player_number : "85",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club10,
        player_name : "Banega",
        player_birthday : "1988-06-29",
        player_picture : "178562.png",
        player_position : "MidFielder",
        player_height : "174",
        player_number : "23",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club10,
        player_name : "Reyes",
        player_birthday : "1983-09-01",
        player_picture : "111093.png",
        player_position : "MidFielder",
        player_height : "176",
        player_number : "16",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club10,
        player_name : "Vitolo",
        player_birthday : "1989-11-02",
        player_picture : "199715.png",
        player_position : "MidFielder",
        player_height : "184",
        player_number : "71",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation11,
        player_club_id : club16,
        player_name : "Bacca",
        player_birthday : "1986-09-08",
        player_picture : "207664.png",
        player_position : "Attacker",
        player_height : "181",
        player_number : "89",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club11,
        player_name : "Mustafi",
        player_birthday : "1992-04-17",
        player_picture : "192227.png",
        player_position : "Defender",
        player_height : "184",
        player_number : "81",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club11,
        player_name : "Parejo",
        player_birthday : "1989-04-16",
        player_picture : "189513.png",
        player_position : "MidFielder",
        player_height : "180",
        player_number : "89",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation4,
        player_club_id : club11,
        player_name : "Piatti",
        player_birthday : "1989-03-31",
        player_picture : "183899.png",
        player_position : "Attacker",
        player_height : "163",
        player_number : "48",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club14,
        player_name : "Florenzi",
        player_birthday : "1991-03-11",
        player_picture : "203551.png",
        player_position : "Defender",
        player_height : "173",
        player_number : "36",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation10,
        player_club_id : club14,
        player_name : "Nainggolan",
        player_birthday : "1988-05-04",
        player_picture : "178518.png",
        player_position : "MidFielder",
        player_height : "176",
        player_number : "16",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club14,
        player_name : "Totti",
        player_birthday : "1976-09-27",
        player_picture : "1238.png",
        player_position : "Attacker",
        player_height : "180",
        player_number : "41",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation15,
        player_club_id : club14,
        player_name : "Gervinho",
        player_birthday : "1987-05-27",
        player_picture : "170733.png",
        player_position : "Attacker",
        player_height : "179",
        player_number : "26",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation17,
        player_club_id : club15,
        player_name : "Badelj",
        player_birthday : "1989-02-25",
        player_picture : "201144.png",
        player_position : "MidFielder",
        player_height : "186",
        player_number : "14",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation1,
        player_club_id : club15,
        player_name : "Borja Valero",
        player_birthday : "1985-01-12",
        player_picture : "161956.png",
        player_position : "MidFielder",
        player_height : "175",
        player_number : "7",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club15,
        player_name : "Pasqual",
        player_birthday : "1982-03-13",
        player_picture : "154634.png",
        player_position : "Defender",
        player_height : "178",
        player_number : "82",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club16,
        player_name : "De Sciglio",
        player_birthday : "1992-10-20",
        player_picture : "206058.png",
        player_position : "Defender",
        player_height : "183",
        player_number : "83",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club16,
        player_name : "Montolivo",
        player_birthday : "1985-01-18",
        player_picture : "159287.png",
        player_position : "MidFielder",
        player_height : "182",
        player_number : "65",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation6,
        player_club_id : club16,
        player_name : "Abbiati",
        player_birthday : "1977-07-08",
        player_picture : "1219.png",
        player_position : "GoalKeeper",
        player_height : "191",
        player_number : "60",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation8,
        player_club_id : club19,
        player_name : "Vieirinha",
        player_birthday : "1986-01-24",
        player_picture : "177553.png",
        player_position : "MidFielder",
        player_height : "172",
        player_number : "10",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation2,
        player_club_id : club19,
        player_name : "Luiz Gustavo",
        player_birthday : "1987-07-23",
        player_picture : "185221.png",
        player_position : "MidFielder",
        player_height : "187",
        player_number : "96",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club19,
        player_name : "Draxler",
        player_birthday : "1993-09-20",
        player_picture : "202166.png",
        player_position : "MidFielder",
        player_height : "187",
        player_number : "96",
        player_foot : "Right"
    });
    Players.insert({
        player_nation_id : nation5,
        player_club_id : club20,
        player_name : "Aogo",
        player_birthday : "1987-01-14",
        player_picture : "164491.png",
        player_position : "Defender",
        player_height : "184",
        player_number : "71",
        player_foot : "Left"
    });
    Players.insert({
        player_nation_id : nation9,
        player_club_id : club20,
        player_name : "Huntelaar",
        player_birthday : "1983-08-12",
        player_picture : "148803.png",
        player_position : "Attacker",
        player_height : "186",
        player_number : "90",
        player_foot : "Right"
    });
}
