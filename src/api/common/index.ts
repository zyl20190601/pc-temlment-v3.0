import { API_PREFIX } from '@/config'
import { request } from '@/server/request'

import { IaddIntentionParams, TaddIntentionRes } from './common'

// POST
export const addIntentionApi = (data: IaddIntentionParams): TaddIntentionRes => request({
  url: `${API_PREFIX}/security/intentionReport/insertIntentionTransactionReport`,
  method: 'POST',
  data
})

// GET
export const getListApi = (params: IaddIntentionParams): TaddIntentionRes => request({
  url: `${API_PREFIX}/security/commissionScheme/queryPage`,
  method: 'GET',
  params,
})


