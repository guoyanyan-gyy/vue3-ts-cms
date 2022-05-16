// import axios from 'axios'
// axios
//   .get('http://20', {
//     params: {
//       name: 'huahua'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'huahua'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
// axios的配置
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 1000
// axios.all([axios.get('http'), axios.post('http')]).then((res) => {
//   console.log(res[0])
//   console.log(res[1])
// })
// const service = axios.create({})
// axios.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (err) => {
//     return err
//   }
// )
// axios.interceptors.response.use(
//   (res) => {
//     return res.data
//   },
//   (err) => {
//     return err
//   }
// )
