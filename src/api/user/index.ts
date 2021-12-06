import { prefix } from '../base'
import { request } from '../../server/axios'

import { IaddIntentionParams, TaddIntentionRes } from './index.d'

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
