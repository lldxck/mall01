<template>
  <nav-bar>
      <div slot='nav-bar-center'>
          {{$store.state.titleName}}
      </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
    components:{
        NavBar
    }

}
</script>

<style>

</style>