import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
  })
  
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config); 之前一直报错的原因是：这里打印的config还没有值，就被打印了，所以拿不到data的值
    return config
  }, err => {
    console.log(err);
  })
  
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err);
  })
  
  // 3.发送真正的网络请求
  return instance(config)
}

