<template>
  <div class="plans container">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px', backgroundImage: `url(\'${hImage}\')` }">
      <div class="banner">
        <h1 class="text lang">{{ options[pageType].banner.title }}</h1>
        <h2 class="text lang en">{{ options[pageType].banner.btmText.toUpperCase() }}</h2>
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }">
    </div>
    <div class="middle-content" :style="{ height: middleHeight * 1.02+ 'px', top: topHeight + 'px' }">
      <div class="upper">
        {{ options[pageType].mainInfo.title }}
        <div class="shadow-text">{{ options[pageType].mainInfo.shadowText }}</div>
        <div class="bottom-text">{{ options[pageType].mainInfo.btmText }}</div>
      </div>
      <div class="description text">
        <span v-for="(text, index) in options[pageType].mainInfo.description" :key="index">{{ text }}</span>
      </div>
      <div class="indexs index-container">
          <div :class="pageType==='yy'?'box':'three-box-layout'" v-for="(item, index) in options[pageType].indexs" :key="index">
            <Indicator v-if="pageType==='yy'" :num="item.num" 
            :unit="item.unit"
            :descript="item.descript" 
            :color="item.color" 
            :upcolor="item.upcolor" >
            </Indicator>
            <Card v-else :icon="item.icon" :iconColor="item.iconColor" :labelCh="item.labelCh" :labelEn="item.labelEn" :labelColor="item.labelColor"></Card>
          </div>
      </div>
    </div>

    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px', backgroundImage: `url(\'${mImage}\')` }">
      <div class="banner">
        <h1 class="text lang">{{ options[pageType].btmInfo.title }}</h1>
        <h2 class="text lang en">{{ options[pageType].btmInfo.btmText }}</h2>
        <h3 class="text indicate">{{ options[pageType].btmInfo.indicate }}</h3>
      </div>

      <div class="business business-container">
        <div class="box"  v-for="(item, index) in options[pageType].btmInfo.business" :key="index">
          <span class="icon iconfont" :class="item.icon"></span>
          <div class="text-content">
            <span class="title">{{ item.title }}</span>
            <span class="text" v-for="(text, index) in item.text" :key="index">{{ text }}</span>
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
const middleBaseHeight = 845; // 中部初始高度
const bottomBaseHeight = 1060; // 下部初始高度
const hType = "/src/assets/images/plan_header_{type}.jpg";
const mType = "/src/assets/images/plan_middle_{type}.jpg";

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const bottomHeight = ref(bottomBaseHeight);
const pageType = ref('yy');
const hImage = ref(hType.replace('{type}', pageType.value));
const mImage = ref(mType.replace('{type}', pageType.value));

const options = reactive({
  yy:{
    banner: {
      title: '专业化·智能化·一体化',
      btmText: 'Specialization, intelligence and integration',
    },
    mainInfo: {
      title: '渔光一体智能运营专家',
      shadowText: 'INTELLIGENT',
      btmText: 'OPERATION',
      description: [
        '秉承“以人为本、安全运维、高效协同”的基本思想，集现代数字智能化手段，提供各类新能源电站运服务。',
        '线上依托自主研发新能源云管理系统、渔光一体智慧云平台、智能水产养殖系统，融合视频监控等各种电站资源.',
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
        { title: '运行维护', icon:'iconyunyingfuwu', text: ['安全管理', '电站巡检', '设备运行监控', '维护消缺', '台账管理', '除草清洗'] },
        { title: '专项服务', icon:'icondashuju', text: ['设备抢检修技改','电气试验','设备专项排查与分析','技术监督','电站性能检测与质量评估','防雷检测','电力设备安装'] },
        { title: '增值服务', icon:'iconlianghaoderuanyingjianjianrongxing', text: ['生产前准备','电费结算','关系协调','AI巡检'] }
      ],
    }
  },
  yz:{
    banner: {
      title: '集约化·智能化·高效化',
      btmText: 'Intensive, intelligent and efficient',
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
        { title: '现代化农业园区 整体解决方案', icon:'iconzhiwuzhongzhi', text: ['现代化水产产业园规划建设', '光伏农业园区规划建设', '园区智能化运营服务', '渔光一体整体解决方案'] },
        { title: '专项服务', icon:'icondashuju', text: ['设备抢检修技改','电气试验','设备专项排查与分析','技术监督','电站性能检测与质量评估','防雷检测','电力设备安装'] },
        { title: '增值服务', icon:'iconlianghaoderuanyingjianjianrongxing', text: ['生产前准备','电费结算','关系协调','AI巡检'] }
      ],
    }
  },
  xx:{
    banner: {
      title: '专业化·智能化·一体化',
      btmText: 'Specialization, intelligence and integration',
    },
    mainInfo: {
      title: '渔光一体智能运营专家',
      shadowText: 'INTELLIGENT',
      btmText: 'OPERATION',
      description: [
        '秉承“以人为本、安全运维、高效协同”的基本思想，集现代数字智能化手段，提供各类新能源电站运服务。',
        '线上依托自主研发新能源云管理系统、渔光一体智慧云平台、智能水产养殖系统，融合视频监控等各种电站资源.',
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
        { title: '运行维护', icon:'iconyunyingfuwu', text: ['安全管理', '电站巡检', '设备运行监控', '维护消缺', '台账管理', '除草清洗'] },
        { title: '专项服务', icon:'icondashuju', text: ['设备抢检修技改','电气试验','设备专项排查与分析','技术监督','电站性能检测与质量评估','防雷检测','电力设备安装'] },
        { title: '增值服务', icon:'iconlianghaoderuanyingjianjianrongxing', text: ['生产前准备','电费结算','关系协调','AI巡检'] }
      ],
    }
  },
});

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  topHeight.value = parseInt(topBaseHeight * scaleFactor);
  middleHeight.value = parseInt(middleBaseHeight * scaleFactor);
  bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor);
};

// 监听窗口大小变化
onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
  MsgManager.getInstance().listen('pagechange', (message) => {
    hImage.value = hType.replace('{type}', message.type);
    mImage.value = mType.replace('{type}', message.type);
    pageType.value = message.type;
  });
  pageType.value = route.query.type;
});

onBeforeUnmount(() => {
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

  .top-section {
    background-image: url('../../assets/images/plan_header_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    position: relative;
    overflow-x: hidden;

    .banner {
      position: absolute;
      text-align: center;
      width: 100%;
      margin: 270px 0 0 0;

      .text {
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 24px;
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
  }
  
  .middle-content {
    position: absolute;
    top: 540px;
    width: 90%;
    margin: -50px 5% 0 5%;
    background: #F7F9FC;
    border: 1px solid #F7F9FCCE;
    border-radius: 4px;
    font-family: Source Han Sans CN;

    .upper {
      position: relative;
      margin: 120px 0 10px 80px;
      font-weight: 600;
      font-size: 46px;
      color: #333333;
      line-height: 39px;

      .shadow-text {
        position: absolute;
        top: -30px;
        font-weight: 400;
        font-size: 120px;
        color: #999999;
        line-height: 43px;
        opacity: 0.2;
      }

      .bottom-text {
        position: absolute;
        top: 50px;
        left: 2px;
        font-weight: 400;
        font-size: 26px;
        color: #CCCCCC;
        line-height: 39px;
      }
    }

    .description {
      position: relative;
      margin: 130px 80px 10px 80px;
      border: 0;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 24px;
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
      }

      .three-box-layout + .three-box-layout {
        margin-left: 49px;
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

    .banner {
      position: absolute;
      text-align: left;
      width: 100%;
      margin: 80px 0 0 160px;
      font-family: Source Han Sans CN;

      .text {
        font-weight: bold;
        font-size: 30px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-weight: 400;
          font-size: 24px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.3;
        }

        &.indicate {
          margin: 20px 0 0 0;
          font-size: 22px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.8;
        }
      }
    }

    .business-container {
      display: flex;
      margin: 320px 80px 0px 25vw;
      overflow-x: hidden;

      .box {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 360px;
        height: 502px;
        background: #FFFFFF;
        box-shadow: -1px 7px 13px 0px rgba(24,24,24,0.3);

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
            margin: 0 0 7.5px 0;
            color: #000;
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
