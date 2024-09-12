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
    <div class="middle-section" :style="{ height: middleHeight + 'px', transform: `scale(${scaleRatio})` }">
      <div class="banner" :style="{ width: bnrWidth + 'px' }">
        <div class="upper">
          {{ options.company.title }}
          <div class="shadow-text">{{ options.company.shadowText }}</div>
          <div class="bottom-text">{{ options.company.btmText }}</div>
        </div>
        <div class="content">
          <p>四川渔光物联技术有限公司是通威集团旗下科技创新型公司，成立于2016年5月。共有员工近400名，拥有一支由国务院津贴专家、四川省“千人计划”专家、通威信息化标杆打造核心成员等多类型高端人才组成的队伍。</p>
          <p>
            公司是国家高新技术企业，全国智慧渔业领军企业，成都市企业技术中心，具有两化融合管理体系评定等资质，并通过了质量安全、环境安全、职业健康安全体系认证。经过5年的技术研发和创新，形成了2项国内领先成果、22项专利、15项软件著作权。参与了国家科技部“蓝色粮仓科技创新项目”，多项省、市级科技项目。公司被评为“物联网行业应用优秀企业”，连续两年获得“单项顶级光伏智能运维品牌”、“2020光能杯最具影响力运维企业”、“水产养殖智能化突出贡献奖”、“中国农牧行业年度创新品牌”等荣誉，“智能光伏集中运维平台实践案例”项目被评定为“2020年度成都市工业互联网优秀应用案例”。
          </p>
          <p>进入“十四五”时期，公司将持续创新，全方位提升资源利用效率、多层面提高投资收益，在实现客户利润最大化的同时助力国家减排目标的实现，着力打造“渔光一体智能运营专家”品牌形象。</p>
        </div>
      </div>
      <div class="image" >
        <img src="../../assets/images/aboutus_company.jpg" alt="公司照片"
          :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }">
      </div>
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
const imageBaseWidth = 603; //
const imageBaseHeight = 454; //
const bnrBaseWidth = 833;

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const submidHeight = ref(submidBaseHeight);
const bottomHeight = ref(bottomBaseHeight);
const imageWidth = ref(imageBaseWidth);
const imageHeight = ref(imageBaseHeight);
const bnrWidth = ref(bnrBaseWidth);
const scaleRatio = ref(1);

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
        { title: 'Tel：028-86168758', icon: 'iconyunyingfuwu' },
        { title: 'E-mail：WEIH02@tongwei.com', icon: 'icondashuju' },
        { title: 'Addr：四川省成都市高新区天府大道中段588号通威国际中心', icon: 'iconlianghaoderuanyingjianjianrongxing' }
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
  imageWidth.value = parseInt(imageBaseWidth * scaleFactor);
  imageHeight.value = parseInt(imageBaseHeight * scaleFactor);
  bnrWidth.value = parseInt(bnrBaseWidth * scaleFactor);
  scaleRatio.value = scaleFactor;
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
    display: flex;
    overflow-x: hidden;
    transition: height 0.3s ease;
    margin: 65px 200px 0 200px;
    background-color: transparent;

    .banner {
      position: relative;
      padding: 10px;
      margin: 0px 30px 0 0;

      .upper {
        position: relative;
        margin: 50px 0 10px 10px;
        font-weight: 600;
        font-size: 46px;
        color: #333333;
        line-height: 39px;

        .shadow-text {
          position: absolute;
          top: -30px;
          font-weight: 400;
          font-size: 120px;
          color: #999999;
          line-height: 43px;
          opacity: 0.2;
        }

        .bottom-text {
          position: absolute;
          top: 50px;
          left: 2px;
          font-weight: 400;
          font-size: 26px;
          color: #CCCCCC;
          line-height: 39px;
        }
      }

      .content {
        position: absolute;
        left: 25px;
        top: 180px;

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
      padding: 10px;

      img {
        margin: 195px 0 0 0;
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
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.3);

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
