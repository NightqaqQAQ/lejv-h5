<template>
  <div class="about-main">
    <div class="header">
      <img src="@/assets/images/mine/logo.png" alt class="logo" />
      <span class="text">造物1.1.01</span>
    </div>
    <ul class="main">
      <li v-for="(item,index) in aboutList" :key="index">
        <span>{{ item.title }}</span>
        <img :src="rightIcon" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      rightIcon: require("@/assets/images/icons/right.png"),
      aboutList: [
        {
          title: "隐私声明"
        },
        {
          title: "官方网站"
        },
        {
          title: "版本更新"
        },
        {
          title: "分享app"
        }
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
.about-main {
  height: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 190px;
    background: #354e44;
    .logo {
      position: absolute;
      top: 33px;
      left: 50%;
      transform: translateX(-50%);
      width: 106px;
      height: 106px;
    }
    .text {
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 13px;
      color: #ffffff;
      letter-spacing: 0.93px;
      line-height: 18px;
    }
  }
  .main {
    box-sizing: border-box;
    padding: 17px 20px 30px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 61px;
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
