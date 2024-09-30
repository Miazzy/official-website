<template>
  <div class="home">
    <Carousel @change="handleChange">
      <template #one>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home01.jpg" />
          </div>
          <h1 class="banner-title">
            渔光一体智能运营专家
            <div class="subTitle">YU GUANG INTEGRATED INTELLIGENT OPERATION EXPORT</div>
          </h1>
          <div class="bg-button" @click="handleToAboutUs('/aboutus')">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
          <div class="tooltip">
            <span>首页</span>
          </div>
        </div>
      </template>
      <template #two>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home02.jpg" />
          </div>
          <h1 class="banner-title">
            新能源电站智能运营方案
            <div class="subTitle lang">专业化、智能化、一体化</div>
          </h1>
          <div class="bg-button" @click="handleToPlan('yy')">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
          <div class="quota">
            <Indicator :num="40" :unit="'个'" :descript="'在运城市'"></Indicator>
            <Indicator :num="40" :unit="'座'" :descript="'在运电站'"></Indicator>
            <Indicator :num="4.27" :unit="'Gw'" :descript="'在运维总容量'"></Indicator>
            <Indicator :num="3032" :unit="'天'" :descript="'安全生产天数'"></Indicator>
            <div class="segment"></div>
            <div class="segment" style=""></div>
          </div>
          <div class="tooltip">
            <span>智能运营</span>
          </div>
        </div>
      </template>
      <template #three>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home03.jpg" />
          </div>
          <h1 class="banner-title">
            智慧农业解决方案
            <div class="subTitle lang">集约化、智能化、高效化</div>
          </h1>
          <div class="bg-button" @click="handleToPlan('yz')">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
          <div class="tooltip" style="top: calc(50vh + 6px)">
            <span>智慧农业</span>
          </div>
        </div>
      </template>
      <template #four>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home04.jpg" />
          </div>
          <h1 class="banner-title">
            信息化解决方案
            <div class="subTitle lang">平台化、多行业、一站式</div>
          </h1>
          <div class="bg-button" @click="handleToPlan('xx')">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
          <div class="tooltip" style="top: calc(50vh +  68px)">
            <span>信息化</span>
          </div>
        </div>
      </template>
      <template #five>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img :src="imageURL" />
          </div>
        </div>
      </template>
    </Carousel>
    <div class="copyright">
      Copyright ©渔光物联(www.ygwl.net)   |   蜀ICP备16026089号
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';
import EventBus from '../../helper/EventBus';
import Carousel from '../../components/Carousel.vue';
import Indicator from '../../components/Indicator.vue';
import { MsgManager } from "../../manager/MsgManager";

// 通过 import 引入图片
import home01 from '../../assets/images/home01.jpg';
import home02 from '../../assets/images/home02.jpg';
import home03 from '../../assets/images/home03.jpg';
import home04 from '../../assets/images/home04.jpg';

const imageURL = ref(home01);  // 默认显示的图片
const router = useRouter();
const banner = ref();
const baseWidth = 1920;
const containerHeight = ref(window.innerHeight);

// 了解更多跳转
const handleToAboutUs = (routePath) => {
  router.push(routePath);
}

// 跳转到解决方案
const handleToPlan = (type) => {
  MsgManager.getInstance().sendMsg('pagechange', { route: 'plans', type });
  router.push('/plans?type=' + type);
}

// 处理最后一张背景图图片切换，最后一张图片会在动画切换时显示
const handleChange = (index) => {
  const images = [home01, home02, home03, home04];
  imageURL.value = images[index];
}

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  if (screenWidth >= 0) {
    containerHeight.value = window.innerHeight;
    MsgManager.getInstance().sendMsg('container-height', { height: 'auto' });
  }
};

onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
  EventBus.emit("home-scrolling",
    { x: document.body.scrollLeft, y: document.body.scrollTop }
  )
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style scoped lang="less">
@keyframes verticalMotion {
  0% {
    transform: translateY(6px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(6px);
  }
}

@keyframes scrollToRight {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.home {
  overflow: hidden;

  .main {
    width: @main-width;
    margin: auto;
  }

  .content-item-block {
    .title {
      font-size: @font-size-larger;
    }

    &.banner {
      :deep(.indicator-component) {
        &:nth-child(1) {
          top: calc(40vh - 12px);
          right: calc(20vw + 72px);
        }

        &:nth-child(2) {
          top: calc(40vh - 12px);
          right: calc(10vw + 35px);
        }

        &:nth-child(3) {
          top: calc(40vh + 98px);
          right: calc(20vw + 50px);
        }

        &:nth-child(4) {
          top: calc(40vh + 98px);
          right: calc(10vw + 7px);
        }
      }
    }
  }

  :deep(.carousel-slide.active) {
    .bg-button {
      z-index: 1;
    }
  }

  .copyright {
    position: fixed;
    color: #fefefe;
    bottom: 10px;
    right: 140px;

    font-family: Microsoft YaHei;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    line-height: 52px;
  }
}

.banner {
  height: 100vh;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(51, 112, 255, 0.2);
  position: relative;

  .bg-wrapper {
    font-size: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    color: #fff;
    font-size: 50px;
    text-align: center;
    position: absolute;
    left: 219px;
    top: 354px;

    .subTitle {
      position: absolute;
      margin: 0 0 0 0;
      font-size: 20px;
      width: 600px;
      left: -15px;
      top: 82px;
      letter-spacing: 0px;

      &.lang {
        left: -168px;
        top: 112px;
        font-weight: 400;
        font-size: 24px;
      }
    }
  }

  .bg-button {
    position: absolute;
    background: #EF7D1B;
    width: 147px;
    height: 45px;
    left: 215px;
    top: calc(50vh + 72px);
    cursor: pointer;
    opacity: 1;

    .content {
      margin: 9px 20px;
      font-size: 18px;
      font-weight: 400;
      color: #fefefe;
      text-align: center;

      .text {
        margin-right: 10px;
        font-family: Source Han Sans CN;
      }

      .icon {
        font-size: 20px;
        font-family: monospace;
      }
    }
  }

  .segment {
    position: absolute;
    width: 2px;
    height: 36px;
    top: calc(40vh + 28px);
    right: calc(20vw + 18px);
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s, width 0.3s;

    &:last-child {
      top: calc(50vh + 50px);
    }
  }

  .tooltip {
    position: absolute;
    font-size: 10px;
    line-height: 1.1;
    width: 12px;
    background: transparent;
    color: #fefefe;
    right: 62px;
    top: calc(50vh - 52px);
  }

  .search {
    width: 500px;
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .bottom-tips {
    position: absolute;
    bottom: 30px;
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    text-align: center;

    .arrow-down {
      display: block;
      margin-bottom: 4px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      text-align: center;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      font-size: 21px;

      i {
        animation: verticalMotion 1.3s infinite linear;
        display: inline-block;
        font-style: normal;
      }
    }

    // 分割竖线
    .vertical-dashed {
      border-left: 1px dashed #fff;
      height: 30px;

      display: inline-block;
    }
  }
}


.home .carousel-container .indicator {
  right: 120px;
  top: calc(50% + 0px);

  .segment {
    height: 64px;
  }
}

.home .carousel-container .banner .bg-button {
  width: 147px;
  height: 45px;
  left: 264px;
  top: calc(50vh + 80px);

  .content {
    margin: 10px 22px;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
  }
}

.home .carousel-container {
  .carousel-slide {

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title .subTitle {
        left: -182px;
        top: 118px;
        font-size: 34px;
        width: 700px;
        letter-spacing: -3px;
      }

      .banner .bg-button {
        width: 147px;
        height: 45px;
        left: 200px;
        top: calc(50vh + 90px);
      }
    }
  }
}

.home .carousel-container .banner .banner-title {
  font-size: 50px;
  left: 269px;
  top: 395px;

  .subTitle {
    left: -33px;
    top: 90px;
    font-size: 20px;
    width: 700px;
    letter-spacing: 0px;
  }
}

.home .carousel-container .carousel-slide {

  &:first-child,
  &:last-child {
    .banner .tooltip {
      font-size: 11.5px;
      right: 95px;
      top: calc(50vh - 108px);
    }
  }

  &:nth-child(2) {
    .banner .tooltip {
      right: 95px;
      top: calc(50vh - 55.5px);
    }
  }

  &:nth-child(3) {
    .banner .tooltip {
      right: 95px;
      top: calc(50vh + 10px);
    }
  }

  &:nth-child(4) {
    .banner .tooltip {
      right: 95px;
      top: calc(50vh + 78px);
    }
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    .banner-title {
      left: 202px;
      top: 399px;
    }
  }
}

.home .copyright {
  bottom: 11px;
  right: 194px;
  font-size: 16.5px;
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 1000px) and (max-height: 2160px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(29.5vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(28vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.5vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh;
      top: calc(38vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-4.0vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.5vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.5vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-2.10vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.5vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 2000px) and (max-height: 2049px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        .subTitle {
          left: calc(-5vw) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 1950px) and (max-height: 1999px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        .subTitle {
          left: calc(-5.5vw) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 1900px) and (max-height: 1949px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        .subTitle {
          left: calc(-6.0vw) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 1850px) and (max-height: 1899px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        .subTitle {
          left: calc(-6.5vw) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 3600px) and (max-width: 3840px) and (min-height: 1000px) and (max-height: 1849px) {
  .home .carousel-container .carousel-slide {
    &:nth-child(1) {
      .banner .banner-title {
        .subTitle {
          left: calc(-7.0vw) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 3400px) and (max-width: 3599px) and (min-height: 1400px) and (max-height: 2160px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(29.5vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(28vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.5vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh;
      top: calc(38vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-5.6vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.45vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.25vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(7.85vh) !important;
          font-size: 1.43vw !important;
          left: calc(-2.95vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.45vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 3200px) and (max-width: 3399px) and (min-height: 1200px) and (max-height: 2160px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(28.75vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(27.25vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.0vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh !important;
      top: calc(38vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-5vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.5vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-4.10vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 3000px) and (max-width: 3199px) and (min-height: 1000px) and (max-height: 2160px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(28.75vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(27.25vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.0vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh !important;
      top: calc(38vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.85vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-5.5vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(38.75vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8.8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-4.8vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 2800px) and (max-width: 2999px) and (min-height: 1000px) and (max-height: 2160px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(28.75vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(27.25vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.0vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh !important;
      top: calc(38vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.85vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-5.5vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(38.75vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8.8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-4.8vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 2561px) and (max-width: 2799px) and (min-height: 850px) and (max-height: 2000px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(28.75vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(27.25vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.0vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh !important;
      top: calc(38vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.0) !important;
      transform-origin: top left !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.85vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-5.5vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(1) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(40vh) !important;
    }

    &:nth-child(2) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(44.5vh) !important;
    }

    &:nth-child(3) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(50.75vh) !important;
    }

    &:nth-child(4) .tooltip {
      font-size: 0.6vw !important;
      right: 5.2vw !important;
      top: calc(56.5vh) !important;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(38.75vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8.8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-4.8vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.32vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 2200px) and (max-width: 2560px) and (min-height: 800px) and (max-height: 1440px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(1) {
      right: calc(29.5vw);
    }

    .indicator-component:nth-child(2) {
      right: calc(16.5vw);
    }

    .indicator-component:nth-child(3) {
      right: calc(28vw);
    }

    .indicator-component:nth-child(4) {
      right: calc(15.5vw);
    }

    .indicator-component:nth-child(1),
    .indicator-component:nth-child(2) {
      margin-left: -5vh;
      top: calc(38vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(49.75vh) !important;
      transform: scale(2.5);
      transform-origin: top left;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-4vw) !important;
          font-size: 2vh !important;
          width: 38.5vw !important;
          letter-spacing: -2px !important;
        }
      }

      .banner .bg-button {
        top: calc(56.7vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.5vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.5vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 1.35vw !important;
          left: calc(-2.10vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: calc(11.25vw) !important;
        width: 7.6vw !important;
        height: 4.1vh !important;

        .content {
          margin: 1.5vh 22px !important;
          font-size: 1.8vh !important;

          .icon {
            font-size: 1.8vh !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1900px) and (max-width: 2000px) and (min-height: 800px) and (max-height: 1080px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(40vh + 108px) !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(38.25vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7vh) !important;
          left: calc(-3vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(56.78vh) !important;
        left: calc(11.25vw) !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.5vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 26px !important;
          left: calc(-11.7vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: 217px !important;
      }
    }
  }
}

@media only screen and (min-width: 1900px) and (max-width: 2000px) and (min-height: 800px) and (max-height: 949px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(40vh + 108px) !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(37.85vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7.5vh) !important;
          left: calc(-3vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(56.78vh) !important;
        left: calc(11.25vw) !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(39.15vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 26px !important;
          left: calc(-11.7vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: 217px !important;
      }
    }
  }
}

@media only screen and (min-width: 1900px) and (max-width: 2000px) and (min-height: 700px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(40vh + 108px) !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(37.5vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7.5vh) !important;
          left: calc(-3vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(56.78vh) !important;
        left: calc(11.25vw) !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(38.85vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 26px !important;
          left: calc(-11.7vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: 217px !important;
      }
    }
  }
}

@media only screen and (min-width: 1900px) and (max-width: 2000px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    .indicator-component:nth-child(3),
    .indicator-component:nth-child(4) {
      top: calc(40vh + 108px) !important;
    }

    &:nth-child(1) {
      .banner .banner-title {
        top: calc(37vh) !important;
        font-size: 2.8vw !important;
        left: calc(11.25vw) !important;

        .subTitle {
          top: calc(7.5vh) !important;
          left: calc(-3vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(56.78vh) !important;
        left: calc(11.25vw) !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 2.8vw !important;
        top: calc(38.25vh) !important;
        left: calc(11.45vw) !important;

        .subTitle {
          top: calc(8vh) !important;
          font-size: 26px !important;
          left: calc(-11.7vw) !important;
        }
      }

      .banner .bg-button {
        top: calc(55.5vh) !important;
        left: 217px !important;
      }
    }
  }
}

@media only screen and (min-width: 1800px) and (max-width: 1900px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 215px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 2.95px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 215px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 210px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 51px) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1800px) and (max-width: 1900px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 215px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 2.95px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 215px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 210px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(62vh) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1800px) and (max-width: 1900px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 215px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 2.95px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(66vh) !important;
        left: 215px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 210px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(68vh) !important;
        left: 220px !important;
      }
    }
  }
}

@media only screen and (min-width: 1700px) and (max-width: 1799px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 195px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 0.5px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 195px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 190px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.75px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 51px) !important;
        left: 195px !important;
      }
    }
  }
}

@media only screen and (min-width: 1700px) and (max-width: 1799px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 195px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 0.5px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 195px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 190px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.75px !important;
        }
      }

      .banner .bg-button {
        top: calc(62vh) !important;
        left: 195px !important;
      }
    }
  }
}

@media only screen and (min-width: 1700px) and (max-width: 1799px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: 195px !important;
        top: 339px !important;
        font-size: 50px !important;
        letter-spacing: 0.5px !important;

        .subTitle {
          top: 69px !important;
          left: -72px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(66vh) !important;
        left: 195px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 50px !important;
        top: 350px !important;
        left: 190px !important;
        letter-spacing: 3.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 26px !important;
          left: -205px !important;
          letter-spacing: -0.75px !important;
        }
      }

      .banner .bg-button {
        top: calc(68vh) !important;
        left: 195px !important;
      }
    }
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1699px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: calc(11.25vw) !important;
        top: calc(38.5vh) !important;
        font-size: 45px !important;
        letter-spacing: 2.35px !important;

        .subTitle {
          top: 69px !important;
          left: -105px !important;
          font-size: 18px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 185px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 45px !important;
        top: calc(39.75vh) !important;
        left: calc(11.5vw) !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 23px !important;
          left: -225px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 51px) !important;
        left: 185px !important;
      }
    }
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1699px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: calc(11.25vw) !important;
        top: calc(38.5vh) !important;
        font-size: 45px !important;
        letter-spacing: 2.35px !important;

        .subTitle {
          top: 69px !important;
          left: -105px !important;
          font-size: 18px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 60px) !important;
        left: 185px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 45px !important;
        top: calc(39.75vh) !important;
        left: calc(11.5vw) !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 23px !important;
          left: -225px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(50vh + 51px) !important;
        left: 185px !important;
      }
    }
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1699px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        left: calc(11.25vw) !important;
        top: calc(38.5vh) !important;
        font-size: 45px !important;
        letter-spacing: 2.35px !important;

        .subTitle {
          top: 69px !important;
          left: -105px !important;
          font-size: 18px !important;
          letter-spacing: -0.7px !important;
        }
      }

      .banner .bg-button {
        top: calc(62vh) !important;
        left: 185px !important;
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 45px !important;
        top: calc(39.75vh) !important;
        left: calc(11.5vw) !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 75px !important;
          font-size: 23px !important;
          left: -225px !important;
          letter-spacing: -0.5px !important;
        }
      }

      .banner .bg-button {
        top: calc(64vh) !important;
        left: 185px !important;
      }
    }
  }
}

@media only screen and (min-width: 1500px) and (max-width: 1599px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1500px) and (max-width: 1599px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1500px) and (max-width: 1599px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1499px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1499px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1499px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 42px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 18px !important;
          letter-spacing: -2.25px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 42px !important;
        top: 355px !important;
        left: 160px !important;
        letter-spacing: 0.45px !important;

        .subTitle {
          top: 72px !important;
          font-size: 23px !important;
          left: 0px !important;
          letter-spacing: -1.5px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1350px) and (max-width: 1399px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1350px) and (max-width: 1399px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1350px) and (max-width: 1399px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 145px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 155px !important;
        letter-spacing: -1.5px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 133px !important;
        height: 43px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 148px !important;

        .content {
          margin: 8px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1300px) and (max-width: 1349px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 145px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 150px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1300px) and (max-width: 1349px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 145px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 150px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1300px) and (max-width: 1349px) and (min-height: 0px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 145px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 40px !important;
        top: 355px !important;
        left: 150px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 20px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 140px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1250px) and (max-width: 1299px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 39px !important;
        top: 355px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1250px) and (max-width: 1299px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 39px !important;
        top: 355px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1250px) and (max-width: 1299px) and (min-height: 700px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 40px !important;
        top: 345px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: 0px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 39px !important;
        top: 355px !important;
        left: 140px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: 0px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 122px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 130px !important;

        .content {
          margin: 9px 15px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1250px) and (max-width: 1299px) and (min-height: 0px) and (max-height: 699px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner-title {
        font-size: 31.75px !important;
        left: 140px !important;
        top: 215px !important;
        letter-spacing: 2.75px !important;

        .subTitle {
          font-size: 12.75px !important;
          left: 0px !important;
          top: 45px !important;
          text-align: left !important;
          letter-spacing: -0.625px !important;
        }
      }

      .banner .bg-button {
        width: 93px !important;
        height: 24px !important;
        left: 140px !important;
        top: calc(50vh + 39px) !important;

        .content {
          margin: 0px 12px !important;
          font-size: 12px !important;
          font-weight: 400 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 12px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner-title {
        font-size: 31.5px !important;
        left: 142px !important;
        top: 225px !important;
        letter-spacing: 2.75px !important;

        .subTitle {
          font-size: 16.75px !important;
          left: 0px !important;
          top: 46px !important;
          text-align: left !important;
          letter-spacing: -0.55px !important;
        }
      }

      .banner .bg-button {
        width: 93px !important;
        height: 24px !important;
        left: 140px !important;
        top: calc(50vh + 32px) !important;

        .content {
          margin: 0px 12px !important;
          font-size: 12px !important;
          font-weight: 400 !important;
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
}

@media only screen and (min-width: 1200px) and (max-width: 1249px) and (min-height: 900px) and (max-height: 1050px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 36px !important;
        top: 345px !important;
        left: 130px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: -155px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 125px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 36px !important;
        top: 360px !important;
        left: 135px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: -260px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 47px) !important;
        left: 130px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1249px) and (min-height: 800px) and (max-height: 899px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 36px !important;
        top: 345px !important;
        left: 130px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: -155px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(50vh + 58px) !important;
        left: 125px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 36px !important;
        top: 360px !important;
        left: 135px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: -260px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(62vh) !important;
        left: 130px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1249px) and (min-height: 700px) and (max-height: 799px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner .banner-title {
        font-size: 36px !important;
        top: 345px !important;
        left: 130px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 62px !important;
          left: -155px !important;
          font-size: 17px !important;
          letter-spacing: -2.40px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(66vh) !important;
        left: 125px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner .banner-title {
        font-size: 36px !important;
        top: 360px !important;
        left: 135px !important;
        letter-spacing: -1.05px !important;

        .subTitle {
          top: 72px !important;
          font-size: 19px !important;
          left: -260px !important;
          letter-spacing: -1.75px !important;
        }
      }

      .banner .bg-button {
        width: 115px !important;
        height: 44px !important;
        transform: scale(0.82) !important;
        transform: top left !important;
        top: calc(68vh) !important;
        left: 130px !important;

        .content {
          margin: 8px 10px !important;
          font-size: 17px !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1249px) and (min-height: 0px) and (max-height: 699px) {
  .home .carousel-container .carousel-slide {

    &:first-child,
    &:last-child {
      .banner-title {
        font-size: 31.75px !important;
        left: 140px !important;
        top: 215px !important;
        letter-spacing: 2.75px !important;

        .subTitle {
          font-size: 12.75px !important;
          left: 0px !important;
          top: 45px !important;
          text-align: left !important;
          letter-spacing: -0.625px !important;
        }
      }

      .banner .bg-button {
        width: 93px !important;
        height: 24px !important;
        left: 140px !important;
        top: calc(50vh + 39px) !important;

        .content {
          margin: 0px 12px !important;
          font-size: 12px !important;
          font-weight: 400 !important;
          color: #fefefe !important;
          text-align: center !important;

          .icon {
            font-size: 12px !important;
            font-family: monospace !important;
          }
        }
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      .banner-title {
        font-size: 31.5px !important;
        left: 142px !important;
        top: 225px !important;
        letter-spacing: 2.75px !important;

        .subTitle {
          font-size: 16.75px !important;
          left: 0px !important;
          top: 46px !important;
          text-align: left !important;
          letter-spacing: -0.55px !important;
        }
      }

      .banner .bg-button {
        width: 93px !important;
        height: 24px !important;
        left: 140px !important;
        top: calc(50vh + 32px) !important;

        .content {
          margin: 0px 12px !important;
          font-size: 12px !important;
          font-weight: 400 !important;
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
}
</style>