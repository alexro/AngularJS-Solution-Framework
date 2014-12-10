describe("app form", function () {

    beforeEach(module('app'));
    beforeEach(module('app/components/form/app.form.html'));

    var $scope,
        element,
        template,
        controller,
        scope,
        Storage;

    beforeEach(inject(function ($rootScope, $compile, _Storage_) {
        $scope = $rootScope.$new();
        element = angular.element("<app-form></app-form>");
        template = $compile(element)($scope);
        $scope.$digest();
        controller = element.controller;
        scope = element.isolateScope();
        Storage = _Storage_;
    }));

    it("should be defined", inject(function () {
        expect($scope).toBeDefined();
        expect(element).toBeDefined();
        expect(template).toBeDefined();
        expect(controller).toBeDefined();
        expect(Storage).toBeDefined();
    }));

    it("should add data", inject(function () {
        scope.textData = 'a';
        scope.numData = 1;
        scope.dateData = new Date(86400000);
        scope.add();
        expect(Storage.getData()[0].text).toEqual('a');
        expect(Storage.getData()[0].num).toEqual(1);
        expect(Storage.getData()[0].date).toEqual(new Date(86400000));
    }));
});