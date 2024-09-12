<template>
  <div id="container">
    <header>
      <Header ref="headerRef" v-show="isHeaderShow" @enter.enter="onAnimationStart" 
        :class="{ [animationName]: $route.name !== 'home' }"
        :fixedToTop="$route.path === '/'" :theme-color="themeColor">
      </Header>
    </header>
    <main>
      <router-view v-slot="{ Component }" :key="$route.path">
        <transition :name="animationName">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer v-if="$route.name !== 'home' && isFooterShow">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from 'vue-router'
import EventBus from './helper/EventBus'
import { sleep } from './utils/common';

const route = useRoute()
const animationName = ref("slideInDown")
const pageTransitionName = ref("")
const homeScrollY = ref(0)
const headerRef = ref();
const isHeaderShow = ref(true);
const isFooterShow = ref(false);

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

EventBus.on("home-scrolling", (pos) => {
  homeScrollY.value = pos.y
})

watch(route, (newValue, oldValue) => {
  pageTransitionName.value = ["products", "home"].includes(newValue.name)
    ? ""
    : "jumpPage";
})

onMounted(async () => {
  window.addEventListener('scroll', menu)
  await sleep(100);
  isFooterShow.value = true;
})

</script>
<style lang="less">
@media screen and (min-width: 1900px) and (max-width: 2000px) {
  .header .navbar {
    margin-left: calc(27vw + 15px) !important;
    margin-top: calc(11.75vh + 12px) !important;

    &-item {
      width: 100px !important;
      font-size: 24.5px !important;
    }
  }

  .home .carousel-container .indicator {
    right: 120px !important;
    top: calc(50% + 0px) !important;

    .segment {
      height: 64px !important;
    }
  }

  .home .carousel-container .banner .bg-button{
      width: 161px;
      height: 49px;
      left: 264px;
      top: calc(50vh + 80px);

      .content {
        margin: 10px 22px;
        font-size: 20px;
        font-weight: 600;
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle[data-v-e345e995] {
        left: -33px;
        top: 90px;
        font-size: 22px;
        width: 700px;
        letter-spacing: 0px;
    }
  }

  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        font-size: 11.5px !important;
        right: 95px !important;
        top: calc(50vh - 108px) !important;
      }
    }

    &:nth-child(2) {
      .banner .tooltip {
        right: 95px !important;
        top: calc(50vh - 55.5px) !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        right: 95px !important;
        top: calc(50vh + 10px) !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        right: 95px !important;
        top: calc(50vh + 78px) !important;
      }
    }
  }
}

@media screen and (min-width: 1650px) and (max-width: 1680px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        top: calc(50vh - 96.5px) !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        top: calc(50vh + 6px) !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        top: calc(50vh + 68px) !important;
      }
    }
  }

  .plans .top-section .banner {
    margin: 240px 0 0 0 !important;
      .text {
        font-size: 59px !important;
        &.en {
          font-size: 22px !important;
        }
      }
  }
}
</style>
<style scoped lang="scss">
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
  min-width: 1200px;
}

footer {
  //margin-top: 100px;
}

header {
  position: relative;
  z-index: 1000;
}

a {
  text-decoration: none;
}
</style>
