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
    const img = document.querySelector('.image-wrapper img.label');
    img.classList.add('flashing');
});
</script>
<style lang="less" scoped>
@import '@/assets/style/base.less';

.image-wrapper img {
    transition: all 0.3s ease;

    &.flashing {
        animation: flashing 0.5s ease infinite;
    }

    &:hover {
        animation: flashing 0.5s ease infinite;
    }
}

@keyframes flashing {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(5px);
        opacity: 0.5;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>