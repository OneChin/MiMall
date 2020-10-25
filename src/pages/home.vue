<template>
  <div>    
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import NavHeader from '../components/NavHeader.vue'
export default {
}
</script>