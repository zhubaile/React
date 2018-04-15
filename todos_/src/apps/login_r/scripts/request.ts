import ajaxAmd from '../../../assets/common/ajaxAmd/index';

export default class request {

  // 发送图片验证码接口
  public picAddress: string = 'front/sh/NGcommon!getCaptcha?uid=getCaptcha';

  // 注册接口
  public registerAddress: string = 'front/sh/NGuser!regUser?uid=001';

  // 验证手机接口
  public verifyPhoneAddress: string = 'front/sh/NGuser!phoneValidate?uid=001';

  // 获取用户信息接口
  public infoAddress: string = 'front/sh/NGuser!insertInfo?uid=001';

  // 修改密码接口
  public modifyPwdAddress: string = 'front/sh/NGuser!updatePwd?uid=001';

  // 登录接口
  public loginAddress: string = 'front/sh/NGuser!login?uid=login';

  // 获取用户信息接口
  public getInfoAddress: string = 'front/sh/NGuser!excute?uid=getInfo';

  // 修改用户信息接口
  public modifyInfoAddress: string = 'front/sh/NGuser!excute?uid=updateInfo';

  // 找回密码时验证图片验证码并发送短信验证码接口
  public sendMsgAddress: string = 'front/sh/NGuser!retrieve1Pwd?uid=001';

  // 找回密码时验证短信验证码接口
  public verifyMsgAddress: string = 'front/sh/NGuser!retrieve2Pwd?uid=001';

  // 重置密码接口
  public resetAddress: string = 'front/sh/NGuser!retUpdatePwd?uid=001';

  // 修改手机时图片验证码接口
  public modifyPhonePicAddress: string = 'front/sh/NGuser!bindingPhone1?uid=001'

  // 修改手机时旧手机短信验证码
  public verifyOldPhoneAddress: string = 'front/sh/NGuser!bindingPhone2?uid=001';

  // 修改手机时向新手机发送验证码接口
  public NewPhoneSendMsgAddress: string = 'front/sh/NGuser!bindingPhone3?uid=001';

  // 修改手机时验证短信验证码接口
  public VerifyNewPhoneMsgAddress: string = 'front/sh/NGuser!bindingPhone4?uid=001';


  /**
   * 获取图形验证码
   * @param type
   * type传入参数表示使用类型
   * reg: 用户注册, login: 用户登录, submit: 提交, retrieve: 找回密码, binding: 绑定手机
   */
  getPic(type: string) {
    $("#auth_pic").prop('src', `${this.picAddress}&type=${type}&v=${Math.random()}`);
  }

  /**
  * 用户注册
   * @param phoneNum 用户手机号
   * @param code 图片验证码
   * @param type 注册类型,默认为'tel'
   * @param fn 回调函数
   */
  register(phoneNum: string, code: string, type: string = 'tel', fn?: Function) {
    ajaxAmd.postJson(this.registerAddress, {
      regText: phoneNum,
      regType: type,
      regCode: code
    }, fn)
  }


  /**
   * 验证手机号
   * @param phoneNum: 手机号码 
   * @param code: 令牌 
   * @param msg: 短信验证码
   */
  verifyPhone(phoneNum: string, code: string, msg: string, fn: Function) {
    ajaxAmd.postJson(this.verifyPhoneAddress, {
      phone: phoneNum,
      code: code,
      sms: msg
    }, fn)
  }


  /**
   * 用户个人信息
   * @param token 用户个人令牌
   * @param userName 用户昵称
   * @param userPwd 用户密码
   */
  info(token: string, userName: string, userPwd: string, id: string = '1701', fn: Function, ) {
    ajaxAmd.postJson(this.infoAddress, {
      token: token,
      userNm: userName,
      userPw: userPwd,
      chnlId: id
    }, fn)
  }


  /**
   * 修改密码
   * @param oldPwd 旧密码
   * @param newPwd 新密码
   * @param fn 回调函数
   */
  modifyPwd(oldPwd: string, newPwd: string, fn: Function) {
    ajaxAmd.postJson(this.modifyPwdAddress, {
      oldUserPwd: oldPwd,
      newUserPwd: newPwd
    }, fn)
  }


  /**
   * 用户登录
   * @param num 用户登录的手机号码
   * @param code 图片验证码
   * @param userPwd 用户密码
   * @param id 后台需要的权限id
   */
  login(num: string, code: string, userPwd: string, id: string, fn: Function) {
    ajaxAmd.postJson(this.loginAddress, {
      username: num,
      code: code,
      password: userPwd,
      chnlId: id
    }, fn)
  }


  /**
   * 找回密码时发送短信验证码
   * @param name 用户账号
   * @param code 图片验证码
   */
  findSendMsg(name: string, code: string, fn: Function) {
    ajaxAmd.postJson(this.sendMsgAddress, {
      username: name,
      code: code
    }, fn)
  }

  /**
   * 找回密码时验证短信验证码
   * @param code 手机验证码
   * @param token 用户个人令牌
   */
  findVerifyMsg(code: string, token: string, fn: Function) {
    ajaxAmd.postJson(this.verifyMsgAddress, {
      code: code,
      token: token
    }, fn)
  }

  /**
   * 重置密码
   * @param userPwd 用户密码 
   * @param token 用户个人令牌
   */
  reset(userPwd: string, token: string, fn: Function) {
    ajaxAmd.postJson(this.resetAddress, {
      userPwd,
      token
    }, fn)
  }

  /**
   * 修改手机时验证图片验证码
   * @param oldPhone 用户原手机号
   * @param code 验证码
   */
  modifyPhonePic(oldPhone: string, code: string, fn: Function) {
    ajaxAmd.postJson(this.modifyPhonePicAddress, {
      phoneNm: oldPhone,
      code: code
    }, fn)
  }

  /**
   * 修改手机时验证旧手机验证码
   * @param oldPhone 旧手机号
   * @param code 手机验证码
   * @param token 令牌
   */
  verifyOldPhone(oldPhone: string, code: string, token: string, fn: Function) {
    ajaxAmd.postJson(this.verifyOldPhoneAddress, {
      phoneNm: oldPhone,
      code,
      token
    }, fn)
  }

  /**
   * 修改手机时向新手机发送验证码
   * @param newPhone 用户输入的新的手机号
   * @param code 图片验证码
   * @param token 用户个人令牌
   */
  NewPhoneSendMsg(newPhone: string, code: string, token: string, fn: Function) {
    ajaxAmd.postJson(this.NewPhoneSendMsgAddress, {
      newTel: newPhone,
      code,
      token
    }, fn)
  }

  /**
   * 修改手机后 验证向新手机发送的验证码
   * @param newPhone 新的手机号
   * @param code 图片验证码
   * @param token 用户个人令牌
   */
  VerifyNewPhoneMsg(newPhone: string, code: string, token: string, fn: Function) {
    ajaxAmd.postJson(this.VerifyNewPhoneMsgAddress, {
      newTel: newPhone,
      code,
      token
    }, fn)
  }
}