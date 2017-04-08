(function(){
    'use strict';

    var helloComponent = {
        template: "Hello {{$ctrl.name}} {{$ctrl.lastname}}",
        controller: helloCtrl
    };

    angular
        .module("myApp")
        .component("helloComponent", helloComponent)
        .controller("anotherCtrl", anotherCtrl);

    function helloCtrl(){
        var vm = this;

        vm.name = "Nekro";
        vm.lastname = "Miranda";
    }

    function anotherCtrl(){
        var vm = this;

        vm.other = "Otro controller";
    }

})();