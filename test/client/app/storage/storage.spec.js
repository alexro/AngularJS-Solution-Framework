'use strict';

describe('Storage', function () {

    beforeEach(module('app'));

    var rootScope,
        Storage;

    beforeEach(inject(function ($rootScope, _Storage_) {
        rootScope = $rootScope;
        Storage = _Storage_;
    }));

    it('should be defined', function () {
        expect(rootScope).toBeDefined();
        expect(Storage).toBeDefined();
    });

    it('should add data', function () {
        Storage.add('a', 1, new Date(86400000));
        expect(Storage.getData()[0]['text']).toEqual('a');
        expect(Storage.getData()[0]['num']).toEqual(1);
        expect(Storage.getData()[0]['date']).toEqual(new Date(86400000));
    });

    it('should send data event', function () {
        var reason,
            data;
        rootScope.$on(Storage.UPDATED, function (ev, args) {
            reason = args.reason;
            data = args.data;
        });
        Storage.add('a', 1, new Date(86400000));
        expect(reason).toEqual(Storage.REASON_ADD);
        expect(data['text']).toEqual('a');
        expect(data['num']).toEqual(1);
        expect(data['date']).toEqual(new Date(86400000));
    });

    it('should send filter event', function () {
        var reason,
            data;
        rootScope.$on(Storage.UPDATED, function (ev, args) {
            reason = args.reason;
            data = args.data;
        });
        Storage.setFilter('a');
        expect(reason).toEqual(Storage.REASON_FILTER);
        expect(data).toEqual('a');
    });
});