import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? '/' : 'http://www.fengleaf.cn/sell/'
const service = axios.create({
  baseURL: baseURL,
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(new Error(error))
  }
)

export default service
