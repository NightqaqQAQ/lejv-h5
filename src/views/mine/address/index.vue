<template>
  <div class="address-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:rightIcon>
        <img class="header-icon" src="@/assets/images/icons/plus.png" alt />
      </template>
      <template v-slot:main>
        <ul class="main-c">
          <li class="card">
            <span class="surname">杨</span>
            <div class="text-box">
              <h5>杨先生</h5>
              <p>地址：湖南省长沙市镇北街</p>
              <p>联系方式：1328394722</p>
            </div>
            <span class="edit">编辑</span>
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
  name: "Address",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "收货地址"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.address-main {
  height: 100%;
  .header-icon {
    width: 100%;
    height: 100%;
  }
  .main-c {
    box-sizing: border-box;
    padding: 30px 20px 10px;
    .card {
      position: relative;
      width: 100%;
      height: 106px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      margin-bottom: 20px;
      .surname {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 41px;
        height: 41px;
        background: #354e44;
        border-radius: 20.4px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 1.29px;
        line-height: 25px;
      }
      .text-box {
        position: absolute;
        left: 74px;
        top: 50%;
        transform: translateY(-50%);
        height: 49px;
        width: 190px;
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
      }
      .edit {
        position: absolute;
        right: 26px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 13px;
        color: #8d8d8d;
        letter-spacing: 0;
        line-height: 18px;
      }
      .edit:after {
        content: "";
        position: absolute;
        left: -13.5px;
        top: 0;
        height: 18px;
        border-left: 1px solid #979797;
      }
    }
  }
}
</style>
