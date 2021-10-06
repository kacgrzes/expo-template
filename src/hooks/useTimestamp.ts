import { useEffect } from 'react'

export const useTimestamp = (): void => {
  useEffect(() => {
    fetch('/api/timestamp')
      .then((response) => response.json())
      .then((data) => {
        alert(`This is just an example response form miragejs \n\n ${JSON.stringify(data)}`)
      })
  }, [])
}
