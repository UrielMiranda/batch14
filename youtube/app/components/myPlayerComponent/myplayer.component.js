(function(){
    'use strict';

    var myPlayer= {
        bindings:{
            videoId: "="
        },
        templateUrl:'./app/components/myPlayerComponent/myplayer.component.html',
        controller: tubeCtrl
    };

    angular
        .module('myTube')
        .component("myPlayer",myPlayer);


    tubeCtrl.inject = ["$sce"];
    function tubeCtrl($sce){
        var vm = this;

        vm.tubeUrl = "https://www.youtube.com/embed/";

        vm.trustUrl = function(){
            return $sce.trustAsResourceUrl(vm.tubeUrl+vm.videoId)
        }


    }

})();