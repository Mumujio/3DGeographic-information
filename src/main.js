import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.css'

import Antd from 'ant-design-vue';
// import '@/utils/rem.js'
import 'ant-design-vue/dist/antd.css';
import '@/utils/rem'



createApp(App).use(store).use(router).use(Antd).mount('#app')
