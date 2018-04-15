module.exports = function (num, options) {
    if (arguments.length !== 2) {
        throw new Error('helper "odd" needs 1 argumentx');
    }
    if (num % 2 === 1) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}