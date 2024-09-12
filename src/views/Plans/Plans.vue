<template>
  <div class="plans container">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px' }">
      <div class="banner">
        <h1 class="text lang">{{ options.banner.title }}</h1>
        <h2 class="text lang en">{{ options.banner.btmText }}</h2>
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }">
    </div>
    <div class="middle-content" :style="{ height: middleHeight * 1.02+ 'px', top: topHeight + 'px' }">
      <div class="upper">
        {{ options.mainInfo.title }}
        <div class="shadow-text">{{ options.mainInfo.shadowText }}</div>
        <div class="bottom-text">{{ options.mainInfo.btmText }}</div>
      </div>
      <div class="description text">
        <span v-for="(text, index) in options.mainInfo.description" :key="index">{{ text }}</span>
      </div>
      <div class="indexs index-container">
        <div class="box"  v-for="(item, index) in options.indexs" :key="index">
          <Indicator :num="item.num" 
            :unit="item.unit"
            :descript="item.descript" 
            :color="item.color" 
            :upcolor="item.upcolor"
            style="margin: 25px 0 0 70px;">
          </Indicator>
        </div>
      </div>
    </div>

    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
      <div class="banner">
        <h1 class="text lang">{{ options.btmInfo.title }}</h1>
        <h2 class="text lang en">{{ options.btmInfo.btmText }}</h2>
        <h3 class="text indicate">{{ options.btmInfo.indicate }}</h3>
      </div>

      <div class="business business-container">
        <div class="box"  v-for="(item, index) in options.btmInfo.business" :key="index">
          <span class="icon iconfont">&#xe607;</span>
          <div class="text-content">
            <span class="title">运行维护</span>
            <span class="text">安全管理</span>
            <span class="text">电站巡检</span>
            <span class="text">设备运行监控</span>
            <span class="text">维护消缺</span>
            <span class="text">台账管理</span>
            <span class="text">除草清洗</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import Indicator from '../../components/Indicator.vue';

const baseWidth = 1920; // 基准宽度
const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 845; // 中部初始高度
const bottomBaseHeight = 1060; // 下部初始高度

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const bottomHeight = ref(bottomBaseHeight);

const options = reactive(
  {
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
        {},
        {},
        {}
      ],
    }
  }
);

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
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  z-index: 0;
  overflow-x: hidden;
  overflow-y: scroll;

  .top-section {
    background-image: url('../../assets/images/plan_header_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    position: relative;

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
      margin: 130px 0 10px 80px;
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
    }
  }

  .bottom-section {
    background-image: url('../../assets/images/plan_middle_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;

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
            font-weight: 600;
            margin: 5px 0 10px 0;
          }

          .text {
            display: block;
            font-size: 18px;
            font-weight: 300;
            margin: 0 0 7.5px 0;
          }
        }
      }
    }
  }
}
</style>
