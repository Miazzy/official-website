<template>
    <div class="container flex-col">
        <div class="section flex-col justify-between">
            <div class="header-banner flex-col">
                <div class="header-content flex-col">
                    <div class="title-section flex-col">
                        <div class="title-header flex-row">
                        </div>
                        <div class="main-title flex-row">
                            <span class="title-text">{{ title }}</span>
                        </div>
                        <div class="subtitle flex-row">
                            <span class="subtitle-text">{{ subTitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-section flex-col">
                <div class="description flex-col">
                    <img class="description-image" 
                        src="../../assets/images/intel_211_02.png" />
                    <span class="description-text">平台功能</span>
                </div>
                <img class="icon-arrow" 
                    src="../../assets/images/arrow-orange-down-one.png" />
                <img class="icon-arrow-two" 
                    src="../../assets/images/arrow-orange-down-two.png" />
                <template v-for="(item, index) in data" :key="index" >
                    <template v-if="index % 2 == 0">
                        <div class="flex-row" :class="`content-section-${index + 1}`">
                            <div class="text-wrapper flex-col justify-between">
                                <span class="text text-title">{{ item.title }}</span>
                                <span class="text text-detail">{{ item.detail }}</span>
                            </div>
                            <img class="image"  :src="item.src" />
                        </div>
                    </template>
                    <template v-if="index % 2 == 1">
                        <div class="flex-row justify-between" :class="`content-section-${index + 1}`">
                            <img class="image"  :src="item.src" />
                            <div class="text-wrapper flex-col justify-between">
                                <span class="text text-title">{{ item.title }}</span>
                                <span class="text text-detail">{{ item.detail }}</span>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import { MsgManager } from "@/manager/MsgManager";
import { getImgUrl } from '@/utils/common';

const baseWidth = 1920; // 基准宽度
const baseHeight = 4954;
const containerHeight = ref(baseHeight);

const title = ref('智能光伏集中运维系统');
const subTitle = ref('Intelligent photovoltaic operation and maintenance');
const data = ref([
    {
        title: '1、7*24小时全站远程实时监测',
        detail: '电站智能运维管理平台可以帮助用户进行7*24小时全站远程实时监控，记录所有电力设备（光伏区、升压站、储能）的运行信息和状态（遥测、遥信等），帮助管理人员提升设备巡检效率。',
        src: getImgUrl('intel_211_01.png'),
    },
    {
        title: '2、集中管理电站设备告警',
        detail: '电站智能运维管理平台可以集中管理各个电站光伏区设备、升压站设备、储能系统的告警情况。通过对告警的分类统计，用户可以一目了然掌握当前电站告警集中发生的部分，基于告警创建工单，形成对每个问题的跟踪闭环管理。',
        src: getImgUrl('intel_211_03.png'),
    },
    {
        title: '3、图形化管理直观反映电力系统运行情况',
        detail: '平台将系统运行数据与主接线图、子阵图等相关联，可以更加直观的反映电力系统运行情况，确定设备故障问题点。',
        src: getImgUrl('intel_211_04.png'),
    },
    {
        title: '4、电站生产过程全闭环管理',
        detail: '智能运维管理平台将生产过程分成电量管理、考核管理、两票管理、安全管理、工单管理、巡检管理等多个模块进行全面的管控，借助系统实现全流程闭环管理，让电站日常运维生产过程规范化、指标化、透明化，从而提升电站的运营管理效率。',
        src: getImgUrl('intel_211_05.png'),
    },
    {
        title: '5、无人机机场+AI分析实现全自动化故障巡检',
        detail: '智能运维管理平台可以接入无人机机场，对发生告警的子阵、组串可以让无人机一键起飞巡检特定区域，完成巡检后，由AI分析系统自动完成对无人机拍摄的可见光和红外光图像的自动分析，确认具体故障组件，故障类型，实现高效定点巡检，精准定位故障，智能分析判断，故障处理闭环。',
        src: getImgUrl('intel_211_09.png'),
    },
    {
        title: '6、满足移动化办公的使用需求',
        detail: '智能运维管理平台可以对多种移动终端进行适配，可以根据用户的角色和身份提供与电脑端一样的管理数据，方便用户使用。',
        src: getImgUrl('intel_211_06.png'),
    },
    {
        title: '7、智能设备数据接入',
        detail: '智能运维管理平台可以将视频摄像头、电子工牌、巡检仪、行车记录仪等智能终端数据进行对点接入，实现对各个生产场站的全方位数字化监控。',
        src: getImgUrl('intel_211_07.png'),
    },
    {
        title: '8、多种图表方便调取使用',
        detail: '平台可以提供根据用户使用需求，设定多种图表模板，用户可以根据管理需要，直接调取查看生产运行报表、设备告警统计报表、电站报表等，对于集团管理者，平台可以提供集团管理报表，综合反映所有管辖电站的数据情况。',
        src: getImgUrl('intel_211_08.png'),
    },
])

// 动态计算区域高度的函数
const updateHeights = () => {
    const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
    const scaleFactor = screenWidth / baseWidth;
    // 根据比例缩放高度
    if (screenWidth >= 0) {
        containerHeight.value = baseHeight * scaleFactor;
        MsgManager.getInstance().sendMsg('container-height', { height: containerHeight.value + 220 * scaleFactor });
    }
};

// 挂载函数
onMounted(() => {
    updateHeights();
    window.addEventListener('resize', updateHeights); // 监听窗口变化
});

// 卸载函数
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style lang="less" scoped>
@import '../../assets/style/common.css';

.container {
    position: relative;
    width: 1920px;
    height: auto;
    overflow: hidden;
}

.section {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 1920px;
    height: 4954px;

    .header-banner {
        background-image: url('../../assets/images/plan_header_yy.jpg');
        height: 400px;
        width: 1920px;
        
        .header-content {
            height: 400px;
            width: 1920px;
            
            .title-section {
                height: 400px;
                width: 1920px;
                
                .title-header {
                    width: 1298px;
                    height: 42px;
                    margin: 29px 0 0 310px;
                    opacity: 0;
                }
                
                .main-title {
                    width: 499px;
                    height: 48px;
                    margin: 124px 0 0 710px;
                    
                    .title-text {
                        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
                        width: 499px;
                        height: 48px;
                        overflow-wrap: break-word;
                        color: rgba(255, 255, 255, 1);
                        font-size: 49px;
                        font-family: SourceHanSansCN-Bold;
                        font-weight: 700;
                        text-align: center;
                        white-space: nowrap;
                        line-height: 49px;
                    }
                }
                
                .subtitle {
                    width: 514px;
                    height: 14px;
                    margin: 17px 0 126px 704px;
                    
                    .subtitle-text {
                        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
                        width: 514px;
                        height: 14px;
                        overflow-wrap: break-word;
                        color: rgba(255, 255, 255, 1);
                        font-size: 17px;
                        font-family: SourceHanSansCN-Regular;
                        font-weight: normal;
                        text-align: center;
                        white-space: nowrap;
                        line-height: 17px;
                    }
                }
            }
        }
    }
}

.main-section {
    position: absolute;
    left: 0;
    top: 400px;
    width: 1920px;
    height: 4483px;
    
    .icon-arrow {
        width: 16px;
        height: 11px;
        margin: 675px 0 0 955px;
    }
    
    .icon-arrow-two {
        width: 16px;
        height: 11px;
        margin: 2px 0 0 955px;
    }
    
    .content-section-1 {
        background-color: rgba(247, 247, 247, 1);
        width: 1920px;
        height: 585px;
        margin-top: 66px;
    
        .text-wrapper {
            width: 528px;
            height: 151px;
            margin: 217px 0 0 315px;
        }
    
        .text {
            overflow-wrap: break-word;
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 3px;
        }
    
        .text-title {
            width: 329px;
            height: 24px;
            color: rgba(51, 51, 51, 1);
        }
    
        .text-detail {
            width: 528px;
            height: 88px;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justify;
            white-space: wrap;
            line-height: 36px;
            margin-top: 39px;
        }
    
        .image {
            width: 648px;
            height: 457px;
            margin: 64px 310px 0 119px;
        }
    }
    
    .content-section-2 {
        width: 1293px;
        height: 341px;
        margin: 64px 0 0 310px;
    
        .image {
            width: 650px;
            height: 341px;
        }
    
        .text-wrapper {
            width: 528px;
            height: 186px;
            margin-top: 76px;
        }
    
        .text {
            overflow-wrap: break-word;
            font-family: SourceHanSansCN-Bold;
        }
    
        .text-title {
            width: 277px;
            height: 24px;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 2px;
        }
    
        .text-detail {
            width: 528px;
            height: 123px;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justify;
            white-space: wrap;
            line-height: 36px;
            margin-top: 39px;
        }
    }
    
    .content-section-3 {
        background-color: rgba(247, 247, 247, 1);
        width: 1920px;
        height: 489px;
        margin-top: 64px;
    
        .text-wrapper {
            width: 527px;
            height: 115px;
            margin: 193px 0 0 316px;
        }
        
        .text-title {
            width: 445px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 1px;
        }
        
        .text-detail {
            width: 527px;
            height: 52px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
        
        .image {
            width: 650px;
            height: 373px;
            margin: 64px 310px 0 117px;
        }
    }
    
    
    .content-section-4 {
        width: 1221px;
        height: 282px;
        margin: 77px 0 0 382px;
    
        .image {
            width: 547px;
            height: 282px;
        }
        
        .text-wrapper {
            width: 528px;
            height: 187px;
            margin-top: 46px;
        }
        
        .text-title {
            width: 302px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 1px;
        }
        
        .text-detail {
            width: 528px;
            height: 124px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
    }
    
    .content-section-5 {
        background-color: rgba(247, 247, 247, 1);
        width: 1920px;
        height: 467px;
        margin-top: 64px;
    
        .text-wrapper {
            width: 528px;
            height: 187px;
            margin: 140px 0 0 327px;
        }
        
        .text-title {
            width: 483px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 1px;
        }
        
        .text-detail {
            width: 528px;
            height: 124px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
        
        .image {
            width: 649px;
            height: 340px;
            margin: 64px 310px 0 106px;
        }
    }
    
    .content-section-6 {
        width: 1292px;
        height: 286px;
        margin: 64px 0 0 310px;
        
        .image {
            width: 648px;
            height: 286px;
        }
        
        .text-wrapper {
            width: 526px;
            height: 115px;
            margin-top: 85px;
        }
        
        .text-title {
            width: 324px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 1px;
        }
        
        .text-detail {
            width: 526px;
            height: 52px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
    }
    
    .content-section-7 {
        background-color: rgba(247, 247, 247, 1);
        width: 1920px;
        height: 424px;
        margin-top: 64px;
        
        .text-wrapper {
            width: 526px;
            height: 115px;
            margin: 156px 0 0 316px;
        }
        
        .text-title {
            width: 229px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 1px;
        }
        
        .text-detail {
            width: 526px;
            height: 52px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
        
        .image {
            width: 649px;
            height: 307px;
            margin: 65px 310px 0 119px;
        }
    }
    
    .content-section-8 {
        width: 1292px;
        height: 308px;
        margin: 75px 0 64px 310px;
    
        .image {
            width: 650px;
            height: 308px;
        }
        
        .text-wrapper {
            width: 527px;
            height: 151px;
            margin-top: 78px;
        }
        
        .text-title {
            width: 264px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin-left: 2px;
        }
        
        .text-detail {
            width: 527px;
            height: 88px;
            overflow-wrap: break-word;
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Normal;
            font-weight: normal;
            text-align: justifyLeft;
            line-height: 36px;
            margin-top: 39px;
        }
    }
    
    .description {
        background-color: rgba(255, 255, 255, 1);
        position: absolute;
        left: 131px;
        top: -64px;
        width: 1652px;
        height: 736px;
        
        .description-image {
            width: 987px;
            height: 488px;
            margin: 100px 0 0 337px;
        }
        
        .description-text {
            width: 95px;
            height: 23px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
            margin: 102px 0 23px 788px;
        }
    }
}
</style>