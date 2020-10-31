<template>
  <div>    
    <order-header />
    <router-view></router-view>
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from '../components/orderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  components: {
    OrderHeader, NavFooter
  }
}
</script>