<template>
  <div class="goods-list-item">
      <img :src="goodsListItem.show.img" alt="">
      <div class="item-info">
          <div class="title">{{goodsListItem.title}}</div>
          <span class="price">{{goodsListItem.price}}</span>
          <span class="collect">{{goodsListItem.cfav}}</span>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        goodsListItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }

}
</script>

<style>
.goods-list-item{
    width: 48%;
    /* border:1px solid #333; */
    padding-bottom: 10px;

}
.goods-list-item img{
    width: 100%;
    border-radius: 5px;
}
.item-info{
    text-align: center;
}
.title{
    font-size: 16px;
    color:#333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding:4px 3px;
}
.item-info span{
    font-size: 13px;
}
.price{
    color:var(--color-high-text)
}
.collect:before{
    content:'';
    width: 14px;
    height: 14px;
     background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    display: inline-block;
    

}
</style>