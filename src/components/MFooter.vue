<template>
   
</template>
<script setup>
import { onMounted } from 'vue';

const emit = defineEmits(['click']);

const handleClickDown = () => {
    emit('click');
}

onMounted(() => {

});
</script>
<style lang="less" scoped>

</style>