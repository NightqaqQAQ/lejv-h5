<template>
  <div class="details-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <img @click="$router.go(-1)" src="@/assets/images/icons/left.png" alt class="header-left" />
          <img src="@/assets/images/icons/forward_w.png" alt class="header-right" />
        </div>
      </template>
      <template v-slot:content>
        <div class="content-c">
          <div class="banner">
            <img src="@/assets/images/find/details_FR.png" alt />
            <div class="icon-love">
              <img src="@/assets/images/icons/shopping_w.png" alt />
            </div>
          </div>
          <div class="text-box">
            <div class="title-box">
              <h3>莲花吊灯</h3>
              <p>by MacMaster</p>
              <ul class="dots">
                <li class="dot one"></li>
                <li class="dot tow"></li>
                <li class="dot three"></li>
              </ul>
              <span class="price">¥560</span>
            </div>
            <div class="text-main">
              <p>轻北欧风个性与舒适并存，干净简洁的切合拼合外观，时尚简约。切割外观，置于居室增添一抹亮丽风景。</p>
            </div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "FRdetails",
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
.details-main {
  height: 100%;
  /deep/.scroll-wapper {
    top: 0;
    height: 100%;
  }
  .header-c {
    height: 100%;
    margin: 0 auto;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      width: 19px;
      height: 19px;
    }
    .header-right {
      width: 23px;
      height: 22px;
    }
  }
  .content-c {
    .banner {
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }
      .icon-love {
        position: absolute;
        right: 48px;
        bottom: -25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #354e44;
        box-shadow: 0 8px 12px 0 rgba(70, 70, 70, 0.2);
        border-radius: 50%;
        img {
          width: 24px;
          height: 21px;
        }
      }
    }
    .text-box {
      box-sizing: border-box;
      padding: 45px 36px 28px 35px;
      text-align: left;
      .title-box {
        position: relative;
        width: 100%;
        height: 70px;
        margin-bottom: 28px;
        h3 {
          font-size: 18.2px;
          color: #3e3e3e;
          letter-spacing: 1.3px;
          line-height: 25px;
        }
        p {
          font-size: 15.4px;
          color: #b0b0b0;
          letter-spacing: 1.1px;
          line-height: 21px;
        }
        .dots {
          position: absolute;
          left: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 53px;
          height: 14px;
          .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            &.one {
              background: #663725;
            }
            &.tow {
              background: #9f4405;
            }
            &.three {
              background: #cb821b;
            }
          }
        }
        .price {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 18.2px;
          color: #3e3e3e;
          letter-spacing: 1.3px;
        }
      }
      .text-main {
        width: 100%;
        box-sizing: border-box;
        padding: 0 2px 0 1px;
        text-align: left;
        p {
          font-size: 14px;
          color: #8a8a8a;
          letter-spacing: 1px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
