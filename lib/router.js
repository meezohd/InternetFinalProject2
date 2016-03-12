/**
 * Created by Justin on 3/11/2016.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});


Router.map(function () {

    this.route('index', {
        path: '/',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Home');
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
            Session.set('documentTitle', 'Shoot 24 | Search');
            this.next();
        }
    });
    this.route('leagues', {
        path: '/Leagues',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Leagues');
            this.next();
        }
    });
    this.route('clubs', {
        path: '/Clubs',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Clubs');
            this.next();
        }
    });
    this.route('players', {
        path: '/Players',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Players');
            this.next();
        }
    });
    this.route('nations', {
        path: '/Nations',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Nations');
            this.next();
        }
    });
    this.route('admin', {
        path:'/Admin',
        template: 'accountsAdmin',
        onBeforeAction: function() {
            Session.set('documentTitle', 'Shoot 24 | Admin');
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
            this.next();
        }
    });
    this.route('login', {
        path: '/Login',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Login');
            this.next();
        }
    });
    this.route('register', {
        path: '/Register',
        onBeforeAction: function () {
            Session.set('documentTitle', 'Shoot 24 | Register');
            this.next();
        }
    });

});