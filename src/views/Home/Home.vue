<template>
  <div class="home">
    <Carousel>
      <template #one>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home01.png" />
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
            <img src="../../assets/images/home02.png" />
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
            <Indicator :num="40" :unit="'个'" :descript="'在运城市'"
              style="top: calc(40vh - 12px); right: calc(20vw + 35px);"></Indicator>
            <Indicator :num="40" :unit="'座'" :descript="'在运电站'"
              style="top: calc(40vh - 12px); right: calc(10vw - 5px);"></Indicator>
            <Indicator :num="4.27" :unit="'Gw'" :descript="'在运维总容量'"
              style="top: calc(40vh + 98px); right: calc(20vw + 15px);"></Indicator>
            <Indicator :num="3032" :unit="'天'" :descript="'安全生产天数'"
              style="top: calc(40vh + 98px); right: calc(10vw - 30px);"></Indicator>
            <div class="segment"></div>
            <div class="segment" style="top: calc(50vh + 50px)"></div>
          </div>
          <div class="tooltip">
            <span>智能运营</span>
          </div>
        </div>
      </template>
      <template #three>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home03.png" />
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
            <img src="../../assets/images/home04.png" />
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
    </Carousel>
    <div class="copyright">
      Copyright ©渔光物联(www.ygwl.net)   |   蜀ICP备16026089号
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import { useRouter } from 'vue-router';
import EventBus from '../../helper/EventBus';
import Carousel from '../../components/Carousel.vue';
import Indicator from '../../components/Indicator.vue';
import { MsgManager } from "../../manager/MsgManager";

const { proxy } = getCurrentInstance()
const router = useRouter()
const banner = ref();

// 了解更多跳转
const handleToAboutUs = (routePath) => {
  router.push(routePath);
}
const handleToPlan = (type) => {
  MsgManager.getInstance().sendMsg('pagechange', { route: 'plans', type });
  router.push('/plans?type=' + type);
}

onMounted(() => {
  EventBus.emit("home-scrolling",
    { x: document.body.scrollLeft, y: document.body.scrollTop }
  )
})
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
  min-width: 100vw;
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
    font-size: 57.5px;
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
    width: 145px;
    height: 44px;
    left: 215px;
    top: calc(50vh + 72px);
    cursor: pointer;
    opacity: 1;

    .content {
      margin: 9px 20px;
      font-size: 18px;
      font-weight: 600;
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
    right: calc(20vw - 5px);
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s, width 0.3s;
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
  right: 120px ;
  top: calc(50% + 0px) ;

  .segment {
    height: 64px ;
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
  left: 269px ;
  top: 395px ;

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
      font-size: 11.5px ;
      right: 95px ;
      top: calc(50vh - 108px) ;
    }
  }

  &:nth-child(2) {
    .banner .tooltip {
      right: 95px ;
      top: calc(50vh - 55.5px) ;
    }
  }

  &:nth-child(3) {
    .banner .tooltip {
      right: 95px ;
      top: calc(50vh + 10px) ;
    }
  }

  &:nth-child(4) {
    .banner .tooltip {
      right: 95px ;
      top: calc(50vh + 78px) ;
    }
  }

  &:not(:first-child) {
    .banner-title {
      left: 202px ;
      top: 399px ;
    }
  }
}

.home .copyright {
  bottom: 11px ;
  right: 194px ;
  font-size: 16.5px ;
}
</style>