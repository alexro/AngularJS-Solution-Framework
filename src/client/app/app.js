'use strict';

angular.module('app', [
    'app.storage',
    'app.page',
    'app.form',
    'app.table',
    'app.filter'
]).run(function () {
    console.log('app started');
});