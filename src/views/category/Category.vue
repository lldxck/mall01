<template>
  <div>
      <h2>分类</h2>
  </div>
</template>

<script>
export default {
     created(){
        this.$store.commit('changeTitleName','分类')
    }
}
</script>

<style>

</style>