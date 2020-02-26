import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppObj: {
      //临时skuobj
    },
    index: ""
  },
  mutations: {
    // obj为商品  index为商品中的的sku
    getSku(state, { shoppObj, index }) {
      state.shoppObj = shoppObj;
      state.index = index;
      // console.log(state.orderDetail, index);
    }
  },
  actions: {},
  modules: {},
  getters: {}
});
