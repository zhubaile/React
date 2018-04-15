module.exports = function (ctx, option) {
  if (ctx) {
    return  option.fn(this)
  } else {
    return  option.inverse(this)
  }
}