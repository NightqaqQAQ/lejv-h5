<template>
  <div class="featured-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c"></div>
      </template>
      <template v-slot:content>
        <div class="content-c">
          <ul class="title-bar">
            <li
              class="title-item"
              :class="{'act': index==titleAct}"
              v-for="(item,index) in titleImgList"
              :key="item.id"
              :title="index"
              @click="getAct"
            >
              <img v-show="index!=titleAct" :src="item.url" alt />
              <img class="imgAct" v-show="index==titleAct" :src="item.urlAct" alt />
            </li>
          </ul>
          <router-link :to="{name:'Fdetails'}" tag="div" class="box">
            <div class="box-img">
              <img src="@/assets/images/find/decoration.png" alt />
              <div class="img-text">
                <h3>装饰落地灯</h3>
                <p>originality</p>
              </div>
            </div>
            <div class="box-text">
              <span class="viewers">12345</span>
              <div class="icon-right">
                <img src="@/assets/images/icons/like.png" alt />
                <img src="@/assets/images/icons/forward.png" alt />
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'Fdetails'}" tag="div" class="box">
            <div class="box-img">
              <img src="@/assets/images/find/decoration.png" alt />
              <div class="img-text">
                <h3>装饰落地灯</h3>
                <p>originality</p>
              </div>
            </div>
            <div class="box-text">
              <span class="viewers">12345</span>
              <div class="icon-right">
                <img src="@/assets/images/icons/like.png" alt />
                <img src="@/assets/images/icons/forward.png" alt />
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Featured",
  components: {
    BaseLayer
  },
  data() {
    return {
      titleAct: 0,
      titleImgList: [
        {
          id: 1,
          url: require("@/assets/images/icons/lighting.png"),
          urlAct: require("@/assets/images/icons/lighting_act.png")
        },
        {
          id: 2,
          url: require("@/assets/images/icons/hot_4.png"),
          urlAct: require("@/assets/images/icons/cabinet_act.png")
        },
        {
          id: 3,
          url: require("@/assets/images/icons/hot_1.png"),
          urlAct: require("@/assets/images/icons/chair_act.png")
        },
        {
          id: 4,
          url: require("@/assets/images/icons/decoration.png"),
          urlAct: require("@/assets/images/icons/decoration_act.png")
        }
      ]
    };
  },
  computed: {},
  methods: {
    getAct(e) {
      this.titleAct = e.currentTarget.title;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.featured-main {
  height: 100%;
  /deep/.header-bar {
    z-index: 998;
  }
  /deep/.scroll-wapper {
    border-radius: 16px 16px 0 0;
    height: calc(100% - 132px);
    background-color: #f1ece7;
  }
  .header-c {
    width: 100%;
    height: 60px;
    background: #354e44;
  }
  .content-c {
    width: 100%;
    box-sizing: border-box;
    padding: 1px 18px 1px 20px;
    .title-bar {
      width: 266px;
      height: 49px;
      margin: 20px auto 23px;
      display: flex;
      justify-content: space-between;
      .title-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        border: 3.5px solid #f1ece7;
        border-radius: 50%;
        background-color: #fff;
        img {
          width: 22px;
          height: 27px;
        }
        .imgAct {
          width: 27px;
          height: 34px;
        }
        &.act {
          border: 3.5px solid #354e44;
          background-color: #354e44;
        }
      }
    }
    .box {
      width: 337px;
      height: 241px;
      background: #ffffff;
      box-shadow: 0 6px 8px 0 rgba(83, 66, 49, 0.03);
      border-radius: 12px;
      margin-bottom: 28px;
      .box-img {
        position: relative;
        width: 100%;
        height: 191px;
        img {
          width: 100%;
          height: 100%;
        }
        .img-text {
          position: absolute;
          left: 13px;
          bottom: 12px;
          text-align: left;
          h3 {
            display: block;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: 1.71px;
            line-height: 33px;
            margin-bottom: 3px;
          }
          p {
            font-size: 15px;
            color: #ffffff;
            letter-spacing: 1.07px;
            line-height: 21px;
          }
        }
      }
      .box-text {
        position: relative;
        width: 100%;
        height: 50px;
        .viewers {
          position: absolute;
          left: 57px;
          bottom: 15px;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
        }
        .viewers::after {
          content: "";
          position: absolute;
          left: -30.5px;
          top: 2px;
          width: 22px;
          height: 14px;
          background: url("~@/assets/images/icons/viewers.png") no-repeat
            center/100% 100%;
        }
        .icon-right {
          position: absolute;
          right: 28px;
          bottom: 14px;
          display: flex;
          justify-content: space-between;
          width: 61.5px;
          height: 20px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
