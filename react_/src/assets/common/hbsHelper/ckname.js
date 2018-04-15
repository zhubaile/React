module.exports = function(opt1, opt2, options) {
    if (arguments.length !== 3) {
        throw new Error('helper "flag" needs 1 arguments');
    }
    if (opt1 == opt2) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}