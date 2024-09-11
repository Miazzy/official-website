<template>
  <div class="container">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px' }"></div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }"></div>

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
  updateHeights(); // 页面加载时初始化高度
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
  overflow-x: hidden;
  overflow-y: scroll;
}

/* 上部区域 */
.top-section {
  background-image: url('../../assets/images/plan_header_yy.jpg'); /* 替换为 a.png 的实际路径 */
  background-size: cover;
  background-position: center;
  transition: height 0.3s ease;
}

/* 中部区域 */
.middle-section {
  background-color: #f0f0f0; /* 中部可使用背景色 */
  transition: height 0.3s ease;
}

/* 下部区域 */
.bottom-section {
  background-image: url('../../assets/images/plan_middle_yy.jpg'); /* 替换为 b.png 的实际路径 */
  background-size: cover;
  background-position: center;
  transition: height 0.3s ease;
}
</style>
