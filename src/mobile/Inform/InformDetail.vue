<template>
  <div class="container flex-col">
    <!-- mobile-header -->
    <MHeader></MHeader>
    <!-- banner-container -->
    <div class="banner-container flex-col">
      <div class="banner-wrapper flex-row">
        <div class="banner-text-wrapper flex-col justify-between">
          <span class="text-title">资讯中心</span>
          <span class="text-description">INFORMATION CENTER</span>
        </div>
      </div>
    </div>
    <!-- title-container -->
    <div class="title-container flex-col">
      <div class="title-text-wrapper">
        <span class="title-text-location">当前位置：资讯中心</span>
        <span class="title-text-space">&nbsp;&nbsp;&gt;&nbsp;</span>
        <span class="title-text-tname">资讯详情</span>
      </div>
      <div class="title-text-blog-wrapper flex-col justify-between">
        <span class="blog-title">运维一线丨那天，我在水库救起来一只“水晃晃”</span>
        <span class="blog-info">
          发布时间：2020-05-05
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          来源：运营中心
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          作者：陈婷
        </span>
      </div>
    </div>
    <!-- content-container -->
    <div class="content-container flex-col">
      <span class="content-paragraph">
        今年4月22日是第51个世界地球日<br />
        今年世界地球日宣传主题为<br />
        “珍爱地球，人与自然和谐共生”<br />
        我们的生产活动源于自然<br />
        我们的生产行为回馈自然<br />
        “渔光一体”，与自然和谐共生<br />
        4月9日，太阳同往常一样烈，和同事一起完成了上午阶段的组件更换和日常巡检工作，划着小船往回走的途中，我又一次眼疾手快地从水库里救起来一只落水的“水晃晃”，这已经是我们这个月救起来的第4只了。<br />
        Tip: “水晃晃” 是雀形目鹡鸰科的鸟类，学名白鹡鸰，“水晃晃”是当地的一种叫法，也叫“点水雀”，在中国有广泛分布。<br />
        主要栖息于河流、湖泊、水库、水塘等水域岸边，觅食时主要地上行走。繁殖期在3-7月，新出的白鹡鸰生命力较为脆弱。<br />
        最近天气暖和了，水库边新出生了很多小家伙，像这种刚出生不久的，还不太会飞，不慎落水后要是得不到人为帮助，可能只有淹死在水里了。我们日常巡检时，碰到了都会把他们救到岸边。<br />
        户外工作，条件艰苦，有时候工作累了，看到白鹤、野鸭这些在我们的水库里嬉戏，也能感到一丝丝放松。<br />
        保障电站安全高效生产是运维人的本职工作，野生动物的救助和保护其实只是举手之劳，但我们只要遇到了，都会去做。偶尔遇到白色垃圾，也会第一时间清理，我认为水库的生态保持工作，同运维工作一样重要。<br />
        如果说通威“渔光一体”模式是助力清洁能源发展的一大步，那我们始终坚持的水库生态保持工作是助力可持续发展的一小步。<br />
        谢谢你们<br />
        有责任心、有爱心的渔光物联人<br />
      </span>
    </div>
    <!-- link-container -->
    <div class="link-container flex-col">
      <div class="link-text-wrapper">
        <div class="link-row link-pre">
          <span class="link-text">上一篇：</span>
          <span class="link-paragraph">头条文章3</span>
        </div>
        <div class="link-row link-pre">
          <span class="link-text">下一篇：</span>
          <span class="link-paragraph">头条文章4</span>
        </div>
      </div>
    </div>
    <!-- mobile-footer -->
    <MFooter></MFooter>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";

</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.container {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100vw;
  height: 264vw;
  overflow: hidden;
}

.banner-container {
  height: 42.94vw;
  width: 99.87vw;
  background: url('../../assets/images/mobile-inform-banner.jpg');
  background-size: 100% 100%;

  .banner-wrapper {
    width: 26.4vw;
    height: 10.94vw;
    margin: 20vw auto 10vw auto;
  
    .banner-text-wrapper {
      width: 26.4vw;
      height: 10.94vw;
  
      .text-title {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 26.4vw;
        height: 6.4vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 6.53vw;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: center;
        white-space: nowrap;
        line-height: 6.54vw;
      }
  
      .text-description {
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
        width: 25.34vw;
        height: 1.87vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 2.26vw;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 2.27vw;
        margin: 2.66vw 0 0 0.53vw;
      }
    }
  }
}


.title-container {
  background-color: rgba(255, 255, 255, 1);
  width: 100vw;
  height: 25.07vw;
  z-index: 1000;

  .title-text-wrapper {
    width: 38.27vw;
    height: 2.67vw;
    overflow-wrap: break-word;
    font-size: 0;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: left;
    white-space: nowrap;
    line-height: 2vw;
    margin: 4.26vw 0 0 4.4vw;
  
    .title-text-location {
      width: 38.27vw;
      height: 2.67vw;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 2.66vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      white-space: nowrap;
      line-height: 5.2vw;
    }
    
    .title-text-space {
      width: 38.27vw;
      height: 2.67vw;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 2.66vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      white-space: nowrap;
      line-height: 5.2vw;
    }
    
    .title-text-tname {
      width: 38.27vw;
      height: 2.67vw;
      overflow-wrap: break-word;
      color: rgba(239, 125, 27, 1);
      font-size: 2.66vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      white-space: nowrap;
      line-height: 5.2vw;
    }
  }
  
  .title-text-blog-wrapper {
    width: 85.74vw;
    height: 8.8vw;
    margin: 4.93vw 0 4.4vw 4.13vw;
    
    .blog-title {
      width: 85.6vw;
      height: 4.14vw;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 4vw;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      text-align: left;
      line-height: 2vw;
      margin-left: 0.14vw;
    }
    
    .blog-info {
      width: 65.47vw;
      height: 2.4vw;
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 2.4vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      white-space: nowrap;
      line-height: 2vw;
      margin-top: 2.27vw;
    }
  }
}


.content-container {
  background-color: rgba(250, 250, 250, 1);
  height: 153.74vw;
  width: 92vw;
  position: relative;
  margin: -0.13vw 0 0 4.26vw;
  z-index: 1000;

  .content-paragraph {
    width: 84.14vw;
    height: 146.4vw;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 2.66vw;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: justifyLeft;
    line-height: 5.07vw;
    margin: 3.73vw 0 0 3.73vw;
  }
}

.link-container {
  width: 100vw;
  height: 17.94vw;
  margin-bottom: 0.14vw;

  .link-text-wrapper {
    width: 28.27vw;
    height: 7.34vw;
    overflow-wrap: break-word;
    font-size: 0;
    font-family: SourceHanSansCN-Regular;
    font-weight: normal;
    text-align: left;
    line-height: 5.2vw;
    margin: 4vw 0 0 8vw;
    display: flex;
    flex-direction: column;

    .link-text {
      width: 18.27vw;
      height: 7.34vw;
      overflow-wrap: break-word;
      color: rgba(96, 96, 96, 1);
      font-size: 2.13vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      line-height: 5.2vw;
    }

    .link-paragraph {
      width: 18.27vw;
      height: 7.34vw;
      overflow-wrap: break-word;
      color: rgba(239, 125, 27, 1);
      font-size: 2.13vw;
      font-family: SourceHanSansCN-Regular;
      font-weight: normal;
      text-align: left;
      line-height: 5.2vw;
    }
  }
}
</style>