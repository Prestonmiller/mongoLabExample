'use strict';

console.log("main.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main/main.html',
                controller: 'mainCtrl'
            });
    });