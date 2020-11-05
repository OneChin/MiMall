<template>
  <div>    
    <a>index</a>
  <modal
    title="提示"
    sureText="查看购物车"
    btnTyep="1"
    modalType="middle"
    :showModal="true"
  >
    <template v-slot:body>
      <p>商品添加成功</p>
    </template>
  </modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'
export default {
  name: 'index',
  components: {
    Modal
  }
}
</script>