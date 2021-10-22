import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { DetailsScreen, HomeScreen } from '~screens'
import { HomeStackParamsMap } from '~types/navigation'

const { Navigator, Screen } = createStackNavigator<HomeStackParamsMap>()

export const HomeStack = (): JSX.Element => (
  <Navigator>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
)
