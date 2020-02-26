<template>
  <div class="safety-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <ul class="main-c">
          <li v-for="(item,index) in safetyList" :key="index">
            <span>{{ item.title }}</span>
            <img :src="rightIcon" alt />
          </li>
        </ul>
      </template>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar";
export default {
  name: "Safety",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "账户与安全",
      rightIcon: require("@/assets/images/icons/right.png"),
      safetyList: [
        {
          title: "账号",
        },
         {
          title: "个人资料",
        },
         {
          title: "绑定手机号",
        },
         {
          title: "微信账号",
        },
         {
          title: "QQ账号",
        },
         {
          title: "支付绑定",
        },
           {
          title: "设置登录密码",
        },
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.safety-main {
  height: 100%;
  /deep/.scroll-wapper {
    background-color: #fff;
  }
  .main-c {
    box-sizing: border-box;
    padding: 0 20px 20px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 63px;
      border-bottom: 1px solid #ebebeb;
      span {
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
        line-height: 22px;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
