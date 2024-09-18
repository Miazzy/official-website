<template>
  <div class="header" :class="[{ fixedToTop }, themeColor]" ref="header">
    <div class="logo">
      <a href="/">
        <logo :is-transparent="themeColor === 'is-transparent'"></logo> 
      </a>
    </div>
    <ul class="navbar">
      <router-link to="/" exact v-slot="{ href, navigate, isActive }">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">首页</a>
        </li>
      </router-link>
      <router-link exact to="/plans?type=yy" v-slot="{ href, navigate, isActive }" >
        <li class="navbar-item" :class="{ active: isActive }">
          <ElTooltip
              placement="bottom"
              effect="light"
            >
            <a :href="href" @click="handleClick('yy')">解决方案</a>
            <template #content>
              <div class='tooltips-text'>
                <span class='operation' :class="planType === 'yy' ? 'active': ''" @click="handleClick('yy')">智能运营</span>
                <span class='agriculture' :class="planType === 'yz' ? 'active': ''" @click="handleClick('yz')">智慧农业</span>
                <span class='information' :class="planType === 'xx' ? 'active': ''" @click="handleClick('xx')">信息化</span>
              </div>
            </template>
          </ElTooltip>
        </li>
      </router-link>
      <router-link exact to="/projectCases" v-slot="{ href, navigate, isActive }">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">项目案例</a>
        </li>
      </router-link>
      <router-link to="/informationCenter" v-slot="{ href, navigate, isActive }">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">资讯中心</a>
        </li>
      </router-link>
      <router-link to="/aboutus" v-slot="{ href, navigate, isActive }">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">关于我们</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { ElTooltip } from "element-plus";
import { MsgManager } from "../manager/MsgManager";

const router = useRouter();
const planType = ref('');

const props = defineProps({
  themeColor: {
    type: String,
    default: 'main-color'
  },
  fixedToTop: {
    type: Boolean,
    default: false
  }
});

const handleClick = (type) => {
  MsgManager.getInstance().sendMsg('pagechange', { route: 'plans', type });
  router.push('/plans?type=' + type);
};

onMounted(() => {
  MsgManager.getInstance().listen('pagetype', (message) => {
    planType.value = message.type;
  });
});

</script>
<style lang="less" scoped>
.header {
  position: fixed;
  color: transparent;
  display: flex;
  height: 64px;
  align-items: center;
  padding: 10px 100px;
  min-width: 900px;

  &.fixedToTop {
    position: fixed;
    width: 100%;
  }

  &.main-color {
    background-color: transparent;
    border-bottom: 0;

    a {
      cursor: pointer;
      color: @white-color;
    }

    .navbar-item {
      cursor: pointer;

      &:hover {
        a {
          cursor: pointer;
          color: @white-color;
        }
      }

      &.active {
        a {
          cursor: pointer;
          color: @white-color;
        }
      }
    }
  }

    &.is-transparent {
      a {
        color: #fff;
      }

      .navbar-item {

        .el-dropdown span {
          color: #fff;
        }

        &:hover {
          color: #ccc;
        }

      }

      .active {
        color: #fff;
      }
    }

  }

  .logo {
    width: 200px;
    height: 100%;

    a {
      margin: 47.5px 0 0 58px;
      width: 100%;
      display: block;
    }
  }

  .navbar {
    margin-left: calc(27vw - 10px);
    margin-right: 10px;
    margin-top: calc(11.75vh);
    cursor: pointer;
    display: flex;

    &-item {
      width: 82px;
      font-size: 20.5px;
      padding: 4px 0;
      margin: 0 42px;
      text-align: center;

      &.active {
        border-bottom: 3px solid #EF7D1B;
        color: @main-color;
      }
    }

    a {
      outline: none;
      cursor: pointer;
      transition: color 0.3s;
      line-height: 30px;
    }
  }
</style>
