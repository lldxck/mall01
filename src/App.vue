<template>
  <div id="app">
    <!-- <main-nav-bar/> -->
    <div class="contnetStyle">
      <router-view></router-view>
    </div>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import MainNavBar from 'components/content/mainNavBar/MainNavBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
    MainNavBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
.contnetStyle{
  margin-top: 44px;
  margin-bottom: 60px;
}
</style>
