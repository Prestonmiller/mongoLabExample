'use strict';

angular.module("appModule")
    .controller('calcCtrl', function($scope, $http){
    console.log("controller loaded!");

    $scope.grade1 = "";
    $scope.grade2 = "";
    $scope.grade3 = "";
    $scope.credits1 = "";
    $scope.credits2 = "";
    $scope.credits3 = "";
    $scope.gpa = "";
    $scope.message = "";

    $scope.makeGPA = function(){
        if($scope.isEmpty($scope.grade1) || $scope.isEmpty($scope.grade2) || $scope.isEmpty($scope.grade3) || $scope.isEmpty($scope.credits1) || $scope.isEmpty($scope.credits2) || $scope.isEmpty($scope.credits3)){
            $scope.message = "An input is empty";
            $scope.gpa = "";
            return;
        }
        if (!$scope.isLetter($scope.grade1) || !$scope.isLetter($scope.grade2) || !$scope.isLetter($scope.grade3) || !$scope.isNumeric($scope.credits1) || !$scope.isNumeric($scope.credits2) || !$scope.isNumeric($scope.credits3)) {
            $scope.message = "There was an error.";
            $scope.gpa = "";
            return;
        }
        $scope.message = "Your GPA is: ";
        $scope.gpa = $scope.calc();

    };

    $scope.isEmpty = function(item){
        return item.length == 0;
    };

    $scope.getMessage = function(){
        return $scope.message;
    };

    $scope.getGPA = function(){
        if($scope.isNumeric($scope.gpa)){
            return $scope.gpa+"!";
        }
        return "";
    };

    $scope.color = function(){
        if ($scope.gpa >= 3) {
            return "good";
        } else if ($scope.gpa >= 2.0) {
            return "okay";
        } else {
            return "bad";
        }
    };

    $scope.isNumeric = function(arg1){
        return !isNaN(parseFloat(arg1));
    };

    $scope.calc = function(){
        return (Number($scope.letterToNumber($scope.grade1))*Number($scope.credits1)+Number($scope.letterToNumber($scope.grade2))*Number($scope.credits2)+Number($scope.letterToNumber($scope.grade3))*Number($scope.credits3))/(Number($scope.credits1)+Number($scope.credits2)+Number($scope.credits3));
    };

    $scope.letterToNumber = function(course) {
        switch (course.toUpperCase()) {
            case "A":
                return 4;
            case "A-":
                return 3.7;
            case "B":
                return 3;
            case "B+":
                return 3.3;
            case"B-":
                return 2.7;
            case "C":
                return 2;
            case "C+":
                return 2.3;
            case "C-":
                return 1.7;
            case "D":
                return 1;
            case "D+":
                return 1.3;
            default:
                return 0;
        }
    };
    $scope.isLetter = function(course) {
        switch (course.toUpperCase()) {
            case "A":

            case "A-":

            case "B":

            case "B+":

            case"B-":

            case "C":

            case "C+":

            case "C-":

            case "D":

            case "D+":

            case "F":
                return true;
            default:
                return false;
        }
    };

});