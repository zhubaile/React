
  <div class="content animated fadeIn">
    <h2>找回密码</h2>
    <h5>手机号</h5>
    <input id="phone" type="text" placeholder="请输入您的手机号" autofocus>
    <p id="phone_hint" class="hint">请输入正确的手机号码</p>
    <h5>验证码(不区分大小写)</h5>
    <div class="authCode">
      <input id="auth_text" type="text" placeholder="请输入图片上的验证码">
      <img id="auth_pic" title="换一张" src="" alt="authCode">
    </div>
    <p class="hint" id="auth_hint">请输入正确的图片验证码</p>
    <h5>请输入收到的短信验证码</h5>
    <div class="verify">
      <input id="msg" type="text" name="msg" value="" autofocus>
      <button id="send" class="login-btn login-float-btn" type="button">
        发送
      </button>
    </div>
    <p class="hint" id="msg_hint">请输入短信验证码</p>
    <p class="hint btn_hint"></p>
    <button id="next" class="login-btn hover-btn" type="button">下一步</button>
    <div class="back"><a href="#home">返回登录</a></div>
  </div>
