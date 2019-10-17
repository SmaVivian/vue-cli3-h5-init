<template>
  <div class="cmp-header">
    <h1>这是头部</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.cmp-header {
  width: 100%;
  height: @headerHeight;
  line-height: @headerHeight;
  padding-left: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #404560;
  color: #fff;
}
</style>


