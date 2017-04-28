(function(){
    'use strict';

    var darth = {
        template: `
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="./app/assets/darth.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Leia<i class="material-icons right">more_vert</i></span>
      <p><a href="#">{{$ctrl.message}}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>{{$ctrl.message}}</p>
    </div>
  </div>
`,
        controller: darthCtrl
    };

    angular
        .module('darth')
        .component("darthComponent",darth);

    function darthCtrl(){
        var vm = this;

        vm.toLuke = "I'm You Father";
        vm.toLeia = "Give me the Map";
    }

})();