import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExamplesScreen, HomeScreen } from '~screens'

const { Navigator, Screen } = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Examples" component={ExamplesScreen} />
    </Navigator>
  )
}
