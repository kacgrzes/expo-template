import { ASYNC_STORAGE_KEYS } from '~constants'
import { secureStore } from '~utils'

const { USER_TOKEN } = ASYNC_STORAGE_KEYS

// TODO: Modify this type with token value that is accepted by your backend
export type Token = string

export function setToken(token: Token) {
  return secureStore.setItem(USER_TOKEN, token)
}

export async function getToken(): Promise<Token | undefined> {
  const token = await secureStore.getItem(USER_TOKEN)

  if (!token) {
    return
  }

  return token
}

export async function deleteToken() {
  const token = await secureStore.getItem(USER_TOKEN)

  if (!token) return

  return secureStore.removeItem(USER_TOKEN)
}
