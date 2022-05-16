import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
import { globalRegister } from './global'
import 'element-plus/dist/index.css'
import yyRequest from './service'
yyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log(111)
      return config
    },
    responseInterceptor: (res) => {
      console.log(2222)
      console.log(res)

      return res
    }
  }
})
const app = createApp(App)
globalRegister(app)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
