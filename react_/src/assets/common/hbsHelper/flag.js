module.exports = function(val, options,opts) {
    if (arguments.length !== 2) {
        throw new Error('helper "flag" needs 1 arguments');
    }
    if (val === '0') {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
}