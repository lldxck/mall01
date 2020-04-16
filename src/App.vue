<template>
  <div id="app">
    <!-- <main-nav-bar/> -->

    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import MainNavBar from "components/content/mainNavBar/MainNavBar";

export default {
  name: "App",
  components: {
    MainTabBar,
    MainNavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
