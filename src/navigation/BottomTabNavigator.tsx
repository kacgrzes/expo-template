import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'

import { HomeStack } from './HomeStack'

import { useCallback, useNavigationTheme } from '~hooks'
import { ExamplesScreen } from '~screens'

const { Navigator, Screen } = createBottomTabNavigator<MainTabParamList>()

export const BottomTabNavigator: FC = () => {
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback(
    ({ route }): BottomTabNavigationOptions => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Feather.glyphMap

        if (route.name === 'HomeStack') {
          iconName = 'home'
        } else if (route.name === 'Examples') {
          iconName = 'list'
        } else {
          iconName = 'alert-triangle'
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />
      },
      ...tabBarTheme,
    }),
    [tabBarTheme]
  )

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      <Screen name="Examples" component={ExamplesScreen} />
    </Navigator>
  )
}
