import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '~contexts'

export const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

  useEffect(() => {
    // TODO: this simulates bootstraping
    const timer = setTimeout(() => {
      setIsSignedIn(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const signIn = useCallback(() => {
    // TODO: this is only simulation. Implement sign in here
    setTimeout(() => setIsSignedIn(true), 300)
  }, [])
  const signOut = useCallback(() => {
    // TODO: this is only simulation. Implement sign out here
    setTimeout(() => setIsSignedIn(false), 300)
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
