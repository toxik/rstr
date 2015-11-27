
/**
 * Expose `rstr`
 */

module.exports = rstr;

var crypto = require("crypto"),
    os = require('os');

/**
 * Random string
 *
 * @param {Number} n
 * @return {String}
 * @api public
 */

function rstr(n) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var len = chars.length;
  var str = '';
  var upperLimitUInt32 = Math.pow(2, 32) - 1;

  while(n) {
    var i = ~~(crypto.randomBytes(4).readUInt32LE() / upperLimitUInt32 * len);
    str += chars[i];
    n--;
  }

  return str;
}

