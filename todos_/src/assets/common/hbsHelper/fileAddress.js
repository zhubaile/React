module.exports = function (val) {
  if (val.progressStsCd === '1') {
    return '<a data-id="' + val.zipPercentId + '" href="' + val.fileUrl+ '"' + ' title="' +val.qnrNm + ' ' + val.fileName+'">' + val.qnrNm + ' ' + val.fileName+'.zip</a>'
  } else if (val.progressStsCd === '-1') {
    return '<span class="error">' + val.qnrNm + ' ' +val.fileName+'.zip</span>'
  } else {
    return val.qnrNm + ' ' + val.fileName+'.zip'
  }
}