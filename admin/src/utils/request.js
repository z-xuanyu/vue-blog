import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 请求前做一些什么事情
    if (store.getters.token) {
      // 设置请求前Token
      config.headers['authorization'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误处理
    console.log(error) 
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 响应前做一些什么事
  response => {
    const res = response.data
    // 设置响应时错误状态码 
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008：非法令牌；50012：其他客户端登录；50014：令牌过期；
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('您已注销，您可以取消以停留在此页，或重新登录！', 'Confirm logout', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
