'use strict';

/**
 * @module src/mask
 * @function
 * @description 将手机号码的第4~7位遮挡处理
 * @param  {String} str 手机号码
 * @return {String}     遮挡处理后的手机号码
 */
module.exports = function (str) {
  return str.replace(/\d/g, function (match, idx, string) {
    return (idx > 2 && idx < 7) ? '*' : match;
  });
};