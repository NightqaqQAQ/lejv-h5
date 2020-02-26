<template>
  <div class="title-bar">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <div class="header-title">
            <img alt class="icon-left" @click="$router.go(-1)" src="@/assets/images/icons/left.png" />
            <h2 class="title">
              <slot name="title"></slot>
            </h2>
            <div class="icon-right">
              <slot name="rightIcon"></slot>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:content>
        <slot name="main"></slot>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "After",
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
.title-bar {
  height: 100%;
  /deep/.header-bar {
    height: 60px;
  }
  /deep/.scroll-wapper {
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
      .icon-right {
        position: absolute;
        top: 9px;
        right: 0;
        width: 23px;
        height: 23px;
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
  }
}
</style>
