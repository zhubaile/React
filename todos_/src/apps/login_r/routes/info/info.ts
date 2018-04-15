import { Component } from '../../../../assets/components/routes/index';

import { infoToken } from '../register/register'

import { pwdHandle } from '../../scripts/util'
import { check } from '../../scripts/check'
import info from './info.tpl';
import Req from '../../scripts/request'

export default class home extends Component {
  constructor(prop) {
    super(prop)
    this.render(info);
  }
  beforeRender() {
    return true
  }
  afterRender() {
    let $name = $("#name");
    let flag = true;
    let infoReq = new Req();

    //标题点击跳转至首页
    $('.title').click(() => location.href = "index.html");;

    //校验昵称的合法性    
    $name.blur(() => {
      $name.val() && check.checkInput($name, $("#name_hint"), flag, 'isLegalName', $name.val())
    })

    /**
     * 密码实时校验
     */
    function pwdTimeVerify() {
      //检验密码格式是否合法
      $("#pwd").blur(() => {
        $("#pwd").val() && check.checkInput($("#pwd"), $("#pwd_hint"), flag, 'isLegalPwd', $("#pwd").val())
      })

      //校验第二次输入的密码是否与第一次一致
      $("#pwd_again").blur(() => {
        $("#pwd_again").val() && check.checkInput($("#pwd_again"), $("#pwd_again_hint"), flag, 'isSamePwd', $("#pwd_again").val(), $("#pwd").val())
      })
    }

    pwdTimeVerify()
    //点击切换密码明文密文
    $("#pwd_icon").click(() => {
      pwdHandle.handle($("#change"), $("#pwd_icon"), $('#pwd'))
      pwdTimeVerify()
    })

    $("#again_pwd_icon").click(() => {
      pwdHandle.handle($("#again-change"), $("#again_pwd_icon"), $('#pwd_again'))
      pwdTimeVerify()
    })

    //注册事件
    $('#register').click(() => {
      infoHandler();
    })

    $(document).keydown((e) => {
      e.keyCode === 13 && infoHandler()
    })

    function infoHandler() {
      check.clearAllHint()
      if (!check.checkInput($name, $("#name_hint"), flag, 'isLegalName', $name.val())) return
      if (!check.checkInput($("#pwd"), $("#pwd_hint"), flag, 'isLegalPwd', $("#pwd").val())) return
      if (!check.checkInput($("#pwd_again"), $("#pwd_again_hint"), flag, 'isSamePwd', $("#pwd_again").val(), $("#pwd").val())) return
      flag && infoReq.info(infoToken, $name.val(), $("#pwd").val(), '1701', data => {
        if (data.returnCode == 1) {
          location.href = 'question.html'
        } else {
          $(".btn_hint").html(data.returnMessage).show();
        }
      })
    }
  }
}