(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../":2}],2:[function(require,module,exports){
'use strict';

var sort = require('./src/sort');
var mask = require('./src/mask');
/**
 * @description 将中奖用户名单按照手机号排列并做遮挡处理
 * @param  {Array} winners 中奖用户名单
 * @return {String}         排列好的中奖名单
 */
module.exports = function (winners) {
  return sort(winners).map(function (winner) {
    var obj = {};
    obj.name = winner.name;
    obj.phone = mask(winner.phone);
    return obj;
  });
};
},{"./src/mask":3,"./src/sort":4}],3:[function(require,module,exports){
'use strict';

/**
 * @description 将手机号码的第4~7位遮挡处理
 * @param  {String} str 手机号码
 * @return {String}     遮挡处理后的手机号码
 */
module.exports = function (str) {
  return str.replace(/\d/g, function (match, idx, string) {
    return (idx > 2 && idx < 7) ? '*' : match;
  });
};
},{}],4:[function(require,module,exports){
'use strict';
/**
 * @description 按照手机号码对中奖者进行排序
 * @param  {Array} winners 中奖者的数组
 * @return {Array}         排序好的中奖者数组
 */
module.exports = function (winners) {
  return winners.sort(function (a, b) {
    return parseInt(a.phone, 10) - parseInt(b.phone, 10);
  });
};
},{}]},{},[1]);
