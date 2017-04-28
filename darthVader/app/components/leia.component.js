(function(){
    'use strict';

    var leia = {
        bindings:{
          message: '<'
        },
        template: `
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="./app/assets/leia.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Leia<i class="material-icons right">more_vert</i></span>
      <p><a href="#">{{$ctrl.message}}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>{{$ctrl.message}}</p>
    </div>
  </div>`,
    };

    angular
        .module('darth')
        .component("leiaComponent",leia);
})();