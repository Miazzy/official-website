<template>
  <!-- footer-container -->
  <div class="footer-container flex-col">
    <div class="footer-wrapper flex-row justify-between">
      <div class="company-wrapper flex-col justify-between">
        <img class="company-code-image" src="../assets/images/mobile_qr_code.png" />
        <span class="company-code-text">扫一扫，关注渔光物联</span>
      </div>
      <div class="contact-wrapper flex-row">
        <div class="contact-content flex-row justify-between">
          <span
            class="contact-content-paragraph">Tel：028-86168758<br />E-mail：WEIH02&#64;tongwei.com<br />Addr.：四川省成都市高新区天府大道588号通威国际中心</span>
        </div>
        <div class="contact-image-text flex-row justify-between">
          <span class="icon iconfont image tel icondianhua"></span>
          <span class="icon iconfont image email iconyouxiang"></span>
          <span class="icon iconfont image addr iconzhengqimenhu_dizhixinxi1"></span>
        </div>
      </div>
    </div>
    <div class="line-box flex-col"></div>
    <span class="text-copyright">Copyright ©渔光物联（www.ygwl.net） 蜀ICP备16026089号</span>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {

});
</script>
<style lang="less" scoped>
@import '@/assets/style/common.css';

.footer-container {
  background-color: rgba(35, 36, 41, 1);
  position: relative;
  width: 100vw;
  height: 25.2vw;

  .footer-wrapper {
    width: 71.74vw;
    height: 11.6vw;
    margin: 3.73vw 0 0 13.13vw;

    .company-wrapper {
      width: 16vw;
      height: 11.2vw;
      margin-top: 0.27vw;

      .company-code-image {
        width: 8.50vw;
        height: 8.50vw;
        margin-left: 5.5vw;
      }

      .company-code-text {
        width: 16vw;
        height: 1.6vw;
        overflow-wrap: break-word;
        color: rgba(153, 153, 153, 1);
        font-size: 1.6vw;
        font-family: MicrosoftYaHei;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        line-height: 4vw;
        margin-top: 1.07vw;
      }
    }

    .contact-wrapper {
      position: relative;
      width: 53.74vw;
      height: 11.6vw;
      margin: -0.75vw 0 0 8.75vw;

      .contact-content {
        width: 53.74vw;
        height: 11.6vw;
      }

      .contact-content-paragraph {
        width: 51.2vw;
        height: 11.6vw;
        overflow-wrap: break-word;
        color: rgba(217, 217, 217, 1);
        font-size: 1.86vw;
        font-family: MicrosoftYaHei;
        font-weight: normal;
        text-align: left;
        line-height: 4.8vw;
      }

    }
  }

  .line-box {
    background-color: rgba(255, 255, 255, 0.1);
    width: 89.34vw;
    height: 0.14vw;
    margin: 3.73vw 0 0 5.33vw;
  }

  .text-copyright {
    width: 100vw;
    height: 1.87vw;
    overflow-wrap: break-word;
    color: #d9d9d9;
    font-size: 1.6vw;
    font-family: SourceHanSansCN;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    line-height: 1.87vw;
    margin: 2vw auto 2.13vw auto;
  }
}

.contact-image-text {
  position: absolute;
  width: 3vw;
  height: 15vw;
  left: -4vw;
  top: 0.8vw;

  .image {
    position: absolute;
    color: #fefefe;
    transform: scale(0.5);

    &.email {
      width: 1.5vw;
      height: 1.5vw;
      margin-top: 4.75vw;
    }

    &.tel {
      width: 1.5vw;
      height: 1.5vw;
    }

    &.addr {
      width: 1.5vw;
      height: 1.5vw;
      margin-top: 9.55vw;
    }
  }
}
</style>