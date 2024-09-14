<template>
  <div class="information-center">
    <div class="banner-box">
      <h1 class="banner-title-ch">资讯中心</h1>
      <h2 class="banner-title-en">INFORMATION CENTER</h2>
    </div>
    <div class="content-box">
      <!-- <ul class="tab-bar-box">
        <li
          class="tab-bar-item"
          :class="{ active: curTab === index }"
          v-for="(item, index) in tabList"
          :key="index"
          @click="curTab = index"
        >
          {{ item.tabName }}
        </li>
      </ul>
      <div class="information-box">
        <div class="information-layout-1">
          <div class="left-box">
            <div class="info-img-box">
              <img class="info-img" :src="informationList[0].img" />
            </div>
            <div class="info-title">{{ informationList[0].title }}</div>
          </div>
          <div class="right-box">
            <div
              class="right-info-item"
              v-for="(item, index) in informationList.slice(1, 5)"
              :key="index"
            >
              <div class="date-box">
                <div class="month-day-text">{{ item.date.substring(5) }}</div>
                <div class="year-text">{{ item.date.substring(0, 4) }}</div>
              </div>
              <div class="info-content-box">
                <div class="info-content-title">{{ item.title }}</div>
                <div class="info-content-text">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="information-layout-2">
          <div
            class="info-item-box"
            v-for="(item, index) in informationList.slice(5)"
            :key="index"
          >
            <div class="info-img-box">
              <img class="info-img" :src="item.img" />
            </div>
            <div class="info-content-box">
              <div class="info-content-title">{{ item.title }}</div>
              <div class="info-content-text">{{ item.content }}</div>
            </div>
            <div class="right-box">
              <span class="date-text">日期：{{ item.date }}</span>
              <span class="editor-text">编辑：{{ item.editor }}</span>
            </div>
          </div>
        </div>
      </div> -->
      <iframe style="width: 100%; height: 1260px;" src="http://10.8.111.231:8080/ms-mcms/html/1//150/151/index.html" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const curTab = ref(0);
const tabList = ref([
  {
    tabName: '最新资讯',
  },
  {
    tabName: '公司动态',
  },
]);

const getImgUrl = (url) => {
  const path = new URL(`../../assets/images/${url}`, import.meta.url);
  return path.href;
};

const informationList = ref([
  {
    img: getImgUrl('information-center-banner.jpg'),
    title: '运维一线｜那天，我在水库救起来一只“水晃晃”',
    date: '',
    content: '',
    editor: '',
  },
  {
    img: '',
    title: '喜讯！渔光物联获评2020年“最具影响力运维企业”',
    date: '2020-08-29',
    content:
      '渔光物联也将以此为契机，持续深耕“智能化运维”，着力打造“渔光一体智能运营专家”品牌形象。',
    editor: '',
  },
  {
    img: '',
    title: '风雪齐袭，赤峰通薪电站除雪保畅任务重',
    date: '2020-12-20',
    content:
      '18日至19日，内蒙古大部分地区出现强雨雪天气。此次降雪突破了赤峰市1961年有气象记录以来的日降雪量极值，地处赤峰市敖汉旗木头营子乡的通薪光伏电站当地降雪量更是超45毫米，积雪深度达到40厘米，当地居民的交通出行和日常生活都受到了极大影响。',
    editor: '',
  },
  {
    img: '',
    title: '冲刺第四季度丨狠抓安全生产，全力以赴保电量',
    date: '2020-12-20',
    content:
      '10月，渔光物联各电站以安全促生产，紧抓保电量工作，冲刺2020第四季度。一、年检预试工作在3个电站有序开展',
    editor: '',
  },
  {
    img: '',
    title: '防台风，保电量丨运维一线工作纪实',
    date: '2020-08-29',
    content:
      '位于海南省定安县的渔光一体电站，在工作生产中常受“四风”（清明风、寒露风、台风、干热风）的影响，其中以台风的影响最为严重。10月，今年第17号台风“沙德尔”已加强为强热带风暴，最大风力12级。这种条件下，定安电站是如何安排组织工作生产的呢？',
    editor: '',
  },
  {
    img: getImgUrl('information-center-banner.jpg'),
    title: '春节我在岗丨共抓安全生产，同庆新春佳节',
    date: '2024-02-01',
    content: '运一线不打烊，春节期间依旧坚守岗位，全力以赴保障安全生产。',
    editor: '陈婷',
  },
  {
    img: getImgUrl('information-center-banner.jpg'),
    title:
      '目标导向，文化引领 ——通威新能源工程设计四川有限公司开展绩效考核培训暨企业文化学习会',
    date: '2024-02-01',
    content:
      '“渔光一体”模式未来发展充满希望与光明，我们要不断摸索，走出一条独有的特色运维之路，发展好清洁能源，生产出放心水产品，为保卫绿水蓝天奉献出自己的力量。',
    editor: '陈婷',
  },
  {
    img: getImgUrl('information-center-banner.jpg'),
    title:
      '通威新能源有限公司与中国电建集团成都勘测设计研究院有限公司战略合作框架协议签约仪式成功举行',
    date: '2024-02-01',
    content:
      '赵局长一行首先参观了泗洪县光伏智慧中心，详细了解了泗洪领跑者项目整体情况，随后前往通威渔光一体项目现场，参观了解了通威泗洪天岗湖200MW渔光一体项目建设情况；',
    editor: '陈婷',
  },
]);

onMounted(() => {});
</script>

<style scoped lang="less">
.information-center {
  .banner-box {
    width: 100%;
    height: 540px;
    background: url('../../assets/images/information-center-banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 1;
    padding-top: 260px;
    .banner-title-ch {
      font-weight: bold;
      font-size: 64px;
      color: #ffffff;
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 22px;
    }
    .banner-title-en {
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
      opacity: 0.77;
    }
  }
  .content-box {
    width: 1524px;
    margin: 0 auto;
    padding-top: 46px;
    background-color: #fff;
  }
  .tab-bar-box {
    display: flex;
    .tab-bar-item {
      height: 64px;
      padding: 0 2px;
      margin-right: 64px;
      border-bottom: 4px solid transparent;
      line-height: 60px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      &.active,
      &:hover {
        color: #000;
        border-bottom-color: #ef7d1b;
      }
    }
  }
  .information-box {
    width: 100%;
    padding: 56px 0 74px;
    .information-layout-1 {
      display: flex;
      justify-content: space-between;
      .left-box {
        width: 784px;
        height: 560px;
        background: #ffffff;
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
        cursor: pointer;
        &:hover .info-title {
          color: #ef7d1b;
        }
        .info-img-box {
          width: 100%;
          height: 474px;
          font-size: 0;
          .info-img {
            width: 100%;
            height: 100%;
          }
        }
        .info-title {
          width: 100%;
          padding: 0 26px;
          height: 86px;
          line-height: 86px;
          font-size: 24px;
          color: #333333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
      }
      .right-box {
        width: 676px;
        height: 560px;
        .right-info-item {
          width: 100%;
          height: 140px;
          padding-top: 30px;
          display: flex;
          border-bottom: 1px solid #eeeeee;
          cursor: pointer;
          &:hover .info-content-box .info-content-title {
            color: #ef7d1b;
          }
          .date-box {
            margin-right: 45px;
            line-height: 1;
            .month-day-text {
              margin-bottom: 15px;
              font-size: 22px;
              color: #888888;
            }
            .year-text {
              font-size: 14px;
              color: #bbbbbb;
            }
          }
          .info-content-box {
            width: 570px;
            .info-content-title {
              height: 22px;
              margin-bottom: 11px;
              font-size: 18px;
              color: #333333;
              line-height: 22px;
              font-weight: 600;
            }
            .info-content-text {
              font-size: 14px;
              color: #777777;
              line-height: 22px;
              opacity: 0.9;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    .information-layout-2 {
      .info-item-box {
        height: 145px;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover .info-content-box .info-content-title {
          color: #ef7d1b;
        }

        .info-img-box {
          width: 196px;
          height: 118px;
          margin-right: 24px;
          font-size: 0;
          .info-img {
            width: 100%;
            height: 100%;
          }
        }
        .info-content-box {
          width: 1068px;
          line-height: 1;
          margin-right: 22px;
          .info-content-title {
            width: 100%;
            font-size: 18px;
            color: #333333;
            margin-bottom: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 600;
          }
          .info-content-text {
            width: 100%;
            font-size: 14px;
            color: #777777;
            opacity: 0.9;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .right-box {
          height: 48px;
          font-size: 12px;
          color: #999999;
          opacity: 0.68;
          line-height: 1;
          .date-text {
            margin-right: 24px;
          }
        }
      }
    }
  }
}
</style>
