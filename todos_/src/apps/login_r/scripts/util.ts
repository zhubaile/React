// 点击图标 切换密码明文密文
let pwdHandle = {
  handle(pwd: JQuery, pwd_icon: JQuery,pwdValue:JQuery) {
    let $val = pwdValue.val()
    if (pwd_icon.hasClass('s-anmi')) {
      pwd_icon.removeClass('s-anmi').addClass('s-ming-close');
      if(pwd.children().hasClass('pwd_again')){
        pwd.html(`<input type="text" id="pwd_again" class="pwd_again" name="pwd_again" value="${$val}" placeholder="请再输入一次密码"> `)
        }else if(pwd.children().hasClass('new_pwd')){
          pwd.html(`<input id="new_pwd" class="new_pwd" type="text" name ="new_pwd" value="${$val}" placeholder="新密码应不少于6位">`);
        }else{
          pwd.html(`<input id="pwd" type="text" name="pwd" value="${$val}" placeholder="密码应不少于6位" tabindex="1" autofocus>`)
        }
    } else {
      pwd_icon.removeClass('s-ming-close').addClass('s-anmi');
      if(pwd.children().hasClass('pwd_again')){
        pwd.html(`<input type="password" id="pwd_again" class="pwd_again" name="pwd_again" value="${$val}" placeholder="请再输入一次密码"> `)
        }else if(pwd.children().hasClass('new_pwd')){
        pwd.html(`<input id="new_pwd" class="new_pwd" type="password" name ="new_pwd" value="${$val}" placeholder="新密码应不少于6位">`);
        }else{
          pwd.html(`<input id="pwd" type="password" name="pwd" value="${$val}" placeholder="密码应不少于6位" tabindex="1" autofocus>`);
        }
    }
    
  }
}

/**
 * 按钮状态变化类
 */
 class BtnHandle {
  timer: number
  interVal: number
  constructor(interVal = 60) {
    this.interVal = interVal
  }
  /**
   * 按钮开始倒计时并置为不可点击状态
   * @param ele 触发此事件按钮
   * @param interVal 倒计时的秒数, 须与初始化时传入的秒数一致,默认为60秒
   * @param timeout 每一次倒计时的延迟,默认为1秒
   */ 
  action(ele, interVal = 60, timeout = 1000) {
    this.timer = setInterval(() => {
      ele.addClass('disable').prop('disable', 'disable').html(`重新发送(${--this.interVal})`)

      if (this.interVal <= 0) {

        clearInterval(this.timer);

        ele.removeClass('disable').prop('enable', 'enable').html('发送');
        this.interVal = interVal;
      }
    },timeout)
  }
  /**
   * 按钮恢复至初始状态
   * @param ele 触发此事件按钮元素
   * @param interVal 倒计时的秒数, 须与初始化时传入的秒数一致,默认为60秒
   */ 
  reset(ele,interVal = 60) {
    clearInterval(this.timer)
    ele.removeClass('disable').prop('enable', 'enable').html('发送');
    this.interVal = interVal
  }
}

export { pwdHandle, BtnHandle }
