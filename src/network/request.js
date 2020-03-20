import axios from 'axios'

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1  请求拦截的作用
  // instance.interceptors.request.use(config => {
  //   // console.log(config);
  //   // 1. 拦截一些信息不符合服务器的要求

  //   // 2. 当数据请求超时之后，希望在界面中显示一些状态（文字或者图标等）

  //   // 3. 某些网络请求（比如登录token），必须携带一些特殊的信息
  //   return config
  // }), err => {
  //   console.log(err);
  // }

  // 2.2. 相应拦截
  instance.interceptors.response.use(result => {
    return result.data;
  }), err => {
    console.log(err);
  }


  // 返回结果发送真正的网络请求 因为instance返回的是一个Promise函数，所以不需要再写Promise函数
  return instance(config);
}