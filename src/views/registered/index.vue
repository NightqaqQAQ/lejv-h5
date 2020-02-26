<template>
  <div class="registered-main">
    <h3 class="title">注册</h3>
    <div class="ipt-box">
      <input type="text" class="ipt" placeholder="请输入手机号/邮箱" />
      <div class="inp-icon">
        +86
        <span class="iconfont icon-triangledown"></span>
      </div>
    </div>
    <div class="code">获取短信验证码</div>
    <p class="prompt">
      完成注册即代表你同意
      <span>用户协议</span>和
      <span>隐私政策</span>
    </p>
    <router-link class="direct detail" tag="div" :to="{name:'rgtDetail'}">
      详情注册 跳转
      <span class="iconfont icon-triangleright"></span>
    </router-link>
    <router-link class="direct" tag="div" :to="{name:'login'}">
      已有账号 去登陆
      <span class="iconfont icon-triangleright"></span>
    </router-link>
  </div>
</template>

<script>
import loginApi from "@/api/login/index.js";
export default {
  name: "Legistered",
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.registered-main {
  height: 100%;
  background-color: #f1ece7;
  .title {
    position: absolute;
    top: 25px;
    left: 55px;
    font-size: 30px;
    font-weight: 600;
    color: #354e44;
    letter-spacing: 2.14px;
    line-height: 42px;
  }
  .ipt-box {
    position: absolute;
    top: 106px;
    left: 50%;
    transform: translateX(-50%);
    width: 268px;
    height: 39px;
    .ipt {
      width: 100%;
      height: 100%;
      border: 0;
      background-color: #e3dfda;
      background-size: 16px 16px;
      background-position: 12px 12px;
      background-repeat: no-repeat;
      border-radius: 7px;
      box-sizing: border-box;
      padding: 0 36px 0 62px;
      font-size: 12px;
      color: #9f9f9f;
      letter-spacing: 0.86px;
    }
    .inp-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 43.5px;
      height: 13px;
      border-right: 1px solid #3f3f3f;
      span {
        font-size: 8px;
      }
    }
  }

  .code {
    position: absolute;
    top: 169px;
    left: 50%;
    transform: translateX(-50%);
    width: 268px;
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
  .prompt {
    position: absolute;
    top: 227px;
    left: 50%;
    transform: translateX(-50%);
    width: 270px;
    font-size: 12px;
    color: #a5a5a5;
    letter-spacing: 0.86px;
    line-height: 17px;
    span {
      color: #170000;
    }
  }
  .direct {
    position: absolute;
    top: 351px;
    left: 50%;
    transform: translateX(-50%);
    width: 127px;
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: #354e44;
    letter-spacing: 1.14px;
    line-height: 22px;
    span {
      position: absolute;
      right: -16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 8px;
    }
  }
  .detail {
    top: 320px;
  }
}
</style>
