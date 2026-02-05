import axios from 'axios'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://127.0.0.1:3001', // 后端API基础路径
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    // 例如：config.headers.Authorization = localStorage.getItem('token')
    console.log('请求配置:', config)
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 只返回响应数据中的data部分
    const res = response.data
    console.log('响应数据:', res)
    
    // 可以在这里统一处理响应状态
    if (res.code !== 200) {
      console.error('响应错误:', res.msg)
      // 可以根据需要进行错误处理，例如跳转到登录页等
    }
    
    return res
  },
  error => {
    console.error('响应错误:', error)
    // 可以在这里统一处理网络错误等
    return Promise.reject(error)
  }
)

export default http
