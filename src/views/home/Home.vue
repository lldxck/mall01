<template>
  <div class="home">
    <!-- <h2>首页</h2> -->
    <!-- <menu-btn/> -->
    <!-- <goods-list /> -->

    <nav-bar class="home-nav">
      <div slot="nav-bar-center">首页</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goodsList="goods[currentGoodsType].list"/>

   
  </div>
</template>

<script>
// import GoodsList from "./goods/GoodsList.vue";
import MenuBtn from "./menuBtn/MenuBtn";

import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goods/GoodsList';

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import { getHomeMultidata, getHomeGoodsData } from "network/home.js";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoodsType:'pop'
    };
  },
  components: {
    MenuBtn,
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    // this.$store.commit("changeTitleName", "首页");
    this.getHomeMultidata();
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      const page=this.goods[type].page +1;
      getHomeGoodsData(type,page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1
      });
    },
    tabClick(index){
      // console.log(index)
      switch(index){
        case 0:
          this.currentGoodsType = 'pop'
          break;
        case 1:
          this.currentGoodsType = 'new'
          break;
        case 2:
          this.currentGoodsType = 'sell'
          break;
      }
    }
  }
};
</script>

<style>
.home{
  padding:44px 0 49px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 10;
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>