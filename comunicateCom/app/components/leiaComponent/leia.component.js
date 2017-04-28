(function(){
    'use strict';
    var leia = {
        bindings:{
            message: '<'
        },
        template: `<h1>Leia Organa</h1>
           <h2>From Vader: {{$ctrl.message}}</h2>
            
            <span>Send Message <button ng-click="$ctrl.sendEvent()">Send</button></span>

        Mensaje para luke<input ng-model="$ctrl.mess">
           <button ng-click="$ctrl.setData()">Click</button>`,
        controller: leiaCtrl
    };

    angular
        .module('myApp')
        .component('leiaOrgana',leia);

    function leiaCtrl($scope,myService){
        var vm = this;

        /// event method
        vm.toLuke = "Heeeelp!!!";
        vm.sendEvent = send;
        function send(){
            $scope.$parent.$broadcast('msg', vm.toLuke)
        }
        //// end evenbt method


        /// services method
        vm.setData = setter;
        function setter(){
            myService.setMessage(vm.mess)
        }
        //// end services method

    }


})();