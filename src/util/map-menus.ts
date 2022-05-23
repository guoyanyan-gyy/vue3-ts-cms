import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoute: RouteRecordRaw[] = []
  // 第一个参数: 文件地址  第二个：是否递归  第三个：要匹配的正则  是webpack在操作
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoute.push(route.default)
  })
  function reduceGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoute.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        reduceGetRoute(menu.children)
      }
    }
  }
  reduceGetRoute(userMenus)

  return routes
}
