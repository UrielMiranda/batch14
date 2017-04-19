(function(){
    'use strict';

    var starWars = {
        bindings:{
          category: "="
        },
        templateUrl: './app/components/starWarsComponent/starWars.component.html',
        controller: starCtrl
    };


    angular
        .module('swApp')
        .component("starWars", starWars);

    starCtrl.$inject = ["starApi"];
    function starCtrl(starApi) {
        var vm = this;

        vm.characters = null;
        vm.apiData = null;

        vm.$onInit = onInit;
        //vm.otherFun = function(){}

        function onInit(){
            vm.apiData = starApi.get({category: vm.category})
                .$promise
                .then(function(response){
                    vm.characters = response.results
                });
        }
    }

})();