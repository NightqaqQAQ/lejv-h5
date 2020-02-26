<template>
  <div class="article-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <ul class="main-c">
          <li class="card">
            <img src="@/assets/images/mine/chandelier.png" alt />
            <div class="text-box">
              <h5>莲花吊灯</h5>
              <p>1426人以收藏</p>
              <p class="introduction">一把有温度的好椅子是2112132321</p>
            </div>
          </li>
          <li class="card"></li>
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
  name: "Article",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "文章"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.article-main {
  height: 100%;
  .main-c {
    box-sizing: border-box;
    padding: 20px 20px 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      width: 158px;
      height: 208px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
      border-radius: 5px;
      margin-bottom: 24px;
      img {
        width: 100%;
        height: 119px;
      }
      .text-box {
        box-sizing: border-box;
        padding: 14px 10px 8px 18px;
        text-align: left;
        h5 {
          display: block;
          margin-bottom: 3px;
          font-size: 13px;
          font-weight: 600;
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
        .introduction {
          display: block;
          margin-top: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
