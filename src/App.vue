<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log('store', this.$store)
  }
}
</script>

<style lang="css">
@import './assets/css/reset.css';
</style>

