<template>
  <div class="base-layer-main">
    <div class="header-bar">
      <slot name="header"></slot>
    </div>
    <div class="scroll-wapper" ref="wrapper">
      <div class="scroll-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BaseLayer",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true,
        freeScroll:true,
        eventPassthrough:""
      });
    });
  }
};
</script>

<style scoped lang="scss">
.base-layer-main {
  position: relative;
  height: 100%;
  .header-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    z-index: 999;
  }
  .scroll-wapper {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: calc(100% - 44px);
    z-index: 998;
    overflow: hidden;
  }
}
</style>
