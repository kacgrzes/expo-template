import { useQuery } from '@tanstack/react-query'

import { QueryKeys } from '~enums'
import { getData } from '~services'
import { TodoList } from '~types/todos'

export const useGetCity_EXAMPLE = () => {
  const {
    data: dataList,
    status: dataStatus,
    refetch: refetchData,
    isFetchedAfterMount: isFetchedDataAfterMount,
  } = useQuery<TodoList>([QueryKeys.TODOS], getData)

  return { dataList, dataStatus, refetchData, isFetchedDataAfterMount }
}
