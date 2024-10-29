<template>
    <!-- header-container -->
    <div class="header-container header-wrapper flex-row justify-between">
        <img class="image logo-image logo" src="../assets/images/logo.png" />
        <img class="label setup-image" src="../assets/images/label.png" @click="handleClick" />
    </div>

    <!-- 全屏遮罩 -->
    <div v-if="isMenuShow" class="menu-box full-screen-mask"></div>

    <!-- menu-box -->
    <div v-if="isMenuShow" class="menu-box flex-col">
        <div class="menu-wrapper">
            <span class="paragraph grey">
                <span class="item" :class="{ active: cpath === PathEnum.Home }" @click="handleRoutePush(PathEnum.Home)">首页</span>
            </span>
            <span class="paragraph grey">
                <span class="item" :class="{ active: cpath.includes(PathEnum.Operate) }" @click="handleRoutePush(PathEnum.Operate)">智能运营</span>
                <span class="item" :class="{ active: cpath.includes(PathEnum.Farm) }" @click="handleRoutePush(PathEnum.Farm)">智慧农业</span>
                <span class="item" :class="{ active: cpath.includes(PathEnum.Cases) }" @click="handleRoutePush(PathEnum.Cases)">项目案例</span>
                <span class="item" :class="{ active: cpath.includes(PathEnum.Inform) }" @click="handleRoutePush(PathEnum.Inform)">资讯中心</span>
                <span class="item" :class="{ active: cpath.includes(PathEnum.Aboutus) }" @click="handleRoutePush(PathEnum.Aboutus)">关于我们</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import { MsgManager } from "@/manager/MsgManager";
import { setTimexec } from '@/utils/common';
import { PathEnum } from '@/constant/constant';

const router = useRouter();
const isMenuShow = ref(false);
const emit = defineEmits(['popup']);
const cpath = ref('/mobile/home');

const handleClick = () => {
    isMenuShow.value = !isMenuShow.value;
    emit('popup');
}

const handleRoutePush = (path, y = 0) => {
    window.scrollTo(0, y);
    cpath.value = path;
    router.push(path);
    setTimexec(() => {
        window.scrollTo(0, y);
    }, [0, 50, 100]);
}

onMounted(() => {
    cpath.value = window.location.hash.replace('#/', '/');
    MsgManager.getInstance().listen('mobileclick', (message) => {
        const { className } = message;
        if (className.includes('setup-image')) {
            return;
        } else {
            nextTick(() => {
                isMenuShow.value = false;
            });
        }
    });
    MsgManager.getInstance().listen('mobilemove', (message) => {
        nextTick(() => {
            isMenuShow.value = false;
        });
    });
});
</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';
@import '@/assets/style/base.less';
</style>