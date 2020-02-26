<template>
  <div class="rgt-detail-main">
    <h3 class="title">注册</h3>
    <div class="avatar-img">
      <img v-if="avatarUrl" :src="avatarUrl" alt />
      <div v-else class="bg"></div>
    </div>
    <div class="ipt-box">
      <div class="avatar btn-login">上传头像</div>
      <input
        type="file"
        class="avatar-upload"
        accept=".png, .jpg, .jpeg"
        @change="handleFileChange"
      />
      <input v-model="register.username" type="text" placeholder="请输入用户名" class="mailbox" />
      <input v-model="register.password" :type="passwordType" placeholder="请输入密码" class="password" />
      <input v-model="register.nickname" type="text" placeholder="请输入昵称" class="mailbox" />
      <img
        @click="isPassIcon=!isPassIcon"
        class="password-icon"
        src="@/assets/images/icons/eye.png"
        alt
      />
      <input v-model="register.tel" type="text" placeholder="请输入手机号" class="mailbox" />
      <input v-model="register.email" type="text" placeholder="请输入邮箱" class="mailbox" />
      <div @click="registered" class="btn-login">注册</div>
    </div>
    <router-link class="direct" tag="div" :to="{name:'login'}">
      已有账号 去登陆
      <span class="iconfont icon-triangleright"></span>
    </router-link>
  </div>
</template>

<script>
import loginApi from "@/api/login/index.js";
import uploadApi from "@/api/upload/index.js";
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "RgtDetail",
  components: {},
  data() {
    return {
      isPassIcon: true,
      loginObj: {
        username: "杨123",
        password: 123456,
        nickname: "克苏鲁",
        tel: "13294221396",
        email: "1741409968@qq.com",
        avatar:
          "https://bufan-cloud.oss-cn-beijing.aliyuncs.com/leju_test/20191212151304.jpg"
      },
      avatarUrl: "",
      register: {}
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
    registered() {
      this.register.avatar = this.avatarUrl;

      loginApi.registered(this.register).then(res => {
        if (res.code == "S") {
          Toast.success("注册成功");
          this.$router.push("/login");
        }
      });
    },
    // 上传图片
    handleFileChange(e) {
      var url = "/api/leju/admin/material/uploadAndSaveImg";
      //获取事件触发的对象
      var target = e.target;
      var files = target.files;
      //file类型 不能直接上传  必须包装为 FormData类型
      var fd = new FormData();
      // 对fd添加key为file的文件,files[0]获取默认第一个元素
      fd.append("file", files[0]);
      // 后台或从 'file'的key中获取 file文件数据
      axios.post(url, fd).then(res => {
        if (res.data.code == "S") {
          this.avatarUrl = res.data.ossUrl;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.rgt-detail-main {
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
  .direct {
    position: absolute;
    top: 580px;
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
  .ipt-box {
    position: absolute;
    top: 230px;
    left: 50%;
    transform: translateX(-50%);
    width: 268px;
    height: 350px;
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
    .avatar {
      top: -55px;
    }
    .avatar-upload {
      position: absolute;
      top: -55px;
      left: 0;
      width: 100%;
      height: 47px;
      opacity: 0;
    }
  }
  .avatar-img {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
    }
    .bg {
      float: left;
      width: 100%;
      height: 100%;
      background-color: gray;
    }
  }
}
</style>
