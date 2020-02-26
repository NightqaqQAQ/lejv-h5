<template>
  <div class="maie-main">
    <BaseLayer>
      <template v-slot:content>
        <div class="content-c">
          <div class="header-box" v-if="id">
            <div class="avatar-box">
              <img :src="userObj.avatar" alt class="avatar" />
              <div class="header-text">
                <p>{{ userObj.username }}</p>
                <p>{{ userObj.email }}</p>
              </div>
            </div>
          </div>
          <div class="header-box" v-else>
            <div class="avatar-box">
              <img src="@/assets/images/mine/avatar.png" alt class="avatar" />
              <div class="header-text">
                <p>hi～</p>
                <p>你还没有登录呢</p>
              </div>
            </div>
            <ul class="btn-box">
              <router-link tag="li" :to="{name:'rgtDetail'}" class="btn-item one">注册</router-link>
              <router-link tag="li" :to="{name:'login'}" class="btn-item tow">登陆</router-link>
            </ul>
          </div>
          <div class="order-box">
            <router-link :to="{name:'order'}" tag="div" class="order-title">
              <span>我的订单</span>
              <img src="@/assets/images/icons/right.png" alt class="order-icon" />
            </router-link>
            <ul class="order-main">
              <li class="order-item">
                <img src="@/assets/images/icons/pre_payment.png" alt />
                <p>待付款</p>
              </li>
              <li class="order-item">
                <img src="@/assets/images/icons/received.png" alt />
                <p>待收货</p>
              </li>
              <li class="order-item">
                <img src="@/assets/images/icons/completed.png" alt />
                <p>已完成</p>
              </li>
              <router-link :to="{name:'after'}" tag="li" class="order-item">
                <img src="@/assets/images/icons/after.png" alt />
                <p>售后</p>
              </router-link>
            </ul>
          </div>
          <ul class="features-box">
            <router-link :to="{name:'favorite'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/favorite2.png" alt />
              <span>收藏</span>
            </router-link>
            <router-link :to="{name:'Mbrand'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/brand.png" alt />
              <span>品牌</span>
            </router-link>
            <router-link :to="{name:'article'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/article.png" alt />
              <span>文章</span>
            </router-link>
            <router-link :to="{name:'address'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/address.png" alt />
              <span>地址</span>
            </router-link>
            <router-link :to="{name:'package'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/package.png" alt />
              <span>卡包</span>
            </router-link>
            <li class="features-item">
              <img src="@/assets/images/icons/service.png" alt />
              <span>客服</span>
            </li>
            <router-link :to="{name:'safety'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/safety.png" alt />
              <span>安全</span>
            </router-link>
            <router-link :to="{name:'about'}" tag="li" class="features-item">
              <img src="@/assets/images/icons/on.png" alt />
              <span>关于</span>
            </router-link>
            <li></li>
          </ul>
          <div @click="doLogout" class="btn-login">退出登陆</div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import mineApi from "@/api/mine";
import loginApi from "@/api/login";
export default {
  name: "Mine",
  components: {
    BaseLayer
  },
  data() {
    return {
      id: "",
      userObj: {}
    };
  },
  computed: {},
  methods: {
    // 获取用户信息
    userDetail(id) {
      mineApi.userDetail({ id }).then(res => {
        this.userObj = res.data;
      });
    },
    // 退出登陆
    doLogout() {
      loginApi.doLogout().then(res => {
        if (res.code == "S") {
          this.$toast("已退出登陆");
          localStorage.setItem("token", "");
          location.reload();   
        }
      });
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.id = localStorage.getItem("token");
      this.userDetail(this.id);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.maie-main {
  height: 100%;
  background-color: #f1ece7;
  /deep/.scroll-wapper {
    top: 0;
    height: calc(100% - 88px);
    .content-c {
      width: calc(100% - 40px);
      margin: 0 auto;
      padding-bottom: 30px;
      .header-box {
        box-sizing: border-box;
        padding: 5px 0 5px 0;
        .avatar-box {
          .avatar {
            float: left;
            width: 75px;
            height: 75px;
            margin-right: 16px;
            border-radius: 50%;
          }
          .header-text {
            float: left;
            margin-top: 20px;
            font-size: 14px;
            color: #3d4c46;
            letter-spacing: 0.5px;
            line-height: 22px;
            text-align: left;
            font-weight: 600;
          }
        }
        .avatar-box::after {
          content: "";
          display: block;
          clear: both;
        }
        .btn-box {
          display: block;
          display: flex;
          justify-content: space-between;
          width: 212px;
          height: 33px;
          margin: 26px auto;
          .btn-item {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            width: 91px;
            height: 38px;
            border-radius: 5px;
            font-size: 15px;

            letter-spacing: 1.07px;
            &.one {
              border: 1px solid #354e44;
              color: #354e44;
            }
            &.tow {
              background-color: #354e44;
              color: #ffffff;
            }
          }
        }
      }
      .order-box {
        width: 335px;
        height: 104px;
        background: #ffffff;
        box-shadow: 0 8px 12px 0 rgba(122, 98, 75, 0.04);
        border-radius: 5px;
        margin-bottom: 25px;
        .order-title {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: calc(100% - 56px);
          height: 37px;
          margin: 0 auto;
          padding: 10px 0 9px;
          border-bottom: 1px solid #dddddd;
          span {
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 0.93px;
          }
        }
        .order-main {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 67px;
          width: 100%;
          box-sizing: border-box;
          padding: 10px 0;
          .order-item {
            width: 70px;
            img {
              width: 22px;
              height: 20px;
            }
            p {
              font-size: 13px;
              color: #3e3e3e;
              letter-spacing: 0.93px;
              line-height: 18px;
            }
          }
        }
      }
      .features-box {
        display: flex;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        width: 335px;
        height: 332px;
        margin: 0 auto;
        background: #ffffff;
        box-shadow: 0 8px 12px 0 rgba(122, 98, 75, 0.04);
        border-radius: 5px;
        .features-item {
          display: block;
          width: 90px;
          height: 90px;
          box-sizing: border-box;
          padding-top: 20px;
          img {
            height: 25px;
          }
          span {
            display: block;
            font-size: 13px;
            color: #3e3e3e;
            letter-spacing: 0.93px;
            margin-top: 11px;
          }
        }
        li:nth-last-child(1) {
          width: 90px;
          height: 0px;
        }
      }
    }
  }
  .btn-login {
    width: 100%;
    height: 47px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #354e44;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1.07px;
    line-height: 21px;
  }
}
</style>
