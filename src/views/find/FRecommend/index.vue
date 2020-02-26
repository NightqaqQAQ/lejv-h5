<template>
  <div class="f-recommend-main">
    <swiper class="swiper2" :options="swiperOption2" ref="swipervB">
      <swiper-slide class="swiper2-box" v-for="(item,index) in bannerList" :key="index">
        <div class="box">
          <div class="title">
            <h5 class="title-en">Cutting furniture</h5>
            <h3 class="title-ch">切割家具</h3>
            <h3 class="title-ch">系列</h3>
          </div>
          <ul class="position">
            <li class="h">高度</li>
            <li class="w">区域</li>
          </ul>

          <img :src="item.url" ref="bannerA" alt />
        </div>
        <swiper class="swiper1" :options="swiperOption1" ref="swipervA">
          <swiper-slide class="swiper1-box">
            <router-link tag="div" class="box" :to="{name:'FRdetails'}">
              <img src="@/assets/images/find/chair1.png" alt class="img" />
              <div class="text">
                <h3>简约木式桌</h3>
                <h5 class="title-en">by Selena</h5>
                <ul class="dots">
                  <li class="dot one"></li>
                  <li class="dot tow"></li>
                  <li class="dot three"></li>
                </ul>
                <span class="price">¥560</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide class="swiper1-box"></swiper-slide>
          <swiper-slide class="swiper1-box"></swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
export default {
  name: "FRecommend",
  components: {},
  data() {
    return {
      bannerList: [
        {
          url: require("@/assets/images/find/chair.png")
        },
        {
          url: require("@/assets/images/find/cabinet.png")
        }
      ],
      swiperBIndex: 0,
      swiperOption1: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        on: {
          slideChangeTransitionStart: () => {
            var i = this.swiperBIndex;
            var index = this.$refs.swipervA[i].swiper.activeIndex;
            this.$refs.bannerA[i].style.left =
              (-(this.$refs.bannerA[i].offsetWidth - 375) * index) / 3 + "px";
          }
        }
      },
      swiperOption2: {
        direction: "vertical",
        spaceBetween: 1,
        on: {
          slideChangeTransitionStart: () => {
            this.swiperBIndex = this.$refs.swipervB.swiper.activeIndex;
          }
        }
      }
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.f-recommend-main {
  height: 100%;
  /deep/.swiper1 {
    position: absolute;
    left: 0;
    bottom: 29px;
    width: 100%;
    height: 132px;
    z-index: 9;
    .swiper1-box {
      width: 248px;
      height: 132px;
      background: #ffffff;
      border-radius: 10px;
      .box {
        width: 100%;
        height: 100%;
        .img {
          float: left;
          width: 127px;
          height: 45px;
          margin-left: 19px;
          margin-top: 49px;
        }
        .text {
          float: right;
          position: relative;
          width: 102px;
          height: 84px;
          margin: 23px 0 25px 0;
          text-align: left;
          h3 {
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 0.93px;
            line-height: 18px;
          }
          .title-en {
            font-size: 11px;
            color: #b0b0b0;
            letter-spacing: 0.79px;
            line-height: 16px;
          }
          .dots {
            display: flex;
            justify-content: space-between;
            width: 38px;
            height: 10px;
            margin-top: 5px;
            .dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              &.one {
                background-color: #553512;
              }
              &.tow {
                background-color: #b58349;
              }
              &.three {
                background-color: #f3cea0;
              }
            }
          }
          .price {
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 0.93px;
            line-height: 18px;
          }
        }
      }
    }
  }
  /deep/.swiper2 {
    width: 100%;
    height: calc(100% - 88px);
    .swiper2-box {
      width: 100%;
      height: 100%;
    }
  }
  .box {
    position: relative;
    width: 375px;
    height: 100%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 175%;
      height: 100%;
      transition: all 0.2s ease;
    }
    .title {
      position: absolute;
      top: 44px;
      left: 20px;
      text-align: left;
      z-index: 99;
      .title-en {
        font-size: 13px;
        color: #ffffff;
        letter-spacing: 0.93px;
        line-height: 18px;
      }
      .title-ch {
        font-size: 36px;
        color: #ffffff;
        letter-spacing: 2.57px;
        line-height: 50px;
      }
    }
    .position {
      position: absolute;
      top: 180px;
      right: 30px;
      display: flex;
      justify-content: space-between;
      width: 103px;
      height: 20px;
      z-index: 99;
      li {
        position: relative;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 1px;
        line-height: 20px;
      }
      li:after {
        position: absolute;
        left: 50%;
        bottom: -35px;
        transform: translateX(-50%);
        font-size: 20px;
        color: #ffffff;
        letter-spacing: 1.43px;
        line-height: 28px;
      }
      .h:after {
        content: "50";
      }
      .w:after {
        content: "100";
      }
    }
  }
}
</style>
