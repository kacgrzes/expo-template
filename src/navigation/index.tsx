import { NavigationContainer, NavigationState } from '@react-navigation/native'
import React, { FC } from 'react'

import { RootNavigator } from './RootNavigator'
import { linking } from './linking'

import { StatusBar } from '~components'
import { useScreenTracker, useNavigationStatePersistence, useTheme } from '~hooks'

export const Navigation: FC = () => {
  const { navigationRef, onReady, onStateChange: onStateChangeScreenTracker } = useScreenTracker()
  const { navigationTheme } = useTheme()
  const {
    isReady,
    initialState,
    onStateChange: onStateChangeNavigationStatePersistance,
  } = useNavigationStatePersistence()

  const onStateChange = (state: NavigationState | undefined) => {
    onStateChangeScreenTracker()
    onStateChangeNavigationStatePersistance(state)
  }

  if (!isReady) {
    return null
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
        theme={navigationTheme}
        linking={linking}
        initialState={initialState}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}
