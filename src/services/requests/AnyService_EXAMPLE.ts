//THIS IS EXAMPLE REQUEST
import { apiClient } from '../api'

import { CatFactType } from '~types/catFacts'
export type CatFactsListType = CatFactType[]

export const getData = () => {
  return apiClient.get<CatFactsListType, CatFactsListType>(`/facts`)
}
