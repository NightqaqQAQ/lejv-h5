<template>
  <div class="find-main">
    <div class="header-bar">
      <router-link tag="span" class="item-bar" :to="{name:'featured'}">精选文章</router-link>
      <router-link tag="span" class="item-bar" :to="{name:'Frecommend'}">好物推荐</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "find",
  components: {},
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
.find-main {
  height: 100%;
  .header-bar {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 162px;
    height: 24px;
    z-index: 999;
    .item-bar {
      position: relative;
      font-size: 16px;
      color: #fff;
      letter-spacing: 1.14px;
      line-height: 22px;
      &.router-link-active::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 32px;
        height: 3px;
        border-radius: 1.5px;
        background-color: #fff;
      }
    }
  }
}
</style>
