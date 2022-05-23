import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import ElementPlus from 'element-plus'
// import { globalRegister } from './global'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from './store'
// import yyRequest from './service'
// yyRequest.request<any>({
//   url: '/home/multidata',
//   method: 'GET',
//   showLoading: false,
//   interceptors: {
//     requestInterceptor: (config) => {
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log(res)
//       return res
//     }
//   }
// })
// yyRequest.get({ url: '/home/multidata' }).then((res) => {
//   console.log(res)
// })
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// globalRegister(app)
app.use(store)
app.use(router)
setupStore()
app.use(ElementPlus)
app.mount('#app')
