(function(){
    'use strict';

    var darth = {
        bindings:{
          toDarth:'='
        },
        template: `<h1>Darth Vader</h1>
<h3>{{$ctrl.toDarth}}</h3>
<leia-organa message="$ctrl.toLeia"></leia-organa>
<luke-skywalker message="$ctrl.toLuke"></luke-skywalker>`,
        controller: darthCtrl
    };

    angular
        .module('myApp')
        .component('darthVader',darth);


    function darthCtrl(){
        var vm = this;

        vm.toLeia = "Besaste a tu hermano";
        vm.toLuke = "I'm your father";
        vm.toDarth = "Hello";

    }

})();