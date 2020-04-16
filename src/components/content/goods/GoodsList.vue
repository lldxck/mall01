<template>
  <div class="goods-list">

      <goods-list-item v-for="(item,index) in goodsList" :key="index" :goodsListItem="item"/>

  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>