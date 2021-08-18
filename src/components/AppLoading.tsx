import React, { FC, Fragment, useEffect } from 'react'
import { useAuth, useCachedResources } from '~hooks'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export const AppLoading: FC = ({ children }) => {
  const isLoadingComplete = useCachedResources()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isLoadingComplete && isSignedIn !== null) {
      SplashScreen.hideAsync()
    }
  }, [isLoadingComplete, isSignedIn])

  if (!isLoadingComplete && isSignedIn === null) {
    return null
  }

  return <Fragment>{children}</Fragment>
}
