<div class="content animated fadeIn">
  <h2>注册</h2>
  <h5>手机号码</h5>
  <input id="phone" type="text" placeholder="请输入手机号" value="" autofocus>
  <p id="phone_hint" class="hint">请输入正确的手机号码</p>
  <h5>验证码(不区分大小写)</h5>
  <div class="verify">
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
  <p class="hint" id="msg_hint">请输入正确的短信验证码</p>
  <p class="hint btn_hint"></p>
  <button id="register" class="login-btn hover-btn" type="button">注册</button>
  <div class="agree-box">
    <div class="agreement">
      <input id="check" class="check" type="checkbox" name="agreement" checked="checked">
      <label for="check">
        <i class="icon s-remember"></i>
        已经查看并同意
        <a href="#agreement" target="_blank">此用户协议</a>
      </label>
    </div>
    <a href="login.html">已经有账户?去登录</a>
  </div>
  <p id="agree_hint" class="hint">未勾选协议</p>
</div>