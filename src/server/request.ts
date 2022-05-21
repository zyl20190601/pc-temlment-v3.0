import instance from './guard';
import type { AxiosError, AxiosRequestConfig } from 'axios'

interface RequestParam {
  url: string
  method: 'POST' | 'GET'
  data?: ObjectType
  params?: ObjectType
  headers?: any
  config?: AxiosRequestConfig
}

/**
 * 封装所有请求
 * @param methed
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
export function request({ url, method, data = {}, params = {}, headers, config }: RequestParam): any {
  return new Promise((resolve, reject) => {
    instance({
      method,
      url,
      params: method === 'GET' ? params : '',
      data: method !== 'GET' ? data : '',
      headers,
      ...config
    })
      .then((response: any) => {
        //对接口错误码做处理
        const { result } = response.data
        console.log(`%c 接收 api_${response.config.url}`, 'background:#2472C8;color:#fff', result)
        resolve(result)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}
