<template>
  <div class="login-main">
    <img src="@/assets/images/mine/logo.png" alt class="logo" />
    <div class="ipt-box">
      <input v-model="login.username" type="text" placeholder="请输入用户名" class="mailbox" />
      <input v-model="login.password" :type="passwordType" placeholder="请输入密码" class="password" />
      <img
        @click="isPassIcon=!isPassIcon"
        class="password-icon"
        src="@/assets/images/icons/eye.png"
        alt
      />
      <div class="btn-login" @click="doLogin">登陆</div>
      <span class="bottom-left">海外手机号</span>
      <span class="bottom-right">忘记密码</span>
    </div>
    <router-link class="registered" :to="{name:'registered'}" tag="span">立即注册</router-link>
    <div class="segmentation">
      <span class="segmentation-left"></span>
      <p>第三方软件登录</p>
      <span class="segmentation-left"></span>
    </div>
    <ul class="foot-icons">
      <li class="icon">
        <img src="@/assets/images/icons/QQ.png" alt />
      </li>
      <li class="icon">
        <img src="@/assets/images/icons/wb.png" alt />
      </li>
      <li class="icon">
        <img src="@/assets/images/icons/wx.png" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import loginApi from "@/api/login";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      isPassIcon: true,
      login: {}
    };
  },
  computed: {
    passwordType() {
      if (this.isPassIcon) {
        return "password";
      } else {
        return "text";
      }
    }
  },
  methods: {
    // 登陆
    doLogin() {
      loginApi.doLogin(this.login).then(res => {
        if (res.code == "S") {
          this.$toast.success("登陆成功");
          this.$router.push("/");
          localStorage.setItem("token",res.data.id);
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.login-main {
  height: 100%;
  background-color: #f1ece7;
  .logo {
    position: absolute;
    top: 33px;
    left: 50%;
    transform: translateX(-50%);
    width: 106px;
    height: 106px;
  }
  .ipt-box {
    position: absolute;
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
    width: 268px;
    height: 195px;
    input {
      width: 268px;
      height: 39px;
      margin-bottom: 18px;
      border: 0;
      background-color: #e3dfda;
      background-size: 16px 16px;
      background-position: 12px 12px;
      background-repeat: no-repeat;
      border-radius: 7px;
      box-sizing: border-box;
      padding: 0 36px;
      font-size: 12px;
      color: #9f9f9f;
      letter-spacing: 0.86px;
      &.mailbox {
        background-image: url("~@/assets/images/icons/mailbox.png");
      }
      &.password {
        background-size: 13px 16px;
        background-position: 14px 12px;
        background-image: url("~@/assets/images/icons/password.png");
      }
    }
    .password-icon {
      position: absolute;
      top: 73px;
      right: 19.5px;
      width: 18px;
      height: 10px;
    }
    .btn-login {
      position: absolute;
      bottom: 28px;
      left: 0;
      width: 100%;
      height: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #354e44;
      border-radius: 7px;
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 1.07px;
      line-height: 21px;
    }
    span {
      font-size: 12px;
      color: #a5a5a5;
      letter-spacing: 0.86px;
      line-height: 17px;
      &.bottom-left {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      &.bottom-right {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  .registered {
    position: absolute;
    top: 470px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #354e44;
    letter-spacing: 1.43px;
    line-height: 28px;
  }
  .segmentation {
    position: absolute;
    top: 512px;
    left: 50%;
    transform: translateX(-50%);
    width: 268px;
    height: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 12px;
      color: #a5a5a5;
      letter-spacing: 0.86px;
      line-height: 17px;
    }
    span {
      display: block;
      width: 63px;
      border-top: 1px solid #dddddd;
    }
  }
  .foot-icons {
    position: absolute;
    top: 563px;
    left: 50%;
    transform: translateX(-50%);
    width: 148px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
      background: #354e44;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 31px;
        height: 31px;
      }
    }
  }
}
</style>
