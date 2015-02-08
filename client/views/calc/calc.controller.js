'use strict';

angular.module("appModule")
    .controller('calcCtrl', function($scope, $http){
    console.log("controller loaded!");

    $scope.grade = "";
    $scope.credits = "";
    $scope.name = "";
    $scope.gpa = "";
    $scope.message = "";
    $scope.numerator = 0;
    $scope.denomonator = 0;
    $scope.data = [];

    $scope.makeGPA = function() {
        if(!$scope.validate()){
            return;
        }
        if($scope.validate()) {

            var data =  $scope.submit();
            if($scope.data.length != 0){
                $scope.makeMessage();
            }

        }

    };

        $scope.submit = function(){
            $http.post('api/GPA', {
                name: $scope.name,
                credits: Number($scope.credits),
                grade: $scope.grade
            }).success(function (){
                return $scope.getGrades();
            });
            return $scope.data;
        }
        $scope.makeMessage = function(){
            $scope.message = "Your GPA is: ";
            //console.log("asdasd");
            console.log($scope.data);
            $scope.processGrades();
            console.log($scope.numerator + " " + $scope.denomonator);
            $scope.gpa = $scope.calc();
        }

    $scope.validate = function(){
            if ($scope.isEmpty($scope.grade) || $scope.isEmpty($scope.credits) || $scope.isEmpty($scope.name)) {
                $scope.message = "An input is empty";
                $scope.gpa = "";
                return false;
            }
            if (!$scope.isLetter($scope.grade) || !$scope.isNumeric($scope.credits)) {
                $scope.message = "There was an error.";
                $scope.gpa = "";
                return false;
            }
        return true;
    }

    $scope.getGrades = function(){
        $http.get('api/GPA').success(function(GPAs) {
            //console.log(GPAs);
            $scope.data =  GPAs;
            //console.log($scope.data);
        });
    };

    $scope.processGrades = function(){
        console.log($scope.data);
        angular.forEach($scope.data,function(item){
            console.log(item.credits+" "+item.grade);
            $scope.numerator += Number(item.credits*$scope.letterToNumber(item.grade));
            $scope.denomonator += Number(item.credits);
        });
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
        return (Number($scope.numerator))/(Number($scope.denomonator));
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