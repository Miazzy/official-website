<template>
    <div class="container flex-col">
        <!-- mobile-header -->
        <MHeader></MHeader>

        <!-- title-container -->
        <div class="title-container flex-col">
            <div class="title-wrapper flex-row">
                <div class="text-title-wrapper flex-col justify-between">
                    <span class="htext-title">{{ title }}</span>
                    <span class="htext-title mini">{{ subTitle }}</span>
                </div>
            </div>
        </div>

        <!-- company-container -->
        <div class="company-container flex-col">
            <span class="company-description">COMPANY</span>
            <span class="company-title">公司简介</span>
            <span class="company-profile">PROFILE</span>
            <span class="company-paragraph margin">
                四川渔光物联技术有限公司是通威股份旗下科技创新型公司，成立于2016年5月。共有员工500+名，拥有一支由国务院津贴专家、四川省“千人计划”专家、通威信息化标杆打造核心成员等多类型高端人才组成的队伍。
            </span>
            <span class="company-paragraph">
                四川渔光物联技术有限公司是国家高新技术企业，业务涉及渔光一体光伏电站在内的电站智能运维、智慧农业、信息化技术服务。公司被评定为全国智慧渔业领军企业，成都市企业技术中心，具有两化融合管理体系评定等资质，经过8年的技术研发和创新，形成了3项国内领先成果、32项专利、18项软件著作权。参与了国家科技部“蓝色粮仓科技创新项目”，多项省、市级科技项目。公司被评为“物联网行业应用优秀企业”、成都新经济双百企业，连续两年获得“单项顶级光伏智能运维品牌”，取得“水产养殖智能化突出贡献奖”、“中国农牧行业年度创新品牌”、2023年度数字化转型灯塔案例金数奖等荣誉，“智能光伏集中运维平台实践案例”项目被评定为“2020年度成都市工业互联网优秀应用案例”。
            </span>
            <span class="company-paragraph">
                进入“十四五”时期，公司将持续创新，全方位提升资源利用效率、多层面提高投资收益，在实现客户利润最大化的同时助力国家减排目标的实现，着力打造“渔光一体智能运营专家”品牌形象。
            </span>
        </div>

        <!-- honor-container -->
        <div class="honor-container">
            <div class="honor-wrapper">
                <!-- title-wrapper -->
                <div class="honor-title-wrapper">
                    <span class="htext-title">资质荣誉</span>
                    <span class="htext-title mini">QUALIFICATION HONOR</span>
                </div>
                <!-- image-wrapper -->
                <div class="honor-image-wrapper">
                    <div class="image-wrapper flex-col" :style="`transform: translateX(${initX}vw);`">
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                        <img class="image" v-for="i in 14" :key="i" :src="getImgUrl(`honor-${i}.png`)" />
                    </div>
                </div>
                <!-- arrow-wrapper -->
                <div class="honor-arrow-wrapper flex-row justify-between">
                    <img class="honor-arrow-left" src="../../assets/images/arrow-circle-left.png"
                        @click="handleTranslateX(25, true)" />
                    <img class="honor-arrow-right" src="../../assets/images/arrow-circle-right.png"
                        @click="handleTranslateX(-25, true)" />
                </div>
            </div>
        </div>

        <!-- contact-container -->
        <div class="contact-container flex-col">
            <span class="contact-text-bg">CONTACT US</span>
            <span class="contact-text-title">联系我们</span>
            <span class="contact-text-subtitle">CONTACT US</span>
            <div class="contact-map-wrapper map-container flex-col" id="map-container"></div>
            <div class="image-htext-title flex-row">
                <div class="contact-image-text-wrapper flex-row">
                    <div class="contact-image-text flex-row justify-between">
                        <span class="icon iconfont image tel icondianhua"></span>
                        <span class="icon iconfont image email iconyouxiang"></span>
                        <span class="icon iconfont image addr iconzhengqimenhu_dizhixinxi1"></span>
                        <span class="contact-image-text-paragraph">
                            Tel： 028-86168758<br />
                            E-mail： WEIH02@tongwei.com<br />
                            Addr： 四川省成都市高新区天府大道588号通威国际中心
                        </span>
                    </div>
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
import { getImgUrl } from '@/utils/common';
import { TaskExecutor } from '@/executor/executor';

const title = ref('关于我们');
const subTitle = ref('ABOUT US');
const mapObject = ref();
const initX = ref(0);
const task = ref(null);
let timeoutFlag = null

// 初始化地图
const initMap = () => {
    mapObject.value = new BMapGL.Map('map-container'); // 创建Map实例
    mapObject.value.setMapType(BMAP_NORMAL_MAP); // 设置地图类型为地球模式
    mapObject.value.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    mapObject.value.centerAndZoom(new BMapGL.Point(104.074384, 30.556542), 16); // 初始化地图,设置中心点坐标和地图级别
    let marker = new BMapGL.Marker(new BMapGL.Point(104.074384, 30.556542));
    mapObject.value.addOverlay(marker);
};

const handleTranslateX = (value, flag) => {
    if (flag) {
        task.value = null;
        if (timeoutFlag) {
            clearTimeout(timeoutFlag);
            timeoutFlag = null;
        }
        timeoutFlag = setTimeout(() => {
            task.value = handleScrollTask;
            timeoutFlag = null;
        }, 1000);
    }
    if (initX.value >= 0 && value > 0) {
        initX.value = -5850;
    }
    if (initX.value <= -6400 && value < 0) {
        initX.value = -560;
    }
    initX.value = initX.value + value;
    if (initX.value >= 0 && initX.value <= 30) {
        initX.value = -5850 + initX.value;
    }
};

const handleScrollTask = () => {
    handleTranslateX(-0.15, false);
};

// 挂载函数
onMounted(() => {
    initMap();
    task.value = handleScrollTask;
    setInterval(() => {
        if (task.value != null) {
            task.value();
        }
    }, 10);
});

</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 100vw;
    height: 440.8vw;
    overflow: hidden;
}

.title-container {
    height: 66vw;
    width: 100vw;
    background: url(/src/assets/images/mobile_aboutus_01.png) 0 -2vw no-repeat;
    background-size: 100% calc(100% + 2vw);

    .title-wrapper {
        width: 26.14vw;
        height: 10.94vw;
        margin: 18.4vw 0 24.4vw 37.86vw;

        .text-title-wrapper {
            width: 26.14vw;
            height: 10.94vw;

            .htext-title {
                text-shadow: -1px 5px 5px rgba(0, 0, 0, 0.36);
                width: 26.14vw;
                height: 6.4vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 6.53vw;
                font-family: SourceHanSansCN-Bold;
                font-weight: 700;
                text-align: center;
                white-space: nowrap;
                line-height: 6.54vw;
                margin-top: 12vw;

                &.mini {
                    height: 1.87vw;
                    font-size: 2.26vw;
                    line-height: 2.26vw;
                    margin: 2.66vw auto 0 auto;
                    opacity: 0.75;
                }
            }
        }
    }
}

.company-container {
    width: 100vw;
    height: 145.6vw;
    background: #fefefe;
    z-index: 1000;

    .company-description {
        width: 58.8vw;
        height: 9.74vw;
        overflow-wrap: break-word;
        color: #99999930;
        font-size: 12.8vw;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 8.54vw;
        margin: 7.2vw 0 0 5.6vw;
    }

    .company-title {
        width: 24.14vw;
        height: 5.74vw;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 6.13vw;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 6.94vw;
        margin: -4.26vw 0 0 5.46vw;
    }

    .company-profile {
        width: 11.2vw;
        height: 2.4vw;
        overflow-wrap: break-word;
        color: rgba(204, 204, 204, 1);
        font-size: 2.8vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 6.94vw;
        margin: 3.2vw 0 0 5.46vw;
    }

    .company-paragraph {
        width: 89.47vw;
        overflow-wrap: break-word;
        color: rgba(68, 68, 68, 1);
        font-size: 3.2vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: justifyLeft;
        margin: 0vw 0 0vw 5.6vw;
        letter-spacing: 0.38px;
        text-indent: 2em;
        line-height: 1.75;

        &.margin {
            margin-top: 5.6vw;
        }
    }
}

.contact-container {
    position: relative;
    width: 100vw;
    height: 99.2vw;
    margin-bottom: 0.14vw;
    z-index: 1000;

    .contact-text-bg {
        width: 91.74vw;
        height: 39.27vw;
        overflow-wrap: break-word;
        color: rgba(0, 0, 0, 0.015);
        font-size: 47.46vw;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 48.54vw;
        margin: 7.6vw 0 0 0.53vw;
    }

    .contact-text-title {
        width: 21.87vw;
        height: 5.2vw;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 5.6vw;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 5.2vw;
        margin: -36.13vw 0 0 5.06vw;
    }

    .contact-text-subtitle {
        width: 16vw;
        height: 2.14vw;
        overflow-wrap: break-word;
        color: rgba(204, 204, 204, 1);
        font-size: 2.66vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 5.2vw;
        margin: 2.93vw 0 0 5.2vw;
    }

    .image-htext-title {
        width: 84.54vw;
        height: 18vw;
        margin: 51.46vw 0 0 5.46vw;

        .contact-image-text-wrapper {
            position: relative;
            width: 84.54vw;
            height: 18vw;

            .contact-image-text {
                width: 84.54vw;
                height: 18vw;

                .image {
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #DD7816;

                    &.email {
                        width: 2.94vw;
                        height: 2.27vw;
                        margin-top: 7.6vw;
                    }

                    &.tel {
                        width: 3.07vw;
                        height: 2.54vw;
                    }

                    &.addr {
                        width: 2.8vw;
                        height: 3.2vw;
                        margin-top: 14.5vw;
                    }
                }

                .contact-image-text-paragraph {
                    width: 80.4vw;
                    height: 18vw;
                    overflow-wrap: break-word;
                    color: rgba(31, 33, 36, 1);
                    font-size: 2.93vw;
                    font-family: MicrosoftYaHei;
                    font-weight: normal;
                    text-align: left;
                    line-height: 7.47vw;
                    margin-top: -1.65vw;
                    margin-left: 6vw;
                }
            }
        }
    }

    .contact-map-wrapper {
        background: transparent;
        position: absolute;
        left: 5.34vw;
        top: 25.2vw;
        width: 89.34vw;
        height: 40vw;
    }
}

.honor-container {
    background-color: rgba(233, 233, 234, 0.1);
    height: 105vw;
    width: 100%;
    z-index: 1000;
    background: url('../../assets/images/mobile_aboutus_bg.png');
    background-size: 100% 100%;
    z-index: 1000;
    padding: 0 5vw 0 5vw;
    overflow: hidden;

    .honor-wrapper {
        background-color: rgba(238, 238, 238, 0.1);
        width: 100%;
        height: 112.14vw;
        overflow: hidden;

        .honor-title-wrapper {
            width: 29.6vw;
            height: 10.67vw;
            margin: 7.6vw 0 0 calc(5.2vw - 5vw);

            .htext-title {
                width: 22vw;
                height: 5.2vw;
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 5.6vw;
                font-family: SourceHanSansCN-Medium;
                font-weight: 500;
                text-align: left;
                white-space: nowrap;
                line-height: 5.2vw;

                &.mini {
                    width: 29.6vw;
                    height: 2.54vw;
                    overflow-wrap: break-word;
                    color: #cccccc;
                    font-size: 2.66vw;
                    font-family: SourceHanSansCN-Regular;
                    font-weight: normal;
                    text-align: left;
                    white-space: nowrap;
                    line-height: 3.2vw;
                    margin-top: 0vw;
                }
            }
        }

        .honor-image-wrapper {
            width: 100%;
            height: 63.07vw;
            padding: 0;
            background-color: transparent;

            .image-wrapper {
                background-color: transparent;
                height: 63.07vw;
                width: 90%;
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                padding: 0 0px;
                // animation: scroll-x 60s linear infinite;

                .image {
                    margin: 0;
                    width: 43.5vw;
                    height: auto !important;
                    object-fit: contain !important;
                    margin-right: 3vw;

                    &.other {
                        width: 43.5vw;
                        height: auto !important;
                        object-fit: contain !important;
                    }
                }

            }
        }
    }

    .honor-arrow-wrapper {
        width: 19.87vw;
        height: 7.47vw;
        margin: 8.53vw 0 9.6vw 0;

        .honor-arrow-left {
            width: 7.47vw;
            height: 7.47vw;
        }

        .honor-arrow-right {
            width: 7.47vw;
            height: 7.47vw;
        }
    }
}

@keyframes scroll-x {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-1000%);
    }
}
</style>