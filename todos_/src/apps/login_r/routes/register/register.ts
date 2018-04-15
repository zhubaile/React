import { Component } from '../../../../assets/components/routes/index';

import { check } from "../../scripts/check"
import Req from '../../scripts/request'

import register from './register.tpl';

import { BtnHandle } from '../../scripts/util'

let infoToken

export default class home extends Component {
  constructor(prop) {
    super(prop)
    this.render(register)
  }
  beforeRender() {
    return true
  }
  afterRender() {
    let registerToken;
    let flag = true;
    let registerReq = new Req();

    //页面进入 自动获取验证码
    registerReq.getPic('reg')

    //标题点击跳转至首页
    $('.title').click(() => location.href = "index.html");

    //点击验证码刷新    
    $("#auth_pic").click(() => registerReq.getPic('reg'))

    //点击同意协议
    $("label").click(() => {
      if ($("#check")[0].getAttribute('checked')) {
        $("label i").removeClass('s-remember').addClass('s-remember-no')
        $('#check').removeAttr('checked')
      } else {
        $("label i").removeClass('s-remember-no').addClass('s-remember')
        $('#check').attr('checked', 'checked')
      }
    })

    //勾选同意协议后警告框消失
    $("#check").change(() => {
      if ($("#check")[0].getAttribute('checked')) {
        $('#agree_hint').hide();
      }
    })

    $(".agreement a").click(e => { e.stopPropagation() })

    $("#phone").blur(() => {
      $("#phone").val() && check.checkInput($("#phone"), $("#phone_hint"), flag, 'isPhone', $("#phone").val())
    })
    $("#auth_text").blur(() => {
      $("#auth_text").val() && check.checkInput($("#auth_text"), $("#auth_hint"), flag, 'authCode', $("#auth_text").val())
    })
    $("#msg").blur(() => {
      $("#msg").val() && check.checkInput($("#msg"), $("#msg_hint"), flag, 'msgCode', $("#msg").val())
    })
    let sendHandle = new BtnHandle();

    // 点击发送验证码
    $("#send").click(() => {
      check.clearAllHint()
      if (!check.checkInput($("#phone"), $("#phone_hint"), flag, 'isPhone', $("#phone").val())) return
      if (!check.checkInput($("#auth_text"), $("#auth_hint"), flag, 'authCode', $("#auth_text").val())) return
      if (sendHandle.interVal === 60) {
        registerReq.register($("#phone").val(), $("#auth_text").val(), 'tel', data => {
          if (data.returnCode == 1) {
            registerToken = data.bean.code
            sendHandle.action($("#send"))
          } else {
            $("#msg_hint").html(data.returnMessage).show();
            registerReq.getPic('reg');
            $("#auth_text").val('');
          }
        })
      }
    })

    //注册事件    
    $("#register").click(() => {
      registerHandler()
    })

    $(document).keydown((e) => {
      e.keyCode === 13 && registerHandler()
    })

    function registerHandler() {
      check.clearAllHint()
      if (!check.checkInput($("#phone"), $("#phone_hint"), flag, 'isPhone', $("#phone").val())) return
      if (!check.checkInput($("#auth_text"), $("#auth_hint"), flag, 'authCode', $("#auth_text").val())) return
      if (!check.checkInput($("#msg"), $("#msg_hint"), flag, 'msgCode', $("#msg").val())) return

      if (!$("#check")[0].getAttribute('checked')) {
        $('#agree_hint').show();
        return
      }

      registerReq.verifyPhone($("#phone").val(), registerToken, $("#msg").val(), data => {
        if (data.returnCode == 1) {
          infoToken = data.bean.token
          location.hash = "info"
        } else {
          // 失败显示提示, 并刷新图片验证码
          $(".btn_hint").html(data.returnMessage).show();
          registerReq.getPic('reg');
          $("#auth_text").val('');
          $("#msg").val('')
          sendHandle.reset($("#send"))
        }
      })
    }
  }
}

export { infoToken }