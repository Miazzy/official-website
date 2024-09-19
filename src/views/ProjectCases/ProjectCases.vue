<template>
  <div class="project-cases">

    <div class="banner-box" :style="{ height: topHeight + 'px', }" >
      <h1 class="banner-title-ch">项目案例</h1>
      <h2 class="banner-title-en">PROJECT CASE</h2>
    </div>

    <div class="content-box-1" :style="{ height: middleHeight + 'px', }" >
      <div class="intelligent-operation-box" :style="{ height: submidHeight + 'px', }" >
        <div class="title-box">
          <span class="title-ch">智能运营</span>
          <span class="title-en">INTELLIGENT OPERATION</span>
        </div>
        <div class="case-box">
          <div
            class="case-item-box"
            v-for="(item, index) in intelligentOperationList"
            :key="index"
          >
            <div class="img-box">
              <img class="case-img" :src="item.img" />
            </div>
            <div class="case-desc-box">
              <div class="case-title-text">{{ item.title }}</div>
              <p class="case-desc-text">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-box-2" :style="{ height: bottomHeight + 'px', }" >
      <div class="smart-agriculture-box">
        <div class="title-box">
          <span class="title-ch">智慧农业</span>
          <span class="title-en">SMART AGRICULTURE</span>
        </div>
        <div class="case-box">
          <div
            class="case-item-box"
            v-for="(item, index) in smartAgricultureList"
            :key="index"
          >
            <div class="img-box">
              <img class="case-img" :src="item.img" />
            </div>
            <div class="case-desc-box">
              <div class="case-title-text">{{ item.title }}</div>
              <p class="case-desc-text">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const baseWidth = 1920; // 基准宽度

const topBaseHeight = 540; // 上部初始高度
const middleBaseHeight = 682 + 68; // 中部初始高度
const submidBaseHeight = 716; // 中部初始高度
const bottomBaseHeight = 814; // 下部初始高度

const topHeight = ref(topBaseHeight);
const middleHeight = ref(middleBaseHeight);
const submidHeight = ref(submidBaseHeight);
const bottomHeight = ref(bottomBaseHeight);

const scaleRatio = ref(1);

const getImgUrl = (url) => {
  const path = new URL(`../../assets/images/${url}`, import.meta.url);
  return path.href;
};

const intelligentOperationList = ref([
  {
    img: getImgUrl('project-case-hbtm.jpg'),
    title: '湖北天门',
    desc: '通威天门500MW渔光一体光伏电站项目总投资20亿元，占水域面积11351亩。项目于2021年8月开工，2023年6月基本建成并并网发电。项目配套建设一座220KV的升压站、一条10公里的220KV的外送线路、一座80MW/160MWH的储能电站，全部建成后每年可生产清洁电力5亿多度，年产值可达2亿多元。',
  },
  {
    img: getImgUrl('project-case-cqqj.jpg'),
    title: '重庆黔江',
    desc: '重庆黔江100MWp并网光伏电站位于重庆市黔江区麒麟村、青龙村、南溪村、石柱村，共使用约1831亩山地，工程总投资约6亿元。据测算，黔江项目年发电总量约7000万千瓦时，每年可节省标准煤2.7万吨，对促进重庆市节能减排、生态环境改善具有积极作用。',
  },
  {
    img: getImgUrl('project-case-njlp.jpg'),
    title: '南京龙袍',
    desc: '南京龙袍“渔光一体”项目包括50MWp光伏发电和池塘养殖改造，年均发电5100万度，致力于打造“零污染、零排放”的现代智能精品渔业产业园。',
  },
  {
    img: getImgUrl('project-case-jsyz.jpg'),
    title: '江苏扬中',
    desc: '江苏扬中基地一二期占地280亩为标准的渔光一体示范基地。上面产出清洁能源年发电1200万度以上，水下养鱼每年可产出各类水产品50万斤以上。',
  },
]);

const smartAgricultureList = ref([
  {
    img: getImgUrl('project-case-ahhx.jpg'),
    title: '安徽和县现代化渔业养殖',
    desc: '公司全面打造建设完成的“渔光一体”项目基地，除了光伏发电设施外，还拥有一整套完善的渔业养殖设施，利用智能化的养殖手段，已实现“少人化”、“精细化”养殖，这里不仅是现代化水产养殖基地，更带动了当地观光农业的发展，是一个高效运转的“渔-光-旅”一体化基地。',
  },
  {
    img: getImgUrl('project-case-tfnby.jpg'),
    title: '中国天府农博园',
    desc: '位于天府农博岛核心景区内，是土地综合利用，资源、环境保护，生态种养，智能化控制的精典案例。我司主导园区内物联网设施设备、渔业养殖生产管理平台、园区中央展示平台、智能光伏集中运维平台等，助力园区对现代化渔业养殖起到直观的引导和示范作用。',
  },
  {
    img: getImgUrl('project-case-lsyylm.jpg'),
    title: '芦山县鱼跃龙门智慧水产养殖',
    desc: '该园区引入了我司智慧物联核心技术，全面数字管控、智能投喂，装配有先进的智能风送料塔、水质在线检测设备、高速增氧机、疫病防御系统和投饵机器人等设备设施，是四川地区冷水鱼养殖规模最大、信息化水平最高、智能化设施最全的冷水鱼繁育、养殖基地之一。对树立智慧生态渔业发展新标杆。',
  },
  {
    img: getImgUrl('project-case-sddy.jpg'),
    title: '山东东营智能化养殖',
    desc: '该园区占地4226亩，总投资8亿元，已于2021年投生态渔业板块，规划养殖面积4000余亩，主要进行南美白对虾、海参等水产养殖，配套建设了1000平方米的智能化养殖育苗车间，引进先进的循环水处理、在线监测等智能化设备，为外塘养殖提供优质种苗。',
  },
]);

// 动态计算区域高度的函数
const updateHeights = () => {
  const screenWidth = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
  const scaleFactor = screenWidth / baseWidth;

  // 根据比例缩放高度
  topHeight.value = parseInt(topBaseHeight * scaleFactor);
  middleHeight.value = parseInt(middleBaseHeight * scaleFactor);
  submidHeight.value = parseInt(submidBaseHeight * scaleFactor);
  bottomHeight.value = parseInt(bottomBaseHeight * scaleFactor);
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

<style scoped lang="less">
.project-cases {
  width: 1920px;
  max-width: 1920px;
  height: calc(540px + 682px + 814px + 0px);
  overflow-x: scroll;
  overflow-y: scroll;
  // height: calc(540px + 682px + 814px + 322px);
  // background-image: url('../../assets/images/cases_bg.png');
  // background-size: cover;
  // background-position: center;
  transition: height 0.3s ease;
  position: relative;
  overflow-x: hidden;

  .banner-box {
    width: 100%;
    height: 540px;
    background: url('../../assets/images/project-case-banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 1;
    padding-top: 244px;
    opacity: 1;

    .banner-title-ch {
      font-weight: bold;
      font-size: 50px;
      color: #ffffff;
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 15px;
    }
    .banner-title-en {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
      opacity: 0.77;
    }
  }

  .content-box-1 {
    width: 100%;
    height: calc(682px + 68px);
    opacity: 1;
    margin: 0 0 0 0;

    .intelligent-operation-box {
      width: 1480px;
      height: 877px;
      margin: -68px auto 0;
      background: #f7f9fc;
      .title-box {
        padding: 68px 0 0 95px;

        & > span {
          display: inline-block;
          height: 46px;
          line-height: 1;
        }

        .title-ch {
          margin-right: 18px;
          font-weight: 500;
          font-size: 34px;
          color: #333333;
        }

        .title-en {
          padding-top: 12px;
          font-weight: 400;
          font-size: 16px;
          color: #cccccc;
          vertical-align: sub;
        }
      }
      .case-box {
        display: flex;
        justify-content: space-between;
        padding: 0 83px 0 83px;
        margin: 35px 0 0 0;
      }
    }
  }

  .case-item-box {
    width: 306px;
    height: 503px;
    background: #ffffff;
    box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
    cursor: pointer;
    opacity: 1;
    margin-right: 10px;
    margin: 6px 5px 0 -10px;

    & + .case-item-box {
      margin: 6px 5px 0 -10px;
    }

    &:hover {
      width: 307px;
      height: 503px;
      background: #fefaf6;
      box-shadow: -1px 7px 13px 0px rgba(221, 120, 22, 0.3);
    }

    .img-box {
      width: 100%;
      height: 298px;
      font-size: 0;

      .case-img {
        width: 100%;
        height: 100%;
      }

    }
    .case-title-text {
      padding: 19px 0 8px;
      font-weight: 400;
      font-size: 20px;
      color: #333333;
      line-height: 1;
      text-align: center;
    }

    .case-desc-text {
      margin: 0;
      padding: 0 34px;
      font-weight: 400;
      font-size: 12px;
      color: #999999;
      line-height: 21px;
      word-break: break-all;
    }
  }

  .content-box-2 {
    width: 100%;
    height: 1060px;
    background: url('../../assets/images/project-case-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;

    .smart-agriculture-box {
      width: calc(1920px - 620px);
      margin: 0 auto;

      .title-box {
        padding: 70px 0 42px 0px;

        & > span {
          display: inline-block;
          height: 46px;
          line-height: 1;
        }

        .title-ch {
          margin-right: 36px;
          font-weight: 500;
          font-size: 34px;
          color: #ffffff;
        }

        .title-en {
          padding-top: 12px;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          vertical-align: sub;
          opacity: 0.3;
        }
      }

      .case-box {
        display: flex;
        justify-content: space-between;
        margin: 0 0 0 8px;

        .case-item-box {
          height: 500px;

          .img-box {
            width: 306px;
            height: 285px;
            font-size: 0;

            .case-img {
              width: 100%;
              height: 100%;
            }

          }
        }
      }
    }
  }
}
</style>
