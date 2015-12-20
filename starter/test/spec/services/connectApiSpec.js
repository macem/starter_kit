"use strict";

describe("connectApi api service", function () {
  var connectApi, httpBackend;

  beforeEach(module("starterApp"));

  beforeEach(inject(function (_connectApi_, $httpBackend) {
    connectApi = _connectApi_;
    httpBackend = $httpBackend;
  }));

  it("data", function () {
    httpBackend.whenGET("./rest/data").respond('test');

    connectApi.data().then(function(data) {
      expect(data.data).toEqual('test');
    });
    httpBackend.flush();
  });

});