<template>
  <div class="container flex-col">
    <!-- mobile-header -->
    <MHeader></MHeader>
    <!-- title-container -->
    <div class="title-container flex-col">
      <div class="title-wrapper flex-row">
        <div class="title-wrapper-text flex-col justify-between">
          <span class="text-title">{{ title }}</span>
          <span class="text-descript">{{ subTitle }}</span>
        </div>
      </div>
    </div>
    <!-- main-container -->
    <div class="main-container">
      <!-- description-container -->
      <div class="description-container flex-col">
        <span class="text-en">{{ opTextEn }}</span>
        <span class="text-title">{{ opTextTitle }}</span>
        <span class="text-descript">{{ opTextDescription }}</span>
        <span class="description-paragraph">
          <span class="paragraph-text" v-for="(text, index) in opParagraph" :key="index">{{ text }}</span>
        </span>
        <!-- metrics-container -->
        <div class="metric-box-container flex-row justify-between">
          <div class="metric-box flex-col">
            <img class="metric-image" src="../../assets/images/metric-icon-01.png" />
            <span class="metric-text-title">集约化</span>
            <span class="metric-text-description">INTENSIFICATION</span>
          </div>
          <div class="metric-box flex-col">
            <img class="metric-image" src="../../assets/images/metric-icon-02.png" />
            <span class="metric-text-title">智能化</span>
            <span class="metric-text-description">INTELLIGENTIZE</span>
          </div>
          <div class="metric-box flex-col">
            <img class="metric-image" src="../../assets/images/metric-icon-03.png" />
            <span class="metric-text-title">高效化</span>
            <span class="metric-text-description">HIGH EFFICIENCY</span>
          </div>
        </div>
      </div>
      <!-- content-container -->
      <div class="content-container flex-col">
        <div class="intelligent-operation flex-col">
          <div class="operation-header flex-row">
            <span class="operation-title">{{ opTitle }}</span>
            <span class="operation-main-text">{{ opText }}</span>
            <span class="operation-secondary-text">{{ description }}</span>
            <span class="operation-link">{{ opLink }}&gt;&gt;</span>
            <div class="operation-box">
              <div class="operation-services flex-col">
                <div class="service-image-wrapper flex-col">
                  <span class="icon iconfont service-image iconzhiwuzhongzhi"></span>
                </div>
                <div class="service-details flex-col justify-between">
                  <span class="service-title">现代化农业园区 </span>
                  <span class="service-title" style="margin-top: 5px;">整体解决方案</span>
                  <span class="service-description">现代化水产产业园规划建设<br />光伏农业园区规划建设<br />园区智能化运营服务<br />渔光一体整体解决方案</span>
                </div>
              </div>
              <div class="operation-services flex-col">
                <div class="service-image-wrapper flex-col">
                  <span class="icon iconfont service-image iconyangzhishebei"
                    style="font-size: 8.2vw; margin: 4.35vw auto;"></span>
                </div>
                <div class="service-details flex-col justify-between">
                  <span class="service-title">设施化养殖系统</span>
                  <span class="service-description"
                    style="margin-top: 8px;">池塘内循环养殖系统<br />陆基高位池养殖系统<br />工厂化车间养殖系统</span>
                  <span class="service-btn" style @click="handleClick('/mobile/plans/farm/intel')">了解详情</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="operation-icon-wrapper flex-row justify-between">
          <img class="arrow-circle-left" src="../../assets/images/arrow-circle-left.png" />
          <img class="arrow-circle-right" src="../../assets/images/arrow-circle-right.png" />
        </div>
      </div>
    </div>
    <!-- mobile-footer -->
    <MFooter></MFooter>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
import { useRouter } from 'vue-router';
import { setTimexec } from '@/utils/common';

const title = ref('集约化·智能化·高效化');
const subTitle = ref('INTENSIVE, INTELLIGENT AND EFFICIENT');
const description = ref('SMART AGRICULTURE');

const opTitle = ref('智慧农业');
const opText = ref('SMART');
const opLink = ref('业务范围');

const opTextEn = ref('SMART');
const opTextTitle = ref('运用智能物联，赋能现代农业');
const opTextDescription = ref('OPERATION');

const opParagraph = ref([
  '运用物联网技术来解决现代农业生产中的问题，将现代智慧农业和光伏产业科学、专业、有机结合，推动农业生产、农产品经营、农业信息服务三大领域改造升级，实现数字化、科学化、智能化、生态化的现代化养殖，助推农业产业高效可持续发展。'
]);

const router = useRouter();

const handleClick = (path, y = 0) => {
    window.scrollTo(0, y);
    router.push(path);
    setTimexec(() => {
        window.scrollTo(0, y);
    }, [0, 50, 100]);
}

onMounted(() => {
  //
});

onBeforeUnmount(() => {
  //
});
</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100vw;
  height: 318.6vw;
  overflow: hidden;
}

.title-container {
  background: url('../../assets/images/mobile_plans_bg_01.png') 100% no-repeat;
  background-size: 100% 100%;
  height: 66vw;
  width: 100vw;

  .title-wrapper {
    width: 67.6vw;
    height: 11.47vw;
    margin: 28.4vw 0 23.86vw 17.33vw;

    .title-wrapper-text {
      width: 67.6vw;
      height: 11.47vw;

      .text-title {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 67.6vw;
        height: 6.4vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 6.53vw;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 6.54vw;
      }

      .text-descript {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 56.94vw;
        height: 2.4vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 2.26vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 2.27vw;
        margin: 2.66vw 0 0 5.2vw;
      }
    }
  }
}

.content-container {
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  height: 115.45vw;
  margin-top: 112vw;
  width: 100vw;

  .intelligent-operation {
    background-color: rgba(29, 15, 12, 0.5);
    position: relative;
    width: 100vw;
    height: 132.4vw;
    flex-direction: row;
    background: url(../../assets/images/mobile_plans_bg_02.png) no-repeat;
    background-size: 100% 100%;

    .operation-header {
      width: 100vw;
      height: 73.74vw;
      margin-top: 16.4vw;

      .operation-title {
        position: absolute;
        left: 5.34vw;
        top: 13.5vw;
        width: 44.4vw;
        height: 5.34vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 5.6vw;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        line-height: 5.47vw;
      }

      .operation-main-text {
        width: 100vw;
        height: 36.27vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 47.46vw;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 39.47vw;
        opacity: 0.03;
      }

      .operation-secondary-text {
        width: 62vw;
        height: 2vw;
        overflow-wrap: break-word;
        color: #ffffff60;
        font-size: 2.66vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 5.47vw;
        margin: 3.86vw 0 0 -94.66vw;
      }

      .operation-link {
        width: 16.14vw;
        height: 3.07vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 3.2vw;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: justifyLeft;
        white-space: nowrap;
        line-height: 5.34vw;
        margin: 12.26vw 0 0 -61.73vw;
      }

      .operation-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .operation-services {
          width: 36.4vw;
          height: 48.8vw;
          background: url(../../assets/images/plans-box-transparent-02.png);
          background-size: 150% 100%;
          margin: 24.93vw 0 0 -11.5vw;
          box-shadow: 0px 4px 10px 0px #43A43860;

          &:last-child {
            background: url('../../assets/images/plans-box-transparent-02.png');
            background-size: 100% 100%;
            margin: 24.93vw 0 0 7.8vw;
            box-shadow: none;
          }

          .service-image-wrapper {
            background: transparent;
          }
        }

        .service-details {
          width: 25vw;
          height: 21.34vw;
          margin: 4.66vw auto 7.06vw auto;

          .service-title {
            width: 25vw;
            height: 2.94vw;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 2.93vw;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            line-height: 2.94vw;
          }

          .service-description {
            width: 25vw;
            height: 16.67vw;
            overflow-wrap: break-word;
            color: rgba(153, 153, 153, 1);
            font-size: 1.86vw;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: center;
            line-height: 2.94vw;
            margin: 1.73vw auto 0 auto;
          }

          .service-btn {
            color: #fefefe;
            background: #999;
            display: block;
            text-align: center;
            font-size: 2vw;
            padding: 4px 5px;
            width: 18vw;
            margin: -1.0vw auto 0 auto;
          }
        }
      }
    }

    .service-image-wrapper {
      background-color: rgba(239, 125, 27, 1);
      height: 15.74vw;
      width: 36.4vw;

      .service-image {
        width: 7.6vw;
        height: 7.6vw;
        font-size: 7.5vw;
        color: #fefefe;
        margin: 4.13vw auto 0 auto;
      }
    }

    .operation-main-image {
      width: 37.2vw;
      height: 48.94vw;
      margin: 24.66vw 5.86vw 0 9.2vw;
    }
  }

  .operation-icon-wrapper {
    position: absolute;
    width: 20.4vw;
    height: 7.47vw;
    left: 10.5vw;
    bottom: 8vw;

    .arrow-circle-left {
      width: 7.47vw;
      height: 7.47vw;
    }

    .arrow-circle-right {
      width: 7.47vw;
      height: 7.47vw;
    }
  }
}

.description-container {
  background-color: rgba(249, 250, 252, 1);
  background: url(../../assets/images/plan_wenli.jpg) repeat;
  background-size: cover;
  position: absolute;
  left: 4vw;
  top: 57.2vw;
  width: 92vw;
  height: 115.47vw;

  .text-en {
    width: 76.8vw;
    height: 9.74vw;
    overflow-wrap: break-word;
    color: #99999930;
    font-size: 12.25vw;
    font-family: SourceHanSansCN-Normal;
    font-weight: normal;
    text-align: left;
    white-space: nowrap;
    line-height: 8.54vw;
    margin: 9.2vw 0 0 3.25vw;
  }

  .text-title {
    width: 61.07vw;
    height: 5.87vw;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 6.13vw;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 6.94vw;
    margin: -4.85vw 0 0 4vw;
  }

  .text-descript {
    width: 15.87vw;
    height: 2.4vw;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 2.93vw;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: left;
    white-space: nowrap;
    line-height: 6.94vw;
    margin: 1.5vw 0 0 4vw;
  }

  .description-paragraph {
    width: 83.87vw;
    height: 29.87vw;
    overflow-wrap: break-word;
    color: rgba(68, 68, 68, 1);
    font-size: 3.2vw;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: justifyLeft;
    line-height: 5.34vw;
    margin: 5.06vw 0 0 4vw;

    .paragraph-text {
      display: block;
      text-indent: 2em;
    }
  }

  .metric-box-container {
    width: 84.27vw;
    height: 38.67vw;
    margin: 8.5vw 0 8.66vw 3.73vw;

    .metric-box {
      box-shadow: -1px 4px 10px 0px rgba(24, 24, 24, 0.11);
      background-color: rgba(255, 255, 255, 1);
      width: 26.14vw;
      height: 38.67vw;
      justify-content: flex-center;

      &:not(:nth-child(1)) {
        margin-left: 2.94vw;
      }
    }

    .metric-image {
      width: 10.4vw;
      height: 10.4vw;
      margin: 7.86vw 0 0 7.86vw;

      &:nth-child(2) {
        width: 9.74vw;
        height: 10.4vw;
        margin: 7.86vw 0 0 8.26vw;
      }

      &:nth-child(3) {
        width: 8vw;
        height: 10.67vw;
        margin: 7.73vw 0 0 9.06vw;
      }
    }

    .metric-text-title {
      width: 10.4vw;
      height: 3.34vw;
      overflow-wrap: break-word;
      color: rgba(67, 164, 56, 1);
      font-size: 3.46vw;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 3.47vw;
      margin: 5.2vw 0 0 7.86vw;
    }

    .metric-text-description {
      width: 17.2vw;
      height: 1.6vw;
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 2.13vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      white-space: nowrap;
      line-height: 2.14vw;
      margin: 2.53vw 0 7.73vw 4.53vw;
    }
  }
}
</style>