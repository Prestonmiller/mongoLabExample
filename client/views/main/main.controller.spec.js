'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should show dasd weight: 45', function(){
        scope.data = [{
            text: "asda",
            number: 4
        },{
            text: "dasd",
            number: 45
        },{
            text: "daasdsasd",
            number: 5
        }];
        console.log(scope.data);

       expect(scope.getLargest()).toEqual('dasd weight: 45')
    });

});