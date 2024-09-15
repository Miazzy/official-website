<template>
  <div id="container">
    <header>
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
html,
body,
div#app,
div.plans {
  overflow-x: hidden;
}

.tooltips-text {
  margin: 10px 0 0 0;
  color: #fefefe;
  background: #0f0f0f90;
  padding: 10px 25px;
  border-radius: 4px;

  span {
    margin: 0 15px 0 0;
    cursor: pointer;

    &:hover {
      color: #EF7D1B;
    }
  }
}

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

  .home .carousel-container .banner .bg-button {
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

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 46px !important;

    &.en {
      font-size: 26px !important;
    }

    &.indicate {
      font-size: 24px !important;
    }
  }

  .plans.container .middle-content {

    .upper {
      font-size: 50px !important;

      .shadow-text {
        font-size: 135px !important;
      }

      .bottom-text {
        font-size: 28px !important;
      }
    }

    .description {
      margin: 135px 87.5px 53.5px 87.5px !important;
      font-size: 30px !important;
      line-height: 60px !important;
    }

    .index-container {
      margin: 100px 0 0 120px !important;

      .box {
        width: 330px !important;
        height: 190px !important;
        margin-right: 50.5px !important;

        .indicator-component {
          margin: 25px 0 0 90px !important;
        }

        .upper {
          span.num {
            font-size: 62px !important;
          }

          span.unit {
            font-size: 30px !important;
          }
        }

        .descript {
          font-size: 22px !important;
        }
      }
    }
  }

  .plans.container .bottom-section .business-container {
    margin: 390px 80px 0px 26vw !important;

    .box {
      width: 400px !important;
      height: 625px !important;

      .icon {
        margin: 80px 0 10px 35% !important;
        font-size: 90px !important;
        height: 90px !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 30px !important;
          margin: 7.5px 0 12.5px 0 !important;
        }

        .text {
          font-size: 16px !important;
          margin: 15px 75px 10px 75px !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 460px;
  }

  .aboutus.container .submid-section {
    padding: 0px 220px 0 220px !important;
  }

  .aboutus.container .bottom-section {
    padding: 0px 220px 0 220px !important;
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

  .plans.container .middle-content .index-container {
    .box {
      .indicator-component {
        margin: 25px 0 0 70px !important;
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 415px;
  }

  .aboutus.container .middle-section{
    margin: 30px 80px 0 120px !important;
    overflow: hidden !important;

    .banner {
      padding: 8px !important;
      margin: 0px 30px 0 0 !important;

      .upper {
        margin: 40px 0 10px 10px !important;
        font-size: 42px !important;
        line-height: 39px !important;

        .shadow-text {
          top: -20px !important;
          font-size: 90px !important;
        }

        .bottom-text {
          top: 50px !important;
          font-size: 24px !important;
          line-height: 39px !important;
        }
      }

      .content {
        position: absolute;
        left: 35px;
        top: 150px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 1.8em !important;
          font-size: 18px !important;
        }
      }
    }

    .image {
      padding: 8px !important;

      img {
        margin: 168px 0 0 30px !important;
      }
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 140px 0 140px !important;
  }

  .aboutus.container .bottom-section {
    padding: 0px 140px 0 140px !important;
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
