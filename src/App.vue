<template>
  <div id="container" :class="$route.name" :style="{ height: typeof height === 'number' ? (height + 'px') : height , overflow: typeof height === 'number' ? 'hidden' : null }">
    <header v-if="!$route.name.startsWith('mobile')">
      <Header ref="headerRef" v-show="isHeaderShow" @enter.enter="onAnimationStart"
        :class="{ [animationName]: $route.name !== 'home' }" :fixedToTop="$route.path === '/'"
        :theme-color="themeColor">
      </Header>
    </header>
    <main>
      <router-view v-slot="{ Component }" :key="$route.path">
        <transition :name="animationName">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer v-if="$route.name !== 'home' && !$route.name.startsWith('mobile') && isFooterShow">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from 'vue-router'
import EventBus from './helper/EventBus'
import { sleep, handleResize, isMobileDevice } from './utils/common';
import { MsgManager } from "./manager/MsgManager";

const route = useRoute();
const router = useRouter();
const animationName = ref("slideInDown");
const pageTransitionName = ref("");
const homeScrollY = ref(0);
const headerRef = ref();
const isHeaderShow = ref(true);
const isFooterShow = ref(false);
const height = ref();

// 监听鼠标滚动事件
const menu = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  homeScrollY.value = scrollTop;
  isHeaderShow.value = scrollTop < 50 ? true : false;
}

const themeColor = computed(() => {
  return route.path === "/" ? homeScrollY.value < 400 ? "is-transparent" : "main-color" : "main-color"
})

const onAnimationStart = (e) => {
  if (e.animationName === "slideInDown") {
    e.target.style.top = 0;
  } else {
    e.target.style.top = -64;
  }
}

const handleMobile = () => {
  if (isMobileDevice()) {
    router.push('/mobileHome');
  } else if (route.name.startsWith('mobile')){
    router.push('/');
  }
}

const handleResizeListener = () => {
  handleMobile();
  handleResize();
}

EventBus.on("home-scrolling", (pos) => {
  homeScrollY.value = pos.y
})

watch(route, (newValue, oldValue) => {
  pageTransitionName.value = ["products", "home"].includes(newValue.name)
    ? ""
    : "jumpPage";
})

onMounted(async () => {
  handleResizeListener();
  window.addEventListener('scroll', menu);
  window.addEventListener('resize', handleResizeListener);
  MsgManager.getInstance().listen('container-height', (message) => {
    height.value = message.height;
  });
  await sleep(100);
  isFooterShow.value = true;
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', menu);
  window.removeEventListener('resize', handleResizeListener);
});

</script>
<style lang="less">
html, body, div#app, div.plans {
  overflow-x: hidden;
}

.tooltips-text {
  margin: 5px 0 0 30px;
  color: #fefefe;
  background: #0f0f0f90;
  padding: 10px 25px;
  border-radius: 4px;
  transform-origin: top center;

  span {
    margin: 0 15px 0 0;
    cursor: pointer;

    &:first-child {
      margin: 0px 15px 0px 15px;
    }

    &:last-child {
      margin: 0px 0px 0px 15px;
    }

    &:hover {
      color: #fefefeE0;
      text-shadow: 1px 0px 0px #fefefe10;
    }

    &.operation.active {
      color: #EF7D1B;
    }

    &.agriculture.active {
      color: #43A438;
    }

    &.information {
      display: none;
    }

    &.information.active {
      color: #30A8E6;
    }
  }
}

.slideInDown {
  position: fixed;
  top: 0;
  transition: all 0.4s;
}

.slideOutUp {
  position: fixed;
  top: -64px;
  transition: all 0.4s;
}

.jumpPage-leave-active {
  display: none;
}

.jumpPage-enter {
  transform: translate3d(0, 80px, 0);
  opacity: 0;
}

.jumpPage-enter-active {
  transition: all 0.3s;
}

#container {
  min-width: 800px;
}

header {
  position: relative;
  z-index: 1000;
}

a {
  text-decoration: none;
}
</style>