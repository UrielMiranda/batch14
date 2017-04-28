(function(){
    'use strict';

    var luke = {
        bindings:{
          message: '<'
        },
        template:`<h1>Luke Skywalker</h1>
<h2>From Vader: {{$ctrl.message}}</h2>
<h2>From Leia: {{$ctrl.data}}</h2>
<h3>{{$ctrl.anotherData()}}</h3>`,
        controller: lukeCtrl
    };

    angular
        .module('myApp')
        .component('lukeSkywalker',luke);

    function lukeCtrl($scope, myService){
        var vm = this;
        vm.data = 'Nothing Here';

        /// Event Method
        $scope.$on('msg', function(evt,msg){
            vm.data = msg
        });
        /// event Method

        //// Services Method
        vm.anotherData = getter;
        function getter(){
            return myService.getMessage();
        }

        // End Services Method
    }
})();