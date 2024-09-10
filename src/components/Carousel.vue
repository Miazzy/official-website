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
        <div v-for="(segment, index) in 4" :key="index" :class="{ active: activeIndex === index }" class="segment" @click="handleClick(index)"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { throttle } from '../utils/common';
  import { TaskExecutor } from '../executor/executor';
  
  const activeIndex = ref(0);
  const totalSlides = 4; // 总共4个轮播项
  const isLock = ref(false);
  
  const task = () => {
    if (!isLock.value) {
      activeIndex.value = (activeIndex.value + 1) % totalSlides;
    }
  };

  const startAutoScroll = () => {
    TaskExecutor.getInstance().pushListTask('CAROUSEL_TASK', task, 5000);
  };
  
  const stopAutoScroll = () => {
    TaskExecutor.getInstance().removeListTask('CAROUSEL_TASK');
  };
  
  const handleScroll = (event: WheelEvent) => {
    isLock.value = true;
    stopAutoScroll();
    if (event.deltaY > 0) { // 向下滚动
      activeIndex.value = (activeIndex.value + 1) % totalSlides;
    } else { // 向上滚动
      activeIndex.value = (activeIndex.value - 1 + totalSlides) % totalSlides;
    }
    startAutoScroll();
    isLock.value = false;
  };

  const handleClick = (index) => {
    isLock.value = true;
    stopAutoScroll();
    activeIndex.value = index;
    startAutoScroll();
    isLock.value = false;
  }

  const handleScrollFn = throttle(handleScroll, 1500);
  
  onMounted(() => {
    TaskExecutor.getInstance().start();
    startAutoScroll();
  });
  
  onBeforeUnmount(() => {
    stopAutoScroll();
  });
  </script>
  
  <style lang="less" scoped>
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
    width: 5px;
    background: transparent;
  }
  
  .segment {
    width: 1px;
    height: 58px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s, width 0.3s;
  }
  
  .segment:before{
    width: 65px;
    height: 58px;
    content: '';
    font-size: 12px;
    margin-left: -30px;
    display: block;
    cursor: pointer;
    background: transparent;
  }

  .segment.active {
    background-color: #fefefe;
    width: 2px;
  }

  .segment:hover {
    background-color: #fefefe;
    width: 2px;
    opacity: 0.75;
  }
  </style>
  