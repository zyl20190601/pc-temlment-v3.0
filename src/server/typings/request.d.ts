import type { AxiosRequestConfig } from 'axios'

interface RequestOption {
  url: string
  method: 'GET' | 'POST'
  params?: null
  data?: null
  headers?: any
  config?: AxiosRequestConfig
}

/** GET请求参数 */
interface RequestParams extends RequestOption {
  method: 'GET'
  params: ObjectType
}

/** POST请求参数 */
interface RequestData extends RequestOption {
  method: 'POST'
  data: ObjectType
}

export type RequestParameter = RequestData | RequestParams
