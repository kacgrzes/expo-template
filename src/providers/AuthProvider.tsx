import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '~contexts'

// TODO: change key here
const TOKEN_KEY = '@template/token'

export const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

  const { setItem, getItem, removeItem } = useAsyncStorage(TOKEN_KEY)

  useEffect(() => {
    const bootstrap = async () => {
      const token = await getItem()
      setIsSignedIn(!!token)
    }

    bootstrap()
  }, [])

  const signIn = useCallback(async () => {
    await setItem('token here')
    setIsSignedIn(true)
  }, [])

  const signOut = useCallback(async () => {
    await removeItem()
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
