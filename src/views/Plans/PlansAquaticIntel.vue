<template>
    <div class="container flex-col">
      <div class="section_1 flex-col justify-between">
        <div class="group_1 flex-col">
          <div class="group_2 flex-col">
            <div class="group_3 flex-row" style="opacity: 0;">
            </div>
            <div class="text-wrapper_1 flex-row">
              <span class="text_6">智能化养殖系统</span>
            </div>
            <div class="text-wrapper_2 flex-row">
              <span class="text_7">
                Intelligent&nbsp;aquaculture&nbsp;system
              </span>
            </div>
          </div>
        </div>
        <div class="group_6 flex-col">
          <div class="group_7 flex-col">
            <div class="block_1 flex-col"></div>
          </div>
          <span class="text_15">多级运维平台</span>
          <span class="text_16"
            >实时展示养殖水体的水质指标和视频影像，保证整个养殖园区24小时内处于监护状态，避免财产损失和保障人员安全</span
          >
          <div class="image-wrapper_1 flex-row justify-between">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="../../assets/images/intel_222_03.png"
            />
            <img
              class="image_4"
              referrerpolicy="no-referrer"
              src="../../assets/images/intel_222_01.png"
            />
          </div>
          <div class="group_8 flex-col">
            <div class="box_1 flex-col"></div>
            <span class="text_17">养殖ERP系统</span>
            <span class="text_18"
              >养渔家——主要实现人、财、物、产、供、销的管理，实现实时、动态的成本管理；实现养殖计划的管理和周期的管理。</span
            >
            <div class="box_2 flex-row justify-between">
              <img
                class="box_3 flex-col"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_222_07.png"
              />
              <img
                class="box_4 flex-col"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_222_06.png"
              />
            </div>
            <div class="box_5 flex-col"></div>
          </div>
          <div class="group_9 flex-col">
            <div class="section_3 flex-row">
              <div class="block_2 flex-col">
                <div class="group_10 flex-col"></div>
              </div>
            </div>
            <div class="text-wrapper_8 flex-row">
              <span class="text_19">智能料塔投喂系统</span>
            </div>
            <div class="text-wrapper_9 flex-row">
              <span class="text_20"
                >流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。</span
              >
            </div>
            <div class="section_4 flex-row">
              <div class="section_5 flex-col justify-between">
                <div class="text-wrapper_10 flex-col">
                  <span class="text_21">系统功能</span>
                </div>
                <div class="group_11 flex-row">
                  <div class="image-wrapper_2 flex-col justify-between">
                    <img
                      class="thumbnail-arrow thumbnail_4"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                    <img
                      class="thumbnail-arrow thumbnail_5"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                    <img
                      class="thumbnail-arrow thumbnail_6"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                  </div>
                  <span class="paragraph_6"
                    >本地控制投喂<br />远程控制投喂<br />定时投喂设定</span
                  >
                  <div class="image-wrapper_3 flex-col justify-between">
                    <img
                      class="thumbnail-arrow thumbnail_7"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                    <img
                      class="thumbnail-arrow thumbnail_8"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                    <img
                      class="thumbnail-arrow thumbnail_9"
                      referrerpolicy="no-referrer"
                      src="../../assets/images/arrow-grey-right.png"
                    />
                  </div>
                  <span class="paragraph_7"
                    >智能投喂模型<br />投喂速率控制<br />投喂数据记录</span
                  >
                </div>
              </div>
              <img
                class="image_5"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_222_05.png"
              />
              <img
                class="section_6 flex-col"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_221_07.png"
              />
            </div>
          </div>
          <div class="group_12 flex-col">
            <div class="group_13 flex-row">
              <div class="section_7 flex-col">
                <div class="group_14 flex-col"></div>
              </div>
            </div>
            <div class="text-wrapper_11 flex-row">
              <span class="text_22">智能机器人投喂系统</span>
            </div>
            <div class="text-wrapper_12 flex-row">
              <span class="text_23">定时、定点、定量&nbsp;</span>
            </div>
            <div class="group_15 flex-row justify-between">
              <img
                class="group_16 flex-col"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_222_02.png"
              />
              <img
                class="image_6"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_222_04.png"
              />
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

// 动态计算区域高度的函数
const updateHeights = () => {
    const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
    const scaleFactor = screenWidth / baseWidth;
    // 根据比例缩放高度
    if (screenWidth >= 0) {
        containerHeight.value = baseHeight * scaleFactor;
        MsgManager.getInstance().sendMsg('container-height', { height: containerHeight.value + 220 * scaleFactor});
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
}

.section_1 {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 3021px;
}

.group_1 {
  background-color: rgba(255, 255, 255, 1);
  height: 400px;
  width: 1920px;
}

.group_2 {
  height: 400px;
  width: 1920px;
  background-image: url('../../assets/images/plan_header_yz.jpg');
  background-size: cover;
  background-position: center;
}

.group_3 {
  width: 1298px;
  height: 42px;
  margin: 29px 0 0 310px;
}

.image_1 {
  width: 139px;
  height: 42px;
}

.text_1 {
  width: 34px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
  margin: 13px 0 0 584px;
}

.group_4 {
  width: 72px;
  height: 31px;
  margin: 11px 0 0 65px;
}

.text_2 {
  width: 71px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
}

.section_2 {
  background-color: rgba(239, 125, 27, 1);
  width: 72px;
  height: 3px;
  margin-top: 10px;
}

.text_3 {
  width: 71px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
  margin: 12px 0 0 63px;
}

.text_4 {
  width: 71px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
  margin: 12px 0 0 65px;
}

.text_5 {
  width: 70px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
  margin: 13px 0 0 64px;
}

.text-wrapper_1 {
  width: 348px;
  height: 48px;
  margin: 122px 0 0 787px;
}

.text_6 {
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

.text-wrapper_2 {
  width: 307px;
  height: 18px;
  margin: 17px 0 124px 806px;
}

.text_7 {
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

.group_5 {
  background-color: rgba(35, 36, 41, 1);
  width: 1920px;
  height: 322px;
  margin-top: 2299px;
}

.text-wrapper_3 {
  width: 73px;
  height: 147px;
  margin: 70px 0 0 306px;
}

.text_8 {
  width: 72px;
  height: 19px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
  margin-left: 1px;
}

.paragraph_1 {
  width: 71px;
  height: 85px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
  margin-top: 43px;
}

.text_9 {
  width: 36px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 52px;
  margin: 71px 0 0 58px;
}

.text-wrapper_4 {
  width: 73px;
  height: 148px;
  margin: 70px 0 0 59px;
}

.text_10 {
  width: 72px;
  height: 19px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
  margin-left: 1px;
}

.paragraph_2 {
  width: 57px;
  height: 86px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
  margin-top: 43px;
}

.text_11 {
  width: 72px;
  height: 18px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
  margin: 71px 0 0 42px;
}

.text-wrapper_5 {
  width: 72px;
  height: 110px;
  margin: 72px 0 0 41px;
}

.text_12 {
  width: 72px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
}

.paragraph_3 {
  width: 56px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
  margin-top: 43px;
}

.text-wrapper_6 {
  width: 72px;
  height: 147px;
  margin: 72px 0 0 42px;
}

.text_13 {
  width: 72px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
}

.paragraph_4 {
  width: 56px;
  height: 87px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
  margin-top: 43px;
}

.image-text_1 {
  width: 148px;
  height: 170px;
  margin: 70px 0 0 87px;
}

.image_2 {
  width: 148px;
  height: 148px;
}

.text-group_1 {
  width: 120px;
  height: 12px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 30px;
  margin: 10px 0 0 14px;
}

.image-text_2 {
  width: 406px;
  height: 87px;
  margin: 92px 313px 0 20px;
}

.image-text_3 {
  position: relative;
  width: 406px;
  height: 87px;
}

.image-text_4 {
  width: 406px;
  height: 87px;
}

.thumbnail_1 {
  width: 14px;
  height: 11px;
  margin-top: 37px;
}

.text-wrapper_7 {
  width: 381px;
  height: 87px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
}

.paragraph_5 {
  width: 381px;
  height: 87px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 36px;
}

.text_14 {
  width: 381px;
  height: 87px;
  overflow-wrap: break-word;
  color: rgba(217, 217, 217, 1);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  text-align: left;
  line-height: 24px;
}

.thumbnail_2 {
  position: absolute;
  left: 0;
  top: 1px;
  width: 15px;
  height: 12px;
}

.thumbnail_3 {
  width: 13px;
  height: 16px;
  margin: 71px 392px 0 -405px;
}

.group_6 {
  position: absolute;
  left: 0;
  top: 400px;
  width: 1920px;
  height: 2300px;
}

.group_7 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 138px;
  margin: 1128px 0 0 312px;
}

.block_1 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text_15 {
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

.text_16 {
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

.image-wrapper_1 {
  width: 1249px;
  height: 318px;
  margin: 53px 0 0 310px;
}

.image_3 {
  width: 584px;
  height: 318px;
}

.image_4 {
  width: 610px;
  height: 318px;
}

.group_8 {
  background-color: rgba(247, 247, 247, 1);
  position: relative;
  width: 1919px;
  height: 623px;
  justify-content: flex-center;
  margin: 64px 0 25px 0;
}

.box_1 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
  margin: 64px 0 0 312px;
}

.text_17 {
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

.text_18 {
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

.box_2 {
  width: 1301px;
  height: 350px;
  margin: 55px 0 64px 313px;
}

.box_3 {
  background-color: rgba(247, 247, 247, 1);
  width: 639px;
  height: 350px;
}

.box_4 {
  background-color: rgba(247, 247, 247, 1);
  width: 644px;
  height: 350px;
}

.box_5 {
  background-color: rgba(67, 164, 56, 0.34);
  position: absolute;
  left: 312px;
  top: 64px;
  width: 138px;
  height: 4px;
}

.group_9 {
  background-color: rgba(255, 255, 255, 1);
  height: 736px;
  width: 1652px;
  position: absolute;
  left: 130px;
  top: -64px;
}

.section_3 {
  width: 191px;
  height: 4px;
  margin: 64px 0 0 180px;
}

.block_2 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 191px;
}

.group_10 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text-wrapper_8 {
  width: 191px;
  height: 24px;
  margin: 14px 0 0 180px;
}

.text_19 {
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

.text-wrapper_9 {
  width: 551px;
  height: 17px;
  margin: 31px 0 0 180px;
}

.text_20 {
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

.section_4 {
  width: 1203px;
  height: 232px;
  margin: 56px 0 294px 225px;
}

.section_5 {
  width: 344px;
  height: 183px;
}

.text-wrapper_10 {
  background-color: rgba(67, 164, 56, 0.154);
  height: 46px;
  border: 1px solid rgba(67, 164, 56, 0.7);
  width: 344px;
}

.text_21 {
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

.group_11 {
  width: 296px;
  height: 108px;
  margin: 29px 0 0 21px;
}

.image-wrapper_2 {
  width: 9px;
  height: 104px;
  margin-top: 2px;
}

.thumbnail-arrow {
  width: 8px;
  height: 14px;
}

.thumbnail_4 {
  margin-left: 1px;
}

.thumbnail_5 {
  margin-top: 31px;
}

.thumbnail_6 {
  margin-top: 31px;
}

.paragraph_6 {
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

.image-wrapper_3 {
  width: 9px;
  height: 104px;
  margin: 2px 0 0 63px;
}

.thumbnail_7 {
  margin-left: 1px;
}

.thumbnail_8 {
  margin-top: 31px;
}

.thumbnail_9 {
  margin-top: 31px;
}

.paragraph_7 {
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

.image_5 {
  width: 495px;
  height: 232px;
  margin-left: 21px;
}

.section_6 {
  background-color: rgba(204, 204, 204, 1);
  width: 345px;
  height: 232px;
  margin-left: -2px;
}

.group_12 {
  background-color: rgba(247, 247, 247, 1);
  height: 622px;
  width: 1919px;
  position: absolute;
  left: 0;
  top: 442px;
  justify-content: flex-center;
}

.group_13 {
  width: 215px;
  height: 4px;
  margin: 64px 0 0 310px;
}

.section_7 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 215px;
}

.group_14 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text-wrapper_11 {
  width: 215px;
  height: 24px;
  margin: 14px 0 0 310px;
}

.text_22 {
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

.text-wrapper_12 {
  width: 114px;
  height: 16px;
  margin: 31px 0 0 310px;
}

.text_23 {
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

.group_15 {
  width: 1205px;
  height: 349px;
  margin: 55px 0 65px 354px;
}

.group_16 {
  background-color: rgba(204, 204, 204, 1);
  width: 440px;
  height: 349px;
}

.image_6 {
  width: 711px;
  height: 349px;
}
</style>