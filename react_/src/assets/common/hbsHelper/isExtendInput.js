module.exports = function (val, option) {
  var content = [];
  for (var i = 0; i < val.length; i++) {
    if (val[i]['custFillAswrCntt']) {
      content.push(val[i])
    }
  }
  if (content.length) {
    return option.fn(this)
  } 
  return content.length ? option.fn(this) : option.inverse(this)
}