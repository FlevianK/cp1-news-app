var axios = require('axios');

describe('.getSources', function () {
    var dispatch,
        deferred;

    beforeEach(function () {
        deferred = Q.defer();
        spyOn(axios, 'get').and.returnValue(deferred.promise);
        dispatch = jasmine.createSpy();
    });

    it('makes an GET request', function () {
        fetchData()(dispatch);
        expect(axios.get).toHaveBeenCalledWith('http://www.example.com');
    });
});