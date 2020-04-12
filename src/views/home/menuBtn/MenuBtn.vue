<template>
  <div class="menu-btn">
      <menu-btn-item v-for="item in menuData" :key="item"/>
  </div>
</template>

<script>
import MenuBtnItem from './MenuBtnItem'
export default {
    data(){
        return{
            menuData:[1,2,3,4,5,6,7,8]
        }
    },
    components:{
        MenuBtnItem
    }
}
</script>

<style>
.menu-btn{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>