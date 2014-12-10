'use strict';

angular.module('app.filter', [])
    .run(function () {
        console.log('app.filter started');
    })
    .directive('appFilter', [
        'Storage',
        function (Storage) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: function (elem, attrs) {
                    return '/app/components/filter/app.filter.html'
                },
                controller: ['$scope', function ($scope) {
                    $scope.apply = function () {
                        Storage.setFilter($scope.filterData);
                    }
                }]
            }
        }
    ]);