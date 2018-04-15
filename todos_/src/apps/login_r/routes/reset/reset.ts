import { Component } from '../../../../assets/components/routes/index';

import { pwdHandle } from "../../scripts/util";
import { check } from '../../scripts/check';
import Req from '../../scripts/request';

import { resetToken } from '../find/find'

import reset from './reset.tpl';

export default class home extends Component {
  constructor(prop) {
    super(prop);
    this.render(reset);
  }
  afterRender() {
    let flag = true;
    let resetReq = new Req();
    //标题点击跳转至首页
    $('.title').click(() => location.href = "question.html");

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
    // 调集图标切换密码明文密文
    $("#pwd_icon").click(() => {
      pwdHandle.handle($("#change"), $("#pwd_icon"), $('#pwd'))
      pwdTimeVerify()
    })

    $("#again_pwd_icon").click(() => {
      pwdHandle.handle($("#again-change"), $("#again_pwd_icon"), $('#pwd_again'))
      pwdTimeVerify()
    })

    //提交事件    
    $("#submit").click(() => {
      submitHandler()
    })

    $(document).keydown((e) => {
      e.keyCode === 13 && submitHandler()
    })

    function submitHandler() {
      check.clearAllHint()
      if (!check.checkInput($("#pwd"), $("#pwd_hint"), flag, 'isLegalPwd', $("#pwd").val())) return
      if (!check.checkInput($("#pwd_again"), $("#pwd_again_hint"), flag, 'isSamePwd', $("#pwd_again").val(), $("#pwd").val())) return
      flag && resetReq.reset($("#pwd_again").val(), resetToken, data => {
        if (data.returnCode == 1) {
          location.hash = "home"
        } else {
          $(".btn_hint").html(data.returnMessage).show();
        }
      })
    }
  }
}