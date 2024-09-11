<template>
  <div class="plans container">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px' }">
      <div class="banner">
        <h1 class="text lang">专业化·智能化·一体化</h1>
        <h2 class="text lang en">Specialization, intelligence and integration</h2>
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }">
    </div>
    <div class="content" :style="{ height: middleHeight * 1.02+ 'px' }">
      <div class="upper">
        渔光一体智能运营专家
        <div class="shadow-text">INTELLIGENT</div>
        <div class="bottom-text">OPERATION</div>
      </div>
      <div class="description text">
        <span>秉承“以人为本、安全运维、高效协同”的基本思想，集现代数字智能化手段，提供各类新能源电站运服务。</span>
        <span>线上依托自主研发新能源云管理系统、渔光一体智慧云平台、智能水产养殖系统，融合视频监控等各种电站资源.</span>
        <span>形成电站的渔光一体产业化、安全生产模式化、电站生产标准化、运营管理智能化、发电目标最大化的五大核心能力。</span>
      </div>
      <div class="indexs"></div>
    </div>

    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const baseWidth = 1920; // 基准宽度
const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 845; // 中部初始高度
const bottomBaseHeight = 1060; // 下部初始高度

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const bottomHeight = ref(bottomBaseHeight);

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
  
  .content {
    position: absolute;
    top: 540px;
    width: 90%;
    margin: -50px 5% 0 5%;
    background-color: #fefefe;
    border: 1px solid #ccc;
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
  }

  .bottom-section {
    background-image: url('../../assets/images/plan_middle_yy.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
  }
}
</style>
