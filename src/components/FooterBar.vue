<template>
  <div class="footer-bar">
    <router-link class="footer-item home" tag="div" :to="{name:'home'}">
      <span class="footer-title">首页</span>
    </router-link>
    <router-link class="footer-item classification" tag="div" :to="{name:'classification'}">
      <span class="footer-title">分类</span>
    </router-link>
    <router-link class="footer-item find" tag="div" :to="{name:'find'}">
      <span class="footer-title">发现</span>
    </router-link>
    <router-link class="footer-item mine" tag="div" :to="{name:'mine'}">
      <span class="footer-title">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
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
.footer-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 88px;
  background-color: #fff;
  .footer-item {
    position: relative;
    width: 68px;
    height: 68px;
    color: #999999;
    &.router-link-active {
      color: #3d4c46;
    }
    &.home {
      background: url("~@/assets/images/icons/home.png") no-repeat top
        center/30px 30px;
    }

    &.home.router-link-active {
      background: url("~@/assets/images/icons/home_act.png") no-repeat top
        center/30px 30px;
    }
    &.classification {
      background: url("~@/assets/images/icons/classification.png") no-repeat top
        center/30px 30px;
    }
    &.classification.router-link-active {
      background: url("~@/assets/images/icons/classification_act.png") no-repeat
        top center/30px 30px;
    }
    &.find {
      background: url("~@/assets/images/icons/find.png") no-repeat top
        center/30px 30px;
    }
    &.find.router-link-active {
      background: url("~@/assets/images/icons/find_act.png") no-repeat top
        center/30px 30px;
    }
    &.mine {
      background: url("~@/assets/images/icons/mine.png") no-repeat top
        center/30px 30px;
    }
    &.mine.router-link-active {
      background: url("~@/assets/images/icons/mine_act.png") no-repeat top
        center/30px 30px;
    }
    .footer-title {
      position: absolute;
      bottom: 19px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      line-height: 16px;
    }
  }
}
</style>
