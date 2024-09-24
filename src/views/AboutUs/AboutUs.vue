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
    <div class="middle-section" :style="{ height: middleHeight + 'px', }">
      <div class="banner" :style="{ width: (bnrWidth * 1.03) + 'px' }">
        <div class="upper">
          {{ options.company.title }}
          <div class="shadow-text">{{ options.company.shadowText }}</div>
          <div class="bottom-text">{{ options.company.btmText }}</div>
        </div>
        <div class="content">
          <p v-for="(text, index) in options.company.description" :key="index"> {{ text }}</p>
        </div>
      </div>
      <div class="image">
        <img src="../../assets/images/aboutus_company.jpg" alt="公司照片"
          :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }">
      </div>
    </div>

    <!-- 中部区域 -->
    <div class="submid-section" :style="{ height: submidHeight + 'px' }">
      <div class="banner">
        <div class="title-box">
          <div class="title-ch">资质荣誉</div>
          <div class="title-en">QUALIFICATION HONOR</div>
        </div>
        <div class="content-container">
          <div class="horizontal-scroll-box">
            <div class="honor-item" v-for="i in 14" :key="i">
              <img class="honor-img" :src="getImgUrl(`honor-${i}.png`)">
            </div>
            <div class="honor-item" v-for="i in 14" :key="`copy${i}`">
              <img class="honor-img" :src="getImgUrl(`honor-${i}.png`)">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下部区域 -->
    <div class="bottom-section" :style="{ height: bottomHeight + 'px' }">
      <div class="banner banner-container">
        <div class="left-content">
          <div class="title-box">
            <div class="title-ch">{{ options.contact.title }}</div>
            <div class="title-en">{{ options.contact.btmText }}</div>
          </div>
          <div class="business-container">
            <div class="business-item" v-for="(item, index) in options.contact.business" :key="index">
              <i class="iconfont" :class="item.icon"></i>
              <span class="business-text">{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div id="map-container" class="map-container"
            :style="{ width: bnrWidth + 'px', height: parseInt(bnrWidth * 0.638) + 'px' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';

const baseWidth = 1920; // 基准宽度
const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 656; // 中部初始高度
const submidBaseHeight = 635; // 中部初始高度
const bottomBaseHeight = 614; // 下部初始高度
const imageBaseWidth = 474; //
const imageBaseHeight = 358; //
const bnrBaseWidth = 711;

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const submidHeight = ref(submidBaseHeight);
const bottomHeight = ref(bottomBaseHeight);
const imageWidth = ref(imageBaseWidth);
const imageHeight = ref(imageBaseHeight);
const bnrWidth = ref(bnrBaseWidth);
const scaleRatio = ref(1);
const mapObject = ref(null);

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
      description: [
        `四川渔光物联技术有限公司是通威股份旗下科技创新型公司，成立于2016年5月。共有员工500+名，拥有一支由国务院津贴专家、四川省“千人计划”专家、通威信息化标杆打造核心成员等多类型高端人才组成的队伍。`,
        `四川渔光物联技术有限公司是国家高新技术企业，业务涉及渔光一体光伏电站在内的电站智能运维、智慧农业、信息化技术服务。公司被评定为全国智慧渔业领军企业，成都市企业技术中心，具有两化融合管理体系评定等资质，经过8年的技术研发和创新，形成了3项国内领先成果、32项专利、18项软件著作权。参与了国家科技部“蓝色粮仓科技创新项目”，多项省、市级科技项目。公司被评为“物联网行业应用优秀企业”、成都新经济双百企业，连续两年获得“单项顶级光伏智能运维品牌”，取得“水产养殖智能化突出贡献奖”、“中国农牧行业年度创新品牌”、2023年度数字化转型灯塔案例金数奖等荣誉，“智能光伏集中运维平台实践案例”项目被评定为“2020年度成都市工业互联网优秀应用案例”。`,
        `进入“十四五”时期，公司将持续创新，全方位提升资源利用效率、多层面提高投资收益，在实现客户利润最大化的同时助力国家减排目标的实现，着力打造“渔光一体智能运营专家”品牌形象。`
      ],
    },
    contact: {
      title: '联系我们',
      btmText: 'CONTACT US',
      business: [
        { title: 'Tel：028-86168758', icon: 'icondianhua' },
        { title: 'E-mail：WEIH02@tongwei.com', icon: 'iconyouxiang' },
        { title: 'Addr：四川省成都市高新区天府大道中段588号通威国际中心', icon: 'iconzhengqimenhu_dizhixinxi1' }
      ],
    }
  }
);

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  topHeight.value = parseInt(topBaseHeight * scaleFactor);
  middleHeight.value = parseInt(middleBaseHeight * scaleFactor);
  submidHeight.value = parseInt(submidBaseHeight * scaleFactor);
  bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor);

  if (screenWidth >= 1700) {
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor);
  } else if (screenWidth >= 1600 & screenWidth < 1700) {
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.2);
  }

  if (screenWidth <= 1280) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.35);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 2);
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.5);
    submidHeight.value = parseInt(submidBaseHeight * scaleFactor * 1.30);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.30);
  } else if (screenWidth <= 1300) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.30);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.95);
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.5);
    submidHeight.value = parseInt(submidBaseHeight * scaleFactor * 1.28);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.28);
  } else if (screenWidth <= 1366) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.25);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.8);
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.65);
    submidHeight.value = parseInt(submidBaseHeight * scaleFactor * 1.175);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.375);
  } else if (screenWidth <= 1500) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.25);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.8);
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.55);
    submidHeight.value = parseInt(submidBaseHeight * scaleFactor * 1.175);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.375);
  } else if (screenWidth <= 1600) {
    topHeight.value = parseInt(topBaseHeight * scaleFactor * 1.15);
    middleHeight.value = parseInt(middleBaseHeight * scaleFactor * 1.8);
    bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor * 1.55);
    submidHeight.value = parseInt(submidBaseHeight * scaleFactor * 1.175);
    bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor * 1.325);
  }

  scaleRatio.value = scaleFactor;
};

const getImgUrl = (url) => {
  const path = new URL(`../../assets/images/${url}`, import.meta.url);
  return path.href;
};

// 初始化地图
const initMap = () => {
  mapObject.value = new BMapGL.Map('map-container'); // 创建Map实例
  mapObject.value.setMapType(BMAP_NORMAL_MAP); // 设置地图类型为地球模式
  mapObject.value.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  mapObject.value.centerAndZoom(new BMapGL.Point(104.074384, 30.556542), 16); // 初始化地图,设置中心点坐标和地图级别
  let marker = new BMapGL.Marker(new BMapGL.Point(104.074384, 30.556542));
  mapObject.value.addOverlay(marker);
};

// 监听窗口大小变化
onMounted(() => {
  updateHeights();
  window.addEventListener('resize', updateHeights); // 监听窗口变化
  initMap();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeights); // 页面销毁时移除监听器
});
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 1920px;
  max-width: 1920px;
  height: calc(540px + 656px + 635px + 614px + 0px);
  overflow-x: scroll;
  overflow-y: scroll;

  // background-image: url('../../assets/images/aboutus.png');
  // background-size: cover;
  // background-position: center;
  transition: height 0.3s ease;
  position: relative;
  overflow-x: hidden;

  .top-section {
    background-image: url('../../assets/images/aboutus_header.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    position: relative;
    overflow: hidden;
    opacity: 1;

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
    display: flex;
    overflow-x: hidden;
    transition: height 0.3s ease;
    margin: 65px 195px 0 195px;
    background-color: transparent;
    opacity: 1;
    overflow: hidden;

    .banner {
      position: relative;
      padding: 10px 10px 10px 0;
      margin: 0px 30px 0 0;
      overflow: hidden;

      .upper {
        position: relative;
        margin: 50px 0 10px 0px;
        font-weight: 600;
        font-size: 46px;
        color: #333333;
        line-height: 150px;
        overflow: hidden;

        .shadow-text {
          position: absolute;
          top: -30px;
          left: 7px;
          font-weight: 400;
          font-size: 120px;
          color: #999999;
          line-height: 43px;
          opacity: 0.2;
        }

        .bottom-text {
          position: absolute;
          top: 50px;
          left: 8px;
          font-weight: 400;
          font-size: 26px;
          color: #CCCCCC;
          line-height: 39px;
        }
      }

      .content {
        position: absolute;
        left: 14px;
        top: 180px;
        overflow: hidden;

        p {
          line-height: 1.8;
          text-indent: 2em;
          font-size: 20px;
          color: #444444;
          text-align: justify;
        }
      }
    }

    .image {
      flex: 1;
      padding: 10px 5px 10px 15px;

      img {
        margin: 195px 0 0 20px;
        object-fit: cover;
      }
    }
  }

  .submid-section {
    width: 100vw;
    background-image: url('../../assets/images/aboutus_bg.jpg');
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
    overflow-x: hidden;
    overflow-y: hidden;
    opacity: 1;

    .banner {
      width: 100%;
      margin: 25px auto 0;
    }

    .title-box {
      .title-ch {
        font-weight: 600;
        font-size: 34px;
        color: #333333;
        margin: 56px 30px 0px 0px;
      }

      .title-en {
        font-weight: 400;
        font-size: 16px;
        color: #CCCCCC;
        line-height: 33px;
        margin: 0 0 0 0;
      }
    }

    .content-container {
      width: 100%;
      height: 402px;
      overflow: hidden;
      margin: 36.5px 0 0 0;

      .horizontal-scroll-box {
        display: flex;
        align-items: flex-end;
        width: max-content;
        animation: scroll-x 50s linear infinite;

        &:hover {
          animation-play-state: paused;
        }

        .honor-item {
          max-height: 402px;

          &+.honor-item {
            margin-left: 18px;

            img {
              max-height: 402px;
            }
          }
        }
      }
    }
  }

  .bottom-section {
    width: 100vw;
    background: #fefefe;
    transition: height 0.3s ease;
    overflow-x: hidden;
    opacity: 1;

    .banner {
      width: 100%;
      margin: 0px auto 0;
      display: flex;

      .left-content {
        width: 45%;
      }

      .right-content {
        width: 55%;
      }
    }

    .title-box {
      margin: 78px 0 0 0;

      .title-ch {
        font-weight: 600;
        font-size: 34px;
        color: #333333;
        margin: 16px 30px 0px 0px;
      }

      .title-en {
        font-weight: 400;
        font-size: 16px;
        color: #CCCCCC;
        line-height: 33px;
        margin: 0 0 0 0;
      }
    }

    .business-container {
      margin: 125px 0 0 0;

      .business-item {
        .iconfont {
          font-size: 20px;
          color: #2fa9e5;
          margin-right: 8px;
          line-height: 49px;
        }

        .business-text {
          font-weight: 400;
          font-size: 16px;
          color: #1F2124;
          line-height: 49px;
        }

        &+.business-item {
          .iconfont {
            line-height: 45px;
          }

          .business-text {
            line-height: 45px;
            margin: -2px 0 0 0;
          }
        }
      }
    }

    .map-container {
      float: right;
      width: 711px;
      height: 453px;
      margin: 82px 0 0 0;
      background-color: #E9E9E9;
    }
  }

  @keyframes scroll-x {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
}

.aboutus.container .submid-section {
  padding: 0px 310px 0 310px;
}

.aboutus.container .bottom-section {
  padding: 0px 310px 0 310px;
}

.aboutus.container .top-section .banner {
  margin: 271px 0 0 0;

  .text {
    font-size: 50px;
  }

  .text.en {
    font-weight: 600;
    font-size: 18px;
  }
}

.aboutus.container .middle-section {
  margin: 0px 305px 0 305px;

  .image img {
    margin: 208px 0 0 50px;
  }

  .banner {
    .upper {
      margin: 30px 0 10px 0px;
      padding: 10px 0px 10px 0px;
      font-size: 34px;

      .shadow-text {
        top: 53px;
        left: -2px;
        font-size: 72px;
        letter-spacing: -3px;
      }

      .bottom-text {
        top: 107px;
        left: 0px;
        font-size: 16px;
      }
    }

    .content {
      left: 14px;
      top: 198px;

      p {
        line-height: 1.8;
        text-indent: 2em;
        font-size: 16px;

        &:nth-child(2) {
          font-size: 16px;
          margin: -10px 0 0 0;
        }

        &:nth-child(3) {
          font-size: 16px;
          margin: 0px 0 0 0;
        }
      }
    }
  }
}
</style>
