import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL:"http://localhost:9111/"
  })
  return instance(config)

  //请求前拦截器
  // instance.interceptors.request.use()

  //请求后拦截器
  // instance.interceptors.response.use()
}
