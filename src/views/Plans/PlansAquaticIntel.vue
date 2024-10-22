<template>
  <div class="container flex-col">
    <div class="aquaculture section flex-col justify-between">
      <div class="header-section flex-col">
        <div class="title-wrapper flex-col">
          <div class="header flex-row">
          </div>
          <div class="title-text flex-row">
            <span class="main-title">{{ title }}</span>
          </div>
          <div class="subtitle-text flex-row">
            <span class="subtitle">{{ subTitle }}</span>
          </div>
        </div>
      </div>
      <div class="main-section flex-col">
        <div class="feeding-system flex-col">
          <div class="feeding-header flex-row">
            <div class="feeding-banner flex-col">
              <div class="feeding-title-wrapper flex-col"></div>
            </div>
          </div>
          <div class="feeding-title flex-row">
            <span class="feeding-main-title">智能料塔投喂系统</span>
          </div>
          <div class="feeding-description flex-row">
            <span class="feeding-subtitle">流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。</span>
          </div>

          <div class="feeding-content flex-row">
            <div class="content flex-col justify-between">
              <div class="text-wrapper flex-col">
                <span class="text">系统功能</span>
              </div>
              <div class="sub-wrapper flex-row">
                <div class="image-wrapper-one flex-col justify-between">
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                </div>
                <span class="paragraph-one">本地控制投喂<br />远程控制投喂<br />定时投喂设定</span>
                <div class="image-wrapper-two flex-col justify-between">
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                  <img class="thumbnail-arrow thumbnail" 
                    src="../../assets/images/arrow-grey-right.png" />
                </div>
                <span class="paragraph-two">智能投喂模型<br />投喂速率控制<br />投喂数据记录</span>
              </div>
            </div>
            <img class="image"  src="../../assets/images/intel_222_05.png" />
            <img class="image flex-col"  src="../../assets/images/intel_221_07.png" />
          </div>
        </div>

        <div class="robotic-system flex-col">
          <div class="robotic-header flex-row">
            <div class="section flex-col">
              <div class="group flex-col"></div>
            </div>
          </div>
          <div class="text-wrapper title flex-row">
            <span class="text">智能机器人投喂系统</span>
          </div>
          <div class="text-wrapper subtitle flex-row">
            <span class="text">定时、定点、定量&nbsp;</span>
          </div>
          <div class="robotic-image-wrapper flex-row justify-between">
            <img class="image one flex-col"  src="../../assets/images/intel_222_02.png" />
            <img class="image two"  src="../../assets/images/intel_222_04.png" />
          </div>
        </div>

        <div class="platform-system wrapper flex-col">
          <div class="platform-wrapper flex-col">
            <div class="platform-banner flex-col"></div>
          </div>
          <span class="platform-title">多级运维平台</span>
          <span class="platform-description">实时展示养殖水体的水质指标和视频影像，保证整个养殖园区24小时内处于监护状态，避免财产损失和保障人员安全</span>

          <div class="image-wrapper flex-row justify-between">
            <img class="image"  src="../../assets/images/intel_222_03.png" />
            <img class="image"  src="../../assets/images/intel_222_01.png" />
          </div>
        </div>

        <div class="erp-system flex-col">
          <div class="erp-header flex-col"></div>
          <div class="erp-sub-header flex-col"></div>
          <span class="erp-title">养殖ERP系统</span>
          <span class="erp-description">养渔家——主要实现人、财、物、产、供、销的管理，实现实时、动态的成本管理；实现养殖计划的管理和周期的管理。</span>
          <div class="erp-image-wrapper flex-row justify-between">
            <img class="image flex-col"  src="../../assets/images/intel_222_07.png" />
            <img class="image flex-col"  src="../../assets/images/intel_222_06.png" />
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
const baseHeight = 2690;
const containerHeight = ref(baseHeight);

const title = ref('智能化养殖系统');
const subTitle = ref('Intelligent aquaculture system');

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
  height: 3021px;
  overflow: hidden;

  .section {
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    width: 1920px;
    height: 3021px;

    .header-section {
      background-color: rgba(255, 255, 255, 1);
      height: 400px;
      width: 1920px;
    
      .title-wrapper {
        height: 400px;
        width: 1920px;
        background-image: url('../../assets/images/plan_header_yz.jpg');
        background-size: cover;
        background-position: center;
      }
    
      .header {
        width: 1298px;
        height: 42px;
        margin: 29px 0 0 310px;
        opacity: 0;
      }
    
      .title-text {
        width: 348px;
        height: 48px;
        margin: 122px 0 0 787px;
      }
    
      .subtitle-text {
        width: 307px;
        height: 18px;
        margin: 17px 0 124px 806px;
      }
    
      .main-title {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 348px;
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
    
      .subtitle {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 307px;
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
    
    .main-section {
      position: absolute;
      left: 0;
      top: 400px;
      width: 1920px;
      height: 2300px;
    
      .platform-system {
        .platform-wrapper {
          background-color: rgba(67, 164, 56, 0.34);
          height: 4px;
          width: 138px;
          margin: 1128px 0 0 312px;
      
          .platform-banner {
            background-color: rgba(67, 164, 56, 1);
            width: 48px;
            height: 4px;
          }
        }
      
        .platform-title {
          width: 142px;
          height: 24px;
          overflow-wrap: break-word;
          color: rgba(51, 51, 51, 1);
          font-size: 24px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 700;
          text-align: left;
          white-space: nowrap;
          line-height: 48px;
          margin: 14px 0 0 310px;
        }
      
        .platform-description {
          width: 817px;
          height: 16px;
          overflow-wrap: break-word;
          color: rgba(119, 119, 119, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Normal;
          font-weight: normal;
          text-align: justifyLeft;
          white-space: nowrap;
          line-height: 36px;
          margin: 31px 0 0 309px;
        }
      
        .image-wrapper {
          width: 1249px;
          height: 318px;
          margin: 53px 0 0 310px;
      
          .image {
            width: 584px;
            height: 318px;
      
            &:last-child {
              width: 610px;
              height: 318px;
            }
          }
        }
      }
      
      .erp-system {
        background-color: rgba(247, 247, 247, 1);
        position: relative;
        width: 1919px;
        height: 623px;
        justify-content: flex-center;
        margin: 64px 0 25px 0;
      
        .erp-header {
          background-color: rgba(67, 164, 56, 1);
          width: 48px;
          height: 4px;
          margin: 64px 0 0 312px;
        }
      
        .erp-sub-header {
          background-color: rgba(67, 164, 56, 0.34);
          position: absolute;
          left: 312px;
          top: 64px;
          width: 138px;
          height: 4px;
        }
      
        .erp-title {
          width: 142px;
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
      
        .erp-description {
          width: 785px;
          height: 17px;
          overflow-wrap: break-word;
          color: rgba(119, 119, 119, 1);
          font-size: 16px;
          font-family: SourceHanSansCN-Normal;
          font-weight: normal;
          text-align: justifyLeft;
          white-space: nowrap;
          line-height: 36px;
          margin: 31px 0 0 309px;
        }
      
        .erp-image-wrapper {
          width: 1301px;
          height: 350px;
          margin: 55px 0 64px 313px;
      
          .image {
            background-color: rgba(247, 247, 247, 1);
            width: 639px;
            height: 350px;
      
            &:last-child {
              width: 644px;
            }
          }
        }
      }
      
      .feeding-system {
        background-color: rgba(255, 255, 255, 1);
        height: 736px;
        width: 1652px;
        position: absolute;
        left: 130px;
        top: -64px;
      
        .feeding-header {
          width: 191px;
          height: 4px;
          margin: 64px 0 0 180px;
        }
      
        .feeding-banner {
          background-color: rgba(67, 164, 56, 0.34);
          height: 4px;
          width: 191px;
        }
      
        .feeding-title-wrapper {
          background-color: rgba(67, 164, 56, 1);
          width: 48px;
          height: 4px;
        }
      
        .feeding-title {
          width: 191px;
          height: 24px;
          margin: 14px 0 0 180px;
        }
      
        .feeding-main-title {
          width: 191px;
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
      
        .feeding-description {
          width: 551px;
          height: 17px;
          margin: 31px 0 0 180px;
        }
      
        .feeding-subtitle {
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
      
        .feeding-content {
          width: 1203px;
          height: 232px;
          margin: 56px 0 294px 225px;
      
          .content {
            width: 344px;
            height: 183px;
      
            .text-wrapper {
              background-color: rgba(67, 164, 56, 0.154);
              height: 46px;
              border: 1px solid rgba(67, 164, 56, 0.7);
              width: 344px;
      
              .text {
                width: 79px;
                height: 20px;
                overflow-wrap: break-word;
                color: rgba(51, 51, 51, 1);
                font-size: 20px;
                font-family: SourceHanSansCN-Bold;
                font-weight: 700;
                text-align: center;
                white-space: nowrap;
                line-height: 41px;
                margin: 3px 0 0 132px;
              }
            }
      
            .sub-wrapper {
              width: 296px;
              height: 108px;
              margin: 29px 0 0 21px;
      
              .image-wrapper-one {
                width: 9px;
                height: 104px;
                margin-top: 2px;
      
                .thumbnail:nth-child(1) {
                  margin-left: 1px;
                }
      
                .thumbnail:nth-child(2) {
                  margin-top: 31px;
                }
      
                .thumbnail:nth-child(3) {
                  margin-top: 31px;
                }
              }
      
              .thumbnail-arrow {
                width: 8px;
                height: 14px;
              }
      
              .paragraph-one {
                width: 98px;
                height: 107px;
                overflow-wrap: break-word;
                color: rgba(119, 119, 119, 1);
                font-size: 16px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: justifyLeft;
                line-height: 45px;
                margin: -12px 0 0 10px;
              }
      
              .image-wrapper-two {
                width: 9px;
                height: 104px;
                margin: 2px 0 0 63px;
      
                .thumbnail:nth-child(1) {
                  margin-left: 1px;
                }
      
                .thumbnail:nth-child(2) {
                  margin-top: 31px;
                }
      
                .thumbnail:nth-child(3) {
                  margin-top: 31px;
                }
              }
      
              .paragraph-two {
                width: 98px;
                height: 107px;
                overflow-wrap: break-word;
                color: rgba(119, 119, 119, 1);
                font-size: 16px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: justifyLeft;
                line-height: 45px;
                margin: -13px 0 0 9px;
              }
            }
          }
      
          .image {
            width: 495px;
            height: 232px;
            margin-left: 21px;
      
            &:last-child {
              background-color: rgba(204, 204, 204, 1);
              width: 345px;
              height: 232px;
              margin-left: -2px;
            }
          }
      
        }
      }
      
      .robotic-system {
        background-color: rgba(247, 247, 247, 1);
        height: 622px;
        width: 1919px;
        position: absolute;
        left: 0;
        top: 442px;
        justify-content: flex-center;
      
        .robotic-header {
          width: 215px;
          height: 4px;
          margin: 64px 0 0 310px;
      
          .section {
            background-color: rgba(67, 164, 56, 0.34);
            height: 4px;
            width: 215px;
          }
      
          .group {
            background-color: rgba(67, 164, 56, 1);
            width: 48px;
            height: 4px;
          }
        }
      
        .text-wrapper {
          width: 215px;
          height: 24px;
          margin: 14px 0 0 310px;
      
          &.title {
            .text {
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
          }
      
          &.subtitle {
            width: 114px;
            height: 16px;
            margin: 31px 0 0 310px;
      
            .text {
              width: 114px;
              height: 16px;
              overflow-wrap: break-word;
              color: rgba(119, 119, 119, 1);
              font-size: 16px;
              font-family: SourceHanSansCN-Normal;
              font-weight: normal;
              text-align: justifyLeft;
              white-space: nowrap;
              line-height: 36px;
            }
          }
        }
      
        .robotic-image-wrapper {
          width: 1205px;
          height: 349px;
          margin: 55px 0 65px 354px;
      
          .image {
            &.one {
              background-color: rgba(204, 204, 204, 1);
              width: 440px;
              height: 349px;
            }
      
            &.two {
              width: 711px;
              height: 349px;
            }
          }
        }
      }
    }
  }
}
</style>