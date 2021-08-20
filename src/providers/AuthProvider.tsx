import * as SecureStore from 'expo-secure-store'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '~contexts'

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

  const signIn = useCallback(async () => {
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

  return <AuthContext.Provider value={value} children={children} />
}
