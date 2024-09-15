<template>
  <div class="footer">
    <div class="footer-content-column">
      <div class="title type">友情链接</div>
      <p class="title"><a href="https://www.tongwei.com/" target="_blank">通威集团</a></p>
      <p class="title"><a href="https://www.tw-newenergy.com/index" target="_blank">通威新能源</a></p>
      <p class="title"><a href="https://www.scyxgf.com/" target="_blank">永祥股份</a></p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a @click="handleRoute('/')">首页</a></div>
      <p class="title"></p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a @click="handleClick('yy')" target="_self">解决方案</a></div>
      <p class="title"><a @click="handleClick('yy')" target="_self">渔光一体智能运营</a></p>
      <p class="title"><a @click="handleClick('yz')" target="_self">智慧农业</a></p>
      <p class="title"><a @click="handleClick('xx')" target="_self">信息化服务</a></p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a @click="handleRoute('/projectCases')">项目案例</a></div>
      <p class="title"></p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a @click="handleRoute('/informationCenter')">资讯中心</a></div>
      <p class="title"><a @click="handleRoute('/informationCenter', 600)">行业动态</a></p>
      <p class="title"><a @click="handleRoute('/informationCenter', 600)">公司动态</a></p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a @click="handleRoute('/aboutus')">关于我们</a></div>
      <p class="title"><a @click="handleRoute('/aboutus', 500)">公司介绍</a></p>
      <p class="title"><a @click="handleRoute('/aboutus', 1390)">荣誉资质</a></p>
      <p class="title"><a @click="handleRoute('/aboutus', 3000)">联系我们</a></p>
    </div>
    <div class="footer-content-column">
      <div class="image">
        <img src="../assets/images/weixin.png" />
      </div>
      <div class="descript">扫一扫，关注渔光物联</div>
    </div>

    <div class="footer-content-column">
      <div class="margin" style="margin-top: 50px;"></div>
      <div class="title text">Tel: 028-86168758</div>
      <div class="title text">E-mail: WEIH02@tongwei.com</div>
      <div class="title text">Addr: 四川省成都市高新区天府大道中段588号通威国际中心</div>
    </div>
  </div>
</template>
<script setup>
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import { MsgManager } from "../manager/MsgManager";
import { setTimexec } from "../utils/common";

const router = useRouter();

const handleClick = (type) => {
  window.scrollTo(0, 0);
  MsgManager.getInstance().sendMsg('pagechange', { route: 'plans', type });
  router.push('/plans?type=' + type);
};

const handleRoute = (path = '/', y = 0) => {
  window.scrollTo(0, y);
  router.push(path);
  setTimexec(() => {
    window.scrollTo(0, y);
  }, [0, 50, 100]);
};
</script>
<style lang="less" scoped>
.footer {
  height: 220px;
  min-width: @main-width;
  background: #232429;
  color: #fff;
  display: flex;
  font-size: @font-size-small;
  padding: 0 150px;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  &-content-column {
    padding: 0 40px;
    height: 100px;

    &:last-child {
      margin: 0 0 0 30px;
    }
    .title {
      cursor: pointer;
      text-align: left;
      color: @secondary-text-color;

      &.type {
        color: #D9D9D9;
        margin: -10px 0 30px 0;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
      }

      &.text {
        margin: 0 0 5px -5vw;
        color: #fefefe;
        text-align: left;
      }
    }

    .image {
      width: 125px;
      height: auto;

      img {
        margin: -6px 0 0 0;
        width: 125px;
        height: 125px;
      }
    }

    .descript {
      width: 125px;
      font-size: 10px;
      text-align: center;
      color: #fefefe90;
    }
  }
}
</style>
