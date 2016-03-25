/**
 * Created by Justin on 3/25/2016.
 */
/**
 * Created by Justin on 3/24/2016.
 */
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

Template.addNation.helpers({
    nation: function() {
        var nationPic = [
            {
                path: "/images/nations/7.png",
                name: "Picture 7"
            },
            {
                path: "/images/nations/10.png",
                name: "Picture 10"
            },
            {
                path: "/images/nations/14.png",
                name: "Picture 14"
            },
            {
                path: "/images/nations/18.png",
                name: "Picture 18"
            },
            {
                path: "/images/nations/21.png",
                name: "Picture 21"
            },
            {
                path: "/images/nations/27.png",
                name: "Picture 27"
            },
            {
                path: "/images/nations/34.png",
                name: "Picture 34"
            },
            {
                path: "/images/nations/37.png",
                name: "Picture 37"
            },
            {
                path: "/images/nations/38.png",
                name: "Picture 38"
            },
            {
                path: "/images/nations/45.png",
                name: "Picture 45"
            },
            {
                path: "/images/nations/48.png",
                name: "Picture 48"
            },
            {
                path: "/images/nations/51.png",
                name: "Picture 51"
            },
            {
                path: "/images/nations/52.png",
                name: "Picture 52"
            },
            {
                path: "/images/nations/54.png",
                name: "Picture 54"
            },
            {
                path: "/images/nations/55.png",
                name: "Picture 55"
            },
            {
                path: "/images/nations/56.png",
                name: "Picture 56"
            },
            {
                path: "/images/nations/60.png",
                name: "Picture 60"
            },
            {
                path: "/images/nations/108.png",
                name: "Picture 108"
            }
        ];
        return nationPic;
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