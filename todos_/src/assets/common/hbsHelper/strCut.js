module.exports = function(val, options) {
    if (arguments.length !== 2) {
        throw new Error('helper "flag" needs 1 arguments');
    }
    val = val.replace(/<\/?[^>]*>/g,'');
    if(val.length > 50){val = val.substr(0,40) + '...';};
    return val;
}