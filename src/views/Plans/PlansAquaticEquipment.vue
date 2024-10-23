<template>
  <div class="container flex-col">
    <!-- 页面容器 -->
    <div class="aquatic-equipment-container main-container intelligent-system flex-col justify-between">
      <!-- 设施化养殖系统顶部标题 -->
      <div class="header-section header-container flex-col">
        <div class="content-wrapper flex-col">
          <div class="block flex-row">
          </div>
          <div class="text-wrapper-title flex-row">
            <span class="main-title">{{ title }}</span>
          </div>
          <div class="text-wrapper-text flex-row">
            <span class="subtitle">{{ subTitle }}</span>
          </div>
        </div>
      </div>
      <!-- 设施化养殖系统内容容器 -->
      <div class="factory-system content-container flex-col">
        <!-- 池塘内循环养殖系统 -->
        <div class="ponds-system flex-col">
          <div class="pond-system flex-row">
            <div class="system-description flex-col">
              <div class="description flex-col"></div>
            </div>
          </div>
          <div class="pond-description flex-row">
            <span class="pond-title">池塘内循环养殖系统</span>
          </div>
          <div class="pond-description text-wrapper flex-row">
            <span class="pond-subtitle">流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。</span>
          </div>
          <div class="pond-images flex-row justify-between">
            <img class="pond-image flex-col" referrerpolicy="no-referrer" src="../../assets/images/intel_221_04.png" />
            <img class="pond-image" referrerpolicy="no-referrer" src="../../assets/images/intel_221_05.png" />
          </div>
        </div>
        <!-- 陆基高位池养殖系统 -->
        <div class="high-level-pond-system flex-col">
          <div class="high-description flex-row">
            <div class="wrapper flex-col">
              <div class="description flex-col"></div>
            </div>
          </div>
          <div class="text-wrapper flex-row">
            <span class="high-level-title">陆基高位池养殖系统</span>
          </div>
          <div class="high-level-wrapper flex-row justify-between">
            <div class="image-box flex-col"></div>
            <div class="image-box flex-col"></div>
            <div class="image-box flex-col"></div>
          </div>
          <div class="bottom-wrapper flex-row">
            <span class="high-level-subtitle">漂浮式圈养池</span>
            <span class="high-level-subtitle">玻璃钢陆基圆形池</span>
            <span class="high-level-subtitle">水泥结构高位池养殖系统</span>
          </div>
        </div>
        <!-- 工厂化车间养殖系统 -->
        <div class="factory-farm-system">
          <div class="system-description flex-col">
            <div class="description flex-col"></div>
          </div>
          <span class="system-title">工厂化车间养殖系统</span>
          <div class="system-details">
            <span class="system-features">无人值守模式<br /></span>
            <span class="system-description-text">实现对整个工厂化智能养殖进行数据采集、指令调度和流程控制，诊断告警功能，软硬件共同调度，实现报警功能和流程控制包括恒温系统、恒压系统和水处理等流程控制配置，建立通畅的信息反馈机制和自动化的处理措施，自动处理，把风险控制在苗头状态，从而达到自动化无人值守的工厂化养殖模式<br /></span>
          </div>
          <div class="monitor-system flex-col">
            <div class="monitoring-system flex-col">
              <div class="group-one flex-row justify-between">
                <div class="block flex-col justify-between">
                  <div class="block-detail flex-col"></div>
                  <div class="block-detail flex-col"></div>
                </div>
                <div class="block flex-col">
                  <div class="block-detail flex-col"></div>
                  <div class="block-detail flex-col"></div>
                  <div class="block-detail flex-col"></div>
                </div>
              </div>
              <div class="group-two flex-row justify-between">
                <div class="block-detail flex-col"></div>
                <div class="block-detail flex-col"></div>
              </div>
              <div class="group-three flex-row justify-between">
                <div class="block-detail flex-col"></div>
                <div class="block-detail flex-col"></div>
              </div>
              <div class="group-four flex-row">
                <div class="block-detail flex-col"></div>
              </div>
              <div class="monitoring-controls flex-row">
                <div class="section control-section flex-col"><span>恒压供水</span></div>
                <div class="section flex-col"><span>恒温供水</span></div>
                <div class="section flex-col"><span>循环水处理</span></div>
                <div class="section flex-col"><span>尾水处理</span></div>
              </div>
              <span class="metric-text">
                视频监控<br />PH值、水位<br />自动投喂<br />温度和溶氧
              </span>
              <span class="metric-text paragraph">
                自动增氧<br />自动加温<br />自动水处理<br />自动供水<br />自动投喂<br />......
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import { MsgManager } from "@/manager/MsgManager";

const baseWidth = 1920; // 基准宽度
const baseHeight = 2350;
const containerHeight = ref(baseHeight);

const title = ref('设施化养殖系统');
const subTitle = ref('Set up aquaculture system');

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;
  // 根据比例缩放高度
  if (screenWidth >= 0) {
    containerHeight.value = baseHeight * scaleFactor;
    MsgManager.getInstance().sendMsg('container-height', { height: containerHeight.value + 220 * scaleFactor });
  }
};

// 挂载函数
onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
});

// 卸载函数
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style lang="less" scoped>
@import '../../assets/style/common.css';

.container {
  position: relative;
  width: 1920px;
  height: 2609px;
  overflow: hidden;

  .intelligent-system {
    position: relative;
    width: 1920px;
    height: 2609px;

    .header-section {
      background-color: rgba(255, 255, 255, 1);
      height: 400px;
      width: 1920px;
      background-image: url('../../assets/images/plan_header_yz.jpg');
      background-size: cover;
      background-position: center;

      .content-wrapper {
        height: 400px;
        width: 1920px;

        .block {
          width: 1298px;
          height: 42px;
          margin: 29px 0 0 310px;
          opacity: 0;
        }

        .text-wrapper-title {
          width: 347px;
          height: 48px;
          margin: 122px 0 0 788px;

          .main-title {
            text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
            width: 347px;
            height: 48px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 49px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: center;
            white-space: nowrap;
            line-height: 49px;
          }
        }

        .text-wrapper-text {
          width: 257px;
          height: 18px;
          margin: 17px 0 124px 830px;

          .subtitle {
            text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
            width: 257px;
            height: 18px;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 17px;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: center;
            white-space: nowrap;
            line-height: 17px;
          }
        }
      }
    }

    .factory-system {
      position: absolute;
      left: 0;
      top: 400px;
      width: 1920px;
      height: 1888px;

      .system-description {
        background-color: rgba(67, 164, 56, 0.34);
        height: 4px;
        width: 215px;
        margin: 1204px 0 0 310px;

        .description {
          background-color: rgba(67, 164, 56, 1);
          width: 48px;
          height: 4px;
        }
      }

      .system-title {
        width: 216px;
        height: 24px;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 24px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 48px;
        margin: 14px 0 0 309px;
      }

      .system-details {
        width: 1297px;
        height: 88px;
        overflow-wrap: break-word;
        font-size: 0;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: justifyLeft;
        line-height: 36px;
        margin: 31px 0 0 309px;
      }

      .system-features {
        width: 1297px;
        height: 88px;
        overflow-wrap: break-word;
        color: rgba(51, 51, 51, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        line-height: 36px;
      }

      .system-description-text {
        width: 1297px;
        height: 88px;
        overflow-wrap: break-word;
        color: rgba(119, 119, 119, 1);
        font-size: 16px;
        font-family: SourceHanSansCN-Normal;
        font-weight: normal;
        text-align: left;
        line-height: 36px;
      }

      .monitor-system {
        background-color: rgba(255, 255, 255, 1);
        height: 421px;
        width: 1106px;
        margin: 45px 0 57px 368px;

        .monitoring-system {
          height: 421px;
          background: url(../../assets/images/intel_221_06.png) 100% no-repeat;
          background-size: 100% 100%;
          width: 1106px;
          position: relative;
          justify-content: flex-center;

          .group-one {
            width: 1055px;
            height: 115px;
            margin: 8px 0 0 39px;

            .block {
              width: 124px;
              height: 81px;
              margin: 20px 0 0 0;
              opacity: 1;

              .block-detail {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);

                &:last-child {
                  background-color: rgba(67, 164, 56, 0);
                  width: 124px;
                  height: 30px;
                  border: 1px solid rgba(67, 164, 56, 1);
                  margin-top: 21px;
                }
              }

              &:last-child {
                width: 124px;
                height: 115px;
                margin: 0;

                .block-detail {
                  background-color: rgba(67, 164, 56, 0);
                  width: 124px;
                  height: 30px;
                  border: 1px solid rgba(67, 164, 56, 1);

                  &:nth-child(2) {
                    background-color: rgba(67, 164, 56, 0);
                    width: 124px;
                    height: 30px;
                    border: 1px solid rgba(67, 164, 56, 1);
                    margin-top: 13px;
                  }

                  &:nth-child(3) {
                    background-color: rgba(67, 164, 56, 0);
                    width: 124px;
                    height: 30px;
                    border: 1px solid rgba(67, 164, 56, 1);
                    margin-top: 12px;
                  }
                }

              }
            }
          }

          .group-two {
            width: 1055px;
            height: 37px;
            margin: 6px 0 0 39px;

            .block-detail {
              background-color: rgba(67, 164, 56, 0);
              width: 124px;
              height: 30px;
              border: 1px solid rgba(67, 164, 56, 1);

              &:last-child {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);
                margin-top: 7px;
              }
            }
          }

          .group-three {
            width: 1055px;
            height: 31px;
            margin: 13px 0 0 39px;

            .block-detail {
              background-color: rgba(67, 164, 56, 0);
              width: 124px;
              height: 30px;
              border: 1px solid rgba(67, 164, 56, 1);
              margin-top: 1px;

              &:last-child {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);
              }
            }
          }

          .group-four {
            width: 124px;
            height: 30px;
            margin: 12px 0 0 970px;

            .block-detail {
              background-color: rgba(67, 164, 56, 0);
              width: 124px;
              height: 30px;
              border: 1px solid rgba(67, 164, 56, 1);
            }
          }

          .monitoring-controls {
            width: 826px;
            height: 30px;
            margin: 131px 0 8px 130px;

            .section span {
              display: block;
              margin: 3px auto;
            }

            .control-section {
              background-color: rgba(67, 164, 56, 0);
              width: 124px;
              height: 30px;
              border: 1px solid rgba(67, 164, 56, 1);
            }

            .section {
              &:nth-child(2) {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);
                margin-left: 77px;
              }

              &:nth-child(3) {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);
                margin-left: 142px;
              }

              &:nth-child(4) {
                background-color: rgba(67, 164, 56, 0);
                width: 124px;
                height: 30px;
                border: 1px solid rgba(67, 164, 56, 1);
                margin-left: 111px;
              }
            }
          }

          .metric-text {
            position: absolute;
            left: 52px;
            top: 18px;
            width: 100px;
            height: 169px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: center;
            line-height: 51px;

            &.paragraph {
              position: absolute;
              left: 980px;
              top: 0.5px;
              width: 100px;
              height: 224px;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: normal;
              text-align: center;
              line-height: 42.5px;
            }
          }
        }
      }

      .ponds-system {
        background-color: rgba(255, 255, 255, 1);
        height: 736px;
        width: 1652px;
        position: absolute;
        left: 130px;
        top: -64px;

        .pond-system {
          width: 215px;
          height: 4px;
          margin: 64px 0 0 180px;

          .system-description {
            background-color: rgba(67, 164, 56, 0.34);
            height: 4px;
            width: 215px;
            margin: 0;

            .description {
              background-color: rgba(67, 164, 56, 1);
              width: 48px;
              height: 4px;
            }
          }
        }

        .pond-description {
          width: 216px;
          height: 24px;
          margin: 14px 0 0 179px;

          .pond-title {
            width: 216px;
            height: 24px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 24px;
            font-family: SourceHanSansCN-Bold;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            line-height: 48px;
          }

          &.text-wrapper {
            width: 551px;
            height: 17px;
            margin: 31px 0 0 180px;
          }
        }

        .pond-subtitle {
          width: 551px;
          height: 17px;
          overflow-wrap: break-word;
          color: rgba(119, 119, 119, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Normal;
          font-weight: normal;
          text-align: justifyLeft;
          white-space: nowrap;
          line-height: 36px;
        }

        .pond-images {
          width: 1237px;
          height: 333px;
          margin: 56px 0 193px 206px;

          .pond-image {
            background-color: rgba(255, 255, 255, 1);
            width: 613px;
            height: 333px;
            border: 1px solid rgba(204, 204, 204, 1);

            &:last-child {
              width: 543px;
              height: 332px;
              margin-top: 1px;
            }
          }
        }
      }

      .high-level-pond-system {
        background-color: rgba(247, 247, 247, 1);
        height: 597px;
        width: 1920px;
        position: absolute;
        left: 0;
        top: 543px;
        justify-content: flex-center;

        .high-description {
          width: 215px;
          height: 4px;
          margin: 64px 0 0 310px;

          .wrapper {
            background-color: rgba(67, 164, 56, 0.34);
            height: 4px;
            width: 215px;

            .description {
              background-color: rgba(67, 164, 56, 1);
              width: 48px;
              height: 4px;
            }
          }
        }

        .text-wrapper {
          width: 215px;
          height: 24px;
          margin: 14px 0 0 309px;
        }

        .bottom-wrapper {
          width: 1016px;
          height: 16px;
          margin: 24px 0 64px 443px;

          .high-level-subtitle {
            width: 98px;
            height: 16px;
            overflow-wrap: break-word;
            color: rgba(51, 51, 51, 1);
            font-size: 16px;
            font-family: SourceHanSansCN-Regular;
            font-weight: normal;
            text-align: justifyLeft;
            white-space: nowrap;
            line-height: 36px;

            &:nth-child(2) {
              width: 130px;
              height: 16px;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: normal;
              text-align: justifyLeft;
              white-space: nowrap;
              line-height: 36px;
              margin-left: 294px;
            }

            &:nth-child(3) {
              width: 172px;
              height: 16px;
              overflow-wrap: break-word;
              color: rgba(51, 51, 51, 1);
              font-size: 16px;
              font-family: SourceHanSansCN-Regular;
              font-weight: normal;
              text-align: justifyLeft;
              white-space: nowrap;
              line-height: 36px;
              margin-left: 322px;
            }
          }
        }

        .high-level-title {
          width: 215px;
          height: 24px;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 48px;
        }

        .high-level-wrapper {
          width: 1300px;
          height: 332px;
          margin: 55px 0 0 313px;

          .image-box {
            background: url(../../assets/images/intel_221_03.png) 100% no-repeat;
            background-size: 100% 100%;
            height: 332px;
            width: 395px;

            &:nth-child(2) {
              height: 332px;
              background: url(../../assets/images/intel_221_02.png) 100% no-repeat;
              background-size: 100% 100%;
              margin-left: 42px;
              width: 342px;
            }

            &:nth-child(3) {
              height: 332px;
              background: url(../../assets/images/intel_221_01.png) 100% no-repeat;
              background-size: 100% 100%;
              background-size: 100% 100%;
              margin-left: 42px;
              width: 479px;
            }
          }
        }
      }
    }
  }
}
</style>