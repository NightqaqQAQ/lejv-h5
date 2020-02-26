<template>
  <div id="app">
    <transition :enter-active-class="currentClass">
      <router-view />
    </transition>
    <FooterBar v-if="$route.meta.isFooterBar"></FooterBar>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar";
export default {
  components: {
    FooterBar
  },
  data() {
    return {
      currentClass: ""
    };
  },
  watch: {
    "$route": function(to, from) {
      var old = from.path.split("/").length;
      var current = to.path.split("/").length;
      // if (current > old) {
      //   this.currentClass = "animated fadeInRight";
      // } else if (current == old) {
        this.currentClass = "animated fadeIn";
      // } else {
      //   this.currentClass = "animated fadeInLeft";
      // }
    }
  }
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
