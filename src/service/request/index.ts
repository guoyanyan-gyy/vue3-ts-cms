import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YYRequestConfig, YYRequestInterceptors } from './type'
class YYRequest {
  instance: AxiosInstance
  interceptors?: YYRequestInterceptors
  constructor(config: YYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 全局拦截器（请求后添加先执行，响应先添加的先响应）
    this.instance.interceptors.request.use(
      (config) => {
        console.log('默认请求拦截器')
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('默认响应拦截器')
        return res
      },
      (err) => {
        return err
      }
    )
    // 传入的请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 传入的响应拦截
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }
  request(config: YYRequestConfig): void {
    // 执行单独的拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default YYRequest
