/**
 * Created by Justin on 3/11/2016.
 *
 * Our roots file. In here we also determine the page title to be set using Meteor Sessions.
 * The data available to a certain page is also determined in here via subscriptions.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

var wesiteName ="Shoot 24 | ";

Router.map(function () {

    this.route('index', {
        path: '/',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Home');
            this.next();
        },
        data: function(){
            return {
                isIndex: 'true'            //Passing data to layout.html determining if route is Index.
            };

        }
    });

/////////////////////////////////
    this.route('leagues', {
        path: '/Leagues',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Leagues');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("leagues"),
                Meteor.subscribe("nations"),
                Meteor.subscribe("clubs");
        },
        data:function () {
            return {
                leagues:  Leagues.find()
            }
        }
    });

    this.route('leaguePage', {
        path: '/Leagues/:_id',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName + Leagues.findOne({_id: this.params._id}).league_name);
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("leaguePage", this.params._id),
                   Meteor.subscribe("nations"),
                Meteor.subscribe("leagues"),
                   Meteor.subscribe("players");
        },
        data: function () {
            return {
                clubs:  Clubs.find({club_league_id: this.params._id}),
                players:  Players.find({player_club_id: { $in:
                    Clubs.find({club_league_id: this.params._id}).map(function (doc) {
                        return doc._id
                    }) } })
            }
        }

    });
/////////////////////////////////

/////////////////////////////////
    this.route('nations', {
        path: '/Nations',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Nations');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("nations"),
                Meteor.subscribe("clubs");
        },
        data:function () {
            return {
                nations:  Nations.find()
            }
        }
    });

    this.route('nationPage', {
        path: '/Nations/:_id',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName + Nations.findOne({_id: this.params._id}).nation_name);
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("nationPage", this.params._id),
                Meteor.subscribe("clubs"),
                Meteor.subscribe("nations");
        },
        data: function () {
            return {
                players:  Players.find({player_nation_id: this.params._id})
            }
        }

    });
/////////////////////////////////

/////////////////////////////////
    this.route('clubs', {
        path: '/Clubs',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Clubs');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("clubs"),
                Meteor.subscribe("nations");
        },
        data:function () {
            return {
                clubs:  Clubs.find()
            }
        }
    });

    this.route('clubPage', {
        path: '/Clubs/:_id',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName + Clubs.findOne({_id: this.params._id}).club_name);
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("clubPage", this.params._id),
                Meteor.subscribe("clubs"),
                Meteor.subscribe("nations");
        },
        data: function () {
            return {
                players:  Players.find({player_club_id: this.params._id})
            }
        }

    });
/////////////////////////////////

/////////////////////////////////
    this.route('players', {
        path: '/Players',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Players');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("players"),
                Meteor.subscribe("clubs"),
                Meteor.subscribe("nations");
        },
        data:function () {
            return {
                players:  Players.find()
            }
        }
    });

    this.route('playerPage',  {
        path: '/Players/:_id',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName + Players.findOne({_id: this.params._id}).player_name);
            this.next();
        },
        waitOn: function () {
            if(Roles.userIsInRole(Meteor.user(), ['admin'])){
                Meteor.subscribe("userData");
            }
            return Meteor.subscribe("playerPage", this.params._id),
                Meteor.subscribe("nations"),
                Meteor.subscribe("clubs"),
                Meteor.subscribe('playersComments', this.params._id);
        },
        data: function() {
            return {
                players: Players.find({_id: this.params._id}),
                comments: Comments.find()
            }
        }
    });
/////////////////////////////////


    this.route('admin', {
        path:'/Admin',

        onBeforeAction: function() {
            Session.set('documentTitle', wesiteName +' Admin');
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('User not Admin.... redirecting');
                this.redirect('/');
            }
            this.next();
        },
        waitOn: function(){
            Meteor.subscribe("comments");
            Meteor.subscribe("players");
            Meteor.subscribe("nations");
            Meteor.subscribe("leagues");
            Meteor.subscribe("clubs");
            return Meteor.subscribe("userData");
        }
    });

    this.route('login', {
        path: '/Login',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Login');
            this.next();
        }
    });

    this.route('register', {
        path: '/Register',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Register');
            this.next();
        }
    });

});