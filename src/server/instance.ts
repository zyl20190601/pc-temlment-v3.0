import axios from 'axios';
import { isDev } from '@/config'

const instance = axios.create({
  baseURL: isDev ? '/api' : '',   //接口请求地址
  timeout: 10000,
  withCredentials: true, //是否携带cookie
  headers: {
    'Content-Type': 'application/json',
    // responseType: 'blob'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default instance;

