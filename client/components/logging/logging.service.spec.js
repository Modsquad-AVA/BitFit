'use strict';

describe('Service: logging', function () {

  // load the service's module
  beforeEach(module('its110App'));

  // instantiate service
  var logging;
  beforeEach(inject(function (_logging_) {
    logging = _logging_;
  }));

  it('should do something', function () {
    expect(!!logging).toBe(true);
  });

});
