module.exports = function(val, option) {
    if (val && val.length > 0) {
        return option.fn(this)
    } else {
        return option.inverse(this)
    }
}