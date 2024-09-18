<template>
  <div class="carousel-container" @wheel.capture="handleScrollFn">
    <div class="carousel-slide" :class="{ 
          active: activeIndex === 0 && direct, 
          disactive: activeIndex !== 0 && direct, 
          activeUp: activeIndex === 0 && !direct,
          disactiveUp: activeIndex !== 0 && !direct, 
          restatus: isRefresh }">
      <slot name="one"></slot>
    </div>
    <div class="carousel-slide" :class="{ 
          active: activeIndex === 1 && direct, 
          disactive: activeIndex !== 1 && direct,
          activeUp: activeIndex === 1 && !direct,
          disactiveUp: activeIndex !== 1 && !direct }" v-show="!isRefresh">
      <slot name="two"></slot>
    </div>
    <div class="carousel-slide" :class="{ 
          active: activeIndex === 2 && direct, 
          disactive: activeIndex !== 2 && direct,
          activeUp: activeIndex === 2 && !direct,
          disactiveUp: activeIndex !== 2 && !direct }" v-show="!isRefresh">
      <slot name="three"></slot>
    </div>
    <div class="carousel-slide" :class="{ 
          active: activeIndex === 3 && direct, 
          disactive: activeIndex !== 3 && direct,
          activeUp: activeIndex === 3 && !direct,
          disactiveUp: activeIndex !== 3 && !direct }" v-show="!isRefresh">
      <slot name="four"></slot>
    </div>
    <div class="indicator">
      <div v-for="(segment, index) in 4" :key="index" :class="{ active: activeIndex === index }" class="segment"
        @click="handleClick(index)"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { throttle } from '../utils/common';
import { TaskExecutor } from '../executor/executor';
import { TimeInterval } from '../constant/constant';

const activeIndex = ref(0);
const totalSlides = 4; // 总共4个轮播项
const isLock = ref(false);
const isRefresh = ref(true);
const direct = ref(true);

const task = () => {
  if (!isLock.value) {
    isRefresh.value = false;
    activeIndex.value = (activeIndex.value + 1) % totalSlides;
  }
};

const startAutoScroll = () => {
  TaskExecutor.getInstance().pushListTask('CAROUSEL_TASK', task, TimeInterval.FIVE_SECOND);
};

const stopAutoScroll = () => {
  TaskExecutor.getInstance().removeListTask('CAROUSEL_TASK');
};

const handleScroll = (event: WheelEvent) => {
  isRefresh.value = false;
  isLock.value = true;
  stopAutoScroll();
  if (event.deltaY > 0) { // 向下滚动
    direct.value = true;
    activeIndex.value = (activeIndex.value + 1) % totalSlides;
  } else { // 向上滚动
    direct.value = false;
    activeIndex.value = (activeIndex.value - 1 + totalSlides) % totalSlides;
  }
  startAutoScroll();
  isLock.value = false;
};

const handleClick = (index) => {
  if (activeIndex.value != index) {
    isRefresh.value = false;
    isLock.value = true;
    stopAutoScroll();
    activeIndex.value < index ? direct.value = true : null;
    activeIndex.value > index ? direct.value = false : null;
    activeIndex.value = index;
    startAutoScroll();
    isLock.value = false;
  }
}

const handleScrollFn = throttle(handleScroll, 250, 1000);

onMounted(() => {
  TaskExecutor.getInstance().start();
  startAutoScroll();
  setTimeout(() => {
    isRefresh.value = false;
  }, TimeInterval.TEN_SECOND);
});

onBeforeUnmount(() => {
  stopAutoScroll();
});
</script>

<style lang="less" scoped>
@keyframes slideInDown {
  from {
    opacity: 1;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes refreshShow {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes disactive {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.5;
    transform: translateY(100%);
  }
}

@keyframes disactiveUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.5;
    transform: translateY(-100%);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0.5;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

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
    transition: opacity 0.75s ease-in-out;
    
    &.active {
      opacity: 1;
      animation: slideInDown 0.5s;

      &.restatus {
        opacity: 1;
        animation: refreshShow 0.5s;
      }
    }

    &.activeUp {
      opacity: 1;
      animation: slideInUp 0.5s;

      &.restatus {
        opacity: 1;
        animation: refreshShow 0.5s;
      }
    }

    &.disactive {
      opacity: 0;
      animation: disactive 0.5s;
    }

    &.disactiveUp {
      opacity: 0;
      animation: disactiveUp 0.5s;
    }
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

    .segment {
      width: 1px;
      height: 58px;
      background-color: rgba(255, 255, 255, 0.4);
      transition: background-color 0.3s, width 0.3s;

      &:before {
        width: 65px;
        height: 58px;
        content: '';
        font-size: 12px;
        margin-left: -30px;
        display: block;
        cursor: pointer;
        background: transparent;
      }

      &.active {
        background-color: #fefefe;
        width: 2px;
      }

      &:hover {
        background-color: #fefefe;
        width: 2px;
        opacity: 0.75;
      }
    }
  }
}
</style>