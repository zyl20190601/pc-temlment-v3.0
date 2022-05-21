import { prefix } from '@/config'
import { request } from '@/server/request'

import { IaddIntentionParams, TaddIntentionRes } from './common'

// POST
export const addIntentionApi = (data: IaddIntentionParams): TaddIntentionRes => request({
  url: `${prefix}/security/intentionReport/insertIntentionTransactionReport`,
  method: 'POST',
  data
})

// GET
export const getListApi = (params: IaddIntentionParams): TaddIntentionRes => request({
  url: `${prefix}/security/commissionScheme/queryPage`,
  method: 'GET',
  params
})
