/**
 * 文字分割
 */
module.exports = function (val) {
  return val.length < 16 ? val : val.substring(0, 16) + '...';
}
