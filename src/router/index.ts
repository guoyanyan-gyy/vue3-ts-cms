import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/util/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/:pathMath(.*)*',
    name: 'not-font',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

/**导航守卫 */
router.beforeEach((to) => {
  const token = localCache.getCache('token')
  if (token) {
    if (to.path === '/login') {
      return '/main'
    }
  } else {
    return '/login'
  }
})

export default router
