'use strict';

describe('Testing controller: calcCtrl', function(){

    beforeEach(module('mainApp'));

    var scope; var mainCtrl;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('calcCtrl', {
            $scope: scope
        });
    }));

    it("should be 1",function() {
        expect(scope.letterToNumber("D")).toBe(1);
    });

    it("should be 1.3",function() {
        expect(scope.letterToNumber("D+")).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(scope.letterToNumber("C-")).toBe(1.7);
    });

    it("should be 2",function() {
        expect(scope.letterToNumber("C")).toBe(2);
    });

    it("should be 2.3",function() {
        expect(scope.letterToNumber("C+")).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(scope.letterToNumber("B-")).toBe(2.7);
    });

    it("should be 3",function() {
        expect(scope.letterToNumber("B")).toBe(3);
    });

    it("should be 3.3",function() {
        expect(scope.letterToNumber("B+")).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(scope.letterToNumber("A-")).toBe(3.7);
    });

    it("should be 4",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "B";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(3.0);
    });

    it("should be 3",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(2.0);
    });

    it("should be 2",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "D";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(1.0);
    });

    it("should be 1",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(0.0);
    });

    it("should be false", function(){
        expect(scope.isNumeric("A")).toBe(false);
    });

    it("should be true", function(){
        expect(scope.isNumeric(3)).toBe(true);
    });

    it("should be true", function(){
        expect(scope.isLetter("A")).toBe(true);
    });

    it("should be false", function(){
        expect(scope.isLetter("E")).toBe(false);
    });

    it("should be false", function(){
        expect(scope.isEmpty("s")).toBe(false);
    });

    it("should be true", function(){
        expect(scope.isEmpty("")).toBe(true);
    });

    it("should be error", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = "J";
        scope.makeGPA();
        expect(scope.message).toBe("There was an error.");
    });

    it("should be error", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.makeGPA();
        expect(scope.message).toBe("An input is empty");
    });

    it("should be green", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("good");
    });
    it("should be yellow", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("okay");
    });

    it("should be red", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("bad");
    });

    it("should be 4.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("4!");
    });

    it("should be 3.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "B";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("3!");
    });

    it("should be 2.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("2!");
    });

    it("should be 1.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "D";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("1!");
    });

    it("should be 0.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("0!");
    });

});