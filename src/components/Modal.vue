<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="dialog"></div>
      <div class="modal-header"></div>
        <span>标题</span>
        <!-- javascript:; 防止跳转刷新 -->
        <a href="javascript:;" class="icon-close"></a>
      <div class="modal-body"></div>
        <slot name="body" />
      <div class="modal-footer"></div>
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn-default">取消</a>
        </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹窗类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹窗标题
    title: String,
    // 按钮类型 1：确定按钮，2：取消按钮，3：确认取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    // modal 是否展示出来
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';

</style>