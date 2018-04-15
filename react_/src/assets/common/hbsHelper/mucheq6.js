module.exports = function(v1, v2, v3, v4, v5, v6, v7, options) {
    if (arguments.length !== 8) {
        throw new Error('helper "dbeq" needs 6 arguments');
    }
    if (v1 == v2 || v1 == v3 || v1 == v4 || v1 == v5 || v1 == v6 || v1 == v7) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}