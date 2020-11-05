<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: {}
    }
  },
  mounted() {
    // 不会看到请求，被拦截了，但是vue插件可以看到
    this.axios.get('/user/login').then((res) => {
      this.res = res;
    })
  },
}
</script>
<style>
@import './assets/scss/button.scss';
</style>
