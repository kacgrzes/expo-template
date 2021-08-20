import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './RootNavigator'
import { StatusBar } from '~components'
import { useScreenTracker, useNavigationTheme } from '~hooks'
import { linking } from './linking'

export const Navigation = () => {
  const { navigationRef, onReady, onStateChange } = useScreenTracker()
  const navigationTheme = useNavigationTheme()

  return (
    <>
      {/* TODO: move Status bar to a separate component; set default values */}
      <StatusBar animated hideTransitionAnimation="fade" style="dark" />
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
        theme={navigationTheme}
        linking={linking}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}
