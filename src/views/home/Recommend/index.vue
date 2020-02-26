<template>
  <div class="home-recommend">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.img_url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="title-nav">
      <h5 class="left">品类推荐</h5>
      <span class="right">更多</span>
    </div>
    <div class="category">
      <div class="category-box">
        <div class="category-bg">
          <img src="@/assets/images/home/sofa.png" alt />
        </div>
        <div class="category-title">
          <h5>沙发系列</h5>
          <span>by Adrianne</span>
        </div>
      </div>
      <div class="category-box">
        <div class="category-bg">
          <img src="@/assets/images/home/chair.png" alt />
        </div>
        <div class="category-title">
          <h5>木质系列</h5>
          <span>by Hanna</span>
        </div>
      </div>
      <div class="category-box">
        <div class="category-bg">
          <img class="creative" src="@/assets/images/home/creative.png" alt />
        </div>
        <div class="category-title">
          <h5>创意系列</h5>
          <span>by adais</span>
        </div>
      </div>
    </div>
    <div class="title-nav">
      <h5 class="left">特色优选</h5>
      <span class="right">更多</span>
    </div>
    <swiper class="features" :options="swiperOption1">
      <swiper-slide>
        <div class="features-box">
          <img src="@/assets/images/home/recommend_1.png" alt />
          <div class="text">
            <h5 class="features-t">现代极简吊灯</h5>
            <p class="features-t1">by Adrianne Ho</p>
            <ul class="features-dots">
              <li class="features-dot one"></li>
              <li class="features-dot tow"></li>
              <li class="features-dot three"></li>
            </ul>
            <p class="features-m">切割平整圆滑，运用漫反…</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="features-box">
          <img src="@/assets/images/home/recommend_2.png" alt />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="features-box">
          <img src="@/assets/images/home/recommend_3.png" alt />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import homeApi from "@/api/home/recommend.js";
export default {
  name: "HomeRecommend",
  components: {},
  data() {
    return {
      // {
      //   id: 1,
      //   src: require("@/assets/images/home/banner1.png")
      // },
      // {
      //   id: 2,
      //   src: require("@/assets/images/home/banner2.png")
      // }
      bannerList: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
      },
      swiperOption1: {
        loop: true,
        slidesPerView: 1.271,
        spaceBetween: 20,
        centeredSlides: true
      }
    };
  },
  computed: {},
  methods: {
    // 获取banner列表图片
    getBannerList() {
      homeApi
        .getBannerList({
          use: 0
        })
        .then(res => {
          this.bannerList = res.data;
        });
    }
    
  },
  created() {
    this.getBannerList();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.home-recommend {
  .swiper {
    width: 100%;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      margin-bottom: 15px;
    }
    /deep/.swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 6.5px;
      background-color: #d8d8d8;
      opacity: 0.5;
    }
    /deep/.swiper-pagination-bullet-active {
      background-color: #d8d8d8;
      opacity: 1;
    }
  }
  .title-nav {
    width: calc(100% - 40px);
    height: 22px;
    margin: 4px 20px 20px;
    .left {
      float: left;
      font-size: 16px;
      line-height: 22px;
      color: #3e3e3e;
      font-weight: 800;
    }
    .right {
      position: relative;
      float: right;
      margin-right: 6px;
      line-height: 22px;
      font-size: 13px;
      color: #8c8c8c;
    }
    .right::after {
      content: "";
      position: absolute;
      top: 4px;
      right: -12px;
      display: block;
      width: 12px;
      height: 13px;
      background: url("~@/assets/images/icons/right.png") no-repeat center/cover;
    }
  }
  .category {
    display: flex;
    justify-content: space-between;
    height: 146px;
    width: calc(100% - 12px);
    margin: 0 auto 20px;
    .category-box {
      width: 104px;
      height: 100%;
      .category-bg {
        position: relative;
        width: 104px;
        height: 70px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 12px 0 rgba(122, 98, 75, 0.12);
        img {
          position: absolute;
          left: 16px;
          top: 26px;
          width: 72px;
          height: 62px;
        }
        .creative {
          top: 0;
          left: 0;
          width: 91px;
          height: 112px;
        }
      }
      .category-title {
        margin: 40px auto 0;
        h5 {
          font-size: 13px;
          line-height: 18px;
          color: #3e3e3e;
          font-weight: 600;
        }
        span {
          font-size: 10px;
          color: #b0b0b0;
        }
      }
    }
  }
  .features {
    height: 157px;
    width: 100%;
    padding-bottom: 40px;
    .features-box {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 27px;
      height: calc(100% - 27px);
      background-color: #fff;
      box-shadow: 0 8px 24px 0 rgba(122, 98, 75, 0.12);
      border-radius: 10px;
      img {
        position: absolute;
        left: 10px;
        bottom: 0;
        width: 120px;
        height: 157px;
      }
      .text {
        width: 143px;
        margin-left: 130px;
        text-align: left;
        .features-t {
          font-size: 13px;
          color: #3e3e3e;
          line-height: 18px;
        }
        .features-t1 {
          font-size: 9px;
          color: #b0b0b0;
          line-height: 13px;
        }
        .features-dots {
          width: 42px;
          height: 10px;
          margin: 9px 0 17px 0;
          .features-dot {
            float: left;
            width: 10px;
            height: 10px;
            margin-right: 4px;
            border-radius: 50%;
            &.one {
              background-color: #446675;
            }
            &.tow {
              background-color: #6a4826;
            }
            &.three {
              background-color: #e7d8bb;
            }
          }
        }
        .features-m {
          font-size: 11px;
          color: #3e3e3e;
          line-height: 16px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
