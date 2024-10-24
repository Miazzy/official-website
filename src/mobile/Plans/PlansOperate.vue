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
        <span class="text-en">INTELLIGENT</span>
        <span class="text-title">渔光一体智能运营专家</span>
        <span class="text-descript">OPERATION</span>
        <span class="description-paragraph">
          <span style="display: block; text-indent: 2em;">秉承“以人为本、安全运维、高效协同”的基本思想，集现代数字智能化手段，提供各类新能源电站运服务。</span>
          <span
            style="display: block; text-indent: 2em;">线上依托自主研发新能源云管理系统、渔光一体智慧云平台、智能水产养殖系统，融合视频监控等各种电站资源，形成电站的渔光一体产业化、安全生产模式化、电站生产标准化、运营管理智能化、发电目标最大化的五大核心能力。</span>
        </span>
        <div class="description-block flex-row justify-between">
          <div class="description-box flex-row">
            <div class="description-content flex-col justify-between">
              <div class="text-wrapper">
                <span class="text">40</span>
                <span class="text"></span>
                <span class="text">+个</span>
              </div>
              <span class="text-title">在运城市</span>
            </div>
          </div>
          <div class="description-box flex-row">
            <div class="description-content flex-col justify-between">
              <div class="text-wrapper">
                <span class="text">50</span>
                <span class="text"></span>
                <span class="text">+座</span>
              </div>
              <span class="text-title">在运电站</span>
            </div>
          </div>
        </div>
        <div class="description-block flex-row justify-between">
          <div class="description-box flex-row">
            <div class="description-content flex-col justify-between">
              <div class="text-wrapper">
                <span class="text">4.27</span>
                <span class="text"></span>
                <span class="text">Gw+</span>
              </div>
              <span class="text-title">在运维总容量</span>
            </div>
          </div>
          <div class="description-box flex-row">
            <div class="description-content flex-col justify-between">
              <div class="text-wrapper">
                <span class="text">3170</span>
                <span class="text">+天</span>
              </div>
              <span class="text-title">安全生产天数</span>
            </div>
          </div>
        </div>
      </div>
      <!-- content-container -->
      <div class="content-container flex-col">
        <div class="intelligent-operation flex-col">
          <div class="operation-header flex-row">
            <span class="operation-title">渔光一体智能运营</span>
            <span class="operation-main-text">YU GUANG</span>
            <span class="operation-secondary-text">{{ description }}</span>
            <span class="operation-link">业务范围&gt;&gt;</span>
            <div class="operation-box">
              <div class="operation-services flex-col">
                <div class="service-image-wrapper flex-col">
                  <img class="service-image" src="../../assets/images/icon-operation.png" />
                </div>
                <div class="service-details flex-col justify-between">
                  <span class="service-title">运行维护</span>
                  <span class="service-description">安全管理<br />电站巡检<br />设备运行监控<br />维护消缺<br />台账管理<br />除草清洗</span>
                </div>
              </div>
              <div class="operation-services flex-col">
                <div class="service-image-wrapper flex-col">
                  <img class="service-image" src="../../assets/images/icon-operation.png" />
                </div>
                <div class="service-details flex-col justify-between">
                  <span class="service-title">运行维护</span>
                  <span class="service-description">安全管理<br />电站巡检<br />设备运行监控<br />维护消缺<br />台账管理<br />除草清洗</span>
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
    <!-- footer-container -->
    <div class="footer-container flex-col">
      <div class="footer-wrapper flex-row justify-between">
        <div class="company-wrapper flex-col justify-between">
          <img class="company-code-image"
            src="https://lanhu-oss.lanhuapp.com/ps5c5obha6ixjleqf1b9ny9jbtrrhkmadqs897a4dda-3cf8-4968-b193-1d9eee3a8121" />
          <span class="company-code-text">扫一扫，关注渔光物联</span>
        </div>
        <div class="contact-wrapper flex-row">
          <div class="contact-content flex-row justify-between">
            <span
              class="contact-content-paragraph">Tel：028-86168758<br />E-mail：WEIH02&#64;tongwei.com<br />Addr.：四川省成都市高新区天府大道中段588号通威国际中心</span>
          </div>
        </div>
      </div>
      <div class="line-box flex-col"></div>
      <span class="text-copyright">Copyright ©渔光物联（www.ygwl.net） 蜀ICP备16026089号</span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MHeader from "@/components/MHeader.vue";

const title = ref('专业化·智能化·一体化');
const subTitle = ref('Specialization, intelligence and integration'.toLocaleUpperCase());
const description = ref('Yu guang integrated intelligent operation'.toLocaleUpperCase());

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
  height: 308.6vw;
  overflow: hidden;
}

.title-container {
  background: url('../../assets/images/mobile_plans_01.jpg') 100% no-repeat;
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
  height: 105.45vw;
  margin-top: 112vw;
  width: 100vw;
}

.intelligent-operation {
  background-color: rgba(29, 15, 12, 0.5);
  position: relative;
  width: 100vw;
  height: 122.4vw;
  flex-direction: row;
  background: url(../../assets/images/mobile_plans_02.jpg) no-repeat;
  background-size: 100% 100%;

  .operation-header {
    width: 100vw;
    height: 73.74vw;
    margin-top: 6.4vw;
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
      background: #fefefe;
      margin: 24.93vw 0 0 -11.5vw;

      &:last-child {
        margin: 24.93vw 0 0 5.5vw;
      }
    }
  }
}

.group_6 {
  box-shadow: 0px 2px 7px 0px rgba(128, 128, 128, 0.25);
  background-color: rgba(255, 255, 255, 1);
  width: 100vw;
  height: 16vw;
  margin-top: -0.26vw;
}

.section_1 {
  height: 8.4vw;
  background: url(https://lanhu-oss.lanhuapp.com/pswl90lvq9vftr4rsv604fs3fikzvm1zd21a5a7157-913d-4579-8e6b-0ddbff87907a) 100% no-repeat;
  background-size: 100% 100%;
  width: 27.47vw;
  margin: 3.73vw 0 0 4.13vw;
}

.block_5 {
  background-color: rgba(0, 0, 0, 1);
  width: 17.6vw;
  height: 8.4vw;
  margin-left: 9.87vw;
}

.label_2 {
  width: 5.87vw;
  height: 4vw;
  margin: 6vw 4.13vw 0 0;
}




.service-image-wrapper {
  background-color: rgba(239, 125, 27, 1);
  height: 15.74vw;
  width: 36.4vw;
}

.service-image {
  width: 7.6vw;
  height: 7.74vw;
  margin: 4.13vw 0 0 14.26vw;
}

.service-details {
  width: 11.47vw;
  height: 21.34vw;
  margin: 4.66vw 0 7.06vw 12.66vw;
}

.service-title {
  width: 11.47vw;
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
  width: 11.34vw;
  height: 16.67vw;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 1.86vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: center;
  line-height: 2.94vw;
  margin: 1.73vw 0 0 0.13vw;
}

.operation-main-image {
  width: 37.2vw;
  height: 48.94vw;
  margin: 24.66vw 5.86vw 0 9.2vw;
}

.operation-icon-wrapper{
  position: absolute;
  width: 20.4vw;
  height: 7.47vw;
  left: 10.5vw;
  bottom: 8vw;
}

.arrow-circle-left {
  width: 7.47vw;
  height: 7.47vw;
}

.arrow-circle-right {
  width: 7.47vw;
  height: 7.47vw;
}

.operation-title {
  position: absolute;
  left: 5.34vw;
  top: 3.5vw;
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

.footer-container {
  background-color: rgba(35, 36, 41, 1);
  position: relative;
  width: 100vw;
  height: 25.2vw;
}

.footer-wrapper {
  width: 71.74vw;
  height: 11.6vw;
  margin: 3.73vw 0 0 14.13vw;
}

.company-wrapper {
  width: 16vw;
  height: 11.2vw;
  margin-top: 0.27vw;
}

.company-code-image {
  width: 8.54vw;
  height: 8.54vw;
  margin-left: 3.74vw;
}

.company-code-text {
  width: 16vw;
  height: 1.6vw;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 1.6vw;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 4vw;
  margin-top: 1.07vw;
}

.contact-wrapper {
  position: relative;
  width: 53.74vw;
  height: 11.6vw;
  margin: -1.0vw 0 0 6vw;
}

.contact-content {
  width: 53.74vw;
  height: 11.6vw;
}

.image-wrapper_7 {
  width: 1.87vw;
  height: 6.67vw;
  margin-top: 4.94vw;
}

.thumbnail_1 {
  width: 1.87vw;
  height: 1.47vw;
}

.thumbnail_2 {
  width: 1.74vw;
  height: 2.14vw;
  margin: 3.06vw 0 0 0.13vw;
}

.contact-content-paragraph {
  width: 51.2vw;
  height: 11.6vw;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 1.86vw;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 4.8vw;
}

.thumbnail_3 {
  position: absolute;
  left: 0;
  top: 0.14vw;
  width: 2vw;
  height: 1.6vw;
}

.line-box {
  background-color: rgba(255, 255, 255, 0.1);
  width: 89.34vw;
  height: 0.14vw;
  margin: 3.73vw 0 0 5.33vw;
}

.text-copyright {
  width: 45.74vw;
  height: 1.87vw;
  overflow-wrap: break-word;
  color: #d9d9d9;
  font-size: 1.6vw;
  font-family: SourceHanSansCN-Normal;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 1.87vw;
  margin: 2vw auto 2.13vw auto;
}

.box_6 {
  background-color: rgba(217, 217, 217, 1);
  position: absolute;
  left: 52.8vw;
  top: 21.34vw;
  width: 0.14vw;
  height: 1.6vw;
}

.description-container {
  background-color: rgba(249, 250, 252, 1);
  background: url(/src/assets/images/plan_wenli.jpg) repeat;
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
}

.description-block {
  width: 72.67vw;
  height: 17.6vw;
  margin: 8.53vw 0 0 9.6vw;

  &:last-child {
    margin: 2.8vw 0 8vw 9.86vw;

    .text-title {
      text-align: left !important;
      margin: 1.87vw auto 0 -1.5vw !important;
    }

    .text-wrapper {
      margin: auto 0 auto -2.5vw;
    }
  }

  .description-box {
    background-color: rgba(255, 255, 255, 1);
    width: 33.87vw;
    height: 17.6vw;

    .description-content {
      width: 12.4vw;
      height: 9.2vw;
      margin: 5vw 0 0 12vw;

      .text-wrapper {
        width: 12.4vw;
        height: 4.94vw;
        overflow-wrap: break-word;
        font-size: 0;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 4.94vw;

        .text {
          width: 12.4vw;
          height: 4.94vw;
          overflow-wrap: break-word;
          color: rgba(239, 125, 27, 1);
          font-size: 6.13vw;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 2.67vw;

          &:last-child {
            margin-left: 0.5vw;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            font-size: 2.4vw;
          }
        }
      }

      .text-title {
        width: 100%;
        height: 2.4vw;
        overflow-wrap: break-word;
        color: #888888;
        font-size: 2.4vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 2.4vw;
        margin: 1.87vw auto 0 -0.5vw;
      }
    }
  }
}



.text_14 {
  width: 12.4vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);

  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 2.67vw;
}

.text_15 {
  width: 12.4vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);

  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 2.67vw;
}







.text-wrapper_2 {
  width: 12.27vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 34.8vw;
}

.text_17 {
  width: 12.27vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 6.13vw;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 2.67vw;
}

.text_18 {
  width: 12.27vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 6.13vw;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 2.67vw;
}

.text_19 {
  width: 12.27vw;
  height: 4.94vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 2.4vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 2.67vw;
}





.box_9 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.87vw;
  height: 17.6vw;
}

.text-group_11 {
  width: 19.34vw;
  height: 9.07vw;
  margin: -3vw 0 0 9.5vw;
}

.text-wrapper_3 {
  width: 19.2vw;
  height: 4.8vw;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 34.8vw;
  margin-left: 0.14vw;
}

.text_21 {
  width: 19.2vw;
  height: 4.8vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 6.13vw;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 2.67vw;
}

.text_22 {
  width: 19.2vw;
  height: 4.8vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 6.13vw;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 2.67vw;
}

.text_23 {
  width: 19.2vw;
  height: 4.8vw;
  overflow-wrap: break-word;
  color: rgba(239, 125, 27, 1);
  font-size: 2.4vw;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 2.67vw;
}

.text_24 {
  width: 14.54vw;
  height: 2.4vw;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 2.4vw;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 2.4vw;
  margin-top: 1.87vw;
}

.box_10 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.87vw;
  height: 17.6vw;
}

.text-group_12 {
  width: 19.47vw;
  height: 9.07vw;
  margin: -3vw 0 0 9.5vw;
}

.text-wrapper_4 {
  width: 19.47vw;
  height: 4.8vw;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: SourceHanSansCN-Bold;
  font-weight: 700;
  text-align: left;
  white-space: nowrap;
  line-height: 34.8vw;
}
</style>