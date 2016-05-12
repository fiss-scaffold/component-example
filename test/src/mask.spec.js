var mask = require('../../src/mask');

describe('mask', function () {

  it('should phone number be masked', function () {
    expect(mask('18612345678')).toBe('186****5678');
  });

});
