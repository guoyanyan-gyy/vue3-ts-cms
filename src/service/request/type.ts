import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface YYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
export interface YYRequestConfig extends AxiosRequestConfig {
  interceptors?: YYRequestInterceptors
}
