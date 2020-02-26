<template>
  <div class="after-main">
    <TitleBar>
      <template v-slot:title>{{title}}</template>
      <template v-slot:main>
        <div class="main-c">
          <h3 class="type-title">服务类型</h3>
          <ul class="types-box">
            <li class="type-item act">换货</li>
            <li class="type-item">退货</li>
            <li class="type-item">仅退款</li>
          </ul>
          <div class="card">
            <p class="order-num">订单编号：1727384727</p>
            <span class="status">待付款</span>
            <img src="@/assets/images/mine/sofa.png" alt />
            <div class="text-box">
              <h5>头层牛皮沙发</h5>
              <p>编号：114534</p>
              <p>规格：长430X宽522X高848mm</p>
            </div>
            <span class="num">×1</span>
            <span class="total">合计：¥2719</span>
          </div>
          <h3 class="type-title">问题描述</h3>
          <textarea placeholder="请输入您的评价信息" class="description"></textarea>
          <div class="submit">提交</div>
        </div>
      </template>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar";
export default {
  name: "After",
  components: {
    TitleBar
  },
  data() {
    return {
      title: "申请售后"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.after-main {
  height: 100%;
  .main-c {
    position: relative;
    box-sizing: border-box;
    padding: 11px 20px 30px;
    .type-title {
      font-size: 16px;
      color: #3e3e3e;
      letter-spacing: 1.14px;
      line-height: 22px;
      text-align: left;
      font-weight: 600;
    }
    .types-box {
      width: 100%;
      height: 25px;
      margin: 10px 0 16px;
      .type-item {
        float: left;
        width: 62px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-right: 16px;
        border: 1px solid #2d4f43;
        font-size: 11px;
        color: #354e44;
        letter-spacing: 0.79px;
      }
      .act {
        background-color: #2d4f43;
        color: #fff;
      }
    }
    .card {
      position: relative;
      width: 335px;
      height: 167px;
      box-sizing: border-box;
      padding: 10px 18px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      margin-bottom: 16px;
      .order-num {
        font-size: 12px;
        color: #3e3e3e;
        letter-spacing: 0.86px;
        line-height: 17px;
        text-align: left;
      }
      .status {
        position: absolute;
        top: 9px;
        right: 18px;
        font-size: 12px;
        color: #3e3e3e;
        letter-spacing: 0.86px;
        line-height: 17px;
        font-weight: 600;
      }
      img {
        position: absolute;
        top: 42px;
        left: 18px;
        width: 81px;
        height: 81px;
      }
      .text-box {
        position: absolute;
        top: 42px;
        left: 113px;
        width: 175px;
        height: 53px;
        text-align: left;
        h5 {
          display: block;
          margin-bottom: 3px;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
          font-weight: 600;
        }
        p {
          font-size: 11px;
          color: #8d8d8d;
          letter-spacing: 0.79px;
          line-height: 16px;
        }
      }
      .num {
        position: absolute;
        top: 57px;
        right: 18px;
        font-size: 13px;
        color: #8d8d8d;
        letter-spacing: 0;
        line-height: 18px;
      }
      .total {
        position: absolute;
        bottom: 26px;
        right: 18px;
        font-size: 13px;
        color: #3e3e3e;
        letter-spacing: 0.93px;
        line-height: 18px;
      }
    }
    .description {
      display: block;
      width: 335px;
      height: 167px;
      margin-top: 16px;
      background-color: #fff;
      border: 0;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      box-sizing: border-box;
      padding: 12px 18px;
      font-size: 11px;
      color: #8d8d8d;
      letter-spacing: 0.79px;
      line-height: 16px;
    }
    .submit {
      width: 268px;
      height: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 60px auto 0;
      background: #354e44;
      border-radius: 7px;
      font-size: 15px;
      color: #ffffff;
      letter-spacing: 1.07px;
    }
  }
}
</style>
