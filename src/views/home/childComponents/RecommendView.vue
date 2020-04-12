<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style>
.recommend{
    display: flex;
}
.recommend-item{
    flex:1;
    text-align: center;
    padding:10px 0 20px;
    font-size: 16px;
    border-bottom: 10px solid #eee;

}
.recommend-item img{
    width: 68px;
    height: 68px;
    vertical-align: middle;
    margin-bottom: 10px;
}
</style>