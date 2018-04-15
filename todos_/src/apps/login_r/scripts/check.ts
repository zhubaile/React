let check = {
  //校验手机号
  // isPhoneNumber: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
  isPhoneNumber: /^(0|86|17951)?1[35789]\d{9}$/,

  /**
   * 校验密码格式是否正确
   * @param val 用户输入的值
   */
  isLegalPwd(val: string): boolean {
    return val.length >= 6 && val.length <= 24
  },


  /**
   * 校验昵称是否合法
   * @param val 用户输入的昵称
   */
  isLegalName(val: string): boolean {
    return val.length >= 2 && val.length <= 24
  },


  /**
   * 校验成功调用此函数
   * @param input 输入框
   * @param hint 错误提示
   * @param flag 标识变量
   */
  okHandler(input: JQuery, hint: JQuery, flag: boolean): boolean {
    hint.hide();
    input.removeClass('error');
    flag = true;
    return flag;
  },


  /**
   * 校验失败调用此函数
   * @param input 输入框
   * @param hint 错误提示
   * @param flag 标识变量
   */
  errorHandler(input: JQuery, hint: JQuery, flag: boolean): boolean {
    hint.show();
    input.addClass('error');
    flag = false;
    return flag;
  },

  /**
   * 检验输入,可检验手机、密码、昵称是否合法以及两次输入的密码是否相同和相异
   * @param input 输入框
   * @param hint 错误提示框
   * @param flag 标识变量
   * @param type 校验何种类型的值
   * @param val 输入框的值
   * @param reg 校验规则,可校验手机格式或密码格式
   * @param trueVal 与输入框的值相对比的值
   */
  checkInput(input: JQuery, hint: JQuery, flag: boolean, type: string, val: string, trueVal?: string): boolean {

    // 根据传入校验类型执行相应逻辑
    switch (type) {
      // 校验手机
      case 'isPhone': {
        if (this.isPhoneNumber.test(val)) {
          return this.okHandler(input, hint, flag);
        } else {
          return this.errorHandler(input, hint, flag);
        }
      };

      // 校验密码的合法性  
      case 'isLegalPwd': {
        if (this.isLegalPwd(val)) {
          return this.okHandler(input, hint, flag);
        } else {
          return this.errorHandler(input, hint, flag);
        }
      };

      // 校验两次密码是否相同  
      case 'isSamePwd': {
        if (val === trueVal) {
          return this.okHandler(input, hint, flag);
        } else {
          return this.errorHandler(input, hint, flag);
        }
      };

      // 检验修改密码原密码与新密码是否相异  
      case 'isChangePwd': {
        if (val !== trueVal) {
          return this.okHandler(input, hint, flag);
        } else {
          return this.errorHandler(input, hint, flag);
        }
      }

      // 校验昵称是否合法
      case 'isLegalName': {
        if (this.isLegalName(val)) {
          return this.okHandler(input, hint, flag);
        } else {
          return this.errorHandler(input, hint, flag);
        }
      }

      case 'authCode': {
        if (val.length === 4) {
          return this.okHandler(input, hint, flag)
        } else {
          return this.errorHandler(input, hint, flag)
        }
      }

      case 'msgCode': {
        if (val.length === 6) {
          return this.okHandler(input, hint, flag)
        } else {
          return this.errorHandler(input, hint, flag)
        }
      }
    }
  },
  /**
   * 清除所有的错误提示
   */
  clearAllHint() {
    $(".hint").hide()
    $("input").removeClass("error")
  }
}

export { check }
