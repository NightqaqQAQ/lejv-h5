<template>
  <div class="shoppingDetails-main">
    <BaseLayer>
      <template v-slot:header>
        <img class="icon-left" @click="$router.go(-1)" src="@/assets/images/icons/left.png" alt />
        <swiper class="banner" :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in bannerListCom" :key="index">
            <img class="banner" :src="item" alt />
          </swiper-slide>
        </swiper>
        <div class="favorite">
          <img class="favorite-icon" src="@/assets/images/icons/favorite_1.png" alt />
        </div>
      </template>
      <template v-slot:content>
        <div class="content-c">
          <ul @click="getDotVal" class="dots">
            <li :class="{'act':dotVal=='1'}" class="dot one" value="1"></li>
            <li :class="{'act':dotVal=='2'}" class="dot tow" value="2"></li>
            <li :class="{'act':dotVal=='3'}" class="dot three" value="3"></li>
          </ul>
          <h3 class="title">{{ shoppObj.gname }}</h3>
          <p class="title-en">by Adrianne Ho</p>
          <p class="price">¥{{ shoppObj.price_now }}</p>
          <h5 class="title-small">人体工程</h5>
          <p class="txt">座、靠、扶手都是按照人体工程学设计，舒适放松。内部填充高回弹海绵，接触面环形包围，承托更舒适。</p>
          <h5 class="title-small">优雅弧度扶手</h5>
          <p class="txt">翻遍扶手设计，更好满足手臂承托要求。</p>
          <img class="details-img" :src="imgUrl" alt />
          <h5 class="title-small">高弹海绵</h5>
          <p
            class="txt"
          >高弹海绵的泡孔直径巨细混合散布，骨架粗细不一样有很大的开孔率，在受压时会在不一样形变状态下发生不一样支持力和反弹力，因而由高弹海绵制造的餐椅，可提供非常好的舒适度。</p>

          <div class="buy" @click="maskShow">立即购买</div>
          <div class="shopping-cart">
            <img class="shopping-icon" src="@/assets/images/icons/shopping.png" alt />
          </div>
          <div class="service">客服</div>
        </div>
      </template>
    </BaseLayer>
    <!-- 遮罩层 sku信息 -->
    <MaskSku v-show="isMask" :shopp="shoppObj" @colse-mask="cloMask"></MaskSku>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import MaskSku from "@/views/classification/shoppingDetails/components/maskSku";
import kindApi from "@/api/kind";
export default {
  name: "ShoppingDetalis",
  components: {
    BaseLayer,
    MaskSku
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      bannerUrl: require("@/assets/images/classification/details/details_banner.png"),
      dotVal: "1",
      imgUrl: require("@/assets/images/classification/details/details_img1.png"),
      shoppObj: {},
      isMask: true
    };
  },
  computed: {
    bannerListCom() {
      var bannerList;
      if (this.shoppObj.imgs) {
        bannerList = this.shoppObj.imgs.split(",");
      }
      return bannerList;
    }
  },
  methods: {
    getDotVal(e) {
      this.dotVal = e.target.value;
    },
    // 获取商品详情
    getShoppDetail() {
      kindApi
        .getShoppDetail({
          productId: this.$route.params.id
        })
        .then(res => {
          this.shoppObj = res.data;
        });
    },
    // 打开mask
    maskShow() {
      this.isMask = true;
    },
    // 关闭mask
    cloMask() {
      this.isMask = false;
    }
  },
  created() {
    this.getShoppDetail();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.shoppingDetails-main {
  height: 100%;
  /deep/.header-bar {
    position: relative;
    height: 317px;
    .favorite {
      position: absolute;
      right: 48px;
      bottom: -25px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #354e44;
      box-shadow: 0 8px 12px 0 rgba(70, 70, 70, 0.2);
      z-index: 999;
      .favorite-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 25px;
        height: 25px;
      }
    }
  }
  .banner {
    width: 100%;
    height: 100%;
    border-radius: 0 0 0 50px;
  }
  .icon-left {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 22px;
    height: 22px;
    z-index: 999;
  }
  /deep/.scroll-wapper {
    top: 317px;
    height: calc(100% - 317px);
  }
  .content-c {
    position: relative;
    box-sizing: border-box;
    padding: 89px 31px 87px 35px;
    text-align: left;
    .dots {
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 145px;
      height: 35px;
      .dot {
        width: 25px;
        height: 25px;
        border: 5px solid #fff;
        border-radius: 50%;
        &.one {
          background-color: #b95734;
        }
        &.tow {
          background-color: #455d60;
        }
        &.three {
          background-color: #766165;
        }
        &.act.one {
          border: 5px solid #b95734;
          box-shadow: 0 2px 7px 0 #b95734;
        }
        &.act.tow {
          border: 5px solid #455d60;
          box-shadow: 0 2px 7px 0 #455d60;
        }
        &.act.three {
          border: 5px solid #766165;
          box-shadow: 0 2px 7px 0 #766165;
        }
      }
    }
    .title {
      line-height: 25px;
      font-size: 18.2px;
      color: #3e3e3e;
      letter-spacing: 1.3px;
    }
    .title-en {
      line-height: 21px;
      font-size: 15.4px;
      color: #b0b0b0;
      letter-spacing: 1.1px;
    }
    .price {
      display: block;
      margin: 12px 0 17px 0;
      line-height: 25px;
      font-size: 18.2px;
      color: #3e3e3e;
      letter-spacing: 1.3px;
    }
    .title-small {
      display: block;
      margin: 12px 0 4px 0;
      line-height: 20px;
      font-size: 14px;
      color: #3e3e3e;
      letter-spacing: 1px;
    }
    .txt {
      line-height: 20px;
      font-size: 14px;
      color: #8a8a8a;
      letter-spacing: 1px;
      text-align: justify;
    }
    .details-img {
      width: 217px;
      height: 163px;
      margin: 18px 0 6px 25px;
    }
    .buy {
      position: absolute;
      bottom: 25px;
      right: 19px;
      width: 119px;
      height: 40px;
      background: #354e44;
      border-radius: 7px;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 1.14px;
      line-height: 40px;
      text-align: center;
    }
    .shopping-cart {
      position: absolute;
      bottom: 25px;
      right: 150px;
      width: 64px;
      height: 40px;
      background: #e2e2e2;
      border-radius: 7px;
      .shopping-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 22px;
        height: 22px;
      }
    }
    .service {
      position: absolute;
      left: 29px;
      bottom: 23px;
      font-size: 11px;
      color: #3e3e3e;
      letter-spacing: 0.79px;
      line-height: 16px;
    }
    .service::after {
      content: "";
      position: absolute;
      top: -30px;
      left: -2px;
      width: 28px;
      height: 28px;
      background: url("~@/assets/images/icons/service.png") no-repeat
        center/100%;
    }
  }
}
</style>
