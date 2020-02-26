<template>
  <div class="mask-main" @click="cloMask">
    <div class="box" @click.stop>
      <div class="del" @click="cloMask">×</div>
      <div class="img-box">
        <img :src="shoppObj.cover_img" alt />
      </div>
      <div class="title-box">
        <h3>{{ shoppObj.gname }}</h3>
        <p>库存: {{ countCom }}</p>
        <p v-if="index !='空'">单价: {{ shoppObj.skuList[index].price }}元</p>
      </div>
      <h3>颜色分类</h3>
      <ul class="color-box">
        <li
          v-for="item in shoppObj.skuList"
          :key="item.id"
          @click="selSku(item.id)"
          :class="{'act': skuAct == item.id}"
        >{{ item.color_text }}</li>
      </ul>
      <h3>特色服务</h3>
      <ul class="service-box">
        <li
          v-for="item in serList"
          :key="item.id"
          :class="{'act':item.val == item.id}"
          @click="service(item.id)"
        >{{ item.text }}&nbsp;&nbsp;&nbsp;&nbsp;【商家赠送】</li>
      </ul>
      <div class="line"></div>
      <div class="count-box">
        <h3>购买数量</h3>
        <ul class="count-inner">
          <li @click="less">-</li>
          <input ref="ipt-text" v-model="count" class="ipt-text" type="text" />
          <li @click="plus">+</li>
        </ul>
        <!-- 如果没选sku 阻止数量加减 -->
        <div @click="toastSku" v-if="index =='空'" class="prevent-box"></div>
      </div>
      <div class="bottom-box">
        <div @click="fix" class="yes">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "MaskSku",
  props: ["shopp"],
  components: {},
  data() {
    return {
      shoppObj: {},
      serList: [
        {
          val: "",
          text: "送货入户",
          id: 1,
          isCheck: false
        },
        {
          val: "",
          text: "上门安装",
          id: 2,
          isCheck: false
        }
      ],
      skuAct: "",
      //   选中的sku
      index: "空",
      count: "1"
    };
  },
  computed: {
    countCom() {
      // 计算sku总库存
      if (this.shoppObj.skuList) {
        return this.shoppObj.skuList.reduce((total, ele) => {
          return (total = total + ele.count);
        }, 0);
      }
    }
  },
  methods: {
    ...mapMutations({
      getSku: "getSku"
    }),
    // 确定购买 跳转到订单页 把sku数据传到vuex
    fix() {
      var index = this.index;
      var shoppObj = this.shoppObj;
      console.log(index);
      if (index == "空") {
        this.$toast("请先选择颜色(●'◡'●)");
      } else {
        this.getSku({ shoppObj, index });
        this.$router.push({ name: "fixOrder" });
      }
    },
    // 关闭遮罩层
    cloMask() {
      this.$emit("colse-mask");
    },
    // 选择sku
    selSku(id) {
      var index = this.shoppObj.skuList.findIndex(ele => ele.id == id);
      this.index = index;
      this.skuAct = id;
    },
    // 选择服务
    service(id) {
      var index = this.serList.findIndex(ele => ele.id == id);
      if (!this.serList[index].isCheck) {
        this.serList[index].val = id;
        this.serList[index].isCheck = true;
      } else {
        this.serList[index].val = "";
        this.serList[index].isCheck = false;
      }
    },
    // 购买数量减1
    less() {
      if (this.count <= "1") {
        this.$toast("已经是最低了哦~");
      } else {
        this.count--;
      }
    },
    // 购买数量加1
    plus() {
      var num = this.shoppObj.skuList[this.index].count;
      if (this.count >= num) {
        this.$toast("已经是最高了哦~");
      } else {
        this.count++;
      }
    },
    // 提示选择
    toastSku() {
      this.$toast("请先选择颜色(●'◡'●)");
    }
  },
  created() {},
  watch: {
    shopp(newValue, oldValue) {
      if (newValue) {
        this.shoppObj = newValue;
      }
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.mask-main {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  text-align: left;
  h3 {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #3e3e3e;
    letter-spacing: 1px;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #979797;
    margin-bottom: 16px;
    opacity: 0.24;
  }
  .box {
    position: relative;
    width: 314px;
    box-sizing: border-box;
    padding: 21px 18px 0 31px;
    margin: 100px auto 0;
    background-color: #fff;
    border-radius: 20px;
    .del {
      position: absolute;
      top: 19px;
      right: 19px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #424242;
      font-size: 18px;
      text-align: center;
      line-height: 20px;
      color: #424242;
    }
    .img-box {
      position: absolute;
      left: 31px;
      top: -28px;
      width: 96px;
      height: 96px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 8px 12px 0 rgba(70, 70, 70, 0.2);
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .title-box {
      width: 130px;
      height: 40px;
      margin: 0 0 34px 111px;
      h3 {
        margin-bottom: 3px;
      }
      p {
        font-size: 12px;
        color: #b0b0b0;
        letter-spacing: 0.86px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        height: 30px;
        background: #efefef;
        border-radius: 5px;
        font-size: 13px;
        color: #3e3e3e;
        letter-spacing: 0.93px;
        text-align: center;
        line-height: 30px;
      }
      .act {
        background-color: #354e44;
        color: #efefef;
      }
    }
    .color-box {
      width: 246px;
      margin-bottom: 9px;
      li {
        width: 121px;
        margin-bottom: 4px;
      }
    }
    .service-box {
      width: 190px;
      margin-bottom: 9px;
      li {
        width: 190px;
        margin-bottom: 8px;
      }
    }
    .count-box {
      position: relative;
      border: 0.5px solid transparent;
      h3 {
        margin: 4px 0 0;
      }
      .count-inner {
        position: absolute;
        right: 0;
        top: 0;
        width: 84px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 22px;
          border-radius: 10px;
          color: #3e3e3e;
        }
        .ipt-text {
          width: 36px;
          height: 20px;
          background-color: #efefef;
          border: 0px;
          border-radius: 10px;
          box-sizing: border-box;
          font-size: 12px;
          text-align: center;
        }
      }
      .prevent-box {
        position: absolute;
        right: 0;
        top: 0;
        width: 84px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
    .bottom-box {
      position: relative;
      height: 115px;
      width: 100%;
      .yes {
        position: absolute;
        left: 74px;
        bottom: 51px;
        width: 104px;
        height: 40px;
        background: #354e44;
        border-radius: 7px;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 1.14px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>
