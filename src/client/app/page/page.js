'use strict';

angular.module('app.page', [])
    .run(function () {
        console.log('app.page started');
    })
    .controller('PageController', [
        '$scope',
        'Storage',
        function ($scope, Storage) {
            // controller can be used for additional page functionality
        }
    ]);