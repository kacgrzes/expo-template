//THIS IS EXAMPLE REQUEST
import { apiClient } from '~services/api'
export type CatFactType = {
  fact: string
  length: number
}
export type CatFactsListType = CatFactType[]

export const getData = () => {
  return apiClient.get<CatFactsListType, CatFactsListType>(`/facts`)
}
