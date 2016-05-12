'use strict';

var sort = require('./src/sort');
var mask = require('./src/mask');
/**
 * @module component-example
 * @function
 * @description 将中奖用户名单按照手机号排列并做遮挡处理
 * @param  {Array} winners 中奖用户名单
 * @return {Array}         排列好的中奖名单
 */
module.exports = function (winners) {
  return sort(winners).map(function (winner) {
    var obj = {};
    obj.name = winner.name;
    obj.phone = mask(winner.phone);
    return obj;
  });
};