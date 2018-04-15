module.exports = function (val, option) {
  if (val) {
    return option.fn(this)
  } else {
    return option.inverse(this)
  }
}