<template>
    <div class="carousel-container" @wheel="handleScrollFn">
      <div class="carousel-slide" :class="{ active: activeIndex === 0 }" v-show="activeIndex === 0">
        <slot name="one"></slot>
      </div>
      <div class="carousel-slide" :class="{ active: activeIndex === 1 }" v-show="activeIndex === 1">
        <slot name="two"></slot>
      </div>
      <div class="carousel-slide" :class="{ active: activeIndex === 2 }" v-show="activeIndex === 2">
        <slot name="three"></slot>
      </div>
      <div class="carousel-slide" :class="{ active: activeIndex === 3 }" v-show="activeIndex === 3">
        <slot name="four"></slot>
      </div>
  
      <div class="indicator">
        <div v-for="(segment, index) in 4" :key="index" :class="{ active: activeIndex === index }" class="segment"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { throttle } from '../utils/common';
  
  const activeIndex = ref(0);
  const totalSlides = 4; // 总共4个轮播项
  const isLock = ref(false);
  let timer: number | undefined;
  
  const startAutoScroll = () => {
    timer = setInterval(() => {
      if (!isLock.value) {
        activeIndex.value = (activeIndex.value + 1) % totalSlides;
      }
    }, 3000);
  };
  
  const stopAutoScroll = () => {
    if (timer) clearInterval(timer);
  };
  
  const handleScroll = (event: WheelEvent) => {
    stopAutoScroll();
    isLock.value = true;
    if (event.deltaY > 0) {
      // 向下滚动
      activeIndex.value = (activeIndex.value + 1) % totalSlides;
    } else {
      // 向上滚动
      activeIndex.value = (activeIndex.value + 3) % totalSlides;
    }
    setTimeout(() => {
      isLock.value = false;
      startAutoScroll();
    }, 3000);
  };

  const handleScrollFn = throttle(handleScroll, 1000);
  
  onMounted(() => {
    startAutoScroll();
  });
  
  onBeforeUnmount(() => {
    stopAutoScroll();
  });
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  
  .carousel-slide.active {
    opacity: 1;
  }
  
  .indicator {
    position: absolute;
    right: 86px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  
  .segment {
    width: 1px;
    height: 58px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s, width 0.3s;
  }
  
  .segment.active {
    background-color: #fefefe;
    width: 2px;
  }
  </style>
  