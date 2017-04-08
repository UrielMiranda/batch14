//IIFE
(function(){
    'use strict';

    angular
        .module("myApp",[])
        .controller("myCtrl", myCtrl);

    function myCtrl(){
        var vm = this;

        vm.movies = [
            {"title": "StarWars", "age": 1970},
            {"title": "Batman","age": 1971},
            {"title": "Invader Zim", "age": 1972}
        ]
    }
})();