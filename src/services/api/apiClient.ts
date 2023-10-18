import axios, { AxiosError } from 'axios'
import i18n from 'i18next'
import qs from 'qs'

import { injectTokenToRequest } from '../interceptors/injectToken'

import { ENV, SECOND_IN_MS } from '~constants'
import { getApiError } from '~utils'

export type ApiError = {
  message: string
  errors: {
    [key: string]: string[]
  }
}

export const baseURL = ENV.API_URL

export const apiClient = axios.create({
  baseURL,
  timeout: 30 * SECOND_IN_MS,
  paramsSerializer: (params) => qs.stringify(params),
})

apiClient.interceptors.request.use(injectTokenToRequest, (error) => {
  console.log('Error while sending request', JSON.stringify(error, null, 2))
  return Promise.reject(error)
})

apiClient.interceptors.response.use(
  async (response) => {
    // CONFIG: Verify what response is your backend returning
    // Sometimes it's response.data.data
    return response?.data
  },
  async (error: AxiosError<ApiError>) => {
    const errorMessage = error?.response?.data?.message

    if (errorMessage) {
      //CONFIG: Add errors in getApiError
      const api_error = getApiError(errorMessage)

      if (api_error) {
        return Promise.reject(new Error(api_error?.translation))
      }

      //FIXME: Delete this before deploy, this is unhandled error from backend
      return Promise.reject(new Error('BE: ' + errorMessage))
    }

    return Promise.reject(new Error(i18n.t('errors.something_went_wrong')))
  }
)
