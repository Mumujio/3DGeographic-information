import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.css'

import Antd from 'ant-design-vue';
// import '@/utils/rem.js'
import 'ant-design-vue/dist/antd.css';
import label_Amodel from '@/components/label_a_model.vue'


import '@/utils/rem'

const app = createApp(App)
// 注册全局组件
app.component('label_Amodel',label_Amodel)

app.use(store).use(router).use(Antd).mount('#app')
