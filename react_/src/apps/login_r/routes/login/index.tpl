<div class="content animated fadeInLeft">
    <h2>登录</h2>
    <h5>账号</h5>
    <input id="phone" type="text" placeholder="请输入手机号" tabindex="1" autofocus>
    <p id="phone_hint" class="hint">请输入正确的手机号码</p>
    <div class="home-password">
        <div class="forget">
            <h5>密码</h5>
            <a href="#find" tabindex="-1">忘记密码?</a>
        </div>
        <div id="change">
            <input id="pwd" type="password" placeholder="密码应不少于6位" tabindex="1">
        </div>
        <div id="pwd_icon" class="home-pwd-icon icon s-anmi"></div>
        <p id="pwd_hint" class="hint">请输入不少于6位不大于24位的密码</p>
    </div>
    <h5>验证码(不区分大小写)</h5>
    <div class="authCode">
        <input id="auth_text" type="text" placeholder="请输入图片上的验证码" tabindex="1">
    </div>
    <p class="hint" id="auth_hint">请输入正确的验证码</p>
    <p class="hint btn_hint"></p>
    <button class="login login-btn hover-btn" id="loginBtn" type="button">登录</button>
    <div class="auto">
        <div class="auto-login">
            <input id="auto-login" class="check" type="checkbox" name="auto-login" value="" checked="checked">
            <label for="auto-login">
                <i class="icon s-remember"></i>记住账号</label>
        </div>
        <a href="#register">还没有账号? 注册一个</a>
    </div>
</div>