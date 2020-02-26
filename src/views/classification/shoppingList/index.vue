<template>
  <div class="shoppingList-main">
    <BaseLayer ref="base">
      <template v-slot:header>
        <div class="header-c">
          <div class="header-title">
            <img @click="$router.go(-1)" src="@/assets/images/icons/left.png" alt class="icon-left" />
            <h2 class="title">{{ brandObj.ctitle }}</h2>
          </div>
          <ul @click="getBarVal" class="title-bar">
            <li class="item-bar" :class="{'act':barVal=='1'}" value="1">新品</li>
            <li class="item-bar" :class="{'act':barVal=='2'}" value="2">销量</li>
            <li class="item-bar" :class="{'act':barVal=='3'}" value="3">价格</li>
            <li class="item-bar" :class="{'act':barVal=='4'}" value="4">筛选</li>
          </ul>
        </div>
      </template>
      <template v-slot:content>
        <ul class="content-c">
          <router-link
            :to="{name:'shoppingDetails',params:{
              id:item.id
            }}"
            tag="li"
            class="shopping-item"
            v-for="item in shoppingList"
            :key="item.id"
          >
            <img class="shopping-img" :src="item.cover_img" alt />
            <div class="shopping-text">
              <h5 class="shopping-title">{{ item.gname }}</h5>
              <p class="shopping-favorite">500人以收藏</p>
              <span class="shopping-price">¥{{ item.price_now }}</span>
              <span class="shopping-address">佛山</span>
            </div>
          </router-link>
        </ul>
      </template>
    </BaseLayer>
    <img class="go-top" @click="goTop" src="@/assets/images/icons/go_top.png" alt />
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import kindApi from "@/api/kind";
export default {
  name: "ShoppingList",
  components: {
    BaseLayer
  },
  data() {
    return {
      barVal: "1",
      shoppingList: [
        {
          id: "1",
          url: require("@/assets/images/classification/creative/sofa.png"),
          title: "Valley 单人沙发",
          favorite: "1426",
          price: "560",
          address: "佛山"
        },
        {
          id: "2",
          url: require("@/assets/images/classification/creative/chair.png"),
          title: "现代极简实木椅 休闲椅",
          favorite: "1426",
          price: "359",
          address: "佛山"
        },
        {
          id: "3",
          url: require("@/assets/images/classification/creative/coffee_table.png"),
          title: "Jenner 茶几",
          favorite: "1426",
          price: "2162",
          address: "佛山"
        },
        {
          id: "4",
          url: require("@/assets/images/classification/creative/desk.png"),
          title: "简约书桌",
          favorite: "1426",
          price: "451",
          address: "佛山"
        },
        {
          id: "5",
          url: require("@/assets/images/classification/creative/bookcase.png"),
          title: "几何图形书柜",
          favorite: "1426",
          price: "5372",
          address: "佛山"
        },
        {
          id: "6",
          url: require("@/assets/images/classification/creative/TV_cabinet.png"),
          title: "Worcester 电视柜",
          favorite: "1426",
          price: "4261",
          address: "佛山"
        },
        {
          id: "7",
          url: require("@/assets/images/classification/creative/TV_cabinet.png"),
          title: "Worcester 电视柜",
          favorite: "1426",
          price: "4261",
          address: "佛山"
        },
        {
          id: "8",
          url: require("@/assets/images/classification/creative/TV_cabinet.png"),
          title: "Worcester 电视柜",
          favorite: "1426",
          price: "4261",
          address: "佛山"
        },
        {
          id: "9",
          url: require("@/assets/images/classification/creative/TV_cabinet.png"),
          title: "Worcester 电视柜",
          favorite: "1426",
          price: "4261",
          address: "佛山"
        }
      ],
      brandObj: {
        ctitle: ""
      }
    };
  },
  computed: {},
  methods: {
    getBarVal(e) {
      this.barVal = e.target.value;
    },
    // 返回顶部
    goTop() {
      var scroll = this.$refs.base.$scroll;
      var el = this.$refs.base.$scroll.scroller;
      scroll.scrollToElement(el, 400, false, false);
    },
    // 获取分类商品列表
    getShoppList() {
      kindApi
        .getShoppList({
          kindId: this.$route.params.id
        })
        .then(res => {
          this.shoppingList = res.data.list;
          this.brandObj = res.kind;
        });
    }
  },
  created() {
    this.getShoppList();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.shoppingList-main {
  height: 100%;
  /deep/.header-bar {
    height: 79px;
  }
  /deep/.scroll-wapper {
    top: 63px;
    height: calc(100% - 63px);
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
    .title-bar {
      display: flex;
      justify-content: space-around;
      width: calc(100% - 40px);
      height: 26px;
      margin: 0 auto;
      .item-bar {
        position: relative;
        width: 80px;
        text-align: center;
        font-size: 15px;
        color: #ffffff;
        letter-spacing: 1.07px;
        line-height: 21px;
        &.act::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 31px;
          height: 3px;
          background: #f1ece7;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
  .content-c {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 36px 20px 0;
    .shopping-item {
      width: 158px;
      height: 208px;
      background: #ffffff;
      box-shadow: 0 4px 8px 0 rgba(83, 66, 49, 0.06);
      border-radius: 5px;
      margin-bottom: 24px;
      .shopping-img {
        width: 100%;
        height: 119px;
      }
      .shopping-text {
        position: relative;
        width: calc(100% - 36px);
        height: 67px;
        margin: 14px auto 8px;
        text-align: left;
        .shopping-title {
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 21px;
          font-weight: 600;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .shopping-favorite {
          font-size: 11px;
          color: #8d8d8d;
          letter-spacing: 0.79px;
          line-height: 16px;
        }
        .shopping-price {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
          font-weight: 600;
        }
        .shopping-address {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 11px;
          color: #3e3e3e;
          letter-spacing: 0.79px;
          line-height: 16px;
        }
      }
    }
  }
  .go-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    z-index: 999;
  }
}
</style>
