var handle = require('../index');

describe('handleWinnerList', function () {
  it('should winners be sorted and phone number be masked', function () {
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
    var handled = [{
      name: '李四',
      phone: '131****3333'
    }, {
      name: '张三',
      phone: '186****8888'
    }, {
      name: '王五',
      phone: '188****0000'
    }];

    expect(handle(winners)).toEqual(handled);
  })
})