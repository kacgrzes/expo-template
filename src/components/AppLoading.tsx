import * as SplashScreen from 'expo-splash-screen'
import { FC, Fragment, PropsWithChildren } from 'react'

import { useAuth, useCachedResources, useEffect } from '~hooks'

SplashScreen.preventAutoHideAsync()

export const AppLoading: FC<PropsWithChildren> = ({ children }) => {
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
