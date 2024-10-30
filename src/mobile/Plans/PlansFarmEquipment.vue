<template>
    <div class="container flex-col">
        <!-- mobile-header -->
        <MHeader></MHeader>
        <!-- title-container -->
        <div class="title-container flex-col">
            <div class="title-wrapper flex-row">
                <div class="title-wrapper-text flex-col justify-between">
                    <span class="text-title">{{ title }}</span>
                    <span class="text-descript">{{ subTitle }}</span>
                </div>
            </div>
        </div>
        <!-- main-container -->
        <div class="main-container">
            <div class="box-wrapper box-one flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">池塘内循环养殖系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span
                        class="paragraph-title description">流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。<br /></span>
                </div>
                <div class="box-content-wrapper box-one-group flex-row justify-between">
                    <div class="left flex-col"></div>
                    <div class="right flex-col"></div>
                </div>
            </div>

            <div class="box-wrapper box-two flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">陆基高位池养殖系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                </div>
                <div class="box-content-wrapper box-two-group flex-row justify-between">
                    <div class="left flex-col"></div>
                    <div class="middle flex-col"></div>
                    <div class="right flex-col"></div>
                </div>
            </div>

            <div class="box-wrapper box-three flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">工厂化车间养殖系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span
                        class="paragraph-title description">无人值守模式 实现对整个工厂化智能养殖进行数据采集、指令调度和流程控制，诊断告警功能，软硬件共同调度，实现报警功能和流程控制包<br /></span>
                </div>
                <div class="box-content-wrapper box-three-group flex-row justify-between">
                    <div class="left flex-col"></div>
                </div>
            </div>
        </div>
        <!-- mobile-footer -->
        <MFooter></MFooter>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";

const title = ref('设施化养殖系统');
const subTitle = ref('SETUP AQUACULTURE SYSTEM');

</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 287vw;
    overflow: hidden;
}

.title-container {
    background: url('../../assets/images/mobile_plans_bg_01.png') 100% no-repeat;
    background-size: 100% 100%;
    height: 42.27vw;
    width: 100vw;

    .title-wrapper {
        width: 67.6vw;
        height: 11.47vw;
        margin: 21.4vw 0 23.86vw 17.33vw;

        .title-wrapper-text {
            width: 67.6vw;
            height: 11.47vw;

            .text-title {
                text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
                width: 67.6vw;
                height: 6.4vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 6.53vw;
                font-family: SourceHanSansCN-Bold;
                font-weight: 700;
                text-align: center;
                white-space: nowrap;
                line-height: 6.54vw;
            }

            .text-descript {
                text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
                width: 56.94vw;
                height: 2.4vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 2.26vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: center;
                white-space: nowrap;
                line-height: 2.27vw;
                margin: 2.66vw 0 0 5.2vw;
            }
        }
    }
}

.main-container {
    background: #fefefe;
    z-index: 1000;
    height: 219.8vw;

    .box-wrapper {
        width: 100vw;
        height: 80vw;

        &.box-one {
            height: 72vw;
        }

        .box-group-wrapper {
            background-color: rgba(67, 164, 56, 0.34);
            height: 0.54vw;
            width: 28.4vw;
            margin: 6.4vw 0 0 5.33vw;

            .box-group {
                background-color: rgba(67, 164, 56, 1);
                width: 6.4vw;
                height: 0.54vw;
            }
        }


        .box-text-wrapper {
            width: 89.34vw;
            height: 19.2vw;
            overflow-wrap: break-word;
            font-size: 0;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: left;
            line-height: 5.07vw;
            margin: 1.86vw 0 0 5.33vw;

            .paragraph-title {
                width: 89.34vw;
                height: 19.2vw;
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 3.46vw;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                line-height: 5.07vw;

                &.space {
                    height: 12.2vw;
                    line-height: 0vw;
                }

                &.description {
                    height: 5.34vw;
                    color: rgba(102, 102, 102, 1);
                    font-size: 3.06vw;
                    font-family: SourceHanSansCN-Normal;
                    line-height: 5.34vw;
                }
            }

        }

        .box-content-wrapper {
            width: 89.2vw;
            height: 30.94vw;
            margin: 8.33vw 0 0 5.33vw;

            .box-content {
                width: 41.87vw;
                height: 24.27vw;

                .tbox-content-wrapper {
                    background-color: rgba(67, 164, 56, 0.154);
                    height: 6.14vw;
                    border: 1px solid rgba(67, 164, 56, 0.7);
                    width: 41.87vw;

                    .box-content-title {
                        width: 10.54vw;
                        height: 2.67vw;
                        overflow-wrap: break-word;
                        color: rgba(51, 51, 51, 1);
                        font-size: 2.53vw;
                        font-family: SourceHanSansCN-Bold;
                        font-weight: 700;
                        text-align: center;
                        white-space: nowrap;
                        line-height: 2.67vw;
                        margin: 1.6vw 0 0 15.6vw;
                    }
                }

                .box-content-section {
                    width: 39.47vw;
                    height: 14.27vw;
                    margin: 3.86vw 0 0 0.93vw;

                    .box-content-image-wrapper {
                        width: 1.2vw;
                        height: 13.87vw;
                        margin-top: 0.27vw;

                        &.right {
                            margin: 0.26vw 0 0 8.4vw;

                            .thumbnail_4 {
                                width: 1.07vw;
                                height: 1.87vw;
                                margin-left: 0.14vw;
                            }

                            .thumbnail_5 {
                                width: 1.07vw;
                                height: 1.87vw;
                                margin-top: 4.14vw;
                            }

                            .thumbnail_6 {
                                width: 1.07vw;
                                height: 1.87vw;
                                margin-top: 4.14vw;
                            }
                        }

                        .thumbnail {
                            width: 1.07vw;
                            height: 1.87vw;
                            margin-left: 0.14vw;

                            &.margin {
                                margin-top: 4.14vw;
                            }
                        }
                    }

                    .paragraph {
                        width: 13.07vw;
                        height: 6.14vw;
                        overflow-wrap: break-word;
                        color: #777777;
                        font-size: 2vw;
                        font-family: SourceHanSansCN-Regular;
                        font-weight: normal;
                        text-align: left;
                        line-height: 6vw;
                        margin: -1.8vw 0 0 1.33vw;

                        &.right {
                            height: 14.14vw;
                            margin-left: 1.2vw;
                            margin-top: -1.8vw;
                        }
                    }
                }
            }

            .box-block-image {
                background-color: rgba(204, 204, 204, 1);
                width: 46vw;
                height: 30.94vw;
                background: url('@/assets/images/intel_221_07.png');
                background-size: 100% 100%;
            }

            &.box-one-group {
                width: 89.34vw;
                height: 28vw;
                margin: 7.22vw 0 8.4vw 5.33vw;

                .left {
                    width: 44vw;
                    height: 28vw;
                    background: url('@/assets/images/intel_221_04.png');
                    background-size: 100% 100%;
                }

                .right {
                    width: 44vw;
                    height: 28vw;
                    background: url('@/assets/images/intel_221_05.png');
                    background-size: 100% 100%;
                }
            }

            &.box-two-group {
                width: 89.34vw;
                height: 22.8vw;
                margin: -6.33vw 0 8.4vw 5.33vw;

                .left {
                    width: 26vw;
                    height: 22.8vw;
                    background: url('@/assets/images/intel_221_03.png');
                    background-size: 100% 100%;
                }

                .middle {
                    width: 26vw;
                    height: 22.8vw;
                    background: url('src/assets/images/intel_221_02.png');
                    background-size: 100% 100%;
                }

                .right {
                    width: 35vw;
                    height: 22.8vw;
                    background: url('@/assets/images/intel_221_01.png');
                    background-size: 100% 100%;
                }
            }

            &.box-three-group {
                width: 89.47vw;
                height: 35vw;
                margin: 14.2vw 0 8.53vw 5.2vw;

                .left {
                    width: 88vw;
                    height: 35vw;
                    background: url('@/assets/images/intel_221_10.png');
                    background-size: 100% 100%;
                }
            }
        }

        &.box-two {
            background-color: rgba(247, 247, 247, 1);
            height: 54.54vw;
            margin-top: -0.13vw;
            width: 100vw;
            justify-content: flex-center;
        }

        &.box-three {
            width: 100vw;
            height: 70vw;
            justify-content: flex-center;
        }
    }
}
</style>