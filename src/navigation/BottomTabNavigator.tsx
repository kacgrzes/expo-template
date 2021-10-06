import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'

import { ExamplesScreen, HomeScreen } from '~screens'

const { Navigator, Screen } = createBottomTabNavigator()

export const BottomTabNavigator: FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Examples" component={ExamplesScreen} />
    </Navigator>
  )
}
