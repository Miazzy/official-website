<template>
  <div class="aboutus container">
    <!-- 上部区域 -->
    <div class="top-section" :style="{ height: topHeight + 'px', }">
      <div class="banner">
        <h1 class="text lang">{{ options.banner.title }}</h1>
        <h2 class="text lang en">{{ options.banner.btmText }}</h2>
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="middle-section" :style="{ height: middleHeight + 'px' }">
    </div>

    <!-- 中部区域 -->
    <div class="submid-section" :style="{ height: submidHeight + 'px' }">
    </div>
    
    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
      <div class="banner banner-container">
        <h1 class="text lang">{{ options.contact.title }}</h1>
        <h2 class="text lang en">{{ options.contact.btmText }}</h2>
      </div>
      <div class="map map-container">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';

const baseWidth = 1920; // 基准宽度
const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 802; // 中部初始高度
const submidBaseHeight = 738; // 中部初始高度
const bottomBaseHeight = 738; // 下部初始高度

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const submidHeight = ref(submidBaseHeight);
const bottomHeight = ref(bottomBaseHeight);

const options = reactive(
  {
    banner: {
      title: '关于我们',
      btmText: 'ABOUT US',
    },
    company: {
      title: '公司简介',
      shadowText: 'COMPANY',
      btmText: 'PROFILE',
      description: `四川渔光物联技术有限公司是通威股份旗下科技创新型公司，成立于2016年5月。共有员工500+名，拥有一支由国务院津贴专家、四川`,
    },
    contact: {
      title: '联系我们',
      btmText: 'CONTACT US',
      business: [
        { title: 'Tel：028-86168758', icon:'iconyunyingfuwu' },
        { title: 'E-mail：WEIH02@tongwei.com', icon:'icondashuju' },
        { title: 'Addr：四川省成都市高新区天府大道中段588号通威国际中心', icon:'iconlianghaoderuanyingjianjianrongxing' }
      ],
    }
  }
);

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  topHeight.value = parseInt(topBaseHeight * scaleFactor);
  middleHeight.value = parseInt(middleBaseHeight * scaleFactor);
  submidHeight.value = parseInt(submidBaseHeight * scaleFactor);
  bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor);
};

// 监听窗口大小变化
onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  .top-section {
    background-image: url('../../assets/images/aboutus_header.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    position: relative;
    overflow-x: hidden;

    .banner {
      position: absolute;
      text-align: center;
      width: 100%;
      margin: 245px 0 0 0;

      .text {
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-size: 64px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 24px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.77;
        }
      }
    }
  }

  .middle-section {
    background-color: #f0f0f0;
    transition: height 0.3s ease;
    overflow-x: hidden;
  }
  
  .middle-content {
    position: absolute;
    top: 540px;
    width: 90%;
    margin: -50px 5% 0 5%;
    background: #F7F9FC;
    border: 1px solid #F7F9FCCE;
    border-radius: 4px;
    font-family: Source Han Sans CN;

  }

  .submid-section {
    width: 100vw;
    background-image: url('../../assets/images/aboutus_bg.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    overflow-x: hidden;
  }

  .bottom-section {
    width: 100vw;
    background: #fefefe;
    transition: height 0.3s ease;
    overflow-x: hidden;

    .banner {
      position: absolute;
      text-align: left;
      width: 100%;
      margin: 80px 0 0 160px;
      font-family: Source Han Sans CN;

      .text {
        font-weight: bold;
        font-size: 30px;
        color: #FFFFFF;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);

        &.en {
          font-weight: 400;
          font-size: 24px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.3;
        }

        &.indicate {
          margin: 20px 0 0 0;
          font-size: 22px;
          color: #FFFFFF;
          text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
          opacity: 0.8;
        }
      }
    }

    .business-container {
      display: flex;
      margin: 320px 80px 0px 25vw;
      overflow-x: hidden;

      .box {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 360px;
        height: 502px;
        background: #FFFFFF;
        box-shadow: -1px 7px 13px 0px rgba(24,24,24,0.3);

        .icon {
          display: block;
          margin: 80px 0 10px 38%;
          font-size: 60px;
          height: 60px;
        }

        .text-content {
          display: block;
          height: 330px;
          text-align: center;

          .title {
            display: block;
            font-size: 26px;
            font-weight: 600;
            margin: 5px 0 10px 0;
          }

          .text {
            display: block;
            font-size: 18px;
            font-weight: 300;
            margin: 0 0 7.5px 0;
          }
        }
      }
    }
  }
}
</style>
