var handle = require('../');

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

var handled = handle(winners);

console.log(handled.map(function (winner) {
  return winner.name + ': ' + winner.phone;
}).join('\n'));