<template>
  <div class="order-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <div class="header-title">
            <img @click="$router.go(-1)" src="@/assets/images/icons/left.png" alt class="icon-left" />
            <h2 class="title">{{ title }}</h2>
          </div>
          <ul @click="getBarVal" class="title-bar">
            <li class="item-bar" :class="{'act':barVal=='1'}" value="1">待付款</li>
            <li class="item-bar" :class="{'act':barVal=='2'}" value="2">已付款</li>
            <li class="item-bar" :class="{'act':barVal=='3'}" value="3">待收货</li>
            <li class="item-bar" :class="{'act':barVal=='4'}" value="4">已收货</li>
            <li class="item-bar" :class="{'act':barVal=='5'}" value="5">申请退款</li>

          </ul>
        </div>
      </template>
      <template v-slot:content>
        <ul class="content-c">
          <li class="card">
            <p class="order-num">订单编号：1727384727</p>
            <span class="status">待付款</span>
            <img src="@/assets/images/mine/sofa.png" alt />
            <div class="text-box">
              <h5>头层牛皮沙发</h5>
              <p>编号：114534</p>
              <p>规格：长430X宽522X高848mm</p>
            </div>
            <span class="price">¥560</span>
            <span class="num">×1</span>
            <span class="total">合计：¥560</span>
            <div class="btn-box">
              <div class="one item">取消订单</div>
              <div class="tow item">付款</div>
            </div>
          </li>
          <li class="card"></li>
          <li class="card"></li>
          <li class="card"></li>
        </ul>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Order",
  components: {
    BaseLayer
  },
  data() {
    return {
      title: "订单列表",
      barVal: "2"
    };
  },
  computed: {},
  methods: {
    getBarVal(e) {
      this.barVal = e.target.value;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.order-main {
  height: 100%;
  /deep/.header-bar {
    height: 89px;
  }
  /deep/.scroll-wapper {
    top: 73px;
    height: calc(100% - 73px);
    border-radius: 16px 16px 0 0;
    background-color: #f1ece7;
    z-index: 999;
  }
  .header-c {
    height: 100%;
    background-color: #354e44;
    .header-title {
      position: relative;
      width: calc(100% - 40px);
      height: 37px;
      margin: 0 auto;
      .icon-left {
        float: left;
        margin-top: 9px;
        width: 19px;
        height: 19px;
      }
      .title {
        position: absolute;
        top: 6.5px;
        left: 50%;
        transform: translateX(-50%);
        height: 24px;
        line-height: 24px;
        font-size: 17px;
        color: #ffffff;
        letter-spacing: 1.21px;
      }
    }
    .title-bar {
      display: flex;
      justify-content: space-around;
      width: calc(100% - 40px);
      height: 26px;
      margin: 0 auto;
      .item-bar {
        position: relative;
        width: 80px;
        text-align: center;
        font-size: 15px;
        color: #ffffff;
        letter-spacing: 1.07px;
        line-height: 21px;
        &.act::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 31px;
          height: 3px;
          background: #f1ece7;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
  .content-c {
    box-sizing: border-box;
    padding: 20px 20px 10px;
    // 商品卡片样式
    .card {
      position: relative;
      width: 335px;
      height: 167px;
      box-sizing: border-box;
      padding: 10px 18px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
      border-radius: 12px;
      margin-bottom: 20px;
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
      .price {
        position: absolute;
        top: 42px;
        right: 18px;
        font-size: 13px;
        color: #8d8d8d;
        letter-spacing: 0;
        line-height: 18px;
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
        top: 105px;
        right: 18px;
        font-size: 13px;
        color: #3e3e3e;
        letter-spacing: 0.93px;
        line-height: 18px;
      }
      .btn-box {
        position: absolute;
        bottom: 10px;
        right: 18px;
        width: 140px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 62px;
          height: 25px;
          box-sizing: border-box;
          border-radius: 5px;
          &.one {
            opacity: 0.5;
            border: 1px solid #6c6c6c;
            color: black;
          }
          &.tow {
            opacity: 0.76;
            border: 1px solid #2d4f43;
            color: #2d4f43;
          }
        }
      }
    }
  }
}
</style>
