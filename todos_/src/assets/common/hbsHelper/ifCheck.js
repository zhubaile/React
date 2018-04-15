module.exports = function(v1,options) {
    if(v1 == false){
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}