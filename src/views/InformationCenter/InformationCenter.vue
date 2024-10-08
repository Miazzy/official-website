<template>
  <div class="information-center">
    <div class="banner-box" :style="{ height: topHeight + 'px' }">
      <h1 class="banner-title-ch">资讯中心</h1>
      <h2 class="banner-title-en">INFORMATION CENTER</h2>
    </div>
    <div class="content-box" @click="checkHeight" :style="{ height: bottomHeight + 'px' }">
      <iframe ref="iframeRef" class="iframe" style="" :src="iframeURL" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { MsgManager } from "../../manager/MsgManager";

const iframeURL = ref('http://www.ygwl.net/ms-mcms/html/1/150/151/index.html?onlyShowContent=true');
const iframeRef = ref();;

const topBaseHeight = 500;
const bottomBaseHeight = 1288;
const baseWidth = 1920; // 基准宽度

const topHeight = ref(topBaseHeight);
const bottomHeight = ref(bottomBaseHeight);
const containerHeight = ref(topBaseHeight + bottomBaseHeight);

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  if (screenWidth >= 0) {
    topHeight.value = parseInt(topBaseHeight);
    bottomHeight.value = parseInt(bottomBaseHeight);
    if (screenWidth < 1920) {
      containerHeight.value = (topBaseHeight + bottomBaseHeight + 220 - 68 / (scaleFactor*scaleFactor)) * scaleFactor;
    } else {
      containerHeight.value = (topBaseHeight + bottomBaseHeight + 220 - 68 + (scaleFactor > 1.10 ? 26 * scaleFactor * scaleFactor : 0)) * scaleFactor;
    }
    MsgManager.getInstance().sendMsg('container-height', { height: containerHeight.value });
  }
};

const checkHeight = () => {
  //
};

onMounted(() => {
  updateHeights();
  iframeURL.value = iframeURL.value + '&_t=' + new Date().getTime();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
  setTimeout(() => {
    iframeRef.value.addEventListener('load', checkHeight);
  }, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});

</script>

<style scoped lang="less">
.information-center {
  .banner-box {
    width: 100%;
    height: 500px;
    background: url('../../assets/images/information-center-banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 1;
    padding-top: 244px;

    .banner-title-ch {
      font-weight: bold;
      font-size: 50px;
      color: #ffffff;
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 22px;
    }

    .banner-title-en {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
      opacity: 0.77;
    }
  }

  .content-box {
    width: calc(100% - 0px);
    margin: 0 auto;
    padding-top: 24px;
    background-color: #fff;

    .iframe {
      width: 100%;
      min-height: 1260px;
    }
  }

  .tab-bar-box {
    display: flex;

    .tab-bar-item {
      height: 64px;
      padding: 0 2px;
      margin-right: 64px;
      border-bottom: 4px solid transparent;
      line-height: 60px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;

      &.active,
      &:hover {
        color: #000;
        border-bottom-color: #ef7d1b;
      }
    }
  }

  .information-box {
    width: 100%;
    padding: 56px 0 74px;

    .information-layout-1 {
      display: flex;
      justify-content: space-between;

      .left-box {
        width: 784px;
        height: 560px;
        background: #ffffff;
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
        cursor: pointer;

        &:hover .info-title {
          color: #ef7d1b;
        }

        .info-img-box {
          width: 100%;
          height: 474px;
          font-size: 0;

          .info-img {
            width: 100%;
            height: 100%;
          }
        }

        .info-title {
          width: 100%;
          padding: 0 26px;
          height: 86px;
          line-height: 86px;
          font-size: 24px;
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
      }

      .right-box {
        width: 676px;
        height: 560px;

        .right-info-item {
          width: 100%;
          height: 140px;
          padding-top: 30px;
          display: flex;
          border-bottom: 1px solid #eeeeee;
          cursor: pointer;

          &:hover .info-content-box .info-content-title {
            color: #ef7d1b;
          }

          .date-box {
            margin-right: 45px;
            line-height: 1;

            .month-day-text {
              margin-bottom: 15px;
              font-size: 22px;
              color: #888888;
            }

            .year-text {
              font-size: 14px;
              color: #bbbbbb;
            }
          }

          .info-content-box {
            width: 570px;

            .info-content-title {
              height: 22px;
              margin-bottom: 11px;
              font-size: 18px;
              color: #333333;
              line-height: 22px;
              font-weight: 600;
            }

            .info-content-text {
              font-size: 14px;
              color: #777777;
              line-height: 22px;
              opacity: 0.9;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }

    .information-layout-2 {
      .info-item-box {
        height: 145px;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover .info-content-box .info-content-title {
          color: #ef7d1b;
        }

        .info-img-box {
          width: 196px;
          height: 118px;
          margin-right: 24px;
          font-size: 0;

          .info-img {
            width: 100%;
            height: 100%;
          }
        }

        .info-content-box {
          width: 1068px;
          line-height: 1;
          margin-right: 22px;

          .info-content-title {
            width: 100%;
            font-size: 18px;
            color: #333333;
            margin-bottom: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 600;
          }

          .info-content-text {
            width: 100%;
            font-size: 14px;
            color: #777777;
            opacity: 0.9;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .right-box {
          height: 48px;
          font-size: 12px;
          color: #999999;
          opacity: 0.68;
          line-height: 1;

          .date-text {
            margin-right: 24px;
          }
        }
      }
    }
  }
}
</style>
