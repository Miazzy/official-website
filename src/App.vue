<template>
  <div id="container" :class="$route.name">
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
      color: #fefefeE0;
      text-shadow: 1px 0px 0px #fefefe10;
    }

    &.operation.active {
      color: #EF7D1B;
    }

    &.agriculture.active {
      color: #43A438;
    }

    &.information.active {
      color: #30A8E6;
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 1050px) and (max-height: 1080px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(40vh + 108px) !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: 412px !important;
        font-size: 50px !important;
        left: 215px !important;

        .subTitle {
          top: 75px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 68px) !important;
        left: 215px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 425px !important;
        left: 220px !important;

        .subTitle {
          top: 86px !important;
          font-size: 26px !important;
          left: -222px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 217px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 1000px) and (max-height: 1049px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        top: 378px !important;
        font-size: 50px !important;
        left: 215px !important;

        .subTitle {
          top: 72px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 66px) !important;
        left: 215px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 395px !important;
        left: 220px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -228px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 55px) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 969px) and (max-height: 999px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        left: 215px !important;
        top: 365px !important;
        font-size: 50px !important;

        .subTitle {
          top: 72px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 66px) !important;
        left: 215px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 380px !important;
        left: 220px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -228px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 55px) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 919px) and (max-height: 968px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        left: 215px !important;
        top: 345px !important;
        font-size: 50px !important;

        .subTitle {
          top: 65px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 220px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 360px !important;
        left: 210px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -210px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 51px) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 880px) and (max-height: 918px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        left: 215px !important;
        top: 330px !important;
        font-size: 50px !important;

        .subTitle {
          top: 65px !important;
          left: -55px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 61px) !important;
        left: 218px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 340px !important;
        left: 210px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -210px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 50px) !important;
        left: 219px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 800px) and (max-height: 879px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        left: 215px !important;
        top: 315px !important;
        font-size: 50px !important;

        .subTitle {
          top: 62px !important;
          left: -55px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 58px) !important;
        left: 218px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 325px !important;
        left: 210px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -210px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 48px) !important;
        left: 219px !important;
      }
    }
  }
}

@media only screen and (min-width: 1920px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        left: 215px !important;
        top: 275px !important;
        font-size: 50px !important;

        .subTitle {
          top: 62px !important;
          left: -55px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 48px) !important;
        left: 218px !important;
      }
    }

    &:not(:first-child) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 285px !important;
        left: 210px !important;

        .subTitle {
          top: 65px !important;
          font-size: 26px !important;
          left: -210px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 38px) !important;
        left: 219px !important;
      }
    }
  }
}

@media screen and (min-width: 2151px) and (max-width: 2199px) {

.header .logo a {
  margin: 20px 0 0 210px !important;

  .logo {
    width: 142px !important;

    img {
      width: 142px !important;
    }
  }
}

.header .navbar {
  margin-left: calc(34vw + 47.5px) !important;
  margin-top: calc(3.95vh + 0px) !important;

  a {
    &:first-child {
      .navbar-item {
        width: 40px !important;
      }
    }
  }

  &-item {
    margin: -6px 30px 0px 30px !important;
    width: 75px !important;
    min-width: 40px !important;
    font-size: 18.5px !important;
  }
}

.aboutus.container .top-section .banner {
  margin: 271px 0 0 0 !important;

  .text {
    font-size: 50px !important;
  }

  .text.en {
    font-weight: 600 !important;
    font-size: 18px !important;
  }
}

.aboutus.container .middle-section {
  margin: 0px 305px 0 305px !important;

  .image img {
    margin: 208px 0 0 50px !important;
  }

  .banner {
    .upper {
      margin: 30px 0 10px 0px !important;
      padding: 10px 0px 10px 0px !important;
      font-size: 34px !important;

      .shadow-text {
        top: 53px !important;
        left: -2px !important;
        font-size: 72px !important;
        letter-spacing: -3px !important;
      }

      .bottom-text {
        top: 107px !important;
        left: 0px !important;
        font-size: 16px !important;
      }
    }

    .content {
      left: 14px !important;
      top: 198px !important;

      p {
        line-height: 1.8 !important;
        text-indent: 2em !important;
        font-size: 16px !important;

        &:nth-child(2) {
          font-size: 16px !important;
          margin: -10px 0 0 0;
        }

        &:nth-child(3) {
          font-size: 16px !important;
          margin: 0px 0 0 0;
        }
      }
    }
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

.home .carousel-container {
  .carousel-slide {
    &:not(:first-child) {
      .banner .banner-title .subTitle {
        left: -182px;
        top: 118px;
        font-size: 34px;
        width: 700px;
        letter-spacing: -3px;
      }

      .banner .bg-button {
        width: 161px;
        height: 49px;
        left: 200px;
        top: calc(50vh + 90px);
      }
    }
  }
}

.home .carousel-container .banner .banner-title {
  font-size: 64.5px;
  left: 269px !important;
  top: 395px !important;

  .subTitle {
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

  &:not(:first-child) {
    .banner-title {
      left: 202px !important;
      top: 399px !important;
    }
  }
}

.home .copyright {
  bottom: 11px !important;
  right: 194px !important;
  font-size: 16.5px !important;
}

.plans.container .bottom-section .banner .text {
  padding: 2px 0 0 0 !important;
  font-size: 34px !important;

  &.en {
    font-size: 16px !important;
  }

  &.indicate {
    font-size: 16px !important;
  }
}

.plans.container .middle-content {
  margin: -68px 220px 0 220px !important;
  background-image: url('/src/assets/images/plan_wenli.jpg') !important;
  background-size: cover !important;
  background-position: center !important;

  .upper {
    font-size: 34px !important;
    margin: 100px 0 10px 84px !important;

    .shadow-text {
      font-size: 72px !important;
    }

    .bottom-text {
      font-size: 16px !important;
    }
  }

  .description {
    text-indent: 2em !important;
    margin: 65px 87.5px 53.5px 87.5px !important;
    font-size: 16px !important;
    line-height: 30px !important;
  }

  .index-container {
    margin: 100px 0 0 120px !important;

    .box {
      width: 386px;
      height: 170px;
      margin-right: 50.5px !important;

      .indicator-component {
        margin: -90px 0 0 20px !important;
      }

      .upper {
        span.num {
          font-size: 52px !important;
        }

        span.unit {
          font-size: 24px !important;
        }
      }

      .descript {
        font-size: 18px !important;
        margin: 0 0 0 50px !important;
      }
    }
  }
}

.plans.container .bottom-section .business-container {
  margin: 270px 80px 0px calc(28vw + 20px) !important;

  .box {
    width: 322px !important;
    height: 442px !important;

    .icon {
      margin: 80px 0 10px 35% !important;
      font-size: 74px !important;
      height: 75px !important;
      color: #686868 !important;
    }

    .text-content {
      height: 415px !important;

      .title {
        font-size: 24px !important;
        color: #333333 !important;
        margin: 7.5px 0 12.5px 0 !important;
        opacity: 1 !important;
      }

      .text {
        font-size: 13px !important;
        margin: 15px 75px 10px 75px !important;
        color: #999999 !important;
        opacity: 1 !important;
      }
    }
  }
}

.plans.container .middle-content .index-container .three-box-layout .card-component {
  width: 100% !important;
  height: 170px !important;
  padding-left: 50px !important;

  .icon-box .iconfont {
    font-size: 78px !important;
  }

  .label-box .label-ch-text {
    font-size: 26px !important;
  }

  .label-box .label-en-text {
    font-size: 16px !important;
  }
}

.aboutus.container .submid-section {
  padding: 0px 310px 0 310px !important;
}

.aboutus.container .bottom-section {
  padding: 0px 310px 0 310px !important;
}

#container {
  &:not(.home) {
    main {
      transform: scale(1.12) !important;
    }

    .footer {
      margin: 120px 0 0 0 !important;
    }
  }
}
}

@media screen and (min-width: 2100px) and (max-width: 2150px) {

.header .logo a {
  margin: 20px 0 0 210px !important;

  .logo {
    width: 142px !important;

    img {
      width: 142px !important;
    }
  }
}

.header .navbar {
  margin-left: calc(34vw + 47.5px) !important;
  margin-top: calc(3.95vh + 0px) !important;

  a {
    &:first-child {
      .navbar-item {
        width: 40px !important;
      }
    }
  }

  &-item {
    margin: -6px 30px 0px 30px !important;
    width: 75px !important;
    min-width: 40px !important;
    font-size: 18.5px !important;
  }
}

.aboutus.container .top-section .banner {
  margin: 271px 0 0 0 !important;

  .text {
    font-size: 50px !important;
  }

  .text.en {
    font-weight: 600 !important;
    font-size: 18px !important;
  }
}

.aboutus.container .middle-section {
  margin: 0px 305px 0 305px !important;

  .image img {
    margin: 208px 0 0 50px !important;
  }

  .banner {
    .upper {
      margin: 30px 0 10px 0px !important;
      padding: 10px 0px 10px 0px !important;
      font-size: 34px !important;

      .shadow-text {
        top: 53px !important;
        left: -2px !important;
        font-size: 72px !important;
        letter-spacing: -3px !important;
      }

      .bottom-text {
        top: 107px !important;
        left: 0px !important;
        font-size: 16px !important;
      }
    }

    .content {
      left: 14px !important;
      top: 198px !important;

      p {
        line-height: 1.8 !important;
        text-indent: 2em !important;
        font-size: 16px !important;

        &:nth-child(2) {
          font-size: 16px !important;
          margin: -10px 0 0 0;
        }

        &:nth-child(3) {
          font-size: 16px !important;
          margin: 0px 0 0 0;
        }
      }
    }
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

.home .carousel-container {
  .carousel-slide {
    &:not(:first-child) {
      .banner .banner-title .subTitle {
        left: -182px;
        top: 118px;
        font-size: 34px;
        width: 700px;
        letter-spacing: -3px;
      }

      .banner .bg-button {
        width: 161px;
        height: 49px;
        left: 200px;
        top: calc(50vh + 90px);
      }
    }
  }
}

.home .carousel-container .banner .banner-title {
  font-size: 64.5px;
  left: 269px !important;
  top: 395px !important;

  .subTitle {
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

  &:not(:first-child) {
    .banner-title {
      left: 202px !important;
      top: 399px !important;
    }
  }
}

.home .copyright {
  bottom: 11px !important;
  right: 194px !important;
  font-size: 16.5px !important;
}

.plans.container .bottom-section .banner .text {
  padding: 2px 0 0 0 !important;
  font-size: 34px !important;

  &.en {
    font-size: 16px !important;
  }

  &.indicate {
    font-size: 16px !important;
  }
}

.plans.container .middle-content {
  margin: -68px 220px 0 220px !important;
  background-image: url('/src/assets/images/plan_wenli.jpg') !important;
  background-size: cover !important;
  background-position: center !important;

  .upper {
    font-size: 34px !important;
    margin: 100px 0 10px 84px !important;

    .shadow-text {
      font-size: 72px !important;
    }

    .bottom-text {
      font-size: 16px !important;
    }
  }

  .description {
    text-indent: 2em !important;
    margin: 65px 87.5px 53.5px 87.5px !important;
    font-size: 16px !important;
    line-height: 30px !important;
  }

  .index-container {
    margin: 100px 0 0 120px !important;

    .box {
      width: 386px;
      height: 170px;
      margin-right: 50.5px !important;

      .indicator-component {
        margin: -90px 0 0 20px !important;
      }

      .upper {
        span.num {
          font-size: 52px !important;
        }

        span.unit {
          font-size: 24px !important;
        }
      }

      .descript {
        font-size: 18px !important;
        margin: 0 0 0 50px !important;
      }
    }
  }
}

.plans.container .bottom-section .business-container {
  margin: 270px 80px 0px calc(28vw + 20px) !important;

  .box {
    width: 322px !important;
    height: 442px !important;

    .icon {
      margin: 80px 0 10px 35% !important;
      font-size: 74px !important;
      height: 75px !important;
      color: #686868 !important;
    }

    .text-content {
      height: 415px !important;

      .title {
        font-size: 24px !important;
        color: #333333 !important;
        margin: 7.5px 0 12.5px 0 !important;
        opacity: 1 !important;
      }

      .text {
        font-size: 13px !important;
        margin: 15px 75px 10px 75px !important;
        color: #999999 !important;
        opacity: 1 !important;
      }
    }
  }
}

.plans.container .middle-content .index-container .three-box-layout .card-component {
  width: 100% !important;
  height: 170px !important;
  padding-left: 50px !important;

  .icon-box .iconfont {
    font-size: 78px !important;
  }

  .label-box .label-ch-text {
    font-size: 26px !important;
  }

  .label-box .label-en-text {
    font-size: 16px !important;
  }
}

.aboutus.container .submid-section {
  padding: 0px 310px 0 310px !important;
}

.aboutus.container .bottom-section {
  padding: 0px 310px 0 310px !important;
}

#container {
  &:not(.home) {
    main {
      transform: scale(1.15) !important;
    }

    .footer {
      margin: 120px 0 0 0 !important;
    }
  }
}
}

@media screen and (min-width: 2051px) and (max-width: 2099px) {

.header .logo a {
  margin: 20px 0 0 210px !important;

  .logo {
    width: 142px !important;

    img {
      width: 142px !important;
    }
  }
}

.header .navbar {
  margin-left: calc(34vw + 47.5px) !important;
  margin-top: calc(3.95vh + 0px) !important;

  a {
    &:first-child {
      .navbar-item {
        width: 40px !important;
      }
    }
  }

  &-item {
    margin: -6px 30px 0px 30px !important;
    width: 75px !important;
    min-width: 40px !important;
    font-size: 18.5px !important;
  }
}

.aboutus.container .top-section .banner {
  margin: 271px 0 0 0 !important;

  .text {
    font-size: 50px !important;
  }

  .text.en {
    font-weight: 600 !important;
    font-size: 18px !important;
  }
}

.aboutus.container .middle-section {
  margin: 0px 305px 0 305px !important;

  .image img {
    margin: 208px 0 0 50px !important;
  }

  .banner {
    .upper {
      margin: 30px 0 10px 0px !important;
      padding: 10px 0px 10px 0px !important;
      font-size: 34px !important;

      .shadow-text {
        top: 53px !important;
        left: -2px !important;
        font-size: 72px !important;
        letter-spacing: -3px !important;
      }

      .bottom-text {
        top: 107px !important;
        left: 0px !important;
        font-size: 16px !important;
      }
    }

    .content {
      left: 14px !important;
      top: 198px !important;

      p {
        line-height: 1.8 !important;
        text-indent: 2em !important;
        font-size: 16px !important;

        &:nth-child(2) {
          font-size: 16px !important;
          margin: -10px 0 0 0;
        }

        &:nth-child(3) {
          font-size: 16px !important;
          margin: 0px 0 0 0;
        }
      }
    }
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

.home .carousel-container {
  .carousel-slide {
    &:not(:first-child) {
      .banner .banner-title .subTitle {
        left: -182px;
        top: 118px;
        font-size: 34px;
        width: 700px;
        letter-spacing: -3px;
      }

      .banner .bg-button {
        width: 161px;
        height: 49px;
        left: 200px;
        top: calc(50vh + 90px);
      }
    }
  }
}

.home .carousel-container .banner .banner-title {
  font-size: 64.5px;
  left: 269px !important;
  top: 395px !important;

  .subTitle {
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

  &:not(:first-child) {
    .banner-title {
      left: 202px !important;
      top: 399px !important;
    }
  }
}

.home .copyright {
  bottom: 11px !important;
  right: 194px !important;
  font-size: 16.5px !important;
}

.plans.container .bottom-section .banner .text {
  padding: 2px 0 0 0 !important;
  font-size: 34px !important;

  &.en {
    font-size: 16px !important;
  }

  &.indicate {
    font-size: 16px !important;
  }
}

.plans.container .middle-content {
  margin: -68px 220px 0 220px !important;
  background-image: url('/src/assets/images/plan_wenli.jpg') !important;
  background-size: cover !important;
  background-position: center !important;

  .upper {
    font-size: 34px !important;
    margin: 100px 0 10px 84px !important;

    .shadow-text {
      font-size: 72px !important;
    }

    .bottom-text {
      font-size: 16px !important;
    }
  }

  .description {
    text-indent: 2em !important;
    margin: 65px 87.5px 53.5px 87.5px !important;
    font-size: 16px !important;
    line-height: 30px !important;
  }

  .index-container {
    margin: 100px 0 0 120px !important;

    .box {
      width: 386px;
      height: 170px;
      margin-right: 50.5px !important;

      .indicator-component {
        margin: -90px 0 0 20px !important;
      }

      .upper {
        span.num {
          font-size: 52px !important;
        }

        span.unit {
          font-size: 24px !important;
        }
      }

      .descript {
        font-size: 18px !important;
        margin: 0 0 0 50px !important;
      }
    }
  }
}

.plans.container .bottom-section .business-container {
  margin: 270px 80px 0px calc(28vw + 20px) !important;

  .box {
    width: 322px !important;
    height: 442px !important;

    .icon {
      margin: 80px 0 10px 35% !important;
      font-size: 74px !important;
      height: 75px !important;
      color: #686868 !important;
    }

    .text-content {
      height: 415px !important;

      .title {
        font-size: 24px !important;
        color: #333333 !important;
        margin: 7.5px 0 12.5px 0 !important;
        opacity: 1 !important;
      }

      .text {
        font-size: 13px !important;
        margin: 15px 75px 10px 75px !important;
        color: #999999 !important;
        opacity: 1 !important;
      }
    }
  }
}

.plans.container .middle-content .index-container .three-box-layout .card-component {
  width: 100% !important;
  height: 170px !important;
  padding-left: 50px !important;

  .icon-box .iconfont {
    font-size: 78px !important;
  }

  .label-box .label-ch-text {
    font-size: 26px !important;
  }

  .label-box .label-en-text {
    font-size: 16px !important;
  }
}

.aboutus.container .submid-section {
  padding: 0px 310px 0 310px !important;
}

.aboutus.container .bottom-section {
  padding: 0px 310px 0 310px !important;
}

#container {
  &:not(.home) {
    main {
      transform: scale(1.19) !important;
    }

    .footer {
      margin: 190px 0 0 0 !important;
    }
  }
}
}

@media screen and (min-width: 2000px) and (max-width: 2050px) {

.header .logo a {
  margin: 20px 0 0 210px !important;

  .logo {
    width: 142px !important;

    img {
      width: 142px !important;
    }
  }
}

.header .navbar {
  margin-left: calc(34vw + 47.5px) !important;
  margin-top: calc(3.95vh + 0px) !important;

  a {
    &:first-child {
      .navbar-item {
        width: 40px !important;
      }
    }
  }

  &-item {
    margin: -6px 30px 0px 30px !important;
    width: 75px !important;
    min-width: 40px !important;
    font-size: 18.5px !important;
  }
}

.aboutus.container .top-section .banner {
  margin: 271px 0 0 0 !important;

  .text {
    font-size: 50px !important;
  }

  .text.en {
    font-weight: 600 !important;
    font-size: 18px !important;
  }
}

.aboutus.container .middle-section {
  margin: 0px 305px 0 305px !important;

  .image img {
    margin: 208px 0 0 50px !important;
  }

  .banner {
    .upper {
      margin: 30px 0 10px 0px !important;
      padding: 10px 0px 10px 0px !important;
      font-size: 34px !important;

      .shadow-text {
        top: 53px !important;
        left: -2px !important;
        font-size: 72px !important;
        letter-spacing: -3px !important;
      }

      .bottom-text {
        top: 107px !important;
        left: 0px !important;
        font-size: 16px !important;
      }
    }

    .content {
      left: 14px !important;
      top: 198px !important;

      p {
        line-height: 1.8 !important;
        text-indent: 2em !important;
        font-size: 16px !important;

        &:nth-child(2) {
          font-size: 16px !important;
          margin: -10px 0 0 0;
        }

        &:nth-child(3) {
          font-size: 16px !important;
          margin: 0px 0 0 0;
        }
      }
    }
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

.home .carousel-container {
  .carousel-slide {
    &:not(:first-child) {
      .banner .banner-title .subTitle {
        left: -182px;
        top: 118px;
        font-size: 34px;
        width: 700px;
        letter-spacing: -3px;
      }

      .banner .bg-button {
        width: 161px;
        height: 49px;
        left: 200px;
        top: calc(50vh + 90px);
      }
    }
  }
}

.home .carousel-container .banner .banner-title {
  font-size: 64.5px;
  left: 269px !important;
  top: 395px !important;

  .subTitle {
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

  &:not(:first-child) {
    .banner-title {
      left: 202px !important;
      top: 399px !important;
    }
  }
}

.home .copyright {
  bottom: 11px !important;
  right: 194px !important;
  font-size: 16.5px !important;
}

.plans.container .bottom-section .banner .text {
  padding: 2px 0 0 0 !important;
  font-size: 34px !important;

  &.en {
    font-size: 16px !important;
  }

  &.indicate {
    font-size: 16px !important;
  }
}

.plans.container .middle-content {
  margin: -68px 220px 0 220px !important;
  background-image: url('/src/assets/images/plan_wenli.jpg') !important;
  background-size: cover !important;
  background-position: center !important;

  .upper {
    font-size: 34px !important;
    margin: 100px 0 10px 84px !important;

    .shadow-text {
      font-size: 72px !important;
    }

    .bottom-text {
      font-size: 16px !important;
    }
  }

  .description {
    text-indent: 2em !important;
    margin: 65px 87.5px 53.5px 87.5px !important;
    font-size: 16px !important;
    line-height: 30px !important;
  }

  .index-container {
    margin: 100px 0 0 120px !important;

    .box {
      width: 386px;
      height: 170px;
      margin-right: 50.5px !important;

      .indicator-component {
        margin: -90px 0 0 20px !important;
      }

      .upper {
        span.num {
          font-size: 52px !important;
        }

        span.unit {
          font-size: 24px !important;
        }
      }

      .descript {
        font-size: 18px !important;
        margin: 0 0 0 50px !important;
      }
    }
  }
}

.plans.container .bottom-section .business-container {
  margin: 270px 80px 0px calc(28vw + 20px) !important;

  .box {
    width: 322px !important;
    height: 442px !important;

    .icon {
      margin: 80px 0 10px 35% !important;
      font-size: 74px !important;
      height: 75px !important;
      color: #686868 !important;
    }

    .text-content {
      height: 415px !important;

      .title {
        font-size: 24px !important;
        color: #333333 !important;
        margin: 7.5px 0 12.5px 0 !important;
        opacity: 1 !important;
      }

      .text {
        font-size: 13px !important;
        margin: 15px 75px 10px 75px !important;
        color: #999999 !important;
        opacity: 1 !important;
      }
    }
  }
}

.plans.container .middle-content .index-container .three-box-layout .card-component {
  width: 100% !important;
  height: 170px !important;
  padding-left: 50px !important;

  .icon-box .iconfont {
    font-size: 78px !important;
  }

  .label-box .label-ch-text {
    font-size: 26px !important;
  }

  .label-box .label-en-text {
    font-size: 16px !important;
  }
}

.aboutus.container .submid-section {
  padding: 0px 310px 0 310px !important;
}

.aboutus.container .bottom-section {
  padding: 0px 310px 0 310px !important;
}

#container {
  &:not(.home) {
    main {
      transform: scale(1.12) !important;
    }

    .footer {
      margin: 120px 0 0 0 !important;
    }
  }
}
}

@media screen and (min-width: 1973px) and (max-width: 1999px) {

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 271px 0 0 0 !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
    }
  }

  .aboutus.container .middle-section {
    margin: 0px 305px 0 305px !important;

    .image img {
      margin: 208px 0 0 50px !important;
    }

    .banner {
      .upper {
        margin: 30px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 198px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 220px 0 220px !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 100px 0 10px 84px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 100px 0 0 120px !important;

      .box {
        width: 386px;
        height: 170px;
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -90px 0 0 20px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container .bottom-section .business-container {
    margin: 270px 80px 0px calc(28vw + 20px) !important;

    .box {
      width: 322px !important;
      height: 442px !important;

      .icon {
        margin: 80px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 310px 0 310px !important;
  }

  .aboutus.container .bottom-section {
    padding: 0px 310px 0 310px !important;
  }

  #container {
    &:not(.home) {
      main {
        transform: scale(1.07) !important;
      }

      .footer {
        margin: 60px 0 0 0 !important;
      }
    }
  }
}

@media screen and (min-width: 1900px) and (max-width: 1972px) {

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 271px 0 0 0 !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
    }
  }

  .aboutus.container .middle-section {
    margin: 0px 305px 0 305px !important;

    .image img {
      margin: 208px 0 0 50px !important;
    }

    .banner {
      .upper {
        margin: 30px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 198px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 220px 0 220px !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 100px 0 10px 84px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 100px 0 0 120px !important;

      .box {
        width: 386px;
        height: 170px;
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -90px 0 0 20px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container .bottom-section .business-container {
    margin: 270px 80px 0px calc(28vw + 20px) !important;

    .box {
      width: 322px !important;
      height: 442px !important;

      .icon {
        margin: 80px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 310px 0 310px !important;
  }

  .aboutus.container .bottom-section {
    padding: 0px 310px 0 310px !important;
  }
}

@media screen and (min-width: 1800px) and (max-width: 1899px) {
  transform: scale(0.95);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 271px 0 0 0 !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
    }
  }

  .aboutus.container .middle-section {
    margin: 0px 255px 0 255px !important;

    .image img {
      margin: 208px 0 0 50px !important;
    }

    .banner {
      .upper {
        margin: 30px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 198px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 180px 0 160px !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 100px 0 10px 84px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 100px 0 0 120px !important;

      .box {
        width: 386px;
        height: 170px;
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -90px 0 0 20px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    height: calc(1924px) !important;
  }

  .project-cases.container {
    height: calc(1924px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    margin: -68px 0 0 170px !important;
  }

  .project-cases .content-box-2 .smart-agriculture-box {
    margin: 0px 0 0 250px !important;
  }

  .plans.container .bottom-section .banner {
    margin: 56px 0 0 236px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 270px 80px 0px calc(28vw + 20px) !important;

    .box {
      width: 322px !important;
      height: 442px !important;

      .icon {
        margin: 80px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 310px 0 310px !important;
  }

  .aboutus.container .bottom-section {
    padding: 0px 310px 0 310px !important;
  }
}

@media screen and (min-width: 1700px) and (max-width: 1799px) {
  transform: scale(0.89);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 215px 0 0 -100px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    height: calc(2215px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 230px 0 230px !important;

    .image img {
      margin: 160px 0 0 70px !important;
    }

    .banner {
      .upper {
        margin: 30px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 198px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 205px 0 0 -100px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 115px 0 115px !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 100px 0 10px 84px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90);

      .box {
        width: 386px;
        height: 170px;
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -90px 0 0 20px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1810px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1810px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.95) !important;
    margin: -68px 0 0 120px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 25px 0 0 0 !important;
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -20px 0 0 -180px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -180px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.95) !important;
      margin: 0px 0 0 200px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 35px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 200px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 240px 80px 0px calc(26vw + 0px) !important;

    .box {
      width: 322px !important;
      height: 442px !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 230px 0 230px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.85) !important;
      margin: 10.5px 0 0 -110px !important;
      transform: scale(0.85) !important;
    }
  }

  .aboutus.container .bottom-section {
    padding: 0px 230px 0 230px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }
}

@media screen and (min-width: 1650px) and (max-width: 1699px) {
  transform: scale(0.86);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    overflow: hidden;
    height: calc(2105px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 155px 0 155px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -160px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 85px 0 85px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 98px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -330px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -330px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 170px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 185px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 165px 0 165px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.88) !important;
      margin: 0.5px 0 0 -110.5px !important;
      transform: scale(0.84) !important;
    }
  }

  .aboutus.container .bottom-section .map-container {
    transform: scale(0.90) !important;
    margin: 30px 0 0 -30px !important;
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 165px 0 165px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .footer {
    padding: 0 100px !important;
  }
}

@media screen and (min-width: 1600px) and (max-width: 1649px) {
  transform: scale(0.83);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    overflow: hidden;
    height: calc(2105px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 140px 0 140px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -140px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 55px 0 55px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 60px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 130px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 150px 0 150px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.80) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .footer {
    padding: 0 100px !important;
  }
}

@media screen and (min-width: 1550px) and (max-width: 1599px) {
  transform: scale(0.83);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    overflow: hidden;
    height: calc(2105px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 140px 0 140px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -140px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 55px 0 55px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 60px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 130px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 150px 0 150px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.80) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .footer {
    padding: 0 100px !important;
  }
}

@media screen and (min-width: 1500px) and (max-width: 1549px) {
  transform: scale(0.83);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    overflow: hidden;
    height: calc(2105px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 140px 0 140px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -140px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 55px 0 55px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 60px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 130px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 150px 0 150px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.80) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .footer {
    padding: 0 100px !important;
  }
}

@media screen and (min-width: 1400px) and (max-width: 1499px) {
  transform: scale(0.83);

  .header .logo a {
    margin: 20px 0 0 210px !important;

    .logo {
      width: 142px !important;

      img {
        width: 142px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(34vw + 47.5px) !important;
    margin-top: calc(3.95vh + 0px) !important;

    a {
      &:first-child {
        .navbar-item {
          width: 40px !important;
        }
      }
    }

    &-item {
      margin: -6px 30px 0px 30px !important;
      width: 75px !important;
      min-width: 40px !important;
      font-size: 18.5px !important;
    }
  }

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      font-size: 50px !important;
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: 5px 0 0 0 !important;
    }
  }

  .aboutus.container {
    overflow: hidden;
    height: calc(2105px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    margin: 0px 140px 0 140px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
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

  .home .carousel-container {
    .carousel-slide {
      &:not(:first-child) {
        .banner .banner-title .subTitle {
          left: -182px;
          top: 118px;
          font-size: 34px;
          width: 700px;
          letter-spacing: -3px;
        }

        .banner .bg-button {
          width: 161px;
          height: 49px;
          left: 200px;
          top: calc(50vh + 90px);
        }
      }
    }
  }

  .home .carousel-container .banner .banner-title {
    font-size: 64.5px;
    left: 269px !important;
    top: 395px !important;

    .subTitle {
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

    &:not(:first-child) {
      .banner-title {
        left: 202px !important;
        top: 399px !important;
      }
    }
  }

  .home .copyright {
    bottom: 11px !important;
    right: 194px !important;
    font-size: 16.5px !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -140px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 55px 0 55px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: 30px 0 0 60px !important;
      transform: scale(0.90) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 60px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 130px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    padding: 0px 150px 0 150px !important;

    .banner {
      margin: -20px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.80) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .footer {
    padding: 0 100px !important;
  }
}

@media screen and (min-width: 1351px) and (max-width: 1399px) {

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      transform: scale(0.83);
      font-size: 50px !important;
      margin: -35px 0 0 -270px
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: -5px 0 0 -280px !important;
    }
  }

  .aboutus.container {
    overflow: hidden !important;
    height: calc(1530px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    margin: 10px 150px 0 150px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
    }
  }

  .aboutus.container .bottom-section .banner {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    width: calc(111vw) !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -180px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 30px 0 30px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: -50px 0 0 -20px !important;
      transform: scale(0.8) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  #container.plans {
    main {
      height: calc(1300px) !important;
    }
  }

  #container.projectCases {
    main {
      height: calc(1330px) !important;
    }
  }

  #container.aboutus {
    main {
      height: calc(1530px) !important;
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1585px) !important;
    transform: scale(0.83);
    transform-origin: top left;

    .bottom-section {
      width: 121vw !important;
    }
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
    transform: scale(0.83);
    transform-origin: top left;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 30px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 100px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    margin: -220px 0 0 0;
    padding: 0px 150px 0 150px !important;

    .banner {
      transform: scale(0.67) !important;
      transform-origin: top left !important;
      width: calc(100%/0.67) !important;
      margin: -25px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.83) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .information-center .banner-box {
    width: calc(150%) !important;
    transform: scale(0.67) !important;
    transform-origin: top left !important;
  }

  .information-center .content-box {
    margin: -200px 0 0 0 !important;
  }

  .information-center .banner-box {
    .banner-title-ch {
      font-size: 61px !important;
    }

    .banner-title-en {
      font-size: 22px !important;
    }
  }

  .header .logo a {
    margin: 33.5px 0 0 33px !important;

    .logo {
      width: 140px !important;

      img {
        width: 140px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(20vw + 20px) !important;
    margin-top: calc(10.05vh) !important;

    .navbar-item {
      width: 60px !important;
      font-size: 14.5px !important;
      margin: 0 33px !important;
      padding: 1px 0 !important;
    }
  }

  .home .carousel-container .indicator {
    right: 79px !important;
    top: calc(50% + 0px) !important;

    .segment {
      height: 42.75px !important;

      &:before {
        height: 42.75px !important;
      }
    }
  }

  .home .copyright {
    bottom: -1px !important;
    right: 131px !important;
    font-size: 10.88px !important;
  }

  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 72px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(2) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 39px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 5px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 50px) !important;
        right: 55px !important;
      }
    }
  }

  .home .carousel-container .carousel-slide {

    .quota {
      .indicator-component {
        width: 145px !important;

        .upper span.num {
          font-size: 35px !important;
        }
      }
    }

    &:nth-child(1) {
      .banner-title {
        font-size: 42.5px !important;
        left: 180px !important;
        top: 263px !important;

        .subTitle {
          font-size: 14.75px !important;
          left: -5px !important;
          top: 60px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 176px !important;
        top: calc(50vh + 53px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:not(:first-child) {
      .banner-title {
        font-size: 42.5px !important;
        left: 135px !important;
        top: 269px !important;

        .subTitle {
          font-size: 20.75px !important;
          left: 0px !important;
          top: 76px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 134px !important;
        top: calc(50vh + 58px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }
  }

  .footer {
    padding: 0 80px !important;

    .footer-content-column {
      &:last-child {
        display: none;
      }
    }
  }

  .el-popper .tooltips-text {
    padding: 5px 15px !important;
    transform: scale(0.8) !important;
    transform-origin: center center !important;
    margin: -2px 0 0 15px !important;
  }
}

@media screen and (min-width: 1301px) and (max-width: 1350px) {

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      transform: scale(0.83);
      font-size: 50px !important;
      margin: -35px 0 0 -270px
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: -5px 0 0 -280px !important;
    }
  }

  .aboutus.container {
    overflow: hidden !important;
    height: calc(1530px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    margin: 10px 150px 0 150px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
    }
  }

  .aboutus.container .bottom-section .banner {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    width: calc(111vw) !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -180px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 30px 0 30px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: -50px 0 0 -20px !important;
      transform: scale(0.8) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  #container.plans {
    main {
      height: calc(1300px) !important;
    }
  }

  #container.projectCases {
    main {
      height: calc(1330px) !important;
    }
  }

  #container.aboutus {
    main {
      height: calc(1530px) !important;
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1585px) !important;
    transform: scale(0.83);
    transform-origin: top left;

    .bottom-section {
      width: 121vw !important;
    }
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
    transform: scale(0.83);
    transform-origin: top left;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 30px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 100px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    margin: -220px 0 0 0;
    padding: 0px 150px 0 150px !important;

    .banner {
      transform: scale(0.67) !important;
      transform-origin: top left !important;
      width: calc(100%/0.67) !important;
      margin: -25px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.83) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .information-center .banner-box {
    width: calc(150%) !important;
    transform: scale(0.67) !important;
    transform-origin: top left !important;
  }

  .information-center .content-box {
    margin: -200px 0 0 0 !important;
  }

  .information-center .banner-box {
    .banner-title-ch {
      font-size: 61px !important;
    }

    .banner-title-en {
      font-size: 22px !important;
    }
  }

  .header .logo a {
    margin: 33.5px 0 0 33px !important;

    .logo {
      width: 140px !important;

      img {
        width: 140px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(20vw + 20px) !important;
    margin-top: calc(10.05vh) !important;

    .navbar-item {
      width: 60px !important;
      font-size: 14.5px !important;
      margin: 0 33px !important;
      padding: 1px 0 !important;
    }
  }

  .home .carousel-container .indicator {
    right: 79px !important;
    top: calc(50% + 0px) !important;

    .segment {
      height: 42.75px !important;

      &:before {
        height: 42.75px !important;
      }
    }
  }

  .home .copyright {
    bottom: -1px !important;
    right: 131px !important;
    font-size: 10.88px !important;
  }

  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 72px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(2) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 39px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 5px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 50px) !important;
        right: 55px !important;
      }
    }
  }

  .home .carousel-container .carousel-slide {

    .quota {
      .indicator-component {
        width: 145px !important;

        .upper span.num {
          font-size: 35px !important;
        }
      }
    }

    &:nth-child(1) {
      .banner-title {
        font-size: 42.5px !important;
        left: 180px !important;
        top: 263px !important;

        .subTitle {
          font-size: 14.75px !important;
          left: -5px !important;
          top: 60px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 176px !important;
        top: calc(50vh + 53px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:not(:first-child) {
      .banner-title {
        font-size: 42.5px !important;
        left: 135px !important;
        top: 269px !important;

        .subTitle {
          font-size: 20.75px !important;
          left: 0px !important;
          top: 76px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 134px !important;
        top: calc(50vh + 58px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }
  }

  .footer {
    padding: 0 80px !important;

    .footer-content-column {
      &:last-child {
        display: none;
      }
    }
  }

  .el-popper .tooltips-text {
    padding: 5px 15px !important;
    transform: scale(0.8) !important;
    transform-origin: center center !important;
    margin: -2px 0 0 15px !important;
  }
}

@media screen and (min-width: 1281px) and (max-width: 1300px) {

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      transform: scale(0.83);
      font-size: 50px !important;
      margin: -35px 0 0 -270px
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: -5px 0 0 -280px !important;
    }
  }

  .aboutus.container {
    overflow: hidden !important;
    height: calc(1530px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    margin: 10px 150px 0 150px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
    }
  }

  .aboutus.container .bottom-section .banner {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    width: calc(111vw) !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -180px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 30px 0 30px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: -50px 0 0 -20px !important;
      transform: scale(0.8) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  #container.plans {
    main {
      height: calc(1300px) !important;
    }
  }

  #container.projectCases {
    main {
      height: calc(1330px) !important;
    }
  }

  #container.aboutus {
    main {
      height: calc(1530px) !important;
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1585px) !important;
    transform: scale(0.83);
    transform-origin: top left;

    .bottom-section {
      width: 121vw !important;
    }
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
    transform: scale(0.83);
    transform-origin: top left;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 30px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 100px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    margin: -220px 0 0 0;
    padding: 0px 150px 0 150px !important;

    .banner {
      transform: scale(0.67) !important;
      transform-origin: top left !important;
      width: calc(100%/0.67) !important;
      margin: -25px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.83) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .information-center .banner-box {
    width: calc(150%) !important;
    transform: scale(0.67) !important;
    transform-origin: top left !important;
  }

  .information-center .content-box {
    margin: -200px 0 0 0 !important;
  }

  .information-center .banner-box {
    .banner-title-ch {
      font-size: 61px !important;
    }

    .banner-title-en {
      font-size: 22px !important;
    }
  }

  .header .logo a {
    margin: 33.5px 0 0 33px !important;

    .logo {
      width: 140px !important;

      img {
        width: 140px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(20vw + 20px) !important;
    margin-top: calc(10.05vh) !important;

    .navbar-item {
      width: 60px !important;
      font-size: 14.5px !important;
      margin: 0 33px !important;
      padding: 1px 0 !important;
    }
  }

  .home .carousel-container .indicator {
    right: 79px !important;
    top: calc(50% + 0px) !important;

    .segment {
      height: 42.75px !important;

      &:before {
        height: 42.75px !important;
      }
    }
  }

  .home .copyright {
    bottom: -1px !important;
    right: 131px !important;
    font-size: 10.88px !important;
  }

  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 72px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(2) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 39px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 5px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 50px) !important;
        right: 55px !important;
      }
    }
  }

  .home .carousel-container .carousel-slide {

    .quota {
      .indicator-component {
        width: 145px !important;

        .upper span.num {
          font-size: 35px !important;
        }
      }
    }

    &:nth-child(1) {
      .banner-title {
        font-size: 42.5px !important;
        left: 180px !important;
        top: 263px !important;

        .subTitle {
          font-size: 14.75px !important;
          left: -5px !important;
          top: 60px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 176px !important;
        top: calc(50vh + 53px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:not(:first-child) {
      .banner-title {
        font-size: 42.5px !important;
        left: 135px !important;
        top: 269px !important;

        .subTitle {
          font-size: 20.75px !important;
          left: 0px !important;
          top: 76px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 134px !important;
        top: calc(50vh + 58px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }
  }

  .footer {
    padding: 0 80px !important;

    .footer-content-column {
      &:last-child {
        display: none;
      }
    }
  }

  .el-popper .tooltips-text {
    padding: 5px 15px !important;
    transform: scale(0.8) !important;
    transform-origin: center center !important;
    margin: -2px 0 0 15px !important;
  }
}

@media screen and (min-width: 1250px) and (max-width: 1280px) {

  .aboutus.container .top-section .banner {
    margin: 185px 0 0 -170px !important;

    .text {
      transform: scale(0.83);
      font-size: 50px !important;
      margin: -35px 0 0 -270px
    }

    .text.en {
      font-weight: 600 !important;
      font-size: 18px !important;
      margin: -5px 0 0 -280px !important;
    }
  }

  .aboutus.container {
    overflow: hidden !important;
    height: calc(1530px) !important;
  }

  .aboutus.container .middle-section .banner {
    margin: -50px 30px 0 0 !important;
  }

  .aboutus.container .middle-section {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    margin: 10px 150px 0 150px !important;

    .image img {
      margin: 139px 0 0 45px !important;
    }

    .banner {
      .upper {
        margin: 15px 0 10px 0px !important;
        padding: 10px 0px 10px 0px !important;
        font-size: 34px !important;

        .shadow-text {
          top: 53px !important;
          left: -2px !important;
          font-size: 72px !important;
          letter-spacing: -3px !important;
        }

        .bottom-text {
          top: 107px !important;
          left: 0px !important;
          font-size: 16px !important;
        }
      }

      .content {
        left: 14px !important;
        top: 178px !important;

        p {
          line-height: 1.8 !important;
          text-indent: 2em !important;
          font-size: 16px !important;

          &:nth-child(2) {
            font-size: 16px !important;
            margin: -10px 0 0 0;
          }

          &:nth-child(3) {
            font-size: 16px !important;
            margin: 0px 0 0 0;
          }
        }
      }
    }
  }

  .aboutus.container .bottom-section .banner {
    transform: scale(0.67) !important;
    transform-origin: top left !important;
    width: calc(111vw) !important;
  }

  .plans.container .top-section .banner {
    margin: 190px 0 0 -180px !important;
  }

  .plans.container .bottom-section .banner .text {
    padding: 2px 0 0 0 !important;
    font-size: 34px !important;

    &.en {
      font-size: 16px !important;
    }

    &.indicate {
      font-size: 16px !important;
    }
  }

  .plans.container .middle-content {
    margin: -68px 30px 0 30px !important;
    transform: scale(0.95) !important;
    background-image: url('/src/assets/images/plan_wenli.jpg') !important;
    background-size: cover !important;
    background-position: center !important;

    .upper {
      font-size: 34px !important;
      margin: 70px 0 10px 64px !important;

      .shadow-text {
        font-size: 72px !important;
      }

      .bottom-text {
        font-size: 16px !important;
      }
    }

    .description {
      text-indent: 2em !important;
      margin: 65px 87.5px 53.5px 87.5px !important;
      font-size: 16px !important;
      line-height: 30px !important;
    }

    .index-container {
      margin: -50px 0 0 -20px !important;
      transform: scale(0.8) !important;

      .box {
        margin-right: 50.5px !important;

        .indicator-component {
          margin: -50px 0 0 35px !important;
        }

        .upper {
          span.num {
            font-size: 52px !important;
          }

          span.unit {
            font-size: 24px !important;
          }
        }

        .descript {
          font-size: 18px !important;
          margin: 0 0 0 50px !important;
        }
      }
    }
  }

  #container.plans {
    main {
      height: calc(1300px) !important;
    }
  }

  #container.projectCases {
    main {
      height: calc(1330px) !important;
    }
  }

  #container.aboutus {
    main {
      height: calc(1530px) !important;
    }
  }

  .plans.container {
    overflow: hidden !important;
    height: calc(1585px) !important;
    transform: scale(0.83);
    transform-origin: top left;

    .bottom-section {
      width: 121vw !important;
    }
  }

  .project-cases.container {
    overflow: hidden !important;
    height: calc(1685px) !important;
    transform: scale(0.83);
    transform-origin: top left;
  }

  .project-cases .content-box-1 .intelligent-operation-box {
    transform: scale(0.91) !important;
    margin: -68px 0 0 30px !important;

    .title-box {
      padding: 33px 0 0 65px !important;
    }

    .case-box {
      margin: 15px 0 0 0 !important;

      .case-item-box {
        width: 306px !important;
        height: 473px !important;

        .img-box {
          height: 268px !important;
        }
      }
    }
  }

  .project-cases .banner-box {
    .banner-title-ch {
      margin: -45px 0 0 -350px !important;
    }

    .banner-title-en {
      margin: 15px 0 0 -350px !important;
    }
  }

  .project-cases .content-box-2 {
    overflow-y: hidden !important;

    .smart-agriculture-box {
      transform: scale(0.91) !important;
      margin: 0px 0 0 100px !important;
      overflow-y: hidden !important;

      .title-box {
        padding: 15px 0 42px 0px !important;
      }

      .case-box {
        margin: 0 0 0 28px !important;
      }
    }
  }

  .plans.container .bottom-section .banner {
    margin: 40px 0 0 155px !important;
  }

  .plans.container .bottom-section .business-container {
    margin: 220px 80px 0px calc(23vw + 0px) !important;

    .box {
      width: calc(322px * 0.98) !important;
      height: calc(442px * 0.98) !important;

      .icon {
        margin: 60px 0 10px 35% !important;
        font-size: 74px !important;
        height: 75px !important;
        color: #686868 !important;
      }

      .text-content {
        height: 415px !important;

        .title {
          font-size: 24px !important;
          color: #333333 !important;
          margin: 7.5px 0 12.5px 0 !important;
          opacity: 1 !important;
        }

        .text {
          font-size: 13px !important;
          margin: 15px 75px 10px 75px !important;
          color: #999999 !important;
          opacity: 1 !important;
        }
      }
    }
  }

  .plans.container .middle-content .index-container .three-box-layout .card-component {
    width: 100% !important;
    height: 170px !important;
    padding-left: 50px !important;

    .icon-box .iconfont {
      font-size: 78px !important;
    }

    .label-box .label-ch-text {
      font-size: 26px !important;
    }

    .label-box .label-en-text {
      font-size: 16px !important;
    }
  }

  .aboutus.container .submid-section {
    margin: -220px 0 0 0;
    padding: 0px 150px 0 150px !important;

    .banner {
      transform: scale(0.67) !important;
      transform-origin: top left !important;
      width: calc(100%/0.67) !important;
      margin: -25px auto 0 !important;
    }

    .content-container {
      width: calc(100%/0.83) !important;
      margin: 0.5px 0 0 -157.5px !important;
      transform: scale(0.80) !important;
    }
  }

  .aboutus.container .bottom-section {
    overflow: hidden;
    padding: 0px 150px 0 150px !important;

    .title-box {
      margin: 38px 0 0 0 !important;
    }
  }

  .information-center .banner-box {
    width: calc(150%) !important;
    transform: scale(0.67) !important;
    transform-origin: top left !important;
  }

  .information-center .content-box {
    margin: -200px 0 0 0 !important;
  }

  .information-center .banner-box {
    .banner-title-ch {
      font-size: 61px !important;
    }

    .banner-title-en {
      font-size: 22px !important;
    }
  }

  .header .logo a {
    margin: 33.5px 0 0 33px !important;

    .logo {
      width: 140px !important;

      img {
        width: 140px !important;
      }
    }
  }

  .header .navbar {
    margin-left: calc(20vw + 20px) !important;
    margin-top: calc(10.05vh) !important;

    .navbar-item {
      width: 60px !important;
      font-size: 14.5px !important;
      margin: 0 33px !important;
      padding: 1px 0 !important;
    }
  }

  .home .carousel-container .indicator {
    right: 79px !important;
    top: calc(50% + 0px) !important;

    .segment {
      height: 42.75px !important;

      &:before {
        height: 42.75px !important;
      }
    }
  }

  .home .copyright {
    bottom: -1px !important;
    right: 131px !important;
    font-size: 10.88px !important;
  }

  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 72px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(2) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh - 39px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(3) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 5px) !important;
        right: 55px !important;
      }
    }

    &:nth-child(4) {
      .banner .tooltip {
        font-size: 8px !important;
        top: calc(50vh + 50px) !important;
        right: 55px !important;
      }
    }
  }

  .home .carousel-container .carousel-slide {

    .quota {
      .indicator-component {
        width: 145px !important;

        .upper span.num {
          font-size: 35px !important;
        }
      }
    }

    &:nth-child(1) {
      .banner-title {
        font-size: 42.5px !important;
        left: 180px !important;
        top: 263px !important;

        .subTitle {
          font-size: 14.75px !important;
          left: -5px !important;
          top: 60px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 176px !important;
        top: calc(50vh + 53px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:not(:first-child) {
      .banner-title {
        font-size: 42.5px !important;
        left: 135px !important;
        top: 269px !important;

        .subTitle {
          font-size: 20.75px !important;
          left: 0px !important;
          top: 76px !important;
          text-align: left !important;
        }
      }

      .banner .bg-button {
        width: 108px !important;
        height: 33px !important;
        left: 134px !important;
        top: calc(50vh + 58px) !important;

        .content {
          margin: 6px 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 14px !important;
            font-family: monospace !important;
          }
        }
      }
    }
  }

  .footer {
    padding: 0 80px !important;

    .footer-content-column {
      &:last-child {
        display: none;
      }
    }
  }

  .el-popper .tooltips-text {
    padding: 5px 15px !important;
    transform: scale(0.8) !important;
    transform-origin: center center !important;
    margin: -2px 0 0 15px !important;
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
