<template>
  <div>
     <div class="goods">
       <goods-list-item v-for="item in listData" :key="item"/>
     </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  data(){
    return{
      listData:[1,2,3,4,5,6,7,8,9,10]
    }
  },
  components:{
    GoodsListItem
  }

}
</script>

<style>
.goods{
  background-color: green;
  display: flex;
  justify-content: space-around;
 flex-wrap: wrap;
}
</style>