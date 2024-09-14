<template>
  <div class="card-component">
    <div class="icon-box">
      <i
        class="iconfont"
        :class="props.icon"
        :style="{ color: props.iconColor }"
      ></i>
    </div>
    <div class="label-box">
      <div class="label-ch-text" :style="{ color: props.labelColor }">
        {{ props.labelCh }}
      </div>
      <div class="label-en-text">{{ props.labelEn }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: '',
  },
  labelCh: {
    type: String,
    default: '',
  },
  labelEn: {
    type: String,
    default: '',
  },
  labelColor: {
    type: String,
    default: '',
  },
});
</script>
<style lang="less" scoped>
.card-component {
  width: 450px;
  height: 200px;
  background-color: #fff;
  box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.3);
  display: flex;
  align-items: center;
  padding-left: 70px;
  .icon-box {
    width: 90px;
    height: 90px;
    margin-right: 30px;
    .iconfont {
      font-size: 90px;
    }
  }
  .label-box {
    line-height: 1;
    .label-ch-text {
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 22px;
    }
    .label-en-text {
      font-weight: 400;
      font-size: 20px;
      color: #999999;
    }
  }
}
</style>
