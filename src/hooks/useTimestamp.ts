import { useEffect } from 'react'

import { alert } from '~utils'

export const useTimestamp = (): void => {
  useEffect(() => {
    fetch('/api/timestamp')
      .then((response) => response.json())
      .then((data) => {
        alert(
          'Warning',
          `This is just an example response form miragejs \n\n ${JSON.stringify(data)}`
        )
      })
  }, [])
}
