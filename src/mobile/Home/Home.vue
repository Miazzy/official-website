<template>
    <div class="container home flex-col">
        <!-- mobile-header -->
        <MHeader></MHeader>
        <!-- main-container -->
        <div class="main-container flex-col" :class="bgClassName">
            <template v-if="indexRef === 1">
                <!-- title-container -->
                <div class="title-container flex-row">
                    <div class="text-wrapper flex-col justify-between">
                        <span class="title">{{ title }}</span>
                        <span class="subtitle">{{ subTitle }}</span>
                    </div>
                </div>

                <!-- line-container -->
                <div class="line-container flex-row">
                    <div class="line flex-col"></div>
                </div>

                <!-- content-container -->
                <div class="content-container flex-row">
                    <div class="box-wrapper flex-row">
                        <div class="button flex-row justify-between">
                            <span class="button-text">了解更多</span>
                            <img class="arrow arrow-right" src="../../assets/images/arrow_right_mobile.png" />
                        </div>
                    </div>
                </div>
            </template>
            <template v-if="indexRef === 2">

            </template>
            <template v-if="indexRef === 3">

            </template>
            <template v-if="indexRef === 4">

            </template>
            <template v-if="indexRef === 5">

            </template>
        </div>
        <!-- mobile-copyright -->
        <MCopyright @click="handleClickDown"></MCopyright>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MHeader from "@/components/MHeader.vue";
import MCopyright from "@/components/MCopyright.vue";

const title = ref('渔光一体智能运营专家');
const subTitle = ref('YU GUANG INTEGRATED INTELLIGENT OPERATION EXPERT');

const indexRef = ref(1);
const bgClassName = ref(`index-${indexRef.value}-bg`);

const handleClickDown = () => {
    indexRef.value = (indexRef.value + 1) % 4;
    bgClassName.value = `index-${indexRef.value}-bg`;
}

onMounted(() => {
    //
});

onBeforeUnmount(() => {
    //
});
</script>
<style scoped lang="less">
@import '../../assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.main-container {
    height: 100vh;
    width: 100vw;

    &.index-1-bg {
        background: url('../../assets/images/home_mobile_01.jpg') 0 0 no-repeat;
        background-size: 100% 100%;

        .title-container {
            width: 79.87vw;
            height: 13.47vw;
            margin: 25vh 0 0 5.2vw;

            .text-wrapper {
                width: 79.87vw;
                height: 13.47vw;

                .title {
                    text-shadow: 0px 5px 5px rgba(151, 185, 213, 0.5);
                    width: 79.74vw;
                    height: 7.74vw;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 8vw;
                    font-family: SourceHanSansCN-Bold;
                    font-weight: 700;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 8vw;
                    margin-left: 0.14vw;
                }

                .subtitle {
                    text-shadow: 0px 5px 5px rgba(151, 185, 213, 0.5);
                    width: 79.07vw;
                    height: 2.27vw;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 2.93vw;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: normal;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 2.94vw;
                    margin-top: 3.47vw;
                }
            }
        }


        .line-container {
            width: 16.14vw;
            height: 0.8vw;
            margin: 3.85vh 0 0 5.33vw;

            .line {
                background-color: rgba(255, 255, 255, 1);
                border-radius: 2px;
                width: 16.14vw;
                height: 0.8vw;
            }
        }


        .content-container {
            width: 22.4vw;
            height: 3.1vh;
            margin: 4.75vh 0 0 5vw;

            .box-wrapper {
                background-color: rgba(221, 120, 22, 1);
                width: 22.4vw;
                height: 6.67vw;

                .button {
                    width: 14.27vw;
                    height: 2.8vw;
                    margin: 1.86vw 0 0 4vw;
                }

                .button-text {
                    width: 11.2vw;
                    height: 3vw;
                    overflow-wrap: break-word;
                    color: #ffffff;
                    font-size: 2.8vw;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: normal;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 3vw;
                }

                .arrow-right {
                    width: 1.47vw;
                    height: 2.14vw;
                    margin-top: 0.27vw;
                }
            }
        }
    }

    &.index-2-bg {
        background: url('../../assets/images/home_mobile_02.jpg') 0 0 no-repeat;
        background-size: 100% 100%;
    }

    &.index-3-bg {
        background: url(../../assets/images/home_mobile_03.jpg) 0 0 no-repeat;
        background-size: 100% 100%;
    }

    &.index-0-bg {
        background: url('../../assets/images/home_mobile_04.jpg') 0 0 no-repeat;
        background-size: 100% 100%;
    }
}
</style>