import * as SecureStore from 'expo-secure-store'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { AuthContext, AuthContextType } from '~contexts'
import { wait } from '~utils'

// TODO: move to constants
const TOKEN_KEY = 'token'

export const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

  useEffect(() => {
    const bootstrap = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      setIsSignedIn(!!token)
    }

    bootstrap()
  }, [])

  const signIn: AuthContextType['signIn'] = useCallback(async (data) => {
    // Errors are handled on UI side
    // if you want to stop this function with error just throw new Error.
    // Remember to pass readable error message for user, because this error will be displayed for him
    await wait(500)

    if (data.email !== 'test@example.com' || data.password !== '123456') {
      throw new Error('Incorrect email or password')
    }
    await SecureStore.setItemAsync(TOKEN_KEY, 'token here')
    setIsSignedIn(true)
  }, [])

  const signOut = useCallback(async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    setIsSignedIn(false)
  }, [])

  const signUp = useCallback(() => {
    // TODO: implement sign up here
  }, [])

  const value = useMemo(() => {
    return {
      isSignedIn,
      signIn,
      signOut,
      signUp,
    }
  }, [isSignedIn, signIn, signOut, signUp])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
