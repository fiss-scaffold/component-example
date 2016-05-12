'use strict';

/**
 * @module src/sort
 * @function
 * @description 按照手机号码对中奖者进行排序
 * @param  {Array} winners 中奖者的数组
 * @return {Array}         排序好的中奖者数组
 */
module.exports = function (winners) {
  return winners.sort(function (a, b) {
    return parseInt(a.phone, 10) - parseInt(b.phone, 10);
  });
};