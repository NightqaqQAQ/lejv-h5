<template>
  <div class="search-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <input placeholder="搜索" class="search-ipt" type="text" />
          <span @click="$router.go(-1)" class="search-cancel">取消</span>
        </div>
      </template>
      <template v-slot:content>
        <div class="content-c">
          <h3 class="search-title">热门搜索</h3>
          <ul class="search-box">
            <li class="hot-item" v-for="(item,index) in hotList" :key="index">
              <img class="hot-icon" :src="item.url" alt />
              <h5 class="hot-title">{{ item.title }}</h5>
            </li>
          </ul>
          <h3 class="search-title">搜索记录</h3>
          <ul class="search-box">
            <li class="recording-item" v-for="(item,index) in hotList" :key="index">{{ item.title }}</li>
          </ul>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer.vue";
export default {
  name: "Search",
  components: {
    BaseLayer
  },
  data() {
    return {
      hotList: [
        {
          url: require("@/assets/images/icons/hot_1.png"),
          title: "椅子"
        },
        {
          url: require("@/assets/images/icons/hot_2.png"),
          title: "衣柜"
        },
        {
          url: require("@/assets/images/icons/hot_3.png"),
          title: "灯具"
        },
        {
          url: require("@/assets/images/icons/hot_4.png"),
          title: "衣柜"
        },
        {
          url: require("@/assets/images/icons/hot_5.png"),
          title: "装饰"
        },
        {
          url: require("@/assets/images/icons/hot_6.png"),
          title: "椅子"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.search-main {
  height: 100%;
  background-color: #f1ece7;
  .header-c {
    width: calc(100% - 24px);
    height: 35px;
    margin: 4.5px auto 4.5px;
    line-height: 35px;
    .search-ipt {
      width: 272px;
      height: 100%;
      box-sizing: border-box;
      padding-left: 48px;
      margin: 0 10px;
      border-radius: 17.5px;
      border: 0; // 去除未选中状态边框
      outline: none; // 去除选中状态边框
      background: url("~@/assets/images/icons/search_1.png") no-repeat 18px 9px/18px
        18px;
      background-color: #fff;
      font-size: 12px;
      color: #6c6c6c;
      letter-spacing: 0.86px;
    }
    .search-cancel {
      font-size: 14px;
      color: #3e3e3e;
      letter-spacing: 1px;
    }
  }
  .content-c {
    width: calc(100% - 40px);
    margin: 0 auto;
    .search-title {
      display: block;
      margin: 24px 0;
      font-size: 16px;
      color: #3e3e3e;
      letter-spacing: 1.14px;
      text-align: left;
    }
    .search-box {
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
      .hot-item {
        width: 96px;
        height: 96px;
        background: #ffffff;
        box-shadow: 0 2px 6px 0 rgba(83, 66, 49, 0.08);
        border-radius: 15px;
        margin-bottom: 23px;
        .hot-icon {
          height: 34px;
          margin: 22px auto 5px;
        }
        .hot-title {
          font-size: 13px;
          color: #3e3e3e;
          letter-spacing: 0.93px;
          line-height: 18px;
        }
      }
      .hot-item:nth-last-child(-n + 3) {
        margin-bottom: 0;
      }
      .recording-item {
        width: 96px;
        height: 43px;
        background: #ffffff;
        box-shadow: 0 2px 6px 0 rgba(83, 66, 49, 0.05);
        border-radius: 7px;
        line-height: 43px;
        font-size: 13px;
        color: #3e3e3e;
        letter-spacing: 0.93px;
        margin-bottom: 23px;
      }
    }
  }
}
</style>
