var sort = require('../../src/sort');

describe('sort', function () {

  it('should winners be sorted by phone number', function () {
    var winners = [{
      name: '张三',
      phone: '18688888888'
    }, {
      name: '李四',
      phone: '13122223333'
    }, {
      name: '王五',
      phone: '18855550000'
    }];
    var sorted = [{
      name: '李四',
      phone: '13122223333'
    }, {
      name: '张三',
      phone: '18688888888'
    }, {
      name: '王五',
      phone: '18855550000'
    }];

    expect(sort(winners)).toEqual(sorted);
  });

});
