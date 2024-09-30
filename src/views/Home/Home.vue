<template>
  <div class="home">
    <Carousel @change="handleChange">
      <template #one>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home01.jpg" />
          </div>
          <div class="banner-title">
            渔光一体智能运营专家
            <div class="subTitle">YU GUANG INTEGRATED INTELLIGENT OPERATION EXPORT</div>
            <div class="bg-button" @click="handleToAboutUs('/aboutus')">
              <div class="content">
                <span class="text">了解更多</span>
                <span class="icon">></span>
              </div>
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
          <div class="banner-title">
            新能源电站智能运营方案
            <div class="subTitle lang">专业化、智能化、一体化</div>
            <div class="bg-button" @click="handleToPlan('yy')">
              <div class="content">
                <span class="text">了解更多</span>
                <span class="icon">></span>
              </div>
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
          <div class="banner-title">
            智慧农业解决方案
            <div class="subTitle lang">集约化、智能化、高效化</div>
            <div class="bg-button" @click="handleToPlan('yz')">
              <div class="content">
                <span class="text">了解更多</span>
                <span class="icon">></span>
              </div>
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
          <div class="banner-title">
            信息化解决方案
            <div class="subTitle lang">平台化、多行业、一站式</div>
            <div class="bg-button" @click="handleToPlan('xx')">
              <div class="content">
                <span class="text">了解更多</span>
                <span class="icon">></span>
              </div>
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
    color: #fff !important;
    font-size: 50px !important;
    text-align: center !important;
    position: relative !important;
    top: calc(-8.45vh) !important;
    font-size: 2.8vw !important;
    left: calc(-24.85vw) !important;
    font-weight: 500 !important;

    .subTitle {
      position: absolute !important;
      margin: 0 0 0 0 !important;
      font-size: 1vw !important;
      width: 100vw;
      top: calc(7.25vh) !important;
      left: calc(0vw) !important;
      letter-spacing: -0.228px !important;
      text-align: left !important;
    }
  }

  .bg-button {
    position: absolute !important;
    background: #EF7D1B !important;
    width: 7.65vw !important;
    height: 2.3vw !important;
    top: calc(18.75vh) !important;
    left: calc(0.25vw) !important;
    cursor: pointer;
    opacity: 1;

    .content {
      margin: 0.5vw 0.88vw !important;
      font-size: 0.9vw !important;
      font-weight: 40 !important;
      color: #fefefe !important;
      text-align: center !important;

      .text {
        margin-right: 10px;
        font-family: Source Han Sans CN;
      }

      .icon {
        font-size: 0.9vw !important;
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

.home .carousel-container {
  .carousel-slide {
    &:nth-child(2) {
      .banner {
        text-align: left !important;

        .banner-title {
          left: -23.5vw !important;
          top: -7.45vh !important;

          .subTitle {
            left: 0vw !important;
            top: 4.4vw !important;
            font-size: 1.5vw !important;
            width: 700px !important;
            letter-spacing: -1.75px !important;
          }
        }

        .bg-button {
          top: calc(16.5vh) !important;
          left: calc(0.25vw) !important;
        }
      }
    }

    &:nth-child(3) {
      .banner {
        text-align: left !important;
        
        .banner-title {
          left: -27.45vw !important;
          top: -7.45vh !important;

          .subTitle {
            left: 0vw !important;
            top: 4.4vw !important;
            font-size: 1.5vw !important;
            width: 700px !important;
            letter-spacing: -2.75px !important;
          }
        }

        .bg-button {
          top: calc(16.5vh) !important;
          left: calc(0.12vw) !important;
        }
      }
    }

    &:nth-child(4) {
      .banner {
        text-align: left !important;
        
        .banner-title {
          left: -28.85vw !important;
          top: -7.45vh !important;

          .subTitle {
            left: 0vw !important;
            top: 4.4vw !important;
            font-size: 1.5vw !important;
            width: 700px !important;
            letter-spacing: -2.75px !important;
          }
        }

        .bg-button {
          top: calc(16.5vh) !important;
          left: calc(0.12vw) !important;
        }
      }
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
}

.home .copyright {
  bottom: 11px;
  right: 194px;
  font-size: 16.5px;
}
</style>