import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component:()=>import ('@/views/index/index.vue')
  },
  {
    path: '/scene/antarctica',
    name: 'antarctica',
    component:()=>import ('@/views/scene_Antarctica/index.vue')
  },
  {
    path: '/scene/northAmerica',
    name: 'northAmerica',
    component:()=>import ('@/views/scene_NorthAmerica/index.vue')
  },
  {
    path: '/scene/africa',
    name: 'africa',
    component:()=>import ('@/views/scene_Africa/index.vue')
  }
  ,
  {
    path: '/scene/asia',
    name: 'asia',
    component:()=>import ('@/views/scene_Asia/index.vue')
  }
  ,
  {
    path: '/scene/oceania',
    name: 'oceania',
    component:()=>import ('@/views/scene_Oceania/index.vue')
  } ,
  {
    path: '/scene/southAmerica',
    name: 'southAmerica',
    component:()=>import ('@/views/scene_SouthAmerica/index.vue')
  }
  ,
  {
    path: '/scene/europe',
    name: 'europe',
    component:()=>import ('@/views/scene_Europe/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) { 
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
