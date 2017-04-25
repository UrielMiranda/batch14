(function(){
    'use strict';

    var mexicoMap = {
        templateUrl: './app/mexicoComponent/mexico.map.component.html',
        controller: mexaCtrl

    };
    angular
        .module("mexApp")
        .component("mexicoMap",mexicoMap);


    function mexaCtrl($scope){
        var vm = this;

        vm.list = [
            {'id':'MX-DF', 'name': "Distrito Federal"},
            {'id':'MX-JAL', 'name':"Jalisco"},
            {'id':'MX-HID', 'name':"Hidalgo"}
        ];

        vm.over = null;

        var initialColor = "#ffecb3";
        var overColor = '#ff8f00';
        var paths = d3.selectAll('path');
        paths.style('fill',initialColor);

        paths.on('mouseover', function(){
            vm.over = this.id;
            d3.select(this).style('fill', overColor);
            d3.select(this).style('stroke', '#fff');
            d3.select(this).style('stroke-width', '2px');
            $scope.$apply();
        });

        paths.on('mouseout',function(){
            d3.select(this).style('fill',initialColor);
        })

    }
})();