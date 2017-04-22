/**
 * Created by urielmiranda on 04/11/16.
 */
(function(){
    'use strict';

    var topTen = {
        bindings:{
            category: "="
        },
        templateUrl : "./components/top.html",
        controller: topCtrl
    };

    angular
        .module("lastFm")
        .component("topTen",topTen);

    topCtrl.$inject = ["artistLastFm"];
    function topCtrl(artistLastFm){
        var top    = this;
        top.track  = null;
        top.artist = null;

        top.topArtist = artistLastFm.get({
            category: top.category
        })
            .$promise.then(function(data){
                if(top.category == "artists"){
                    top.artist = data.artists.artist;
                }else if(top.category == "tracks"){
                    top.track = data.tracks.track;
                }

            });


    }

})();
