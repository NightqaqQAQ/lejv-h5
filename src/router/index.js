import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index";
import recommend from "../views/home/Recommend";
Vue.use(VueRouter);

const routes = [
  //# 首页内容开始
  {
    path: "/home",
    name: "home",
    redirect: "/home/Recommend",
    component: Home,
    children: [
      {
        path: "Recommend",
        name: "recommend",
        meta: {
          isFooterBar: true
        },
        component: recommend
      },
      {
        path: "Drand",
        name: "brand",
        meta: {
          isFooterBar: true,
          isBrandBG: true
        },
        component: () =>
          import(/* webpackChunkName: "brand" */ "@/views/home/Drand")
      }
    ]
  },
  // ##首页子页面
  {
    path: "/home/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "classification" */ "@/views/home/search")
  },
  // #分类页面开始
  {
    path: "/classification",
    name: "classification",
    meta: {
      isFooterBar: true
    },
    component: () =>
      import(/* webpackChunkName: "classification" */ "@/views/classification")
  },
  // ##分类子页面
  {
    path: "/classification/shoppingList/:id",
    name: "shoppingList",
    component: () =>
      import(
        /* webpackChunkName: "shoppingList" */ "@/views/classification/shoppingList"
      )
  },
  {
    path: "/classification/shoppingList/shoppingDetails/:id",
    name: "shoppingDetails",
    component: () =>
      import(
        /* webpackChunkName: "shoppingDetails" */ "@/views/classification/shoppingDetails"
      )
  },
  // #发先界面开始
  {
    path: "/find",
    name: "find",
    redirect: "/find/Featured",
    component: () => import(/* webpackChunkName: "find" */ "@/views/find"),
    children: [
      {
        path: "Featured",
        name: "featured",
        meta: {
          isFooterBar: true
        },
        component: () =>
          import(/* webpackChunkName: "Featured" */ "@/views/find/Featured")
      },
      {
        path: "FRecommend",
        name: "Frecommend",
        meta: {
          isFooterBar: true
        },
        component: () =>
          import(/* webpackChunkName: "FRecommend" */ "@/views/find/FRecommend")
      }
    ]
  },
  // #发先子界面开始
  {
    path: "/find/Featured/Fdetails",
    name: "Fdetails",
    component: () =>
      import(
        /* webpackChunkName: "Fdetails" */ "@/views/find/Featured/Fdetails"
      )
  },
  {
    path: "/find/FRecommend/FRdetails",
    name: "FRdetails",
    component: () =>
      import(
        /* webpackChunkName: "FRdetails" */ "@/views/find/FRecommend/FRdetails"
      )
  },
  // #我的界面开始
  {
    path: "/mine",
    name: "mine",
    meta: {
      isFooterBar: true
    },
    component: () => import(/* webpackChunkName: "mine" */ "@/views/mine")
  },
  // ##我的界面子页面开始
  {
    path: "/mine/order",
    name: "order",
    component: () =>
      import(/* webpackChunkName: "order" */ "@/views/mine/order")
  },
  // 订单子页面 确认订单
  {
    path: "/mine/order/fixOrder",
    name: "fixOrder",
    component: () =>
      import(/* webpackChunkName: "fixOrder" */ "@/views/mine/order/fixOrder")
  },
  {
    path: "/mine/after",
    name: "after",
    component: () =>
      import(/* webpackChunkName: "after" */ "@/views/mine/after")
  },
  {
    path: "/mine/favorite",
    name: "favorite",
    component: () =>
      import(/* webpackChunkName: "favorite" */ "@/views/mine/favorite")
  },
  {
    path: "/mine/article",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "article" */ "@/views/mine/article")
  },
  {
    path: "/mine/brand",
    name: "Mbrand",
    component: () =>
      import(/* webpackChunkName: "brand" */ "@/views/mine/brand")
  },
  {
    path: "/mine/package",
    name: "package",
    component: () =>
      import(/* webpackChunkName: "package" */ "@/views/mine/package")
  },
  {
    path: "/mine/safety",
    name: "safety",
    component: () =>
      import(/* webpackChunkName: "safety" */ "@/views/mine/safety")
  },
  {
    path: "/mine/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/mine/about")
  },
  {
    path: "/mine/address",
    name: "address",
    component: () =>
      import(/* webpackChunkName: "address" */ "@/views/mine/address")
  },
  // #登陆页面开始
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/login")
  },
  {
    path: "/registered",
    name: "registered",
    component: () =>
      import(/* webpackChunkName: "registered" */ "@/views/registered")
  },
  {
    path: "/rgtDetail",
    name: "rgtDetail",
    component: () =>
      import(/* webpackChunkName: "registered" */ "@/views/registered/detail")
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
