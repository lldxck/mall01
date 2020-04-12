<template>
  <div>
    <!-- <h2>首页</h2> -->
    <!-- <menu-btn/> -->
    <!-- <goods-list /> -->

    <nav-bar class="home-nav">
      <div slot="nav-bar-center">首页</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend" />
  </div>
</template>

<script>
import GoodsList from "./goods/GoodsList.vue";
import MenuBtn from "./menuBtn/MenuBtn";

import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'

import {getHomeMultidata} from 'network/home.js'

export default {
  data() {
    return {
      banner:[],
      recommend:[]
    };
  },
  components: {
    GoodsList,
    MenuBtn,
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    // this.$store.commit("changeTitleName", "首页");
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner=res.data.banner.list
      this.recommend=res.data.recommend.list

    })
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color:#fff;
}
</style>