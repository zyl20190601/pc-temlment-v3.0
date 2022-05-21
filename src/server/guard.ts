// import qs from 'qs';
import instance from './instance';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

// 添加请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // 处理加密及公共携带传参

  // 在发送请求之前做些什么，比如传token
  return config
}, (error: AxiosError) => {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use((response: AxiosResponse<FetchResponse.Response>) => {
  const { data, config }: any = response
  // 对响应数据做点什么
  console.log(`%c 接收 api_${config.url.replace(/\/(\w+)\//, '')}`, 'background:#2472C8;color:#fff', data);
  //对错误代码做处理
  return response;
}, (error: AxiosError) => {
  // 对响应错误做点什么
  console.log('err' + error)// for debug
  return Promise.reject(error);
});

export default instance;
