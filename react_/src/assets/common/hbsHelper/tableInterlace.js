module.exports = function (val, option) {
  if (arguments.length !== 2) {
    console.error('the handlebars helper tableInterlace needs two parameter')
  }
  if (val % 2) {
    return option.fn(this)
  } else {
    return option.inverse(this)
  }
}