import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.css'
import 'lib-flexible/flexible.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';



createApp(App).use(store).use(router).use(Antd).mount('#app')
