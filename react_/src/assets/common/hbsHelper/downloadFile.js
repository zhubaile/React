module.exports = function(val) {
    switch (val.progressStsCd) {
        case '-1':
            return '<td class="error">组装异常</td>'
            break
        case '0':
            if (val.percent === null) {
                return '<td>组装中</td>'
            } else {
                return '<td>' + val.percent + '</td>'
            }
            break
        case '1':
            return '<td>组装完毕</td>'
            break
        case '3':
            return '<td>等待中</td>'
            break
        default:
            break
    }
}