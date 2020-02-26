<template>
  <div class="brand-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <ul class="main-c">
          <li class="card">
            <img class="img" src="@/assets/images/mine/chair.png" alt />
            <h5>Hartford 系列</h5>
            <span>粉丝:91893</span>
            <img src="@/assets/images/icons/more.png" alt class="icon" />
          </li>
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
  name: "Mbrand",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "品牌"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.brand-main {
  height: 100%;
  .main-c {
    box-sizing: border-box;
    padding: 30px 20px 10px;
    .card {
      position: relative;
      width: 100%;
      height: 104px;
      margin-bottom: 20px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      .img {
        position: absolute;
        top: 17px;
        left: 27px;
        width: 70px;
        height: 70px;
      }
      h5 {
        position: absolute;
        top: 35px;
        left: 130px;
        font-size: 16px;
        font-weight: 600;
        color: #3e3e3e;
        letter-spacing: 1.14px;
        line-height: 22px;
      }
      span {
        position: absolute;
        top: 65px;
        left: 130px;
        font-size: 12px;
        color: #3e3e3e;
        letter-spacing: 0.86px;
        line-height: 17px;
      }
      .icon {
        position: absolute;
        top: 0;
        right: 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
