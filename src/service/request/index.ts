import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YYRequestConfig, YYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import localCache from '@/util/cache'
const DEAFULT_LOADING = true
class YYRequest {
  instance: AxiosInstance
  interceptors?: YYRequestInterceptors
  loading?: any
  showLoading: boolean
  constructor(config: YYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    // 全局拦截器（请求后添加先执行，响应先添加的先响应）
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        const token = localCache.getCache('token')
        if (config.headers && token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
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
  request<T>(config: YYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 执行单独的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          this.showLoading = DEAFULT_LOADING
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: YYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: YYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export default YYRequest
