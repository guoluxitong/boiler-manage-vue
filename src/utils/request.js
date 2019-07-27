import axios from 'axios'
import { config } from '@/config/index'
const baseURL = process.env.NODE_ENV === 'development'
  ? config.development_base_ip + ':' + config.development_base_port
  : config.product_base_ip + ':' + config.product_base_port

const service = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

service.defaults.withCredentials = true
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => response,
  error => {
    /*Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })*/
    return Promise.reject(error)
  })
export default service
