<template>
  <div class="plans container" :class="pageType">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px' }">
      <div class="banner">
        <h1 class="text lang">{{ options[pageType].banner.title }}</h1>
        <h2 class="text lang en">{{ options[pageType].banner.btmText.toUpperCase() }}</h2>
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }">
    </div>
    <div class="middle-content" :style="{ height: middleHeight * 1.02 + 'px', top: topHeight + 'px' }">
      <div class="upper">
        {{ options[pageType].mainInfo.title }}
        <div class="shadow-text">{{ options[pageType].mainInfo.shadowText }}</div>
        <div class="bottom-text">{{ options[pageType].mainInfo.btmText }}</div>
      </div>
      <div class="description text">
        <span v-for="(text, index) in options[pageType].mainInfo.description" :key="index">{{ text }}</span>
      </div>
      <div class="indexs index-container">
        <div :class="pageType === 'yy' ? 'box' : 'three-box-layout'" v-for="(item, index) in options[pageType].indexs"
          :key="index">
          <Indicator v-if="pageType === 'yy'" :num="item.num" :unit="item.unit" :descript="item.descript"
            :color="item.color" :upcolor="item.upcolor">
          </Indicator>
          <Card v-else :icon="item.icon" :iconColor="item.iconColor" :labelCh="item.labelCh" :labelEn="item.labelEn"
            :labelColor="item.labelColor"></Card>
        </div>
      </div>
    </div>

    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
      <div class="banner">
        <h1 class="text lang">{{ options[pageType].btmInfo.title }}</h1>
        <h2 class="text lang en">{{ options[pageType].btmInfo.btmText }}</h2>
        <h3 class="text indicate">{{ options[pageType].btmInfo.indicate }}</h3>
      </div>

      <div class="business business-container">
        <div class="box" v-for="(item, index) in options[pageType].btmInfo.business" :key="index" :class="item.icon">
          <span class="icon iconfont" :class="item.icon"></span>
          <div class="text-content">
            <span class="title" v-for="(text, index) in item.title" :key="index">{{ text }}</span>
            <span class="text" v-for="(text, index) in item.text" :key="index" :style="{ lineHeight: item.line }">{{
              text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import Indicator from '../../components/Indicator.vue';
import Card from '../../components/Card.vue';
import { MsgManager } from "../../manager/MsgManager";
import { useRoute } from 'vue-router';

const route = useRoute();

const baseWidth = 1920; // 基准宽度
const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 612; // 中部初始高度
const bottomBaseHeight = 874; // 下部初始高度
const hType = "/src/assets/images/plan_header_{type}.jpg";
const mType = "/src/assets/images/plan_middle_{type}.jpg";

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const bottomHeight = ref(bottomBaseHeight);
const pageType = ref('yy');
const hImage = ref(hType.replace('{type}', pageType.value));
const mImage = ref(mType.replace('{type}', pageType.value));

const options = reactive({
  yy: {
    banner: {
      title: '专业化、智能化、一体化',
      btmText: 'Specialization, intelligence and integration'.toUpperCase(),
    },
    mainInfo: {
      title: '渔光一体智能运营专家',
      shadowText: 'INTELLIGENT',
      btmText: 'OPERATION',
      description: [
        '秉承“以人为本、安全运维、高效协同”的基本思想，集现代数字智能化手段，提供各类新能源电站运服务。',
        '线上依托自主研发新能源云管理系统、渔光一体智慧云平台、智能水产养殖系统，融合视频监控等各种电站资源。',
        '形成电站的渔光一体产业化、安全生产模式化、电站生产标准化、运营管理智能化、发电目标最大化的五大核心能力。',
      ]
    },
    indexs: [
      { num: 40, unit: '个', descript: '在运城市', color: '#888888', upcolor: '#EF7D1B' },
      { num: 50, unit: '座', descript: '在运电站', color: '#888888', upcolor: '#EF7D1B' },
      { num: 4.27, unit: 'Gw', descript: '在运维总容量', color: '#888888', upcolor: '#EF7D1B' },
      { num: 3170, unit: '天', descript: '安全生产天数', color: '#888888', upcolor: '#EF7D1B' },
    ],
    btmInfo: {
      title: '渔光一体智能运营',
      btmText: 'Yu guang integrated intelligent operation'.toUpperCase(),
      indicate: '业务范围 >>',
      business: [
        { title: ['运行维护'], icon: 'iconyunyingfuwu operation', line: 1.3, text: ['安全管理', '电站巡检', '设备运行监控', '维护消缺', '台账管理', '除草清洗'] },
        { title: ['专项服务'], icon: 'icondashuju operation', line: 1.3, text: ['设备抢检修技改', '电气试验', '设备专项排查与分析', '技术监督', '电站性能检测与质量评估', '防雷检测', '电力设备安装'] },
        { title: ['增值服务'], icon: 'iconlianghaoderuanyingjianjianrongxing operation', line: 1.3, text: ['生产前准备', '电费结算', '关系协调', 'AI巡检'] }
      ],
    }
  },
  yz: {
    banner: {
      title: '集约化、智能化、高效化',
      btmText: 'Intensive, intelligent and efficient'.toUpperCase(),
    },
    mainInfo: {
      title: '运用智能物联，赋能现代农业',
      shadowText: 'SMART',
      btmText: 'OPERATION',
      description: [
        '运用物联网技术来解决现代农业生产中的问题，将现代智慧农业和光伏产业科学、专业、有机结合，推动农业生产、农产品经营、农业信息服务三大领域改造升级，实现数字化、科学化、智能化、生态化的现代化养殖，助推农业产业高效可持续发展。',
      ]
    },
    indexs: [
      { icon: 'iconqianbichizi', iconColor: '#318A36', labelCh: '集约化', labelEn: 'INTENSIFICATION', labelColor: '#43A438' },
      { icon: 'iconzhihuihuanbao', iconColor: '#318A36', labelCh: '智能化', labelEn: 'INTELLIGENTIZE', labelColor: '#43A438' },
      { icon: 'iconxinqingniangenggaoxiao', iconColor: '#318A36', labelCh: '高效化', labelEn: 'HIGH EFFICIENCY', labelColor: '#43A438' },
    ],
    btmInfo: {
      title: '智慧农业',
      btmText: 'Smart agriculture'.toUpperCase(),
      indicate: '业务范围 >>',
      business: [
        { title: ['现代化农业园区', '整体解决方案'], icon: 'iconzhiwuzhongzhi agriculture', line: 1.3, text: ['现代化水产产业园规划建设', '光伏农业园区规划建设', '园区智能化运营服务', '渔光一体整体解决方案'] },
        { title: ['多元化养殖设施设备'], icon: 'iconyangzhishebei agriculture', line: 1.3, text: ['工厂化恒温养殖车间', '智能推水流水槽', '智能底排污系统', '智能投喂机器人'] },
        { title: ['智能化软件系统'], icon: 'iconzhinengyangzhi agriculture', line: 1.3, text: ['智能投喂系统', '慧养鱼水质监测与管理', '水产物联网平台', '养殖过程管理系统'] }
      ],
    }
  },
  xx: {
    banner: {
      title: '平台化、多行业、一站式',
      btmText: 'Platform, multi-industry, one-stop'.toUpperCase(),
    },
    mainInfo: {
      title: '信息化解决方案服务提供商',
      shadowText: 'Information'.toUpperCase(),
      btmText: 'solution'.toUpperCase(),
      description: [
        '依托20年信息化方面的经验积累，为企业提供整体的信息化解决方案，利用物联网、大数据、云计算、人工智能等技术，实现信息化与传统产。',
      ]
    },
    indexs: [
      { icon: 'iconduohangye', iconColor: '#30A8E6', labelCh: '平台化', labelEn: 'Platform'.toUpperCase(), labelColor: '#30A8E6' },
      { icon: 'iconzichan', iconColor: '#30A8E6', labelCh: '多行业', labelEn: 'multi-industry'.toUpperCase(), labelColor: '#30A8E6' },
      { icon: 'iconhangzheng', iconColor: '#30A8E6', labelCh: '一站式', labelEn: 'one-stop'.toUpperCase(), labelColor: '#30A8E6' },
    ],
    btmInfo: {
      title: '渔光一体智能运营',
      btmText: 'Yu guang integrated intelligent operation'.toUpperCase(),
      indicate: '业务范围 >>',
      business: [
        { title: ['企业信息化解决方案'], icon: 'iconhulianwang inform', line: 2.2, text: ['依托自主研发的业务架构平台，高效的开发团队，为企业建立业务分析模型，发现潜在问题，进行针对性地改善和规范，助力 管理升级，支撑。'] },
        { title: ['物联网应用解决方案'], icon: 'iconxinxihua1 inform', line: 2.2, text: ['基于自主研发的数据采集器和通信平台，实现物联网与信息化的融合，提升生产过程的质量管控能力，实现质量安全的可追溯性，提高智能化水。'] },
        { title: ['智慧电站运维解决方案'], icon: 'iconzhinengguangfu inform', line: 2.2, text: ['利用大数据、AI、5G等技术，通过智能IOT设备，实现对电站设备的统一监控，为电站管理业务建设全面、智能、高效的运维管理平台。'] }
      ],
    }
  },
});

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;
  // 根据比例缩放高度
  topHeight.value = parseInt(topBaseHeight * scaleFactor);
  middleHeight.value = parseInt(middleBaseHeight * scaleFactor);
  bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor);

  if (screenWidth <= 1280) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.20);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.20);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.20);
  } else if (screenWidth <= 1300) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.18);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.18);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.18);
  } else if (screenWidth <= 1366) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.10);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.10);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.10);
  } else if (screenWidth <= 1500) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.10);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.10);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.10);
  } else if (screenWidth <= 1600) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.05);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.05);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.08);
  }


  if (screenWidth >= 3000 && screenWidth <= 3840) {
    topHeight.value = parseInt(topBaseHeight);
    middleHeight.value = parseInt(middleBaseHeight);
    bottomHeight.value = parseInt(bottomBaseHeight);
  }
};

const handleType = (type) => {
  hImage.value = hType.replace('{type}', type);
  mImage.value = mType.replace('{type}', type);
  pageType.value = type;
  MsgManager.getInstance().sendMsg('pagetype', { type });
}

// 监听窗口大小变化
onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
  MsgManager.getInstance().listen('pagechange', (message) => {
    handleType(message.type || 'yy');
  });
  handleType(route.query.type || 'yy');
});

onBeforeUnmount(() => {
  MsgManager.getInstance().sendMsg('pagetype', { type: '' });
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  width: 1920px;
  max-width: 1920px;
  height: calc(540px + 612px + 874px + 0px);
  // height: calc(540px + 612px + 874px + 322px);
  // background-image: url('../../assets/images/plan_bg.png');
  // background-size: cover;
  // background-position: center;

  &.yy {
    .top-section {
      background-image: url('../../assets/images/plan_header_yy.jpg');
    }

    .bottom-section {
      background-image: url('../../assets/images/plan_middle_yy.jpg');
    }
  }

  &.yz {
    .top-section {
      background-image: url('../../assets/images/plan_header_yz.jpg');
    }

    .bottom-section {
      background-image: url('../../assets/images/plan_middle_yz.jpg');
    }
  }

  &.xx {
    .top-section {
      background-image: url('../../assets/images/plan_header_xx.jpg');
    }

    .bottom-section {
      background-image: url('../../assets/images/plan_middle_xx.jpg');
    }
  }

  .top-section {
    background-image: url('../../assets/images/plan_header_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    position: relative;
    overflow-x: hidden;
    opacity: 1;

    .banner {
      position: absolute;
      text-align: center;
      width: 100%;
      margin: 235px 0 0 -3px;

      .text {
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-size: 50px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 18px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.77;
        }
      }
    }
  }

  .middle-section {
    background-color: #f0f0f0;
    transition: height 0.3s ease;
    overflow-x: hidden;
    opacity: 1;
  }

  .middle-content {
    position: absolute;
    background-image: url('../../assets/images/plan_wenli.jpg');
    background-size: cover;
    background-position: center;
    top: 540px;
    width: 1480px;
    height: 623px;
    margin: -68px 220px 0 220px;
    background: #F7F9FC;
    border: 1px solid #F7F9FCCE;
    border-radius: 0px;
    font-family: Source Han Sans CN;
    opacity: 1;

    .upper {
      position: relative;
      margin: 100px 0 10px 80px;
      font-weight: 600;
      font-size: 34px;
      color: #333333;
      line-height: 39px;

      .shadow-text {
        position: absolute;
        top: -22px;
        font-weight: 400;
        font-size: 72px;
        color: #999999;
        line-height: 43px;
        opacity: 0.2;
      }

      .bottom-text {
        position: absolute;
        top: 50px;
        left: 2px;
        font-weight: 400;
        font-size: 16px;
        color: #CCCCCC;
        line-height: 39px;
      }
    }

    .description {
      position: relative;
      margin: 80px 80px 10px 80px;
      border: 0;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 16px;
      color: #444444;
      line-height: 48px;

      span {
        display: block;
      }
    }

    .index-container {
      display: flex;
      margin: 80px 80px 0px 80px;

      .box {
        width: 350px;
        height: 150px;
        background: #FFFFFF;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 3px 3px 0px #3e3e3e15;

        &:hover {
          cursor: pointer;
          box-shadow: 0px 5px 5px 0px #3e3e3e30;
        }
      }

      .three-box-layout {
        width: 386px;
        height: 170px;

        &+.three-box-layout {
          margin-left: 49px;
        }

        :deep(.card-component) {
          box-shadow: 0px 3px 3px 0px #3e3e3e15;

          &:hover {
            cursor: pointer;
            box-shadow: 0px 5px 5px 0px #3e3e3e30;
          }
        }
      }
    }
  }

  .bottom-section {
    width: 100vw;
    background-image: url('../../assets/images/plan_middle_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    overflow-x: hidden;
    opacity: 1;

    .banner {
      position: absolute;
      text-align: left;
      width: 100%;
      margin: 56px 0 0 306px;
      font-family: Source Han Sans CN;

      .text {
        font-weight: bold;
        font-size: 30px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-weight: 400;
          font-size: 16px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.3;
        }

        &.indicate {
          margin: 30px 0 0 0;
          font-size: 16px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.8;
        }
      }
    }

    .business-container {
      display: flex;
      margin: 200px 80px 0px 25vw;
      overflow-x: hidden;

      .box {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 322px;
        height: 442px;
        background: #FFFFFF;
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.3);

        &::before {
          display: none;
        }

        &.operation:hover {
          background: #fefaf6;
          box-shadow: 0px 7px 13px 1px #EF7D1B90;
          .icon {
            color: #EF7D1B !important;
          }
        }

        &.agriculture:hover {
          background: #f5f9f6;
          box-shadow: 0px 7px 13px 1px #318A3690;
          .icon {
            color: #318A36 !important;
          }
        }

        &.inform:hover {
          background: #f6fafe;
          box-shadow: 0px 7px 13px 1px #30A8e690;
          .icon {
            color: #30A8E6 !important;
          }
        }

        &:hover {
          cursor: pointer;

          .icon {
            &.operation {
              color: #EF7D1B;
            }

            &.agriculture {
              color: #318A36;
            }

            &.inform {
              color: #30A8E6;
            }
          }
        }

        .icon {
          display: block;
          margin: 80px 0 10px 38%;
          font-size: 60px;
          height: 60px;
        }

        .text-content {
          display: block;
          height: 330px;
          text-align: center;

          .title {
            display: block;
            font-size: 26px;
            font-weight: 500;
            margin: 5px 0 10px 0;
            color: #333333;
          }

          .text {
            display: block;
            font-size: 18px;
            font-weight: 300;
            margin: 5px 55px 7.5px 55px;
            color: #000;
            opacity: 0.6;

            &:first-child {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}

.plans.container .bottom-section .banner .text {
  padding: 2px 0 0 0;
  font-size: 34px;

  &.en {
    font-size: 16px;
  }

  &.indicate {
    font-size: 16px;
  }
}

.plans.container .middle-content {
  margin: -68px 220px 0 220px;
  background-image: url('../../assets/images/plan_wenli.jpg');
  background-size: cover;
  background-position: center;

  .upper {
    font-size: 34px;
    margin: 100px 0 10px 84px;

    .shadow-text {
      font-size: 72px;
    }

    .bottom-text {
      font-size: 16px;
    }
  }

  .description {
    text-indent: 2em;
    margin: 65px 87.5px 53.5px 87.5px;
    font-size: 16px;
    line-height: 30px;
  }

  .index-container {
    margin: 100px 0 0 120px;

    .box {
      width: 386px;
      height: 170px;
      margin-right: 50.5px;

      .indicator-component {
        margin: -90px 0 0 20px;
      }

      .upper {
        span.num {
          font-size: 52px;
        }

        span.unit {
          font-size: 24px;
        }
      }

      .descript {
        font-size: 18px;
        margin: 0 0 0 50px;
      }
    }
  }
}

.plans.container .bottom-section .business-container {
  margin: 270px 80px 0px calc(28vw + 20px);

  .box {
    width: 322px;
    height: 442px;

    .icon {
      margin: 80px 0 10px 35%;
      font-size: 74px;
      height: 75px;
      color: #686868;
    }

    .text-content {
      height: 415px;

      .title {
        font-size: 24px;
        color: #333333;
        margin: 7.5px 0 12.5px 0;
        opacity: 1;
      }

      .text {
        font-size: 13px;
        margin: 15px 75px 10px 75px;
        color: #999999;
        opacity: 1;
      }
    }
  }
}

.plans.container .middle-content .index-container .three-box-layout .card-component {
  width: 100%;
  height: 170px;
  padding-left: 50px;

  .icon-box .iconfont {
    font-size: 78px;
  }

  .label-box .label-ch-text {
    font-size: 26px;
  }

  .label-box .label-en-text {
    font-size: 16px;
  }
}
</style>
