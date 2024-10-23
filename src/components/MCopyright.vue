<template>
    <!-- footer-container -->
    <div class="footer-container">
        <div class="image-wrapper flex-row" @click="handleClickDown">
            <img class="label" src="../assets/images/arrow_down_mobile.png" />
        </div>
        <div class="text-wrapper flex-row">
            <span class="text">Copyright ©渔光物联(www.ygwl.net) &nbsp; | &nbsp; 蜀ICP备16026089号</span>
        </div>
    </div>
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
@import '../assets/style/base.less';
</style>