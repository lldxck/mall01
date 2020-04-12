<template>
  <div>
      <h2>购物车</h2>
  </div>
</template>

<script>
export default {
     created(){
        this.$store.commit('changeTitleName','购物车')
    }
}
</script>

<style>

</style>