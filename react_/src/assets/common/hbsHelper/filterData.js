module.exports = function (ctx) {
  if (ctx && ctx.length) {
    let latestEle = filterBeans(ctx)[0].shift()
    let arr2 = filterBeans(ctx)[1]
    let template = ''
    for (let key in arr2) {
      template += 
      '< li class="download-item">'+
      '<p>'+arr2[key].fileName+'导出数据准备中....</p>'+
      '<div class="progress-wrap">'+
       '<div class="progress-bg">'+
         '<div class="progress-bar" style="width: 0%"></div>'+
        '</div><span class="progress-text">0%</span></div></li >'
    }
    return template += 
    '<li class="download-item"><p>'+latestEle.fileName+'数据文件已生成: </p>'+
     '<a href="'+latestEle.fileUrl+'">'+latestEle.fileName+'.zip</a></li>'
  }
 
}


function filterBeans (arr) {
  let completeList = []
  let unCompleteList = []
  for (let key in arr) {
    if (arr[key].progressStsCd == 1) {
      completeList.push(arr[key])
    } else {
      unCompleteList.push(arr[key])
    }
  }
  completeList.sort(function (a, b) {
    return convertTime(b.crtTime) - convertTime(a.crtTime)
  })
  return [completeList, unCompleteList]
}

function convertTime (str) {
  return new Date(str).getTime()
}