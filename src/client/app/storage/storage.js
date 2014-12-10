'use strict';

angular.module('app.storage', [])
    .run(function () {
        console.log('app.storage started');
    })
    .factory('Storage', [
        '$rootScope',
        function ($rootScope) {
            var self = {};

            self.data = [];
            self.filter = '';

            self.add = function (textData, numData, dateData) {
                var data = {
                    text: textData,
                    num: numData,
                    date: dateData
                };
                self.data.push(data);
                $rootScope.$broadcast(self.UPDATED, { reason: self.REASON_ADD, data: data });
            };

            self.getData = function () {
                return self.data;
            };

            self.setFilter = function (filter) {
                self.currentFilter = filter;
                $rootScope.$broadcast(self.UPDATED, { reason: self.REASON_FILTER, data: filter });
            }

            self.UPDATED = 'UPDATED';

            self.REASON_ADD = 'REASON_ADD';
            self.REASON_FILTER = 'REASON_FILTER';

            return {
                add: self.add,
                getData: self.getData,
                setFilter: self.setFilter,
                UPDATED: self.UPDATED,
                REASON_ADD: self.REASON_ADD,
                REASON_FILTER: self.REASON_FILTER
            }
        }
    ]);