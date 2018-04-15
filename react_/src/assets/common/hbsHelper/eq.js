module.exports = function(left, right, options) {
    // if (arguments.length !== 3) {
    //     throw new Error('helper "eq" needs 2 arguments');
    // }
    if (left != undefined && left !='' && left == right) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}