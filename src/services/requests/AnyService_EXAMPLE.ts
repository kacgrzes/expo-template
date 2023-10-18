//THIS IS EXAMPLE REQUEST
import { apiClient } from '../api'

import { TodoList } from '~types/todos'

export const getData = async () => {
  return apiClient.get<TodoList, TodoList>(`/todos`)
}
