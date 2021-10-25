import * as SplashScreen from 'expo-splash-screen'
import React, { Fragment, ReactNode, useEffect } from 'react'

import { useAuth, useCachedResources } from '~hooks'

SplashScreen.preventAutoHideAsync()

export const AppLoading = ({ children }: { children: ReactNode }): JSX.Element | null => {
  const isLoadingComplete = useCachedResources()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isLoadingComplete && isSignedIn !== null) {
      SplashScreen.hideAsync()
    }
  }, [isLoadingComplete, isSignedIn])

  if (!isLoadingComplete || isSignedIn === null) {
    return null
  }

  return <Fragment>{children}</Fragment>
}
