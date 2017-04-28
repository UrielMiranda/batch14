(function(){
    'use strict';

    angular
        .module('myApp')
        .factory('myService',myServices);

    function myServices(){
        return {
            message: "Nothing Here Again...",
            getMessage: function(){
                return this.message;
            },
            setMessage: function(msg){
                this.message = msg
            }
        }
    }
})();