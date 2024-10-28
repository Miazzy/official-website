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
            <div class="box-wrapper flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">智能料塔投喂系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span class="paragraph-title description">流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。<br /></span>
                </div>
                <div class="box-content-wrapper flex-row justify-between">
                    <div class="box-content flex-col justify-between">
                        <div class="tbox-content-wrapper flex-col">
                            <span class="box-content-title">系统功能</span>
                        </div>
                        <div class="box-content-section flex-row">
                            <div class="box-content-image-wrapper flex-col justify-between">
                                <img class="thumbnail" src="@/assets/images/arrow-grey-right.png" />
                                <img class="thumbnail margin" src="@/assets/images/arrow-grey-right.png" />
                                <img class="thumbnail margin" src="@/assets/images/arrow-grey-right.png" />
                            </div>
                            <span class="paragraph">本地控制投喂<br />远程控制投喂<br />定时投喂设定</span>
                            <div class="box-content-image-wrapper right flex-col justify-between">
                                <img class="thumbnail" src="@/assets/images/arrow-grey-right.png" />
                                <img class="thumbnail margin" src="@/assets/images/arrow-grey-right.png" />
                                <img class="thumbnail margin" src="@/assets/images/arrow-grey-right.png" />
                            </div>
                            <span class="paragraph right">智能投喂模型<br />投喂速率控制<br />投喂数据记录</span>
                        </div>
                    </div>
                    <div class="box-block-image flex-col"></div>
                </div>
                <img class="box-bottom-image" src="@/assets/images/intel_222_05.png" />
            </div>

            <div class="box-wrapper box-two flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">智能机器人投喂系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span class="paragraph-title description">定时、定点、定量<br /></span>
                </div>
                <div class="box-content-wrapper box-two-group flex-row justify-between">
                    <div class="left flex-col"></div>
                    <div class="right flex-col" src=""></div>
                </div>
            </div>

            <div class="box-wrapper box-three flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">多级运维平台<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span
                        class="paragraph-title description">实时展示养殖水体的水质指标和视频影像，保证整个养殖园区24小时内处于监护状态，避免财产损失和保障人员安全。<br /></span>
                </div>
                <div class="box-content-wrapper box-three-group flex-row justify-between">
                    <div class="left flex-col"></div>
                    <div class="right flex-col"></div>
                </div>
            </div>

            <div class="box-wrapper box-four flex-col">
                <div class="box-group-wrapper flex-col">
                    <div class="box-group flex-col"></div>
                </div>
                <div class="box-text-wrapper">
                    <span class="paragraph-title">养殖ERP系统<br /></span>
                    <span class="paragraph-title space"><br /></span>
                    <span
                        class="paragraph-title description">养渔家——主要实现人、财、物、产、供、销的管理，实现实时、动态的成本管理；实现养殖计划的管理和周期的管理。<br /></span>
                </div>
                <div class="box-content-wrapper box-four-group flex-row justify-between">
                    <div class="left flex-col"></div>
                    <div class="right flex-col"></div>
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

const title = ref('智能化养殖系统');
const subTitle = ref('INTELLIGENT AQUACULTURE SYSTEM');

</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 387.2vw;
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

    .box-wrapper {
        width: 100vw;
        height: 116vw;
    
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
    
            &.box-two-group {
                width: 89.34vw;
                height: 28vw;
                margin: 5.33vw 0 8.4vw 5.33vw;
    
                .left {
                    width: 37.6vw;
                    height: 28vw;
                    background: url('@/assets/images/intel_222_02.png');
                    background-size: 100% 100%;
                }
    
                .right {
                    width: 50.4vw;
                    height: 28vw;
                    background: url('@/assets/images/intel_222_04.png');
                    background-size: 100% 100%;
                }
            }
    
            &.box-three-group {
                width: 89.47vw;
                height: 26vw;
                margin: 9.2vw 0 8.53vw 5.2vw;
    
                .left {
                    width: 44vw;
                    height: 25vw;
                    background: url('@/assets/images/intel_222_03.png');
                    background-size: 100% 100%;
                }
    
                .right {
                    width: 44vw;
                    height: 25vw;
                    background: url('@/assets/images/intel_222_01.png');
                    background-size: 100% 100%;
                }
            }
    
            &.box-four-group {
                width: 89.47vw;
                height: 26vw;
                margin: 9.2vw 0 8.53vw 5.2vw;
    
                .left {
                    width: 44vw;
                    height: 25vw;
                    background: url('@/assets/images/intel_222_07.png');
                    background-size: 100% 100%;
                }
    
                .right {
                    width: 44vw;
                    height: 25vw;
                    background: url('@/assets/images/intel_222_06.png');
                    background-size: 100% 100%;
                }
            }
        }
    
        &.box-two {
            background-color: rgba(247, 247, 247, 1);
            height: 66.54vw;
            margin-top: -0.13vw;
            width: 100vw;
            justify-content: flex-center;
        }
    
        &.box-three {
            width: 100vw;
            height: 70vw;
            justify-content: flex-center;
        }
    
        &.box-four {
            background-color: rgba(247, 247, 247, 1);
            width: 100vw;
            height: 68vw;
            margin-top: -0.13vw;
            justify-content: flex-center;
        }
    
        .box-bottom-image {
            width: 89.34vw;
            height: 41.87vw;
            margin: 1.2vw 0 8.66vw 5.33vw;
        }
    }
}
</style>