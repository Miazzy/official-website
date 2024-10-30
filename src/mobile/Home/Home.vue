<template>
    <div class="container home flex-col">
        <!-- mobile-header -->
        <MHeader></MHeader>
        <!-- main-container -->
        <div class="max-content-container" :style="{ transform: contentTransform, transition: contentTransition }">
            <template v-for="(num, index) in loopNum" :key="`p-${index}`">
                <div class="main-container flex-col" >
                    <div class="bg-wrapper">
                        <img src="@/assets/images/home_mobile_01.png" />
                    </div>
                    <div class="page p01">
                        <!-- title-container -->
                        <div class="title-container flex-row">
                            <div class="text-wrapper flex-col justify-between">
                                <span class="title">{{ title[0] }}</span>
                                <span class="subtitle">{{ subTitle[0] }}</span>
                            </div>
                        </div>

                        <!-- line-container -->
                        <div class="line-container flex-row">
                            <div class="line flex-col"></div>
                        </div>

                        <!-- content-container -->
                        <div class="content-container flex-row">
                            <div class="box-wrapper flex-row">
                                <div class="button flex-row justify-between"
                                    @click="handleRoutePush('/mobile/aboutus')">
                                    <span class="button-text">了解更多</span>
                                    <img class="arrow arrow-right" src="../../assets/images/arrow_right_mobile.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-container flex-col">
                    <div class="bg-wrapper">
                        <img src="@/assets/images/home_mobile_02.png" />
                    </div>
                    <div class="page p02">
                        <!-- title-container -->
                        <div class="title-container flex-row">
                            <div class="text-wrapper flex-col justify-between">
                                <span class="title">{{ title[1] }}</span>
                                <span class="subtitle">{{ subTitle[1] }}</span>
                            </div>
                        </div>

                        <!-- content-container -->
                        <div class="content-container flex-row">
                            <div class="box-wrapper flex-row">
                                <div class="button flex-row justify-between"
                                    @click="handleRoutePush('/mobile/plans/operate')">
                                    <span class="button-text">了解更多</span>
                                    <img class="arrow arrow-right" src="../../assets/images/arrow_right_mobile.png" />
                                </div>
                            </div>
                        </div>

                        <!-- index-container -->
                        <div class="index-container">
                            <div class="index-wrapper flex-row">
                                <div class="index-text-wrapper  flex-col justify-between">
                                    <div class="index-text-box">
                                        <span class="text">40</span>
                                        <span class="text middle"></span>
                                        <span class="text mini">+个</span>
                                    </div>
                                    <span class="text-title">在运城市</span>
                                </div>
                                <div class="block-partition flex-col"></div>
                                <div class="index-text-wrapper flex-col justify-between">
                                    <div class="index-text-box right">
                                        <span class="text">40</span>
                                        <span class="text middle"></span>
                                        <span class="text mini">+座</span>
                                    </div>
                                    <span class="text-title">在运电站</span>
                                </div>
                            </div>
                            <div class="index-wrapper flex-row">
                                <div class="index-text-wrapper flex-col justify-between">
                                    <div class="index-text-box">
                                        <span class="text">4.27</span>
                                        <span class="text middle"></span>
                                        <span class="text mini">Gw+</span>
                                    </div>
                                    <span class="text-title">在运维总容量</span>
                                </div>
                                <div class="block-partition flex-col"></div>
                                <div class="index-text-wrapper flex-col justify-between">
                                    <div class="index-text-box">
                                        <span class="text">3032</span>
                                        <span class="text middle"></span>
                                        <span class="text mini">+天</span>
                                    </div>
                                    <span class="text-title">安全生产天数</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-container flex-col">
                    <div class="bg-wrapper">
                        <img src="@/assets/images/home_mobile_03.png" />
                    </div>
                    <div class="page p03">
                        <!-- title-container -->
                        <div class="title-container flex-row">
                            <div class="text-wrapper flex-col justify-between">
                                <span class="title">{{ title[2] }}</span>
                                <span class="subtitle">{{ subTitle[2] }}</span>
                            </div>
                        </div>

                        <!-- content-container -->
                        <div class="content-container flex-row">
                            <div class="box-wrapper flex-row">
                                <div class="button flex-row justify-between"
                                    @click="handleRoutePush('/mobile/plans/farm')">
                                    <span class="button-text">了解更多</span>
                                    <img class="arrow arrow-right" src="../../assets/images/arrow_right_mobile.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-container flex-col">
                    <div class="bg-wrapper">
                        <img src="@/assets/images/home_mobile_04.png" />
                    </div>
                    <div class="page p04">
                        <!-- title-container -->
                        <div class="title-container flex-row">
                            <div class="text-wrapper flex-col justify-between">
                                <span class="title">{{ title[3] }}</span>
                                <span class="subtitle">{{ subTitle[3] }}</span>
                            </div>
                        </div>

                        <!-- content-container -->
                        <div class="content-container flex-row">
                            <div class="box-wrapper flex-row">
                                <div class="button flex-row justify-between"
                                    @click="handleRoutePush('/mobile/plans/farm/intel')">
                                    <span class="button-text">了解更多</span>
                                    <img class="arrow arrow-right" src="../../assets/images/arrow_right_mobile.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <!-- mobile-copyright -->
        <MCopyright @click="handleClickDown"></MCopyright>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue";
import MHeader from "@/components/MHeader.vue";
import MCopyright from "@/components/MCopyright.vue";
import { useRouter } from 'vue-router'
import { setTimexec } from '@/utils/common';

const router = useRouter();

const title = ref([
    '渔光一体智能运营专家',
    '新能源电站智能运营方案',
    '智慧农业解决方案',
    '信息化解决方案',
]);
const subTitle = ref([
    'YU GUANG INTEGRATED INTELLIGENT OPERATION EXPERT',
    '专业化、智能化、一体化',
    '集约化、智能化、高效化',
    '平台化、多行业、一站式',
]);

const indexRef = ref(1);
const bgClassName = ref(`index-${indexRef.value}-bg`);
const bgAnimate = ref('animate-background');
const isMoveUp = ref(false);
const loopNum = 100;

const contentTransform = computed(() => `translateY(-${(indexRef.value + (loopNum * 4 - 1)) % (loopNum * 4) * 100}vh)`);
const contentTransition = computed(() => `${(indexRef.value + (loopNum * 4 - 1)) % (loopNum * 4) != 0 ? 'transform 0.8s ease-in-out' : 'none'}`);

const handleClickDown = () => {
    isMoveUp.value = false;
    indexRef.value = (indexRef.value + 1) % (loopNum * 4);
    bgClassName.value = indexRef.value === 1 ? `index-${indexRef.value}-bg` : `index-${indexRef.value}-bg normal-bg`;
}

const handleRoutePush = (path, y = 0) => {
    window.scrollTo(0, y);
    router.push(path);
    setTimexec(() => {
        window.scrollTo(0, y);
    }, [0, 50, 100]);
}

onMounted(() => {
    //
});

onBeforeUnmount(() => {
    //
});
</script>
<style scoped lang="less">
@import '@/assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.page {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 1;
}

.max-content-container {
    height: 400vh;
    transform: translateY(0);
    display: flex;
    flex-direction: column;
}

.main-container {
    height: 100vh;
    width: 100vw;

    &.normal-bg {
        .subtitle {
            width: 40.67vw !important;
            height: 3.87vw !important;
            font-size: 4vw !important;
            font-weight: 500 !important;
            line-height: 4vw !important;
            margin: 5.2vw 0 0 0 !important;
            opacity: 0.77 !important;
        }

        .content-container {
            margin: 6.25vh 0 0 5vw !important;
        }
    }

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
                font-family: Source Han Sans CN;
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
                font-family: Source Han Sans CN;
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
            height: 6.66vw;
            z-index: 10000;

            .button {
                width: 14.27vw;
                height: 6.66vw;
                margin: 0 0 0 4vw;
            }

            .button-text {
                width: 11.2vw;
                height: 6.66vw;
                overflow-wrap: break-word;
                color: #ffffff;
                font-size: 2.8vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 6.66vw;
            }

            .arrow-right {
                width: 1.45vw;
                height: 2.2vw;
                margin-top: 2.2vw;
            }
        }
    }
}

.bg-wrapper {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;

    &.down {
        top: 100vh;
    }

    img {
        width: auto;
        height: 100vh;
        object-fit: cover;
    }
}

.index-container {
    margin: 5vh 0 0 0;

    .index-wrapper {
        width: 55.34vw;
        height: 12vw;
        margin: 18.4vw 0 0 17.46vw;

        .index-text-wrapper {
            width: 18vw;
            height: 12vw;

            .index-text-box {
                width: 16vw;
                height: 6.27vw;
                overflow-wrap: break-word;
                font-size: 0;
                font-family: SourceHanSansCN-Bold;
                font-weight: 700;
                text-align: left;
                white-space: nowrap;
                line-height: 6.27vw;

                .text {
                    width: 16vw;
                    height: 6.27vw;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 7.86vw;
                    font-family: SourceHanSansCN-Bold;
                    font-weight: 700;
                    text-align: left;
                    line-height: 2.67vw;

                    &.middle {
                        margin-left: 5px;
                    }

                    &.mini {
                        font-size: 3.06vw;
                    }
                }

                &.right {
                    width: 16vw;
                }

            }

            .text-title {
                width: 12.8vw;
                height: 3.2vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 3.06vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 3.07vw;
                margin-top: 2.54vw;
            }

            &:last-child {
                width: 15.87vw;
                height: 12vw;
                margin-left: 7.34vw;
            }
        }

        .block-partition {
            background-color: rgba(255, 255, 255, 0.6);
            width: 0.45vw;
            height: 6.8vw;
            margin: 0 0 0 15.86vw;
        }

        &:last-child {
            width: 64.94vw;
            height: 12.14vw;
            margin: 8.66vw 0 0 17.46vw;
        }
    }
}
</style>