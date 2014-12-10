'use strict';

angular.module('app.form', [])
    .run(function () {
        console.log('app.form started');
    })
    .directive('appForm', [
        'Storage',
        function (Storage) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'app/components/form/app.form.html',
                controller: ['$scope', function ($scope) {
                    $scope.add = function () {
                        Storage.add($scope.textData, $scope.numData, $scope.dateData);
                        delete $scope.textData;
                        delete $scope.numData;
                        delete $scope.dateData;
                    }
                }]
            }
        }
    ]);