let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
}
export { BASE_URL, TIME_OUT }
