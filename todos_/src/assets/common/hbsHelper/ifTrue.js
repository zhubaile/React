module.exports = function(v1,v2, options) {
  if (arguments.length !== 3) {
      throw new Error('helper "flag" needs 1 arguments');
  }
  if (v1 && v2) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
}