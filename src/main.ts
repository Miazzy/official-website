import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/index";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from './api/api'
import Loading from "./components/Loading/index";
import "./assets/style/reset.css";
import "./assets/style/global.css";

const app = createApp(App)
app.use(router).use(store)
app.use(Loading)
app.config.globalProperties.$api = api

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
