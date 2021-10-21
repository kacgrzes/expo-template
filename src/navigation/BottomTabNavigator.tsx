import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'

import { useCallback, useNavigationTheme } from '~hooks'
import { ExamplesScreen, HomeScreen } from '~screens'

const { Navigator, Screen } = createBottomTabNavigator()

export const BottomTabNavigator: FC = () => {
  const { tabBarTheme } = useNavigationTheme()

  const screenOptions = useCallback(
    ({ route }): BottomTabNavigationOptions => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Feather.glyphMap

        if (route.name === 'Home') {
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
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Examples" component={ExamplesScreen} />
    </Navigator>
  )
}
