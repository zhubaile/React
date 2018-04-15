// module.exports = function() {
//     // 不确定参数
//     let v1 = arguments[0],
//         lengths = arguments.length,
//         options = arguments[lengths - 1],
//         isOk = false;
//     debugger
//     for (let i = 0; i < lengths - 1; i++) {
//         if (v1 == arguments[i]) {
//             isOk = true;
//             // return options.fn(this);
//         } else {
//             isOk = false;
//             // return options.inverse(this);
//         }
//         if (isOk) {
//             return options.fn(this);
//         } else {
//             return options.inverse(this);
//         }
//     }

//     // if (isOk) {
//     //     return options.fn(this);
//     // } else {
//     //     return options.inverse(this);
//     // }
// }

module.exports = function(v1, v2, v3, v4, v5, v6, options) {
    if (arguments.length !== 7) {
        throw new Error('helper "dbeq" needs 6 arguments');
    }
    if (v1 == v2 || v1 == v3 || v1 == v4 || v1 == v5 || v1 == v6) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}