<template>
    <!-- header-container -->
    <div class="header-container header-wrapper flex-row justify-between">
        <img class="image logo-image logo" src="../assets/images/logo.jpeg" />
        <img class="label setup-image" src="../assets/images/label.png" @click="handleClick"/>
    </div>

    <!-- menu-box -->
    <div v-if="isMenuShow" class="menu-box flex-col">
        <div class="menu-wrapper">
            <span class="paragraph active ">
                <span @click="handleRoutePush('/mobile/home')">首页</span>
                <br />
            </span>
            <span class="paragraph grey">
                <span @click="handleRoutePush('/mobile/plans/operate')">智能运营</span>
                <br />
                <span @click="handleRoutePush('/mobile/plans/farm')">智慧农业</span>
                <br />
                <span @click="handleRoutePush('/mobile/cases')">项目案例</span>
                <br />
                <span @click="handleRoutePush('/mobile/inform')">资讯中心</span>
                <br />
                <span @click="handleRoutePush('/mobile/aboutus')">关于我们</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { MsgManager } from "@/manager/MsgManager";
import { setTimexec } from '@/utils/common';

const router = useRouter();
const isMenuShow = ref(false);
const emit = defineEmits(['popup']);

const handleClick = () => {
    isMenuShow.value = !isMenuShow.value;
    emit('popup');
}

const handleRoutePush = () => {
    window.scrollTo(0, y);
  router.push(path);
  setTimexec(() => {
    window.scrollTo(0, y);
  }, [0, 50, 100]);
}

onMounted(() => {
    MsgManager.getInstance().listen('mobileclick', (message) => {

    });
});
</script>
<style lang="less" scoped>
@import '../assets/style/common.css';
@import '../assets/style/base.less';

.menu-box {
    position: absolute;
    background-color: rgba(247, 247, 247, 0.96);
    height: 62.54vw;
    width: 89.47vw;
    margin: 12.8vw 0 0 5.2vw;

    .menu-wrapper {
        width: 30.8vw;
        height: 52.14vw;
        overflow-wrap: break-word;
        font-size: 0;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: center;
        line-height: 8.5vw;
        margin: 10px auto;
    
        .paragraph {
            width: 16.8vw;
            height: 52.14vw;
            overflow-wrap: break-word;
            font-size: 4.26vw;
            font-family: SourceHanSansCN-Bold;
            text-align: left;
            line-height: 8vw;
        
            &.active {
                color: rgba(221, 120, 22, 1);
                font-weight: blod;
            }
        
            &.grey {
                color: rgba(51, 51, 51, 1);
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
            }
        }
    }
}
</style>