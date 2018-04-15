module.exports = function(v1,options) {
    if (arguments.length !== 2) {
        throw new Error('helper "if" needs 1 arguments');
    }
    if(v1!=null && v1!="" && v1!=[] && typeof(v1)!="undefined"){
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}