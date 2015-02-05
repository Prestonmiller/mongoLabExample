'use strict';

console.log("calc.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('calc', {
                url: '/calc',
                templateUrl: 'views/calc/calc.html',
                controller: 'calcCtrl'
            });
    });