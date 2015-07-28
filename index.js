
/**
 * Expose `rstr`
 */

module.exports = rstr;

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

  while(n) {
    var i = ~~(Math.random()*len);
    str += chars[i];
    n--;
  }

  return str;
}

