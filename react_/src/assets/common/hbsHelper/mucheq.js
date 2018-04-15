module.exports = function(v1, v2, v3, v4, options) {
    if (arguments.length !== 5) {
        throw new Error('helper "dbeq" needs 4 arguments');
    }
    if (v1 == v2 || v1 == v3 || v1 == v4) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}