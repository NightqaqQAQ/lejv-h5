<template>
  <div class="package-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <ul class="main-c">
          <li class="card">
            <img src="@/assets/images/mine/package_1.png" alt />
            <div class="text-box">
              <h5>
                ¥
                <span class="large">50</span>满500减
              </h5>
              <p>店铺优惠券</p>
              <p>2019.1.3-2019.5.11</p>
            </div>
            <div class="line"></div>
            <span class="go">去使用</span>
          </li>
          <li class="card"></li>
          <li class="card"></li>
          <li class="card"></li>
        </ul>
      </template>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar";
export default {
  name: "Package",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "卡包"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.package-main {
  height: 100%;
  .main-c {
    box-sizing: border-box;
    padding: 30px 20px 10px;
    .card {
      position: relative;
      width: 100%;
      height: 104px;
      margin-bottom: 20px;
      background: url("~@/assets/images/icons/package_bg.png") no-repeat center -3px/105%
        114%;
      img {
        position: absolute;
        top: 18px;
        left: 28px;
        width: 68px;
        height: 68px;
      }
      .text-box {
        position: absolute;
        top: 23px;
        left: 119px;
        width: 120px;
        height: 52px;
        text-align: left;
        h5 {
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
          .large {
            font-size: 16px;
            color: #000000;
            letter-spacing: 1.14px;
            line-height: 18px;
          }
        }
        p {
          font-size: 10px;
          color: #8d8d8d;
          letter-spacing: 0.71px;
          line-height: 14px;
        }
      }
      .line {
        position: absolute;
        top: 14px;
        right: 78px;
        height: 78px;
        border-left: 1px dashed #979797;
      }
      .go {
        position: absolute;
        top: 41px;
        right: 17px;
        font-size: 13px;
        font-weight: 600;
        color: #354e44;
        letter-spacing: 0;
        line-height: 18px;
      }
    }
  }
}
</style>
