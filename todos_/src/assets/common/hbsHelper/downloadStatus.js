module.exports = function (val, option) {
  if (val.progressStsCd === '1') {
    return option.fn(this)
  } else {
    return option.inverse(this)
  }
}