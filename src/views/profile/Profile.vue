<template>
  <div>
      <h2>我的</h2>
  </div>
</template>

<script>
export default {
     created(){
        this.$store.commit('changeTitleName','我的')
    }
}
</script>

<style>

</style>