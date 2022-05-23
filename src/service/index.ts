import YYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const yyRequest = new YYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: false
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     console.log('请求中。。。')
  //     return config
  //   },
  //   requestInterceptorCatch: (err) => {
  //     return err
  //   },
  //   responseInterceptor: (res) => {
  //     console.log('请求返回')
  //     return res
  //   },
  //   responseInterceptorCatch: (err) => err
  // }
})
export default yyRequest
