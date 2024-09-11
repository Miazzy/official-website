<template>
  <div class="footer">
    <div class="footer-content-column">
      <div class="title type">友情链接</div>
      <p class="title">通威集团</p>
      <p class="title">通威新能源</p>
      <p class="title">永祥股份</p>
    </div>
    <div class="footer-content-column">
      <div class="title type"><a href="/">首页</a></div>
      <p class="title"></p>
    </div>
    <div class="footer-content-column">
      <div class="title type">解决方案</div>
      <p class="title">渔光一体智能运营</p>
      <p class="title">智慧农业</p>
      <p class="title">信息化服务</p>
    </div>
    <div class="footer-content-column">
      <div class="title type">项目案例</div>
      <p class="title"></p>
    </div>
    <div class="footer-content-column">
      <div class="title type">资讯中心</div>
      <p class="title">行业动态</p>
      <p class="title">公司动态</p>
    </div>
    <div class="footer-content-column">
      <div class="title type">关于我们</div>
      <p class="title">公司介绍</p>
      <p class="title">荣誉资质</p>
      <p class="title">联系我们</p>
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
</script>
<style lang="less" scoped>
.footer {
  height: 220px;
  min-width: @main-width;
  background: rgba(0, 0, 0, 1);
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

    &:last-child {
      width: 340px;
      padding: 0 80px;
    }
  }
}
</style>
