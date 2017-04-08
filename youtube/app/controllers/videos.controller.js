(function(){
    'use strict';

    angular
        .module('myTube')
        .controller("videoList", videoList);


    function videoList() {
        var vm = this;

        vm.videos = [
            {id : "JoNJ6AQhmFY"},
            {id : "pT68FS3YbQ4"},
            {id : "felcoBFRE0I"},
            {id : "Q3dvbM6Pias"},
        ]
    }

})();