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

<style lang="less">
@import './assets/css/reset.css';
// @import 'vant/lib/index.css';
@import '~@/assets/css/theme.less';
</style>


