<template>
    <div class="container flex-col">
      <div class="box_1 flex-col justify-between">
        <div class="box_2 flex-col">
          <div class="block_1 flex-col">
            <div class="group_1 flex-row" style="opacity: 0;">
            </div>
            <div class="text-wrapper-title flex-row">
              <span class="text_6">{{ title }}</span>
            </div>
            <div class="text-wrapper-text flex-row">
              <span class="text_7">{{ subTitle }}</span>
            </div>
          </div>
        </div>
        <div class="box_4 flex-col">
          <div class="group_3 flex-col"><div class="box_5 flex-col"></div></div>
          <span class="text_15">工厂化车间养殖系统</span>
          <div class="text-wrapper_8">
            <span class="paragraph_6">无人值守模式<br /></span>
            <span class="paragraph_7"
              >实现对整个工厂化智能养殖进行数据采集、指令调度和流程控制，诊断告警功能，软硬件共同调度，实现报警功能和流程控制包括恒温系统、恒压系统和水处理等流程控制配置，建立通畅的信息反馈机制和自动化的处理措施，自动处理，把风险控制在苗头状态，从而达到自动化无人值守的工厂化养殖模式<br
            /></span>
          </div>
          <div class="group_4 flex-col">
            <div class="group_5 flex-col">
              <div class="group_6 flex-row justify-between">
                <div class="block_2 flex-col justify-between">
                  <div class="block_3 flex-col"></div>
                  <div class="block_4 flex-col"></div>
                </div>
                <div class="block_5 flex-col">
                  <div class="section_2 flex-col"></div>
                  <div class="section_3 flex-col"></div>
                  <div class="section_4 flex-col"></div>
                </div>
              </div>
              <div class="group_7 flex-row justify-between">
                <div class="section_5 flex-col"></div>
                <div class="section_6 flex-col"></div>
              </div>
              <div class="group_8 flex-row justify-between">
                <div class="section_7 flex-col"></div>
                <div class="section_8 flex-col"></div>
              </div>
              <div class="group_9 flex-row">
                <div class="section_9 flex-col"></div>
              </div>
              <div class="group_text-bottom flex-row">
                <div class="section section_10 flex-col"><span>恒压供水</span></div>
                <div class="section section_11 flex-col"><span>恒温供水</span></div>
                <div class="section section_12 flex-col"><span>循环水处理</span></div>
                <div class="section section_13 flex-col"><span>尾水处理</span></div>
              </div>
              <span class="paragraph_8">
                视频监控<br />PH值、水位<br />自动投喂<br />温度和溶氧
              </span>
              <span class="paragraph_9">
                自动增氧<br />自动加温<br />自动水处理<br />自动供水<br />自动投喂<br />......
              </span>
            </div>
          </div>
          <div class="group_11 flex-col">
            <div class="group_12 flex-row">
              <div class="group_13 flex-col">
                <div class="box_6 flex-col"></div>
              </div>
            </div>
            <div class="text-wrapper_9 flex-row">
              <span class="text_17">池塘内循环养殖系统</span>
            </div>
            <div class="text-wrapper_10 flex-row">
              <span class="text_18"
                >流水槽养殖：采用模块化结构,方便运输、安装、拆卸。安装效率可提高50%以上。</span
              >
            </div>
            <div class="group_14 flex-row justify-between">
              <img
                class="box_7 flex-col"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_221_04.png"
              />
              <img
                class="image_3"
                referrerpolicy="no-referrer"
                src="../../assets/images/intel_221_05.png"
              />
            </div>
          </div>
          <div class="group_15 flex-col">
            <div class="group_16 flex-row">
              <div class="group_17 flex-col">
                <div class="group_18 flex-col"></div>
              </div>
            </div>
            <div class="text-wrapper_11 flex-row">
              <span class="text_19">陆基高位池养殖系统</span>
            </div>
            <div class="group_19 flex-row justify-between">
              <div class="box_8 flex-col">
                <div class="block_6 flex-col">
                  <div class="block_7 flex-col"></div>
                </div>
              </div>
              <div class="box_9 flex-col">
                <div class="box_10 flex-col">
                  <div class="box_11 flex-col"></div>
                </div>
              </div>
              <div class="box_12 flex-col">
                <div class="group_20 flex-col">
                  <div class="section_14 flex-col"></div>
                </div>
              </div>
            </div>
            <div class="text-wrapper_12 flex-row">
              <span class="text_20">漂浮式圈养池</span>
              <span class="text_21">玻璃钢陆基圆形池</span>
              <span class="text_22">水泥结构高位池养殖系统</span>
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
  height: 2609px;
  overflow: hidden;
}

.box_1 {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 2609px;
}

.box_2 {
  background-color: rgba(255, 255, 255, 1);
  height: 400px;
  width: 1920px;
  background-image: url('../../assets/images/plan_header_yz.jpg');
  background-size: cover;
  background-position: center;
}

.block_1 {
  height: 400px;
  width: 1920px;
}

.group_1 {
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

.group_2 {
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

.section_1 {
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

.text-wrapper-title {
  width: 347px;
  height: 48px;
  margin: 122px 0 0 788px;
}

.text_6 {
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

.text-wrapper-text {
  width: 257px;
  height: 18px;
  margin: 17px 0 124px 830px;
}

.text_7 {
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

.box_3 {
  background-color: rgba(35, 36, 41, 1);
  width: 1920px;
  height: 322px;
  margin-top: 1887px;
}

.text-wrapper_3 {
  width: 73px;
  height: 147px;
  margin: 70px 0 0 308px;
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
  margin: 92px 311px 0 20px;
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

.box_4 {
  position: absolute;
  left: 0;
  top: 400px;
  width: 1920px;
  height: 1888px;
}

.group_3 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 215px;
  margin: 1204px 0 0 310px;
}

.box_5 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text_15 {
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

.text-wrapper_8 {
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

.paragraph_6 {
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

.paragraph_7 {
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

.group_4 {
  background-color: rgba(255, 255, 255, 1);
  height: 421px;
  width: 1106px;
  margin: 45px 0 57px 368px;
}

.group_5 {
  height: 421px;
  background: url(../../assets/images/intel_221_06.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 1106px;
  position: relative;
  justify-content: flex-center;
}

.group_6 {
  width: 1055px;
  height: 115px;
  margin: 8px 0 0 39px;
}

.block_2 {
  width: 124px;
  height: 81px;
  margin-top: 20px;
}

.block_3 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.block_4 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-top: 21px;
}

.block_5 {
  width: 124px;
  height: 115px;
}

.section_2 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.section_3 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-top: 13px;
}

.section_4 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-top: 12px;
}

.group_7 {
  width: 1055px;
  height: 37px;
  margin: 6px 0 0 39px;
}

.section_5 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.section_6 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-top: 7px;
}

.group_8 {
  width: 1055px;
  height: 31px;
  margin: 13px 0 0 39px;
}

.section_7 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-top: 1px;
}

.section_8 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.group_9 {
  width: 124px;
  height: 30px;
  margin: 12px 0 0 970px;
}

.section_9 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.group_text-bottom {
  width: 826px;
  height: 30px;
  margin: 131px 0 8px 130px;

  .section span {
    display: block;
    margin: 3px auto;
  }
}

.section_10 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
}

.section_11 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-left: 77px;
}

.section_12 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-left: 142px;
}

.section_13 {
  background-color: rgba(67, 164, 56, 0);
  width: 124px;
  height: 30px;
  border: 1px solid rgba(67, 164, 56, 1);
  margin-left: 111px;
}

.paragraph_8 {
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
}

.text_16 {
  position: absolute;
  left: 158px;
  top: 390px;
  width: 769px;
  height: 16px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: SourceHanSansCN-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 51px;
}

.paragraph_9 {
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

.group_11 {
  background-color: rgba(255, 255, 255, 1);
  height: 736px;
  width: 1652px;
  position: absolute;
  left: 130px;
  top: -64px;
}

.group_12 {
  width: 215px;
  height: 4px;
  margin: 64px 0 0 180px;
}

.group_13 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 215px;
}

.box_6 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text-wrapper_9 {
  width: 216px;
  height: 24px;
  margin: 14px 0 0 179px;
}

.text_17 {
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

.text-wrapper_10 {
  width: 551px;
  height: 17px;
  margin: 31px 0 0 180px;
}

.text_18 {
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

.group_14 {
  width: 1237px;
  height: 333px;
  margin: 56px 0 193px 206px;
}

.box_7 {
  background-color: rgba(255, 255, 255, 1);
  width: 613px;
  height: 333px;
  border: 1px solid rgba(204, 204, 204, 1);
}

.image_3 {
  width: 543px;
  height: 332px;
  margin-top: 1px;
}

.group_15 {
  background-color: rgba(247, 247, 247, 1);
  height: 597px;
  width: 1920px;
  position: absolute;
  left: 0;
  top: 543px;
  justify-content: flex-center;
}

.group_16 {
  width: 215px;
  height: 4px;
  margin: 64px 0 0 310px;
}

.group_17 {
  background-color: rgba(67, 164, 56, 0.34);
  height: 4px;
  width: 215px;
}

.group_18 {
  background-color: rgba(67, 164, 56, 1);
  width: 48px;
  height: 4px;
}

.text-wrapper_11 {
  width: 215px;
  height: 24px;
  margin: 14px 0 0 309px;
}

.text_19 {
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

.group_19 {
  width: 1300px;
  height: 332px;
  margin: 55px 0 0 313px;
}

.box_8 {
  background: url(../../assets/images/intel_221_03.png) 100% no-repeat;
  background-size: 100% 100%;
  height: 332px;
  width: 395px;
}

.block_6 {
  height: 332px;
  width: 395px;
}

.block_7 {
  width: 395px;
  height: 332px;
}

.box_9 {
  height: 332px;
  background: url(../../assets/images/intel_221_02.png) 100% no-repeat;
  background-size: 100% 100%;
  margin-left: 42px;
  width: 342px;
}

.box_10 {
  height: 332px;
  width: 342px;
}

.box_11 {
  width: 342px;
  height: 332px;
}

.box_12 {
  height: 332px;
  background: url(../../assets/images/intel_221_01.png) 100% no-repeat;
  background-size: 100% 100%;
  background-size: 100% 100%;
  margin-left: 42px;
  width: 479px;
}

.group_20 {
  height: 332px;
  width: 479px;
}

.section_14 {
  width: 479px;
  height: 332px;
}

.text-wrapper_12 {
  width: 1016px;
  height: 16px;
  margin: 24px 0 64px 443px;
}

.text_20 {
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
}

.text_21 {
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

.text_22 {
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
</style>