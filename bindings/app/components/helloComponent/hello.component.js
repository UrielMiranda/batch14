(function(){
    'use strict';

    var helloComponent = {
        bindings:{
          country: "=",
            name: "="
        },
     //template: "{{$ctrl.country}}",
      templateUrl: "./app/components/helloComponent/hello.component.html",
        controller: helloCtrl
    };
    angular
        .module("myApp")
        .component("helloComponent", helloComponent)
        .controller("homeCtrl", homeCtrl);

    function helloCtrl(){
        var vm = this;
        vm.mx = true;
        vm.col = false;
    }

    function homeCtrl(){
        var home = this;

        home.users = [
            {name: "Josue", number: Math.random()},
            {name: "Uriel", number: Math.random()},
            {name: "David", number: Math.random()},

        ]
    }
})();