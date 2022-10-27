//THIS IS EXAMPLE REQUEST
import { apiClient } from '../api/apiClient'
export type CatFactType = {
  fact: string
  length: number
}
export type CatFactsListType = CatFactType[]

export const getData = () => {
  return apiClient.get<CatFactsListType, CatFactsListType>(`/facts`)
}
