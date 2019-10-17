<template>
  <div class="demo">
    demo页
    <div>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>

    <div class="mt-30">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Button, Field, Cell, CellGroup } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


