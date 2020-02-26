<template>
  <div class="home-main">
    <img v-if="$route.meta.isBrandBG" class="brand_bg" src="@/assets/images/home/brand_bg2.png" alt />
    <BaseLayer ref="base">
      <template v-slot:header>
        <div class="header-c">
          <img src="@/assets/images/icons/comment.png" class="icon-comment" />
          <div class="center">
            <router-link class="text" tag="span" :to="{name:'recommend'}">推荐</router-link>
            <router-link class="text" tag="span" :to="{name:'brand'}">品牌</router-link>
          </div>
          <div class="right">
            <router-link :to="{name:'search'}" tag="div" class="icon-r icon-search"></router-link>
            <div class="icon-r icon-shopping"></div>
          </div>
        </div>
      </template>
      <template v-slot:content>
        <router-view></router-view>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Home",
  components: {
    BaseLayer
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.home-main {
  height: 100%;
  background-color: #f1ece7;
  .brand_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  /deep/.scroll-wapper {
    top: 0;
    height: calc(100% - 88px);
  }

  .header-c {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 30px);
    height: 100%;
    margin: 0 auto;
    .center {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 86px;
      height: 100%;
      font-size: 16px;
      color: #fff;
      .text {
        position: relative;
        &.router-link-active::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 32px;
          height: 3px;
          border-radius: 3px;
          background-color: #fff;
        }
      }
    }
    .icon-comment {
      width: 21px;
      height: 21px;
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 54px;
      height: 100%;
      .icon-r {
        width: 18px;
        height: 18px;
      }
      .icon-search {
        background: url("~@/assets/images/icons/search.png") no-repeat
          center/100%;
      }
      .icon-shopping {
        background: url("~@/assets/images/icons/shopping.png") no-repeat
          center/100%;
      }
    }
  }
}
</style>
