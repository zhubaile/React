module.exports = function(val) {
    var newVal = '';
    newVal = val.replace(/<\/?[^>]*>/g, '');
    if (newVal.length > 35) {
        return newVal.substring(0, 35) + '...'
    } else {
        return newVal;
    }
}