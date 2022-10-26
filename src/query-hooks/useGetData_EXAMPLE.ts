import { useQuery } from 'react-query'

import { QueryKeys } from '~enums'
import { getData, CatFactsListType } from '~services'

export const useGetCity_EXAMPLE = () => {
  const {
    data: dataList,
    status: dataStatus,
    refetch: refetchData,
    isFetchedAfterMount: isFetchedDataAfterMount,
  } = useQuery<CatFactsListType>(QueryKeys.CatsExample, getData)

  return { dataList, dataStatus, refetchData, isFetchedDataAfterMount }
}
