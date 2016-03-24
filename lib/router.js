/**
 * Created by Justin on 3/11/2016.
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

    this.route('search', {
        path: '/Search',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Search');
            this.next();
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
            return Meteor.subscribe("leagues");
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
            Session.set('documentTitle', wesiteName +' League Name');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("leaguePage", this.params._id);
        },
        data: function () {
            return {
                clubs:  Clubs.find({club_league_id: this.params._id})
            }
        }

    });
/////////////////////////////////

/////////////////////////////////
    this.route('nations', {
        path: '/Nation',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' Nations');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("nations");
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
            Session.set('documentTitle', wesiteName +' Nation Name');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("nationPage", this.params._id);
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
            return Meteor.subscribe("clubs");
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
            Session.set('documentTitle', wesiteName +' Club Name');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("clubPage", this.params._id);
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
            return Meteor.subscribe("players");
        },
        data:function () {
            return {
                players:  Players.find()
            }
        }
    });

    this.route('playerPage', {
        path: '/Players/:_id',
        onBeforeAction: function () {
            Session.set('documentTitle', wesiteName +' player Name');
            this.next();
        },
        waitOn: function () {
            return Meteor.subscribe("playerPage", this.params._id);
        },
        data: function() { return Players.findOne({_id: this.params._id}) }
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