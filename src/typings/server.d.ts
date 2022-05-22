import type { AxiosRequestConfig } from 'axios'

export declare namespace Request {
  /** ALL请求参数 */
  interface All {
    url: string
    method: 'GET' | 'POST'
    params?: null
    data?: null
    headers?: any
    config?: AxiosRequestConfig
  }
  /** GET请求参数 */
  interface Params extends All {
    method: 'GET'
    params: ObjectType
  }
  /** POST请求参数 */
  interface Data extends All {
    method: 'POST'
    data: ObjectType
  }
}
