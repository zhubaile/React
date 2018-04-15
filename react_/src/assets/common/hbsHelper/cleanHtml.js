module.exports = function(val, options) {
    if (arguments.length !== 2) {
        throw new Error('helper "flag" needs 1 arguments');
    }
    // num = num + '';
    return val.replace(/<\/?[^>]*>/g,'');
}