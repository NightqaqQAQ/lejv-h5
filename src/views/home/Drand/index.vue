<template>
  <div class="home-brand">
    <div class="brand-top"></div>
    <div class="brand-box" v-for="item in brandList" :key="item.id">
      <img :src="item.coverImg" alt class="box-bg" />
      <div class="green-circle"></div>
      <div class="avatar-s">
        <img src="@/assets/images/home/avatar1.png" alt class="avatar" />
        <img src="@/assets/images/home/avatar2.png" alt class="avatar avatar-left1" />
        <img src="@/assets/images/home/avatar3.png" alt class="avatar avatar-left2" />
      </div>
      <div class="box-text">
        <h5 class="box-title">{{ item.cname }}</h5>
        <p class="box-main">{{ item.descr }}</p>
      </div>
    </div>
    <div class="brand-bottom"></div>
  </div>
</template>

<script>
import homeApi from "@/api/home/recommend.js";
export default {
  name: "HomeBrand",
  components: {},
  data() {
    return {
      brandList: []
    };
  },
  computed: {},
  methods: {
    // 获取品牌列表图片
    getBrandList() {
      homeApi.getBrandList().then(res => {
        this.brandList = res.data;
      });
    }
  },
  created() {
    this.getBrandList()
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.home-brand {
  .brand_bg {
    width: 100%;
  }
  .brand-box {
    position: relative;
    width: calc(100% - 40px);
    height: 306px;
    margin: 0 auto 28px;
    box-shadow: 0 4px 10px 0 rgba(122, 98, 75, 0.08);
    border-radius: 10px;
    background: #ffffff;
    .box-bg {
      width: 100%;
      height: 213px;
    }
    .green-circle {
      position: absolute;
      top: 202px;
      left: 30px;
      width: 18px;
      height: 18px;
      background-color: #354e44;
      border-radius: 50%;
    }
    .avatar-s {
      height: 40px;
      position: absolute;
      top: 191px;
      right: 40px;
      .avatar {
        width: 40px;
        height: 40px;
      }
      .avatar-left1 {
        position: absolute;
        top: 0;
        right: 28px;
      }
      .avatar-left2 {
        position: absolute;
        top: 0;
        right: 59px;
      }
    }
    .box-text {
      width: 100%;
      height: 93px;
      box-sizing: border-box;
      padding: 28px 28px 18px;
      text-align: left;
      .box-title {
        display: block;
        margin-bottom: 9px;
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
        line-height: 22px;
        font-weight: 900;
      }
      .box-main {
        font-size: 11px;
        color: #b1b1b1;
        letter-spacing: 0.79px;
        line-height: 16px;
      }
    }
  }
  .brand-top {
    width: 100%;
    height: 110px;
  }
  .brand-bottom {
    width: 100%;
    height: 1px;
  }
}
</style>
