/**
 * 索引加1
 */
module.exports = function (index) {
  ++index
  if (index <= 10) {
    return index + '.  '
  } else {
    return index + '. '
  }
}
