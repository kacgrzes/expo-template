import { AxiosRequestConfig } from 'axios'

import { getToken } from '../TokenService'

export const injectTokenToRequest = async (config: AxiosRequestConfig<object>) => {
  const token = await getToken()

  let Authorization = ''
  if (token) {
    Authorization = `Bearer ${token}`
  }
  return {
    ...config,
    headers: {
      ...config?.headers,
      Authorization,
    },
  }
}
