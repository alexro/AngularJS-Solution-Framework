'use strict';

angular.module('app.table', [])
    .run(function () {
        console.log('app.table started');
    })
    .directive('appTable', [
        'Storage',
        function (Storage) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: function (elem, attrs) {
                    return '/app/components/table/app.table.html'
                },
                controller: ['$scope', function ($scope) {
                    $scope.so = {};

                    $scope.sort = function (field) {
                        if ($scope.so[field + 'Order']) {
                            $scope.so[field + 'Order'] = $scope.so[field + 'Order'] == 'ASC' ? 'DESC' : 'ASC';
                        } else {
                            $scope.so[field + 'Order'] = 'ASC';
                        }

                        $scope.so.sortColumn = field;
                        $scope.so.sortOrder = $scope.so[field + 'Order'];

                        $scope.sortData();
                    };

                    $scope.sortData = function () {
                        if (!$scope.so.sortColumn) {
                            return;
                        }

                        $scope.data.sort(function (a, b) {
                                if ($scope.so.sortColumn == 'text') {
                                    if (a[$scope.so.sortColumn] == b[$scope.so.sortColumn]) {
                                        return 0;
                                    } else if ($scope.so.sortOrder == 'ASC') {
                                        return a[$scope.so.sortColumn] > b[$scope.so.sortColumn] ? 1 : -1;
                                    } else {
                                        return a[$scope.so.sortColumn] > b[$scope.so.sortColumn] ? -1 : 1;
                                    }
                                } else {
                                    return $scope.so.sortOrder == 'ASC' ?
                                    a[$scope.so.sortColumn] - b[$scope.so.sortColumn] :
                                    b[$scope.so.sortColumn] - a[$scope.so.sortColumn];
                                }
                            }
                        );
                    };

                    $scope.$on(Storage.UPDATED, function (ev, args) {
                        if (args.reason == Storage.REASON_ADD) {
                            $scope.data = Storage.getData();
                            $scope.sortData();
                        } else if (args.reason == Storage.REASON_FILTER) {
                            var filterData = args.data;
                            if (!filterData || filterData == '') {
                                $scope.data = Storage.getData();
                                $scope.sortData();
                            } else {
                                var arr = [];
                                Storage.getData().map(function (item) {
                                    if (item.text.indexOf(filterData) >= 0) {
                                        arr.push(item);
                                    } else if (item.num == +filterData) {
                                        arr.push(item);
                                    } else if ((item.date + '').indexOf(filterData) >= 0) {
                                        arr.push(item);
                                    }
                                });
                                $scope.data = arr;
                                $scope.sortData();
                            }
                        }
                    });
                }]
            }
        }
    ]);