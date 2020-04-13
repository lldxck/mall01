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
    <feature-view />
    <tab-control :titles="titles" class="tab-control"/>


    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
import GoodsList from "./goods/GoodsList.vue";
import MenuBtn from "./menuBtn/MenuBtn";

import NavBar from "components/common/navBar/NavBar";
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'

import {getHomeMultidata} from 'network/home.js'

export default {
  data() {
    return {
      banner:[],
      recommend:[],
      titles:['流行','新款','精选']
    };
  },
  components: {
    GoodsList,
    MenuBtn,
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
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
  z-index: 10;
}
.tab-control{
  position: sticky;
  top:44px;
}
</style>