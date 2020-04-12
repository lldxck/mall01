<template>
  <div id="nav-bar">
      <div class="left">
          <slot name="nav-bar-left"></slot>
      </div>
      <div class="center">
          <slot name="nav-bar-center"></slot>
      </div>
      <div class="right">
          <slot name="nav-bar-rights"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav-bar{
    height:44px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    font-size: 24px;
}
.left,.right{
    width: 60px;
}
.center{
    height:44px;
    line-height: 44px;
    flex:1;
    text-align: center;
    
}
</style>