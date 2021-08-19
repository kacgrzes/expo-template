import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './RootNavigator'
import { NavigationTheme } from '~constants'
import { useColorScheme } from '~hooks'

export const Navigation = () => {
  const colorScheme = useColorScheme()
  // const theme = colorScheme === 'dark' ? NavigationTheme.Dark : NavigationTheme.Light

  return (
    <NavigationContainer theme={NavigationTheme.Light}>
      <RootNavigator />
    </NavigationContainer>
  )
}
