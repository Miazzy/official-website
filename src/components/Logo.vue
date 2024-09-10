<template>
  <div class="logo">
    <img src="../assets/images/logo.jpeg" alt="">
  </div>
</template>
<script setup>
import {defineProps, toRefs} from 'vue'
const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false
  }
})
const { isTransparent } = toRefs(props)
</script>
<style lang="less" scoped>
.logo {
  margin: 5px 0 5px 0;
  img {
    width: 190px;
    height: auto;
  }
}
</style>
