module.exports = function (val, option) {
  if (val === "false" && !'') {
    return option.fn(this)
  } else {
    return option.inverse(this)
  }
}