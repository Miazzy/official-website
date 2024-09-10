<template>
  <div class="home">
    <Carousel>
      <template #one>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home01.jpeg" />
          </div>
          <h1 class="banner-title">
            渔光一体智能运营专家
            <div class="subTitle">YU GUANG INTEGRATED INTELLIGENT OPERATION EXPORT</div>
          </h1>
          <div class="bg-button">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
        </div>
      </template>
      <template #two>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home02.jpeg" />
          </div>
          <div class="bg-button">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
        </div>
      </template>
      <template #three>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home03.jpeg" />
          </div>
          <div class="bg-button">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
        </div>
      </template>
      <template #four>
        <div ref="banner" class="banner content-item-block">
          <div class="bg-wrapper">
            <img src="../../assets/images/home04.jpeg" />
          </div>
          <div class="bg-button">
            <div class="content">
              <span class="text">了解更多</span>
              <span class="icon">></span>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import EventBus from '../../helper/EventBus';
import Carousel from '../../components/Carousel.vue';
import { useRouter } from 'vue-router';

const { proxy } = getCurrentInstance()
const router = useRouter()
const banner = ref();

onMounted(() => {
  EventBus.emit("home-scrolling",
    { x: document.body.scrollLeft, y: document.body.scrollTop }
  )
})
</script>

<style scoped lang="less">
@keyframes verticalMotion {
  0% {
    transform: translateY(6px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(6px);
  }
}

@keyframes scrollToRight {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

.home {
  overflow: hidden;

  .main {
    width: @main-width;
    margin: auto;
  }

  .content-item-block {
    .title {
      font-size: @font-size-larger;
    }
  }
}

.banner {
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(51, 112, 255, 0.2);
  position: relative;

  .bg-wrapper {
    font-size: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &-title {
    color: #fff;
    display: none;
    font-size: 57.5px;
    text-align: center;
    position: absolute;
    left: 219px;
    top: 354px;

    .subTitle {
      position: absolute;
      margin: 0 0 0 0;
      font-size: 20px;
      width: 600px;
      left: -15px;
      top: 82px;
      letter-spacing: 0px;
    }
  }

  .bg-button {
    position: absolute;
    background: #EF7D1B;
    width: 145px;
    height: 44px;
    left: 215px;
    top: calc(50vh + 72px);
    opacity: 1;

    .content {
      margin: 9px 20px;
      font-size: 18px;
      font-weight: 600;
      color: #fefefe;
      text-align: center;

      .text {
        margin-right: 10px;
        font-family: fangsong;
      }

      .icon {
        font-size: 20px;
        font-family: monospace;
      }
    }
  }

  .search {
    width: 500px;
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .bottom-tips {
    position: absolute;
    bottom: 30px;
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    text-align: center;

    .arrow-down {
      display: block;
      margin-bottom: 4px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
      text-align: center;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      font-size: 21px;

      i {
        animation: verticalMotion 1.3s infinite linear;
        display: inline-block;
        font-style: normal;
      }
    }

    // 分割竖线
    .vertical-dashed {
      border-left: 1px dashed #fff;
      height: 30px;

      display: inline-block;
    }
  }
}

// 产品
.product {
  margin-top: 40px;
  text-align: center;
  padding: 40px 40px;
  background-size: 100%;
  background: url(//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/global.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 370px;

  .desc {
    margin: 40px 0;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-item {
    width: 90px;
    // height: 90px;
    cursor: pointer;

    &:nth-child(1),
    &:nth-child(9) {
      margin-top: 116px;
    }

    &:nth-child(2),
    &:nth-child(8) {
      margin-top: 80px;
    }

    &:nth-child(3),
    &:nth-child(7) {
      margin-top: 55px;
    }

    &:nth-child(4),
    &:nth-child(6) {
      margin-top: 30px;
    }

    &:hover {
      color: @main-color;

      img {
        border-radius: 19px;

        transform: scale(1.2);
        transform-origin: bottom;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 19px;

      margin-bottom: 10px;
      transition: transform 0.3s;
    }
  }

  .more {
    margin: auto;
    margin-top: 170px;

    width: 149px;
  }
}

// 职位

.job-category {
  text-align: center;
  margin-top: 90px;

  &-list {
    margin-top: 70px;
  }

  &-item {
    float: left;
    margin-bottom: 16px;

    .image {
      width: 250px;
      height: 250px;
      line-height: 250px;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 50%;
      margin: 0 auto;

      transition: all 0.3s;
      background-position: center;
      overflow: hidden;

      &:hover {
        box-shadow: 0 0 8px 1px #ccc;
        background-size: 110%;

        &+.name {
          color: @main-color;
        }
      }

      .overlay {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;

        font-size: 40px;
      }
    }

    .name {
      margin-top: 23px;
      font-size: @font-size-large;
    }

    margin: 0 2.5%;
    margin-bottom: 30px;
    width: 20%;
  }
}

// 字节范

.byteStandard {
  padding: 40px 40px;
  overflow: hidden;

  .title {
    margin-bottom: 30px;
  }

  .desc {
    margin-bottom: 40px;
  }

  .content {
    .image {
      .layer {
        // left: -100%;
        width: 100%;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        animation: scrollToRight 0.8s ease-in-out;
      }

      position: relative;

      float: left;
      width: 700px;
      height: 450px;
      margin-right: 100px;
      overflow: hidden;

      img {
        border-radius: 6px;
        object-fit: cover;
      }
    }
  }

  .indicator {
    color: #aaa;

    &-item {
      margin: 32px 0;

      h3 {
        &.active {
          color: black;
          font-size: 32px;
          font-weight: 400;
        }

        cursor: pointer;
      }
    }
  }
}

// 字节生活
.byteLife {

  // width:1200px;
  // overflow: hidden;
  &-title {
    margin-bottom: 70px;
  }

  padding-left: 10%;

  .block-item {
    overflow: hidden;
    margin-bottom: 100px;

    &:nth-child(odd) {
      .block-item-column {
        &-text {
          margin-right: 9%;
        }

        float: left;
      }
    }

    &:nth-child(even) {
      .block-item-column {
        &-image {
          margin-right: 9%;
        }

        float: right;
      }
    }

    &-column {
      &-title {
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #ccc;
      }

      &-text {
        width: 30%;
      }

      &-image {
        height: 400px;
        width: 59%;
        border-radius: 8px;
        overflow: hidden;

        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

// 员工故事
.staffStory {
  padding: 40px 90px;

  .title {
    text-align: center;
    margin-bottom: 10px;
  }

  &-list {
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  &-item {
    // height: 450px;
    overflow: hidden;
    padding: 50px;
    width: 30%;
    cursor: pointer;

    &:hover {
      box-shadow: 0 10px 30px 0 @box-shadow-hover-color;

      .circular-button {
        color: @main-color;
      }
    }

    .avatar {
      width: 70%;
      margin: auto;
    }

    .text {
      .title {
        color: @primary-text-color;
        font-weight: @font-weight-regular;
        font-size: @font-size-large;
        margin: 10px 0;
        white-space: nowrap;
      }

      .desc {
        color: @primary-text-color;
        margin: 12px 0;
        font-size: @font-size-base;
      }

      .remark {
        font-size: @font-size-base;

        color: @regular-text-color;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .circular-button {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 1px solid;
      line-height: 30px;

      margin: auto;
      margin-top: 20px;
      color: #ccc;
    }
  }
}
</style>