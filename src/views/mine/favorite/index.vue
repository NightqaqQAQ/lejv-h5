<template>
  <div class="favorite-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <ul class="main-c">
          <li class="card">
            <img src="@/assets/images/mine/sofa.png" alt />
            <div class="text-box">
              <h5>头层牛皮沙发</h5>
              <p>编号：114534</p>
              <p>规格：长430X宽522X高848mm</p>
              <span class="favorite-text">收藏:241</span>
            </div>
            <span class="price">¥2719</span>
          </li>
          <li class="card">
            <img src="@/assets/images/mine/sofa.png" alt />
            <div class="text-box">
              <h5>头层牛皮沙发</h5>
              <p>编号：114534</p>
              <p>规格：长430X宽522X高848mm</p>
              <span class="favorite-text">收藏:241</span>
            </div>
            <span class="price">¥2719</span>
          </li>
          <li class="card">
            <img src="@/assets/images/mine/sofa.png" alt />
            <div class="text-box">
              <h5>头层牛皮沙发</h5>
              <p>编号：114534</p>
              <p>规格：长430X宽522X高848mm</p>
              <span class="favorite-text">收藏:241</span>
            </div>
            <span class="price">¥2719</span>
          </li>
        </ul>
      </template>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar";
export default {
  name: "Favorite",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "收藏"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.favorite-main {
  height: 100%;
  .main-c {
    box-sizing: border-box;
    padding: 32px 20px 10px;
    .card {
      position: relative;
      width: 335px;
      height: 104px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      margin-bottom: 20px;
      border: 0.5px solid transparent;
      img {
        float: left;
        width: 70px;
        height: 70px;
        margin-top: 17px;
        margin-left: 27px;
      }
      .text-box {
        float: left;
        width: 206px;
        height: 70px;
        margin-top: 17px;
        margin-left: 32px;
        text-align: left;
        h5 {
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
        }
        p {
          font-size: 11px;
          color: #8d8d8d;
          letter-spacing: 0.79px;
          line-height: 16px;
        }
        .favorite-text {
          font-size: 12px;
          color: #3e3e3e;
          letter-spacing: 0.86px;
          line-height: 17px;
        }
      }
      .price {
        position: absolute;
        bottom: 16px;
        right: 18px;
        font-size: 14px;
        color: #3e3e3e;
        letter-spacing: 1px;
        line-height: 20px;
      }
    }
  }
}
</style>
