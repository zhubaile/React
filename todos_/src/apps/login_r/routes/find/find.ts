import { Component } from '../../../../assets/components/routes/index';

import { check } from '../../scripts/check';
import { BtnHandle } from '../../scripts/util'
import Req from '../../scripts/request'

import find from './find.tpl';

let resetToken

export default class home extends Component {
  constructor(prop) {
    super(prop);
    this.render(find);
  }

  beforeRender() {
    return true;
  }

  afterRender() {
    let $phone = $("#phone")
    let $auth = $("#auth_text")
    let flag = true;  //标识变量,用户输入错误置为false
    let findToken;
    let findReq = new Req()

    //页面渲染后自动获取验证码  
    findReq.getPic('retrieve')

    //标题点击跳转至首页
    $('.title').click(() => location.href = "index.html");

    //校验手机号格式,控制提示的显隐
    $phone.blur(() => {
      $phone.val() && check.checkInput($phone, $("#phone_hint"), flag, 'isPhone', $phone.val())
    })

    // 校验图片验证码
    $auth.blur(() => {
      $auth.val() && check.checkInput($auth, $("#auth_hint"), flag, 'authCode', $auth.val())
    })

    $("#msg").blur(() => {
      $("#msg").val() && check.checkInput($("#msg"), $("#msg_hint"), flag, 'msgCode', $("#msg").val())
    })

    //点击验证码刷新    
    $("#auth_pic").click(() => findReq.getPic('retrieve'))

    let sendHandle = new BtnHandle();
    // 点击发送验证码
    $("#send").click(() => {
      check.clearAllHint()
      if (!check.checkInput($phone, $("#phone_hint"), flag, 'isPhone', $phone.val())) return
      if (!check.checkInput($auth, $("#auth_hint"), flag, 'authCode', $auth.val())) return
      if (sendHandle.interVal === 60 && flag) {
        findReq.findSendMsg($phone.val(), $('#auth_text').val(), data => {
          if (data.returnCode == 1) {
            findToken = data.bean.token
            sendHandle.action($("#send"))
          } else {
            $(".btn_hint").html(data.returnMessage).show();
            findReq.getPic('retrieve');
            $("#auth_text").val('');
          }
        })
      }
    })

    // 输入正确则跳转    
    $('#next').click(() => {
      findHandler()
    })

    $(document).on('keydown', (e) => {
      e.keyCode === 13 && findHandler()
    })

    function findHandler() {
      check.clearAllHint()
      if (!check.checkInput($phone, $("#phone_hint"), flag, 'isPhone', $phone.val())) return
      if (!check.checkInput($auth, $("#auth_hint"), flag, 'authCode', $auth.val())) return
      if (!check.checkInput($("#msg"), $("#msg_hint"), flag, 'msgCode', $("#msg").val())) return

      flag && findReq.findVerifyMsg($('#msg').val(), findToken, data => {
        if (data.returnCode == 1) {
          resetToken = data.bean.token
          location.hash = 'reset';
        } else {
          findReq.getPic('retrieve');
          $(".btn_hint").html(data.returnMessage).show();
          $("#auth_text").val('');
          $("#msg").val('')
          sendHandle.reset($("#send"))
        }
      })
    }
  }
}

export { resetToken }
