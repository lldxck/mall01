<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="index" :class="{active:index == currentIndex}" @click="tabContronItemClick(index)">
          <span>{{item}}</span>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        tabContronItemClick(index){
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    }

}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
    font-size: 16px;
    height:40px;
    line-height: 40px;
}
.tab-control-item{
    flex:1
}
.tab-control-item span{
    padding: 5px 3px;
}
.active{
    color:var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-tint);
}
</style>