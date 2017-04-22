(function(){
    'use strict';
    
    angular
        .module("lastFm")
        .constant("apikey",{"url":"1ea476011a970d4658b7ae3a85170d36"})
        .factory("artistLastFm",artistLastFm);


    artistLastFm.$inject = ["$resource","apikey"];
    function artistLastFm($resource,apikey){
        return $resource("http://ws.audioscrobbler.com/2.0/?method=chart.gettop"+":category"+"&api_key="+apikey.url+"&format=json");
    }

})();