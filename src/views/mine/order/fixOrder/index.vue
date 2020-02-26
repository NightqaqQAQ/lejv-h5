<template>
  <div class="fix-order">
    <TitleBar>
      <template v-slot:title>确认订单</template>
      <template v-slot:main>
        <div class="main-c">
          <div class="address">
            <span>添加收货地址</span>
            <img class="right-icon" src="@/assets/images/icons/right.png" alt />
          </div>
          <div class="shopp-box">
            <ul class="card-box">
              <li class="card">
                <img src="@/assets/images/mine/sofa.png" alt />
                <div class="text-box">
                  <h5>{{ shoppObj.gname }}</h5>
                  <p>编号：{{shoppObj.skuList[index].sku_code}}</p>
                  <p>单价：{{ shoppObj.skuList[index].price }}元</p>
                </div>
                <span class="price">¥560</span>
                <span class="num">×1</span>
                <span class="total">合计：¥560</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from "@/views/mine/components/TitleBar";
import { mapState } from "vuex";
export default {
  name: "FixOrder",
  components: {
    TitleBar
  },
  data() {
    return {
      // 订单提交的数据
      order: {}
    };
  },
  computed: {
    ...mapState({
      shoppObj: ele => {
        return ele.shoppObj;
      },
      index: "index"
    })
  },
  methods: {},
  created() {
    console.log(this.shoppObj, this.index);
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.fix-order {
  height: 100%;
  /deep/.scroll-wapper {
    background-color: #f1ece7;
  }
  .main-c {
    box-sizing: border-box;
    padding: 20px;
    .address {
      height: 22px;
      text-align: left;
      span {
        float: left;
        margin-left: 10px;
        font-size: 16px;
        color: #3e3e3e;
        letter-spacing: 1.14px;
        line-height: 22px;
      }
      .right-icon {
        margin-left: 30px;
        width: 22px;
        height: 22px;
      }
    }
    .shopp-box {
      // 商品卡片样式
      padding: 20px 0;
      .card {
        position: relative;
        width: 335px;
        height: 140px;
        box-sizing: border-box;
        padding: 10px 18px;
        background: #ffffff;
        box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.08);
        border-radius: 12px;
        margin-bottom: 20px;
        img {
          position: absolute;
          top: 22px;
          left: 18px;
          width: 81px;
          height: 81px;
        }
        .text-box {
          position: absolute;
          top: 32px;
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
          top: 32px;
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
      }
    }
  }
}
</style>
