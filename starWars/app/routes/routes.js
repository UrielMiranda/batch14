(function(){
    'use strict';

    angular
        .module('swApp')
        .config(config);


    config.$inject = ["$routeProvider","$locationProvider"];
    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/people',{
                template: `<star-wars category="'people'"></star-wars>
`
            })
            .when('/planets',{
                template: `<star-wars category="'planets'"></star-wars>
`
            })
            .when('/starships',{
                template: `<star-wars category="'starships'"></star-wars>
`
            })
            .otherwise({
                redirectTo : '/people'
            });
        $locationProvider.html5Mode(true);
    }

})();