import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 初始化样式
import "@/assets/css/reset.css";
// 移动端适配
import "lib-flexible";

// vant配置
import { Button, Sku, Toast } from "vant";
Vue.use(Button)
  .use(Sku)
  .use(Toast);
// 引入字体样式
import "@/assets/css/font_gdog4nc1ebd/iconfont.css";

// swiper配置
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

// 引入路由切换动画
import "@/assets/css/animated.css";
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
