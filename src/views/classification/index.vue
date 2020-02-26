<template>
  <div class="classification-main">
    <div class="classification-bg"></div>
    <div class="classification-bg1"></div>
    <BaseLayer>
      <template v-slot:header>
        <div class="header-c">
          <img src="@/assets/images/icons/comment.png" class="icon-comment" />
          <div class="right">
            <router-link :to="{name:'search'}" tag="div" class="icon-r icon-search"></router-link>
            <div class="icon-r icon-shopping"></div>
          </div>
        </div>
      </template>
      <template v-slot:content>
        <div class="content-c">
          <router-link
            v-for="(item,index) in kindList"
            :key="item.id"
            v-show="index < 2"
            :class="{ 'decoration' : index==1 }"
            tag="div"
            :to="{name:'shoppingList',params:{
              id:item.id
            }}"
            class="img-box creative"
          >
            <div class="img-text">
              <h2 class="img-title">{{ item.ctitle }}</h2>
              <p class="img-title-en">{{ item.etitle }}</p>
            </div>
            <img class="img-creative" :src="item.img" alt />
          </router-link>
          <div class="img-box-c">
            <router-link
              tag="div"
              v-for="(item,index) in kindList"
              :key="item.id"
              v-show="index > 1"
              :to="{name:'shoppingList',params:{
              id:item.id
            }}"
              class="img-box-small"
            >
              <img :src="item.img" alt class="small-img" />
              <div class="img-text text-small">
                <h2 class="img-title">{{ item.ctitle }}</h2>
                <p class="img-title-en">{{ item.etitle }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import kindApi from "@/api/kind";
export default {
  name: "Classification",
  components: {
    BaseLayer
  },
  data() {
    return {
      kindList: []
    };
  },
  computed: {},
  methods: {
    // 获取分类列表
    getkindList() {
      kindApi.getkindList().then(res => {
        this.kindList = res.data;
      });
    }
  },
  created() {
    this.getkindList();
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.classification-main {
  position: relative;
  height: 100%;
  background-color: #f1ece7;
  /deep/.scroll-wapper {
    height: calc(100% - 132px);
  }
  .classification-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #354e44;
  }
  .classification-bg1 {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: 100px;
    border-radius: 16px 16px 0 0;
    background-color: #f1ece7;
  }
  .header-c {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 30px);
    height: 100%;
    margin: 0 auto;
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
  .content-c {
    box-sizing: border-box;
    padding: 32px 20px 39px;
    .img-box {
      position: relative;
      width: 100%;
      height: 151px;
      box-shadow: 0 6px 10px 0 rgba(83, 66, 49, 0.05);
      border-radius: 10px;
      margin-bottom: 24px;
      &.creative {
        background: #d5d5d5;
      }
      &.decoration {
        background: #ffffff;
      }
      .img-creative {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 208px;
        height: 126px;
      }
    }
    .img-box-c {
      display: flex;
      justify-content: space-between;
      .img-box-small {
        position: relative;
        width: 156px;
        height: 221px;
        box-shadow: 0 6px 10px 0 rgba(83, 66, 49, 0.03);
        border-radius: 10px;
        background: #fafafa;
        .small-img {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-radius: 10px;
        }
      }
    }
    // 公共标题样式
    .img-text {
      position: absolute;
      left: 26px;
      top: 74px;
      width: 85px;
      height: 77px;
      text-align: left;
      &.text-small {
        top: 140px;
      }
      .img-title {
        font-size: 24px;
        color: #3e3e3e;
        letter-spacing: 1.71px;
        line-height: 33px;
        font-weight: 900;
      }
      .img-title-en {
        font-size: 15px;
        color: #7f7f7f;
        letter-spacing: 1.07px;
        line-height: 21px;
      }
    }
  }
}
</style>
