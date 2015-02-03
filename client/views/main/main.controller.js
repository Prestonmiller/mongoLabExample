'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField = "";
        $scope.weight = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getPets();

        $scope.addData = function(){
            if($scope.textField.length >= 1 && $scope.weight > 0) {
                $http.post('api/pets', {text: $scope.textField, number: $scope.weight}).success(function(){
                    $scope.getPets();
                });
                $scope.textField = "";
                $scope.weight = "";
            }
        };

        $scope.getLargest = function(){
            if($scope.data.length == 0){
                return "No pets entered";
            }else{
                var largest = $scope.data[0].number;
                var name = $scope.data[0].text;
                angular.forEach($scope.data, function(item){
                    if(item.number > largest){
                        largest = item.number;
                        name = item.text;
                    }
                });
                return name+" weight: "+largest;
            }
        }

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getPets();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

    });